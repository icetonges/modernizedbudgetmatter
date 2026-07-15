import { describe, expect, it } from 'vitest'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd()

describe('production source boundary', () => {
  it('builds directly from maintained React data without the legacy-site extractor', () => {
    const packageJson = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
    const scripts = Object.values(packageJson.scripts).join(' ')

    expect(scripts).not.toContain('generate:content')
    expect(packageJson.dependencies).not.toHaveProperty('cheerio')
    expect(existsSync(join(root, 'scripts', 'generate-content.mjs'))).toBe(false)
  })

  it('does not retain obsolete static-site source trees or build output', () => {
    const obsoleteDirectories = [
      'legacy-html', 'css', 'js', 'img',
      ...Array.from({ length: 12 }, (_, index) => `project${index + 4}`),
    ]

    obsoleteDirectories.forEach((directory) => {
      expect(existsSync(join(root, directory)), `${directory} should be removed`).toBe(false)
    })
    expect(readFileSync(join(root, '.gitignore'), 'utf8')).toContain('dist/')
  })
})
