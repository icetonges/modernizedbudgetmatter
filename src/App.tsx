import { useEffect, useMemo, useRef, useState, type FocusEvent, type ReactNode } from 'react'
import { ArrowRight, BookOpen, Boxes, CheckCircle2, ChevronDown, Cloud, Code2, ExternalLink, FileText, Github, Landmark, Menu, Moon, Rocket, Search, ShieldCheck, Sun, Terminal, Workflow, X } from 'lucide-react'
import { sitePages } from './data/sitePages'
import { publications } from './data/publications'
import { tableauProjects } from './data/tableauProjects'
import { TableauEmbed } from './components/TableauEmbed'
import { BudgetLawPaper } from './pages/BudgetLawPaper'
import { LegalFrameworkPage } from './pages/LegalFrameworkPage'
import { A11Section20Page } from './pages/A11Section20Page'
import { DodFmrGlossaryPage } from './pages/DodFmrGlossaryPage'
import { ProcessEnhancement, ProcessReferenceIntro } from './components/ProcessEnhancement'
import { PortfolioOverview, PortfolioProjectBrief } from './components/PortfolioExperience'
import { isProcessRoute } from './data/processJourney'
import { portfolioProjectByRoute } from './data/portfolioProjects'
import { portfolioProjects } from './data/portfolioProjects'
import { normalizeRoute } from './lib/routing'

const navItems = [
  { label: 'Budget Process', route: '/process', children: [['Overview', '/process'], ['Formulation', '/formulation'], ['Enactment', '/enactment'], ['Execution', '/execution']] },
  { label: 'Legislative Framework', route: '/policy' },
  { label: 'Portfolio', route: '/portfolio-1-col' },
  { label: 'Knowledge', route: '/knowledge', children: [['Publications', '/knowledge'], ['A-11 · Section 20', '/knowledge/a-11/section-20'], ['DoD FMR Glossary', '/knowledge/dod-fmr/glossary'], ['Build & Publish', '/build-and-publish']] },
  { label: 'About', route: '/about' },
]

const aboutDescription = 'Budget Matter is a knowledge-sharing website developed and maintained by Peter S., a federal budget professional with experience in budgeting, predictive analysis, program management, accounting, and computer programming.'

function navigate(route: string) {
  window.history.pushState({}, '', route)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

type Theme = 'dark' | 'light'

function Header({ onSearch, theme, onThemeChange }: { onSearch: () => void; theme: Theme; onThemeChange: () => void }) {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)
  const closeNavigation = () => { setOpen(false); setActiveMenu(null) }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') closeNavigation() }
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) closeNavigation()
    }
    const onRouteChange = () => closeNavigation()
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('popstate', onRouteChange)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('popstate', onRouteChange)
    }
  }, [])

  const leaveGroup = (event: FocusEvent<HTMLDivElement>, route: string) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) setActiveMenu((current) => current === route ? null : current)
  }

  return <header className="site-header" ref={headerRef}>
    <div className="nav-shell">
      <a className="brand" href="/" onClick={(event) => { event.preventDefault(); closeNavigation(); navigate('/') }}>
        <span className="brand-mark"><Landmark size={22} /></span>
        <span><strong>Budget Matter</strong><small>How the federal budget works</small></span>
      </a>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
        {navItems.map((item) => <div className={`nav-group${activeMenu === item.route ? ' is-menu-open' : ''}`} key={item.route} onMouseEnter={() => item.children && setActiveMenu(item.route)} onMouseLeave={() => item.children && setActiveMenu(null)} onBlur={(event) => leaveGroup(event, item.route)}>
          <a href={item.route} aria-haspopup={item.children ? 'menu' : undefined} aria-expanded={item.children ? open || activeMenu === item.route : undefined} onFocus={() => item.children && setActiveMenu(item.route)} onClick={(event) => { event.preventDefault(); closeNavigation(); navigate(item.route) }}>{item.label}{item.children && <ChevronDown size={14} />}</a>
          {item.children && <div className="nav-menu" role="menu" aria-hidden={!open && activeMenu !== item.route}>{item.children.map(([label, route]) => <a role="menuitem" key={route} href={route} onClick={(event) => { event.preventDefault(); closeNavigation(); navigate(route) }}>{label}</a>)}</div>}
        </div>)}
        <button className="search-button mobile-search" onClick={() => { closeNavigation(); onSearch() }}><Search size={18} /> Search</button>
      </nav>
      <div className="header-actions">
        <button className="theme-button" onClick={onThemeChange} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} aria-pressed={theme === 'light'} title={`Use ${theme === 'dark' ? 'light' : 'dark'} mode`}>
          {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button className="search-button" onClick={() => { closeNavigation(); onSearch() }} aria-label="Search Budget Matter"><Search size={19} /></button>
        <button className="menu-button" onClick={() => { setActiveMenu(null); setOpen(!open) }} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
    </div>
  </header>
}

