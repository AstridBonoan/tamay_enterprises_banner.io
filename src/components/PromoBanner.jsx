/**
 * Placeholder “your app” banner — swap `href` / copy when you know the final link.
 */
export function PromoBanner({ href = 'https://example.com/your-app' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-wrap items-center justify-center gap-3 border border-tamay-rule bg-[rgb(247,249,252)] px-4 py-3 text-center no-underline shadow-sm transition hover:border-tamay hover:shadow-md sm:justify-between sm:text-left"
    >
      <span className="text-sm font-semibold text-tamay-ink sm:text-base">
        Your banner / sign — tap to open your web app
      </span>
      <span className="inline-flex min-h-8 items-center justify-center bg-tamay px-3 py-1 text-xs font-normal uppercase tracking-[0.071em] text-white">
        Open link
      </span>
    </a>
  )
}
