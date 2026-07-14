import express from 'express'
import { readFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'

const HTML_CACHE_POLICY = 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0'
const VERSIONED_ASSET_CACHE_POLICY = 'public, max-age=31536000, immutable'

function isVersionedAsset(filePath) {
  return /^index-[A-Za-z0-9_-]+\.(?:css|js)$/.test(basename(filePath))
}

function setFreshHtmlHeaders(response, revision) {
  response.setHeader('Cache-Control', HTML_CACHE_POLICY)
  response.setHeader('CDN-Cache-Control', 'no-store')
  response.setHeader('Surrogate-Control', 'no-store')
  response.setHeader('Pragma', 'no-cache')
  response.setHeader('Expires', '0')
  response.setHeader('X-Budget-Matter-Revision', revision)
}

function versionAssetReferences(html, revision) {
  const release = encodeURIComponent(revision)
  return html.replace(/(\/assets\/index-[A-Za-z0-9_-]+\.(?:css|js))(?!\?)/g, `$1?v=${release}`)
}

export function createApp(dist, { revision = process.env.K_REVISION || process.env.REVISION || 'local' } = {}) {
  const app = express()
  const index = resolve(dist, 'index.html')
  const releaseHtml = versionAssetReferences(readFileSync(index, 'utf8'), revision)
  app.disable('x-powered-by')

  const sendReleaseHtml = (_request, response) => {
    setFreshHtmlHeaders(response, revision)
    response.type('html').send(releaseHtml)
  }

  app.get('/health', (_request, response) => {
    response.set({ 'Cache-Control': 'no-store', 'X-Budget-Matter-Revision': revision }).json({ status: 'ok', revision })
  })
  app.get('/version', (_request, response) => {
    response.set({ 'Cache-Control': 'no-store', 'X-Budget-Matter-Revision': revision }).json({ revision })
  })
  app.use(express.static(dist, {
    index: false,
    maxAge: '1d',
    setHeaders(response, filePath) {
      if (basename(filePath) === 'index.html') setFreshHtmlHeaders(response, revision)
      else if (isVersionedAsset(filePath)) {
        response.setHeader('Cache-Control', VERSIONED_ASSET_CACHE_POLICY)
        response.setHeader('CDN-Cache-Control', VERSIONED_ASSET_CACHE_POLICY)
      }
    },
  }))
  app.get('/', sendReleaseHtml)
  app.get('*path', sendReleaseHtml)

  return app
}
