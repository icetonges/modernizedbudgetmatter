import { existsSync, mkdirSync, readFileSync, readdirSync, copyFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, extname, join, posix, relative, resolve, sep } from 'node:path'
import { createHash } from 'node:crypto'
import * as cheerio from 'cheerio'

const root = resolve(import.meta.dirname, '..')
const sourceRoot = join(root, 'legacy-html')
const assetRoot = join(root, 'public', 'assets')
const output = join(root, 'src', 'data', 'legacyPages.ts')

const walk = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const path = join(directory, entry.name)
  return entry.isDirectory() ? walk(path) : [path]
})

const slash = (value) => value.split(sep).join('/')
const copyIfNeeded = (source, target) => {
  mkdirSync(dirname(target), { recursive: true })
  if (existsSync(target) && statSync(source).size === statSync(target).size) return
  copyFileSync(source, target)
}
const routeFromPath = (path) => {
  const withoutExtension = slash(path).replace(/\.html$/i, '')
  return withoutExtension.toLowerCase() === 'index' ? '/' : `/${withoutExtension}`
}

const cleanText = (value) => value
  .replaceAll('â€™', '’').replaceAll('â€œ', '“').replaceAll('â€', '”')
  .replaceAll('â€“', '–').replaceAll('â€”', '—').replaceAll('Â ', ' ')
const summarize = (value, limit = 220) => {
  const text = value.replace(/\s+/g, ' ').trim()
  if (text.length <= limit) return text
  const shortened = text.slice(0, limit - 1)
  return `${shortened.slice(0, shortened.lastIndexOf(' '))}…`
}

const isExternal = (value) => /^(?:[a-z]+:|#|data:|mailto:|tel:)/i.test(value)

const pages = walk(sourceRoot)
  .filter((path) => extname(path).toLowerCase() === '.html')
  .map((sourcePath) => {
    const relativeHtml = slash(relative(sourceRoot, sourcePath))
    const originalPath = join(root, relativeHtml)
    const pageDirectory = dirname(relativeHtml)
    const $ = cheerio.load(cleanText(readFileSync(sourcePath, 'utf8')), { decodeEntities: false })

    $('nav, header, footer, script, style, link, noscript').remove()
    $.root().find('*').contents().filter((_, node) => node.type === 'comment').remove()
    const content = $('body > .container').first()
    const fallback = $('body')
    const scope = content.length ? content : fallback

    scope.find('[src]').each((_, element) => {
      const src = $(element).attr('src')?.trim()
      if (!src) return
      const inlineImage = src.match(/^data:image\/(png|jpe?g|gif);base64,(.+)$/i)
      if (inlineImage) {
        const bytes = Buffer.from(inlineImage[2], 'base64')
        const extension = inlineImage[1].toLowerCase().replace('jpeg', 'jpg')
        const name = `${createHash('sha256').update(bytes).digest('hex').slice(0, 16)}.${extension}`
        const target = join(assetRoot, 'generated', name)
        mkdirSync(dirname(target), { recursive: true })
        if (!existsSync(target)) writeFileSync(target, bytes)
        $(element).attr('src', `/assets/generated/${name}`)
        return
      }
      if (isExternal(src)) return
      const decoded = decodeURIComponent(src.replace(/^\.\//, ''))
      const relativeAsset = slash(posix.normalize(posix.join(slash(pageDirectory), decoded))).replace(/^\.\.\//, '')
      const sourceAsset = join(root, ...relativeAsset.split('/'))
      if (existsSync(sourceAsset)) {
        const target = join(assetRoot, ...relativeAsset.split('/'))
        copyIfNeeded(sourceAsset, target)
        $(element).attr('src', `/assets/${relativeAsset.split('/').map(encodeURIComponent).join('/')}`)
      }
      if (!$(element).attr('alt')) $(element).attr('alt', 'Budget Matter visual')
      $(element).removeAttr('height').removeAttr('width')
    })

    scope.find('[href]').each((_, element) => {
      const href = $(element).attr('href')?.trim()
      if (!href || isExternal(href)) return
      const cleanHref = href.replace(/^\.\//, '')
      if (/\.html?(?:$|[?#])/i.test(cleanHref)) {
        const [pathPart, suffix = ''] = cleanHref.split(/(?=[?#])/)
        const resolved = posix.normalize(posix.join(slash(pageDirectory), pathPart))
        $(element).attr('href', `${routeFromPath(resolved)}${suffix}`)
      } else {
        const relativeAsset = slash(posix.normalize(posix.join(slash(pageDirectory), decodeURIComponent(cleanHref)))).replace(/^\.\.\//, '')
        const sourceAsset = join(root, ...relativeAsset.split('/'))
        if (existsSync(sourceAsset)) {
          const target = join(assetRoot, ...relativeAsset.split('/'))
          copyIfNeeded(sourceAsset, target)
          $(element).attr('href', `/assets/${relativeAsset.split('/').map(encodeURIComponent).join('/')}`)
        }
      }
    })

    scope.find('*').removeAttr('style').removeAttr('onclick').removeAttr('data-toggle').removeAttr('data-target')
    const heading = scope.find('h1, h2, h3').first().text().replace(/\s+/g, ' ').trim()
    const route = routeFromPath(relativeHtml)
    const title = heading || (route === '/' ? 'Welcome to Budget Matter' : posix.basename(route).replaceAll(/[-_]/g, ' '))
    const description = summarize(scope.find('p').first().text())

    return { route, legacyPath: relativeHtml, title, description, html: scope.html()?.trim() ?? '', sourceExists: existsSync(originalPath) }
  })
  .sort((a, b) => a.route.localeCompare(b.route))

mkdirSync(dirname(output), { recursive: true })
writeFileSync(output, `// Generated by scripts/generate-content.mjs. Do not edit manually.\nexport interface LegacyPage { route: string; legacyPath: string; title: string; description: string; html: string }\nexport const legacyPages: LegacyPage[] = ${JSON.stringify(pages.map(({ sourceExists: _, ...page }) => page), null, 2)}\n`, 'utf8')
console.log(`Generated ${pages.length} routes and copied referenced assets.`)