function SearchPanel({ close }: { close: () => void }) {
  const [query, setQuery] = useState('')
  const matches = useMemo(() => query.trim().length < 2 ? [] : sitePages.filter((page) => `${page.title} ${page.description}`.toLowerCase().includes(query.toLowerCase())).slice(0, 8), [query])
  useEffect(() => { const listener = (event: KeyboardEvent) => event.key === 'Escape' && close(); window.addEventListener('keydown', listener); return () => window.removeEventListener('keydown', listener) }, [close])
  return <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search site" onMouseDown={(event) => event.target === event.currentTarget && close()}>
    <div className="search-panel"><div className="search-field"><Search /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the budget process, laws, or projects…" /><button onClick={close} aria-label="Close search"><X /></button></div>
      <div className="search-results">{query.length < 2 ? <p>Try “appropriation”, “OMB”, or “spend plan”.</p> : matches.length ? matches.map((page) => <button key={page.route} onClick={() => { navigate(page.route); close() }}><span><strong>{page.title}</strong><small>{page.description || page.sourcePath}</small></span><ArrowRight /></button>) : <p>No matching pages found.</p>}</div>
    </div>
  </div>
}

function PhaseTrail({ route }: { route: string }) {
  const phases = [['01', 'Formulation', '/formulation'], ['02', 'Enactment', '/enactment'], ['03', 'Execution', '/execution']]
  const active = route.startsWith('/f') || route === '/formulation' ? 0 : route.startsWith('/e') || route === '/enactment' ? 1 : route.startsWith('/b') || route === '/execution' ? 2 : -1
  if (active < 0) return null
  return <div className="phase-trail" aria-label="Budget phases">{phases.map(([number, label, path], index) => <a className={index === active ? 'active' : ''} key={path} href={path} onClick={(event) => { event.preventDefault(); navigate(path) }}><span>{number}</span>{label}</a>)}</div>
}

function PageHero({ title, route, description }: { title: string; route: string; description: string }) {
  const home = route === '/'
  return <section className={home ? 'page-hero home-hero' : 'page-hero'}>
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-orb" aria-hidden="true" />
    <div className="hero-content">
      <p className="eyebrow">{home ? 'Federal budget intelligence' : route.includes('project') || route.includes('portfolio') ? 'Applied analysis' : 'Budget Matter learning path'}</p>
      <h1>{home ? 'Follow every dollar—from policy idea to public impact.' : title}</h1>
      <p>{home ? 'A visual, step-by-step guide to the decisions, laws, institutions, and tools behind the United States federal budget.' : description || 'Explore the people, decisions, and controls behind this stage of the federal budget.'}</p>
      {home && <div className="hero-actions"><a href="/process" onClick={(event) => { event.preventDefault(); navigate('/process') }}>Explore the process <ArrowRight size={18} /></a><a className="secondary" href="/policy" onClick={(event) => { event.preventDefault(); navigate('/policy') }}>Browse budget laws</a></div>}
    </div>
    {home && <div className="hero-stat"><span>End-to-end guide</span><strong>22</strong><small>connected budget steps</small><div className="hero-stat-details"><b>4</b> learning paths <b>15</b> applied projects <b>224</b> DoD terms</div></div>}
  </section>
}

function AppLink({ route, className, children }: { route: string; className?: string; children: ReactNode }) {
  return <a className={className} href={route} onClick={(event) => { event.preventDefault(); navigate(route) }}>{children}</a>
}

