import { describe, expect, it } from 'vitest'
import { normalizeRoute, routeForLegacyHref } from './routing'

describe('legacy route compatibility', () => {
  it.each([
    ['/', '/'],
    ['/index.html', '/'],
    ['/process.html', '/process'],
    ['/project7/project7.html', '/project7/project7'],
    ['/policy', '/policy'],
  ])('normalizes %s to %s', (input, expected) => {
    expect(normalizeRoute(input)).toBe(expected)
  })

  it('keeps external and document links unchanged', () => {
    expect(routeForLegacyHref('https://www.whitehouse.gov/omb/')).toBe('https://www.whitehouse.gov/omb/')
    expect(routeForLegacyHref('/assets/budget-law.pdf')).toBe('/assets/budget-law.pdf')
  })

  it('converts relative HTML links into application routes', () => {
    expect(routeForLegacyHref('../e8_resolution.html')).toBe('/e8_resolution')
  })
})
