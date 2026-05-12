/** Vite `public/` URLs, correct on GitHub Pages with `base`. */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL ?? '/'
  const withSlash = base.endsWith('/') ? base : `${base}/`
  return `${withSlash}${path.replace(/^\//, '')}`
}
