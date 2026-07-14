import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { legacyPages } from './legacyPages'

describe('generated legacy content', () => {
  it('preserves every original HTML page as a route', () => {
    expect(legacyPages.length).toBeGreaterThanOrEqual(50)
    expect(new Set(legacyPages.map((page) => page.route)).size).toBe(legacyPages.length)
  })

  it('retains the complete 22-step federal budget journey', () => {
    const routes = new Set(legacyPages.map((page) => page.route))
    const expected = [
      ...Array.from({ length: 7 }, (_, index) => `/f${index + 1}_${['planning', 'guidance', 'internal', 'decision', 'submission', 'ombdecision', 'omb2congress'][index]}`),
      '/e8_resolution', '/e9_authorization', '/e10_appropriation', '/e11_hearing',
      '/e12_q_a', '/e13_appeal', '/e14_cr', '/e15_oversight',
      '/b16_apportionments', '/b17_report', '/b18_rescission', '/b19_outlay',
      '/b20_finplan', '/b21_reprogram', '/b22_directive',
    ]
    expected.forEach((route) => expect(routes.has(route), `missing ${route}`).toBe(true))
  })

  it('removes legacy runtime dependencies from migrated content', () => {
    const joined = legacyPages.map((page) => page.html).join('')
    expect(joined).not.toMatch(/<script/i)
    expect(joined).not.toMatch(/vendor\/jquery/i)
    expect(joined).not.toMatch(/vendor\/bootstrap/i)
  })

  it('maps every legacy Bootstrap column to the modern responsive grid', () => {
    const styles = readFileSync(join(process.cwd(), 'src', 'styles.css'), 'utf8')
    const columns = new Set(
      legacyPages.flatMap((page) =>
        [...page.html.matchAll(/\b(col-(?:sm|md|lg)-\d+)\b/g)].map((match) => match[1]),
      ),
    )

    expect(columns).toContain('col-lg-6')
    columns.forEach((column) => expect(styles, `missing layout rule for ${column}`).toContain(`.${column}`))
  })

  it('uses an editorial image wrap on the About page', () => {
    const styles = readFileSync(join(process.cwd(), 'src', 'styles.css'), 'utf8')

    expect(styles).toContain('.about-page > .row > div:first-child { float: left;')
  })
})
