import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from './App'

beforeEach(() => {
  window.history.replaceState({}, '', '/')
  window.scrollTo = vi.fn()
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  document.getElementById('tableau-embedding-api')?.remove()
})
afterEach(cleanup)

describe('Budget Matter application', () => {
  it('defaults to dark mode and persists the light-mode choice', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark')
    const themeSwitch = screen.getByRole('button', { name: 'Switch to light mode' })
    expect(themeSwitch).toHaveAttribute('aria-pressed', 'false')
    await user.click(themeSwitch)

    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
    expect(window.localStorage.getItem('budget-matter-theme')).toBe('light')
    expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('restores a previously selected light theme', () => {
    window.localStorage.setItem('budget-matter-theme', 'light')
    render(<App />)
    expect(document.documentElement).toHaveAttribute('data-theme', 'light')
  })

  it('uses the dedicated About-page layout', () => {
    window.history.replaceState({}, '', '/about')
    render(<App />)
    const article = document.querySelector('.reference-content')
    expect(article).toHaveClass('about-page')
    expect(article?.querySelector('.row')).toBeInTheDocument()
    expect(screen.getByText(/computer programming background/i)).toBeInTheDocument()
    expect(document.querySelector('.page-hero')?.textContent).not.toContain('…')
  })

  it('renders the modern home experience and follows the primary journey', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: /follow every dollar/i })).toBeInTheDocument()
    expect(screen.getAllByText('22').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: /four ways to understand and use the federal budget/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('home-pathway')).toHaveLength(4)
    expect(screen.getByRole('heading', { name: /from public-finance challenge to working solution/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('home-project')).toHaveLength(3)
    expect(screen.getByRole('heading', { name: /keep the reference material close/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore the complete knowledge library/i })).toHaveAttribute('href', '/knowledge')
    expect(screen.getByRole('link', { name: /open the dod fmr glossary/i })).toHaveAttribute('href', '/knowledge/dod-fmr/glossary')
    expect(screen.queryByRole('heading', { name: 'Personal Projects' })).not.toBeInTheDocument()
    await user.click(screen.getByRole('link', { name: /explore the process/i }))

    await waitFor(() => expect(window.location.pathname).toBe('/process'))
    expect(screen.getAllByText(/Budget Process/i).length).toBeGreaterThan(0)
  })

  it('searches all migrated pages and navigates to a result', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Search Budget Matter' }))
    const input = screen.getByPlaceholderText(/search the budget process/i)
    await user.type(input, 'appropriation')
    const result = await screen.findByRole('button', { name: /Budget Appropriation/i })
    await user.click(result)

    expect(window.location.pathname).toBe('/e10_appropriation')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('supports browser history, mobile navigation, and missing routes', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<App />)
    await user.click(screen.getByRole('button', { name: 'Toggle navigation' }))
    expect(document.querySelector('.main-nav')).toHaveClass('is-open')
    unmount()

    window.history.replaceState({}, '', '/not-a-real-page')
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /return home/i }))
    expect(window.location.pathname).toBe('/')
  })

  it('dismisses every desktop dropdown immediately after a selection', async () => {
    const user = userEvent.setup()
    render(<App />)

    const processMenu = screen.getByRole('link', { name: 'Budget Process' })
    await user.hover(processMenu)
    expect(processMenu).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('menuitem', { name: 'Overview' }))

    expect(window.location.pathname).toBe('/process')
    expect(processMenu).toHaveAttribute('aria-expanded', 'false')
    expect(processMenu.closest('.nav-group')).not.toHaveClass('is-menu-open')

    const knowledgeMenu = screen.getAllByRole('link', { name: 'Knowledge' })[0]
    await user.hover(knowledgeMenu)
    expect(knowledgeMenu).toHaveAttribute('aria-expanded', 'true')
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(knowledgeMenu).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes search with Escape and navigates legacy content links', async () => {
    const user = userEvent.setup()
    window.history.replaceState({}, '', '/f1_planning.html')
    render(<App />)
    expect(document.querySelector('[aria-label="Budget phases"]')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Search Budget Matter' }))
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    const link = document.querySelector('.reference-content a[href="/formulation"]') as HTMLAnchorElement
    expect(link).toBeTruthy()
    await user.click(link)
    expect(window.location.pathname).toBe('/formulation')
  })

  it('supports secondary, phase, footer, and search dismissal controls', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('link', { name: /browse budget laws/i }))
    expect(window.location.pathname).toBe('/policy')

    await user.click(screen.getByRole('link', { name: 'Process' }))
    expect(window.location.pathname).toBe('/process')

    window.history.pushState({}, '', '/f1_planning')
    window.dispatchEvent(new PopStateEvent('popstate'))
    await waitFor(() => expect(document.querySelector('.phase-trail')).toBeInTheDocument())
    const phase = document.querySelector('.phase-trail a[href="/enactment"]') as HTMLAnchorElement
    await user.click(phase)
    expect(window.location.pathname).toBe('/enactment')

    await user.click(screen.getByRole('button', { name: 'Search Budget Matter' }))
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Search Budget Matter' }))
    fireEvent.mouseDown(screen.getByRole('dialog'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('provides a Knowledge publishing hub for current and future releases', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('link', { name: 'Knowledge' }))
    expect(window.location.pathname).toBe('/knowledge')
    expect(screen.getByRole('heading', { name: /knowledge and publications/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /latest publications/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /website transformation and ai studio publishing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /federal budget and appropriations law/i })).toBeInTheDocument()
  })

  it('publishes an in-depth, sourced federal budget law paper', () => {
    window.history.replaceState({}, '', '/knowledge/federal-budget-laws')
    render(<App />)

    expect(screen.getByRole('heading', { name: /federal budget and appropriations law/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /constitutional foundation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /how the appropriations system works/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /historical case studies/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /practical appropriation use cases/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /current operating framework/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('law-timeline-entry').length).toBeGreaterThanOrEqual(8)
    expect(screen.getAllByTestId('appropriation-use-case')).toHaveLength(6)
    expect(screen.getByRole('link', { name: /gao red book/i })).toHaveAttribute('href', 'https://www.gao.gov/legal/appropriations-law/red-book')
    expect(screen.getByRole('link', { name: /omb circular a-11/i })).toHaveAttribute('href', 'https://www.whitehouse.gov/wp-content/uploads/2025/08/a11.pdf')
    expect(document.title).toMatch(/Federal Budget and Appropriations Law/)
  })

  it('publishes the complete A-11 Section 20 knowledge page', async () => {
    window.history.replaceState({}, '', '/knowledge/a-11/section-20')
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getAllByRole('heading', { name: /section 20/i }).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: /federal budget glossary/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Advance appropriation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /definition of budget authority/i })).toBeInTheDocument()
    expect(screen.getAllByText(/20\.0-section20-overview\.md/i).length).toBeGreaterThan(0)
    await user.type(screen.getByPlaceholderText(/search budget authority/i), 'rescission')
    expect(screen.getByRole('heading', { name: 'Rescission' })).toBeInTheDocument()
    expect(document.title).toMatch(/Section 20/)
  })

  it('publishes the complete searchable DoD FMR glossary', async () => {
    window.history.replaceState({}, '', '/knowledge/dod-fmr/glossary')
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: /financial management regulation glossary/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Publication summary')).toHaveTextContent(/224defined terms/i)
    expect(screen.getAllByText(/224 definitions/i).length).toBeGreaterThan(0)
    expect(screen.getByRole('heading', { name: 'Accessorial Charges' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Year-end Adjustments for Reimbursements' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /open the complete 36-page pdf/i })).toHaveAttribute('href', '/assets/publications/dod-fmr-glossary-january-2024.pdf')

    await user.type(screen.getByPlaceholderText(/search terms and definitions/i), 'year-end adjustments')
    expect(document.querySelector('.dod-fmr-toolbar > p')).toHaveTextContent('1 definition shown')
    expect(screen.queryByRole('heading', { name: 'Accessorial Charges' })).not.toBeInTheDocument()
    expect(document.title).toMatch(/DoD FMR Glossary/)
  })

  it('presents a current visual legal framework at the policy route', () => {
    window.history.replaceState({}, '', '/policy')
    render(<App />)

    expect(screen.getAllByRole('link', { name: 'Legislative Framework' })[0]).toHaveAttribute('href', '/policy')
    expect(screen.getByRole('heading', { name: /federal budget legal framework/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /where spending authority comes from/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /how authority becomes accountable spending/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /purpose, time, and amount/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('authority-layer')).toHaveLength(5)
    expect(screen.getAllByTestId('execution-node')).toHaveLength(7)
    expect(screen.getByRole('link', { name: /read the in-depth paper/i })).toHaveAttribute('href', '/knowledge/federal-budget-laws')
    expect(screen.getByRole('link', { name: /federal budget and appropriations law/i })).toHaveAttribute('href', '/knowledge/federal-budget-laws')
    expect(document.body).not.toHaveTextContent(/BCA also created a Joint Select Committee/i)
    expect(document.title).toMatch(/Federal Budget Legal Framework/)
  })

  it('documents the production transformation and AI Studio publishing workflow', async () => {
    window.history.replaceState({}, '', '/build-and-publish')
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: /from legacy website to production app/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /transformation architecture/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /publish to google ai studio/i })).toBeInTheDocument()
    expect(screen.getAllByTestId('deployment-step')).toHaveLength(8)
    await user.click(screen.getByRole('link', { name: /open the knowledge hub/i }))
    expect(window.location.pathname).toBe('/knowledge')
  })

  it('enhances every budget-process step without removing legacy visuals', () => {
    window.history.replaceState({}, '', '/f1_planning')
    render(<App />)

    expect(screen.getByRole('region', { name: /federal budget process map/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /one cycle.*twenty-two connected decisions/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /inputs become accountable outputs/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /what good looks like/i })).toBeInTheDocument()
    expect(screen.queryByText(/Original Budget Matter content continues below/i)).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /strategic planning: detailed guidance and visuals/i })).toBeInTheDocument()
    expect(screen.getByText(/decision focus/i)).toBeInTheDocument()
    expect(document.querySelectorAll('.reference-content img').length).toBeGreaterThan(0)
    expect(document.querySelector('.reference-content img')).toHaveClass('process-visual')
    expect(document.querySelector('.reference-content img')).toHaveAttribute('loading', 'lazy')
  })

  it('presents the complete portfolio as capability and impact stories', async () => {
    window.history.replaceState({}, '', '/portfolio-1-col')
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByRole('heading', { name: /projects built to turn complex data into decisions/i })).toBeInTheDocument()
    expect(screen.getAllByText(/why it matters/i).length).toBeGreaterThanOrEqual(24)
    expect(screen.getAllByRole('button', { name: /explore project/i })).toHaveLength(24)
    await user.click(screen.getByRole('button', { name: /analytics & ai/i }))
    expect(screen.getByRole('heading', { name: /machine learning for world happiness drivers/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /federal budget spend plan model/i })).not.toBeInTheDocument()
  })

  it('adds an outcome and capability brief to every project detail route', () => {
    window.history.replaceState({}, '', '/project7/project7')
    render(<App />)

    expect(screen.getAllByRole('heading', { name: /federal budget spend plan model/i }).length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/demonstrated outcome/i)).toBeInTheDocument()
    expect(screen.getByText(/capabilities demonstrated/i)).toBeInTheDocument()
    expect(screen.getByText(/scenario modeling and self-balancing controls/i)).toBeInTheDocument()
    expect(document.querySelector('.portfolio-detail-content img')).toHaveClass('portfolio-detail-visual')
  })

  it.each([
    ['/tableau-1-citibike', 'Citi_15824261544430/CitiBikeJan2020', 'Citi Bike (Jan 2020)'],
    ['/tableau-2-fed-avg-salary', 'Labor-Fed-092018/DB', 'Federal Employee Salary'],
    ['/tableau-3-covid19', 'PsTableau-03/Dashboard1', 'COVID-19 Dashboard'],
    ['/project13/project13', 'FederalGovernmentSpendingDashboard/Dashboard1', 'Federal Government Spending Dashboard'],
    ['/project14/project14', 'Budget_15927103644200/Dashboard1', 'Budget and Execution Historical Table'],
  ])('renders the modern Tableau embed for %s', (route, view, label) => {
    window.history.replaceState({}, '', route)
    render(<App />)

    const viz = document.querySelector('tableau-viz')
    expect(viz).toHaveAttribute('src', `https://public.tableau.com/views/${view}`)
    expect(viz).toHaveAttribute('toolbar', 'bottom')
    expect(viz).toHaveAttribute('hide-tabs')
    expect(document.querySelector('object.tableauViz')).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: `Open ${label} on Tableau Public` })).toHaveAttribute('href', `https://public.tableau.com/views/${view}`)
    expect(document.querySelectorAll('#tableau-embedding-api')).toHaveLength(1)
  })
})
