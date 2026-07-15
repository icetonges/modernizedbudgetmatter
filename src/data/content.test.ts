import { describe, expect, it } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { sitePages } from './sitePages'

describe('maintained site content', () => {
  it('preserves every migrated page as a route', () => {
    expect(sitePages.length).toBeGreaterThanOrEqual(50)
    expect(new Set(sitePages.map((page) => page.route)).size).toBe(sitePages.length)
  })

  it('retains the complete 22-step federal budget journey', () => {
    const routes = new Set(sitePages.map((page) => page.route))
    const expected = [
      ...Array.from({ length: 7 }, (_, index) => `/f${index + 1}_${['planning', 'guidance', 'internal', 'decision', 'submission', 'ombdecision', 'omb2congress'][index]}`),
      '/e8_resolution', '/e9_authorization', '/e10_appropriation', '/e11_hearing',
      '/e12_q_a', '/e13_appeal', '/e14_cr', '/e15_oversight',
      '/b16_apportionments', '/b17_report', '/b18_rescission', '/b19_outlay',
      '/b20_finplan', '/b21_reprogram', '/b22_directive',
    ]
    expected.forEach((route) => expect(routes.has(route), `missing ${route}`).toBe(true))
  })

  it('contains no retired browser runtime dependencies', () => {
    const joined = sitePages.map((page) => page.html).join('')
    expect(joined).not.toMatch(/<script/i)
    expect(joined).not.toMatch(/vendor\/jquery/i)
    expect(joined).not.toMatch(/vendor\/bootstrap/i)
  })

  it('maps every migrated grid column to the responsive application styles', () => {
    const styles = readFileSync(join(process.cwd(), 'src', 'styles.css'), 'utf8')
    const columns = new Set(
      sitePages.flatMap((page) =>
        [...page.html.matchAll(/\b(col-(?:sm|md|lg)-\d+)\b/g)].map((match) => match[1]),
      ),
    )

    expect(columns).toContain('col-lg-6')
    columns.forEach((column) => expect(styles, `missing layout rule for ${column}`).toContain(`.${column}`))
  })

  it('ships every local asset referenced by maintained page content', () => {
    const references = new Set(
      sitePages.flatMap((page) =>
        [...page.html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((match) => decodeURIComponent(match[1])),
      ),
    )

    expect(references.size).toBeGreaterThan(100)
    references.forEach((reference) => {
      expect(existsSync(join(process.cwd(), 'public', reference)), `missing ${reference}`).toBe(true)
    })
  })

  it('uses an editorial image wrap on the About page', () => {
    const styles = readFileSync(join(process.cwd(), 'src', 'styles.css'), 'utf8')

    expect(styles).toContain('.about-page > .row > div:first-child { float: left;')
  })
})