const homePathways = [
  { icon: Workflow, number: '01', title: 'Budget Process', route: '/process', description: 'Follow 22 connected decisions from strategic planning and agency formulation through congressional action, execution, reporting, and closeout.', detail: 'Use it to understand who acts, what changes hands, which control applies, and what a strong output looks like at every stage.', link: 'Walk the full lifecycle' },
  { icon: Landmark, number: '02', title: 'Legislative Framework', route: '/policy', description: 'See how the Constitution, authorizing statutes, appropriations, fiscal controls, and OMB guidance shape the use of public money.', detail: 'Use it to distinguish authority from funding and apply the purpose, time, and amount framework to real decisions.', link: 'Map the legal controls' },
  { icon: Boxes, number: '03', title: 'Applied Portfolio', route: '/portfolio-1-col', description: 'Explore working examples that combine federal budgeting, financial modeling, automation, analytics, dashboards, and data storytelling.', detail: 'Use the project briefs to connect a problem, method, capability, toolset, and decision outcome—not just view a finished chart.', link: 'Explore all projects' },
  { icon: BookOpen, number: '04', title: 'Knowledge Library', route: '/knowledge', description: 'Keep authoritative terms, practical guides, legal analysis, and publishing references within reach while working through the lifecycle.', detail: 'Search OMB A-11 concepts, the complete DoD FMR glossary, appropriations law, and additional professional references.', link: 'Open the library' },
]

const lifecycle = [
  ['Define outcomes', 'Strategy, priorities, evidence'],
  ['Build the request', 'Agency and President’s Budget'],
  ['Enact resources', 'Authorization and appropriations'],
  ['Execute controls', 'Apportionment, allotment, obligation'],
  ['Measure results', 'Outlays, reporting, audit, learning'],
]

const featuredHomeProjects = ['/project7/project7', '/project14/project14', '/project10/project10']
  .map((route) => portfolioProjects.find((project) => project.route === route))
  .filter((project): project is (typeof portfolioProjects)[number] => Boolean(project))

function HomePage() {
  const knowledgeHighlights = publications.filter((publication) => ['/knowledge/dod-fmr/glossary', '/knowledge/a-11/section-20', '/knowledge/federal-budget-laws'].includes(publication.route))
  return <main>
    <PageHero title="Welcome to Budget Matter" route="/" description="A connected learning and decision-support resource for understanding federal budget policy, law, execution, and applied analytics." />
    <div className="home-shell">
      <section className="home-intro" aria-labelledby="home-pathways-title">
        <div className="home-intro-copy"><p className="section-kicker">Start with the question you need to answer</p><h2 id="home-pathways-title">Four ways to understand and use the federal budget</h2><p>Budget Matter connects institutional knowledge with practical execution. Move from the lifecycle, to the governing rules, to applied tools, then keep the underlying references close at hand.</p></div>
        <div className="home-proof" aria-label="Budget Matter coverage"><div><strong>22</strong><span>process decisions</span></div><div><strong>15</strong><span>project case studies</span></div><div><strong>224</strong><span>DoD FMR terms</span></div><div><strong>1</strong><span>connected learning path</span></div></div>
      </section>
      <section className="home-pathway-grid" aria-label="Explore Budget Matter">
        {homePathways.map(({ icon: Icon, number, title, route, description, detail, link }) => <article className="home-pathway" data-testid="home-pathway" key={route}>
          <div className="home-pathway-top"><span><Icon /></span><small>{number}</small></div><h3>{title}</h3><p>{description}</p><div className="home-pathway-detail">{detail}</div><AppLink route={route}>{link}<ArrowRight size={17} /></AppLink>
        </article>)}
      </section>

      <section className="home-lifecycle" aria-labelledby="home-lifecycle-title">
        <div className="home-lifecycle-heading"><div><p className="section-kicker">One connected system</p><h2 id="home-lifecycle-title">Trace authority into accountable public impact</h2></div><p>The federal budget is not a single annual document. It is a recurring management system in which policy, law, operational capacity, financial controls, and performance evidence continuously inform one another.</p></div>
        <ol>{lifecycle.map(([title, detail], index) => <li key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><strong>{title}</strong><small>{detail}</small></div>{index < lifecycle.length - 1 && <ArrowRight aria-hidden="true" />}</li>)}</ol>
        <AppLink route="/process" className="home-text-link">See the interactive 22-step process map <ArrowRight size={17} /></AppLink>
      </section>

      <section className="home-projects" aria-labelledby="home-projects-title">
        <div className="home-section-heading"><div><p className="section-kicker">Applied work</p><h2 id="home-projects-title">From public-finance challenge to working solution</h2></div><div><p>Each project explains the decision problem, analytical approach, capabilities demonstrated, and why the result matters.</p><AppLink route="/portfolio-1-col">View the complete portfolio <ArrowRight size={17} /></AppLink></div></div>
        <div className="home-project-grid">{featuredHomeProjects.map((project) => <article className="home-project" data-testid="home-project" key={project.route}>
          <AppLink route={project.route} className="home-project-visual"><img src={project.image} alt={`${project.title} project preview`} loading="lazy" decoding="async" /><span>{project.category}</span></AppLink>
          <div className="home-project-body"><h3>{project.title}</h3><p>{project.summary}</p><div className="home-project-outcome"><small>Decision value</small>{project.outcome}</div><ul>{project.capabilities.slice(0, 2).map((capability) => <li key={capability}><CheckCircle2 size={15} />{capability}</li>)}</ul><AppLink route={project.route}>Read the project brief <ArrowRight size={16} /></AppLink></div>
        </article>)}</div>
      </section>

      <section className="home-knowledge" aria-labelledby="home-knowledge-title">
        <div className="home-knowledge-intro"><p className="section-kicker">Knowledge at the point of need</p><h2 id="home-knowledge-title">Keep the reference material close</h2><p>Move beyond definitions alone. These resources connect official terminology and legal authority to the decisions budget professionals make during formulation, enactment, execution, and reporting.</p><AppLink route="/knowledge">Explore the complete Knowledge Library <ArrowRight size={17} /></AppLink></div>
        <div className="home-knowledge-list">{knowledgeHighlights.map((item, index) => <article key={item.route}><span>{String(index + 1).padStart(2, '0')}</span><div><small>{item.category} · {item.readingTime}</small><h3>{item.title}</h3><p>{item.summary}</p><AppLink route={item.route}>{item.route === '/knowledge/dod-fmr/glossary' ? 'Open the DoD FMR Glossary' : `Read ${item.title}`}<ArrowRight size={15} /></AppLink></div></article>)}</div>
      </section>

      <section className="home-closing"><div><p className="section-kicker">Built for practical understanding</p><h2>Learn the system. Apply the controls. Improve the decision.</h2></div><p>Use Budget Matter as a guided course, a desk-side reference, or an applied analytics portfolio. Every path is designed to make complex public-finance work easier to explain and act on.</p><div><AppLink route="/process">Start with the process <ArrowRight size={17} /></AppLink><AppLink route="/about" className="secondary">About Budget Matter</AppLink></div></section>
    </div>
  </main>
}

