/**
 * Placeholder “your app” banner — swap `href` / copy when you know the final link.
 */
export function PromoBanner({ href = 'https://example.com/your-app' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-wrap items-center justify-center gap-3 rounded-md border border-amber-300/80 bg-gradient-to-r from-amber-50 via-white to-amber-50 px-4 py-3 text-center shadow-sm transition hover:border-amber-400 hover:shadow-md sm:justify-between sm:text-left"
    >
      <span className="text-sm font-semibold text-neutral-900 sm:text-base">
        Your banner / sign — tap to open your web app
      </span>
      <span className="rounded bg-neutral-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
        Open link
      </span>
    </a>
  )
}
