export function normalizeRoute(pathname: string): string {
  const decoded = decodeURIComponent(pathname.split(/[?#]/)[0] || '/')
  const withoutHtml = decoded.replace(/\.html?$/i, '')
  const normalized = withoutHtml.replace(/\/{2,}/g, '/').replace(/\/$/, '') || '/'
  return normalized.toLowerCase() === '/index' ? '/' : normalized
}

export function routeForLegacyHref(href: string): string {
  if (/^(?:[a-z]+:|#)/i.test(href) || !/\.html?(?:$|[?#])/i.test(href)) return href
  const path = href.replace(/^\.\.\//, '/').replace(/^\.\//, '/')
  return normalizeRoute(path)
}
