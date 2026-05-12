/**
 * Floating cost-estimate CTA — Tamay palette (navy rgb(53,85,143)).
 */
export function PromoBanner({ href, className = '' }) {
  const to = href ?? 'https://estimator.tamayenterprises.com/'
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`group mx-auto flex h-full min-h-0 w-full flex-col overflow-hidden rounded-lg border border-[#dce3ee] bg-gradient-to-b from-[#f5f8fc] to-white text-center shadow-md no-underline transition hover:border-tamay hover:shadow-lg ${className}`}
    >
      <div className="h-1 shrink-0 bg-gradient-to-r from-tamay via-[rgb(69,109,181)] to-tamay" aria-hidden />
      <div className="flex min-h-0 flex-1 flex-col justify-center px-4 py-3 sm:px-5 sm:py-4">
        <p className="font-display text-balance text-[0.95rem] font-normal leading-snug text-tamay sm:text-lg sm:leading-tight">
          Want To Check Out How Much Your Project Will Cost
        </p>
        <div className="mt-4 border-t border-tamay-rule/80 pt-4">
          <span className="inline-flex min-h-10 w-full max-w-xs items-center justify-center rounded-sm bg-tamay px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm transition group-hover:bg-tamay-hover sm:w-auto sm:min-w-[10rem]">
            Click Here
          </span>
        </div>
      </div>
    </a>
  )
}
