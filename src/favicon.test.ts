import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('site favicon', () => {
  it('links to a deployable SVG brand icon', () => {
    const root = process.cwd()
    const html = readFileSync(join(root, 'index.html'), 'utf8')
    const favicon = html.match(/<link rel="icon" type="image\/svg\+xml" href="([^"]+)"/)

    expect(favicon?.[1]).toBe('/favicon.svg')
    expect(existsSync(join(root, 'public', 'favicon.svg'))).toBe(true)
  })
})