function KnowledgePage() {
  useEffect(() => { document.title = 'Knowledge and Publications | Budget Matter' }, [])
  return <main>
    <PageHero title="Knowledge and Publications" route="/knowledge" description="A growing library of practical guides, references, models, and engineering notes for people who work with public finance." />
    <div className="native-shell knowledge-page">
      <section className="section-heading">
        <div><p className="section-kicker">Publishing library</p><h2>Latest publications</h2></div>
        <p>Each release is useful on its own and connected to the wider Budget Matter learning path.</p>
      </section>
      <div className="publication-grid">
        {publications.map((publication) => <article className={publication.featured ? 'publication-card featured' : 'publication-card'} key={publication.route}>
          <div className="publication-meta"><span>{publication.category}</span><small>{publication.readingTime} read</small></div>
          <FileText aria-hidden="true" />
          <h3>{publication.title}</h3>
          <p>{publication.summary}</p>
          <AppLink route={publication.route}>{publication.title}<ArrowRight size={17} /></AppLink>
        </article>)}
      </div>
      <section className="publishing-workflow">
        <div><p className="section-kicker">Editorial standard</p><h2>How new work gets published</h2><p>Future publications are added through one structured content record, then reviewed through the same quality gates as the application.</p></div>
        <ol>{['Draft with a clear audience and outcome', 'Review facts, sources, accessibility, and links', 'Validate tests, responsive layout, and production build', 'Publish, monitor, and keep the content current'].map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol>
      </section>
    </div>
  </main>
}

const deploymentSteps = [
  { title: 'Prepare the workstation', body: 'Install a current Node.js LTS release and the Google Cloud CLI. Sign in, select the intended project, and confirm that billing is enabled.', command: 'gcloud config set project YOUR_PROJECT_ID' },
  { title: 'Install and validate locally', body: 'Use the lockfile for repeatable dependencies. Run linting, coverage, and the optimized production build before any cloud change.', command: 'npm ci\nnpm run lint\nnpm run test:coverage\nnpm run build' },
  { title: 'Enable the cloud services', body: 'Cloud Run serves the app, Cloud Build creates the container, and Artifact Registry stores the immutable image.', command: 'gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com' },
  { title: 'Deploy the production container', body: 'Deploy from the repository root. The server listens on the Cloud Run PORT and serves the application for every route.', command: 'gcloud run deploy budget-matter --source . --region us-east1 --allow-unauthenticated --port 8080 --memory 512Mi --max-instances 3' },
  { title: 'Create or import the AI Studio app', body: 'Open Google AI Studio Build, connect the same Google Cloud project, and verify the preview. Keep Gemini calls on the server if the app later uses an API key.', command: 'Build → Import project or create app → Preview' },
  { title: 'Publish the custom address', body: 'Choose Publish in AI Studio, select a custom subdomain, and claim budgetmatter when it is available. AI Studio provisions and routes the published application.', command: 'Publish → Custom URL → budgetmatter.ai.studio' },
  { title: 'Verify the live release', body: 'Test the root, deep links, theme control, navigation, mobile layout, and health endpoint. Confirm the custom URL serves the intended revision.', command: 'https://budgetmatter.ai.studio/\nhttps://budgetmatter.ai.studio/health' },
  { title: 'Operate and roll back safely', body: 'Keep secrets out of source control, review logs and error rates, cap scaling costs, and retain the prior revision so traffic can be restored quickly.', command: 'gcloud run revisions list --service budget-matter --region us-west2' },
]

function BuildAndPublishPage() {
  useEffect(() => { document.title = 'Website Transformation and AI Studio Publishing | Budget Matter' }, [])
  const architecture = [
    { icon: FileText, title: 'Legacy source', detail: 'Static HTML, CSS, JavaScript, images' },
    { icon: Workflow, title: 'Content migration', detail: 'Clean routes and reusable page content' },
    { icon: Code2, title: 'Modern application', detail: 'React, TypeScript, Vite, Tailwind CSS' },
    { icon: Boxes, title: 'Quality gates', detail: 'Lint, tests, coverage, production build' },
    { icon: Cloud, title: 'Cloud runtime', detail: 'Buildpacks, Artifact Registry, Cloud Run' },
    { icon: Rocket, title: 'Published experience', detail: 'budgetmatter.ai.studio' },
  ]
  return <main>
    <PageHero title="From Legacy Website to Production App" route="/build-and-publish" description="A visual, repeatable blueprint for transforming Budget Matter into a modern application and publishing it through Google AI Studio." />
    <div className="native-shell build-page">
      <section className="architecture-section">
        <div className="section-heading"><div><p className="section-kicker">System blueprint</p><h2>Transformation architecture</h2></div><p>The experience stays recognizable while the delivery system becomes maintainable, testable, responsive, and cloud ready.</p></div>
        <div className="architecture-flow" aria-label="Website transformation flow">{architecture.map(({ icon: Icon, title, detail }, index) => <div className="architecture-node" key={title}><span><Icon /></span><small>Stage {index + 1}</small><h3>{title}</h3><p>{detail}</p></div>)}</div>
      </section>
      <section className="transformation-detail">
        <div className="section-heading"><div><p className="section-kicker">What changed</p><h2>Modernized without losing the original</h2></div></div>
        <div className="change-grid">
          <article><Code2 /><h3>Application layer</h3><p>Fifty legacy pages are normalized into clean client-side routes and rendered inside one accessible React shell.</p></article>
          <article><Boxes /><h3>Design system</h3><p>Shared tokens, responsive grids, dark-first theming, and reusable components replace page-specific formatting.</p></article>
          <article><ShieldCheck /><h3>Production controls</h3><p>Automated tests protect routing and layout; the build is versioned as an immutable container with no browser-exposed secrets.</p></article>
        </div>
      </section>
      <section className="deployment-section">
        <div className="section-heading"><div><p className="section-kicker">Release runbook</p><h2>Publish to Google AI Studio</h2></div><p>Complete these eight gates in order. Commands are PowerShell friendly and match this repository’s production configuration.</p></div>
        <ol className="deployment-timeline">{deploymentSteps.map((step, index) => <li data-testid="deployment-step" key={step.title}><span className="step-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.body}</p><pre><Terminal aria-hidden="true" /><code>{step.command}</code></pre></div></li>)}</ol>
      </section>
      <section className="production-checklist">
        <div><p className="section-kicker">Ready for real traffic</p><h2>Production release checklist</h2><p>Publishing is the start of operations, not the end of development.</p></div>
        <ul>{['No secrets or API keys in browser code', 'Deep-link fallback and /health endpoint verified', 'Keyboard navigation, contrast, and mobile layout checked', 'Logs, scaling limits, ownership, and rollback documented'].map((item) => <li key={item}><CheckCircle2 />{item}</li>)}</ul>
      </section>
      <aside className="source-note"><div><h2>Official references</h2><p>Use Google’s current documentation as the source of truth when the product interface changes.</p></div><div><a href="https://ai.google.dev/gemini-api/docs/aistudio-build-mode" target="_blank" rel="noreferrer">AI Studio Build mode <ExternalLink /></a><a href="https://ai.google.dev/gemini-api/docs/aistudio-deploying" target="_blank" rel="noreferrer">Deploy an AI Studio app <ExternalLink /></a></div></aside>
      <AppLink route="/knowledge" className="back-link">Open the Knowledge hub <ArrowRight /></AppLink>
    </div>
  </main>
}

function ContentPage({ route }: { route: string }) {
  const page = sitePages.find((item) => normalizeRoute(item.route) === route)
  const tableauProject = tableauProjects[route]
  const portfolioProject = portfolioProjectByRoute[route]
  useEffect(() => {
    if (route === '/') document.title = 'Budget Matter | Federal Budget Process, Law, Knowledge, and Applied Analytics'
    else if (route !== '/knowledge' && route !== '/build-and-publish' && route !== '/knowledge/federal-budget-laws' && route !== '/knowledge/a-11/section-20' && route !== '/knowledge/dod-fmr/glossary' && route !== '/policy') document.title = `${page?.title || 'Page not found'} | Budget Matter`
    const root = document.querySelector('.reference-content')
    if (root && isProcessRoute(route)) {
      root.querySelectorAll('img').forEach((image, index) => {
        image.classList.add('process-visual')
        image.setAttribute('loading', 'lazy')
        image.setAttribute('decoding', 'async')
        const visualLink = image.closest('a')
        const visualContainer = visualLink || (image.parentElement?.textContent?.trim() === '' ? image.parentElement : null)
        visualContainer?.classList.add('process-visual-link')
        const captionElement = visualContainer?.previousElementSibling
        const candidateCaption = captionElement?.textContent?.replace(/\s+/g, ' ').trim()
        if (candidateCaption && /^(?:chart|figure|exhibit|diagram|map)\b/i.test(candidateCaption)) {
          captionElement?.classList.add('process-visual-caption')
          if (!image.alt || image.alt === 'Budget Matter visual') image.alt = candidateCaption
        } else if (!image.alt || image.alt === 'Budget Matter visual') {
          image.alt = `${page?.title || 'Federal budget process'} visual ${index + 1}`
        }
      })
    }
    if (root && portfolioProject) {
      root.querySelectorAll('img').forEach((image, index) => {
        image.classList.add('portfolio-detail-visual')
        image.setAttribute('loading', 'lazy')
        image.setAttribute('decoding', 'async')
        if (!image.alt || image.alt === 'Budget Matter visual') image.alt = `${portfolioProject.title} visual ${index + 1}`
      })
    }
    const onClick = (event: Event) => {
      const anchor = (event.target as HTMLElement).closest('a')
      if (!anchor || anchor.target === '_blank' || anchor.origin !== window.location.origin || anchor.pathname.startsWith('/assets/')) return
      event.preventDefault(); navigate(normalizeRoute(anchor.pathname))
    }
    root?.addEventListener('click', onClick)
    return () => root?.removeEventListener('click', onClick)
  }, [page, portfolioProject, route])

  if (route === '/knowledge') return <KnowledgePage />
  if (route === '/') return <HomePage />
  if (route === '/build-and-publish') return <BuildAndPublishPage />
  if (route === '/knowledge/federal-budget-laws') return <BudgetLawPaper onNavigate={navigate} />
  if (route === '/knowledge/a-11/section-20') return <A11Section20Page onNavigate={navigate} />
  if (route === '/knowledge/dod-fmr/glossary') return <DodFmrGlossaryPage onNavigate={navigate} />
  if (route === '/policy') return <LegalFrameworkPage onNavigate={navigate} />
  if (route === '/portfolio-1-col') return <main><PageHero title="Project Portfolio" route={route} description="Practical analytics, automation, budgeting, and visualization projects designed to turn complex information into useful decisions." /><PortfolioOverview onNavigate={navigate} /></main>
  if (!page) return <main><PageHero title="Page not found" route={route} description="The page you requested is not part of this guide." /><div className="not-found"><BookOpen /><h2>Let’s get you back on track.</h2><button onClick={() => navigate('/')}>Return home</button></div></main>
  const pageClass = route === '/about' ? 'content-shell reference-content about-page' : `content-shell reference-content${isProcessRoute(route) ? ' process-content' : ''}`
  if (tableauProject) {
    const placeholder = /<div class="tableauPlaceholder"[^>]*>[\s\S]*?<\/object><\/div>/i
    const match = placeholder.exec(page.html)
    const before = match ? page.html.slice(0, match.index) : page.html
    const after = match ? page.html.slice(match.index + match[0].length) : ''
    return <main><PageHero title={portfolioProject?.title || page.title} route={route} description={portfolioProject?.summary || page.description} />{portfolioProject && <PortfolioProjectBrief project={portfolioProject} onNavigate={navigate} />}<article className={`${pageClass} tableau-page portfolio-detail-content`}><div className="reference-fragment" dangerouslySetInnerHTML={{ __html: before }} /><TableauEmbed project={tableauProject} /><div className="reference-fragment" dangerouslySetInnerHTML={{ __html: after }} /></article></main>
  }
  if (isProcessRoute(route)) return <main><PageHero title={page.title} route={route} description={page.description} /><PhaseTrail route={route} /><ProcessEnhancement route={route} onNavigate={navigate} /><article className={pageClass}><ProcessReferenceIntro route={route} /><div className="process-source-material" dangerouslySetInnerHTML={{ __html: page.html }} /></article></main>
  if (portfolioProject) return <main><PageHero title={portfolioProject.title} route={route} description={portfolioProject.summary} /><PortfolioProjectBrief project={portfolioProject} onNavigate={navigate} /><article className={`${pageClass} portfolio-detail-content`} dangerouslySetInnerHTML={{ __html: page.html }} /></main>
  return <main><PageHero title={page.title} route={route} description={route === '/about' ? aboutDescription : page.description} /><PhaseTrail route={route} /><article className={pageClass} dangerouslySetInnerHTML={{ __html: page.html }} /></main>
}

function Footer() {
  return <footer className="site-footer"><div><a className="brand footer-brand" href="/" onClick={(event) => { event.preventDefault(); navigate('/') }}><span className="brand-mark"><Landmark size={20} /></span><span><strong>Budget Matter</strong><small>Clear context for complex public finance</small></span></a><p>Educational content about the United States federal budget process.</p></div><div className="footer-links"><a href="/process" onClick={(event) => { event.preventDefault(); navigate('/process') }}>Process</a><a href="/policy" onClick={(event) => { event.preventDefault(); navigate('/policy') }}>Legislative Framework</a><a href="/portfolio-1-col" onClick={(event) => { event.preventDefault(); navigate('/portfolio-1-col') }}>Portfolio</a><a href="/knowledge" onClick={(event) => { event.preventDefault(); navigate('/knowledge') }}>Knowledge hub</a><a href="https://github.com/budgetmatter/budgetmatter.github.io" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a></div></footer>
}

export function App() {
  const [route, setRoute] = useState(() => normalizeRoute(window.location.pathname))
  const [searching, setSearching] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => window.localStorage.getItem('budget-matter-theme') === 'light' ? 'light' : 'dark')
  useEffect(() => { const update = () => setRoute(normalizeRoute(window.location.pathname)); window.addEventListener('popstate', update); return () => window.removeEventListener('popstate', update) }, [])
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('budget-matter-theme', theme)
  }, [theme])
  return <><Header onSearch={() => setSearching(true)} theme={theme} onThemeChange={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} /><ContentPage route={route} /><Footer />{searching && <SearchPanel close={() => setSearching(false)} />}</>
}
