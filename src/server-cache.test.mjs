import { afterEach, describe, expect, it } from 'vitest'
import { once } from 'node:events'
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createApp } from '../server-app.mjs'

let server
let fixture

afterEach(async () => {
  if (server) await new Promise((resolve) => server.close(resolve))
  if (fixture) await rm(fixture, { recursive: true, force: true })
  server = undefined
  fixture = undefined
})

describe('production cache policy', () => {
  it('never stores app HTML while caching versioned assets immutably', async () => {
    fixture = await mkdtemp(join(tmpdir(), 'budget-matter-server-'))
    await mkdir(join(fixture, 'assets'))
    await writeFile(join(fixture, 'index.html'), '<!doctype html><link rel="stylesheet" href="/assets/index-test123.css"><script type="module" src="/assets/index-test123.js"></script><title>Current release</title>')
    await writeFile(join(fixture, 'assets', 'index-test123.css'), 'body {}')
    await writeFile(join(fixture, 'assets', 'index-test123.js'), 'export default true')
    const app = createApp(fixture, { revision: 'test-release-42' })
    server = app.listen(0, '127.0.0.1')
    await once(server, 'listening')
    const { port } = server.address()

    const root = await fetch(`http://127.0.0.1:${port}/`)
    const deepLink = await fetch(`http://127.0.0.1:${port}/about`)
    const asset = await fetch(`http://127.0.0.1:${port}/assets/index-test123.js`)
    const version = await fetch(`http://127.0.0.1:${port}/version`)

    for (const response of [root, deepLink]) {
      expect(response.headers.get('cache-control')).toBe('no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0')
      expect(response.headers.get('cdn-cache-control')).toBe('no-store')
      expect(response.headers.get('surrogate-control')).toBe('no-store')
      expect(response.headers.get('pragma')).toBe('no-cache')
      expect(response.headers.get('expires')).toBe('0')
      expect(response.headers.get('x-budget-matter-revision')).toBe('test-release-42')
      const html = await response.text()
      expect(html).toContain('/assets/index-test123.css?v=test-release-42')
      expect(html).toContain('/assets/index-test123.js?v=test-release-42')
    }
    expect(asset.headers.get('cache-control')).toBe('public, max-age=31536000, immutable')
    expect(asset.headers.get('cdn-cache-control')).toBe('public, max-age=31536000, immutable')
    expect(version.headers.get('cache-control')).toBe('no-store')
    expect(version.headers.get('x-budget-matter-revision')).toBe('test-release-42')
    await expect(version.json()).resolves.toEqual({ revision: 'test-release-42' })
  })
})
