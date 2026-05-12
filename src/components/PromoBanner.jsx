/**
 * Placeholder “your app” banner — swap `href` / copy when you know the final link.
 * Always horizontally centered (matches Tamay gallery strip + your reference).
 */
export function PromoBanner({ href = 'https://example.com/your-app', className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-3 border border-[#e6e6e6] bg-white px-6 py-4 text-center shadow-sm no-underline transition hover:border-tamay hover:shadow-md sm:flex-row sm:gap-4 ${className}`}
    >
      <span className="text-center text-sm font-semibold text-tamay-ink sm:text-base">
        Your banner / sign — tap to open your web app
      </span>
      <span className="inline-flex min-h-8 shrink-0 items-center justify-center bg-tamay px-4 py-1.5 text-xs font-normal uppercase tracking-[0.071em] text-white">
        Open link
      </span>
    </a>
  )
}
