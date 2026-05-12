/**
 * Decorative parity with tamayenterprises.com (TrustedSite + chat affordances).
 * Logos are generic placeholders — replace with real widget snippets if you embed them.
 */
export function FloatingSiteChrome() {
  return (
    <>
      <div className="pointer-events-none fixed bottom-4 left-4 z-40 hidden sm:block">
        <div className="pointer-events-auto flex items-center gap-1 rounded border border-neutral-200 bg-white px-2 py-1 text-[10px] font-semibold text-neutral-700 shadow-md">
          <span className="text-green-600" aria-hidden>
            ✓
          </span>
          TrustedSite
        </div>
      </div>
      <button
        type="button"
        className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#4ade80] text-white shadow-lg transition hover:bg-[#22c55e] sm:bottom-6 sm:right-6"
        aria-label="Open chat"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
        </svg>
      </button>
    </>
  )
}
