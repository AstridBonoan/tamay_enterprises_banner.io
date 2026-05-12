/**
 * Cost / estimate CTA — uses Tamay palette (navy rgb(53,85,143), whites, soft grays)
 * like [tamayenterprises.com/gallery](https://tamayenterprises.com/gallery).
 * Pass `href` from `App.jsx` (e.g. estimator or online appointments).
 */
export function PromoBanner({ href, className = '' }) {
  const to = href ?? 'https://tamayenterprises.com/online-appointments'
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`group mx-auto block w-full max-w-2xl overflow-hidden rounded-lg border border-[#dce3ee] bg-gradient-to-b from-[#f5f8fc] to-white text-center shadow-md no-underline transition hover:border-tamay hover:shadow-lg ${className}`}
    >
      <div className="h-1 bg-gradient-to-r from-tamay via-[rgb(69,109,181)] to-tamay" aria-hidden />
      <div className="px-6 py-6 sm:px-8 sm:py-7">
        <p className="font-display text-[1.25rem] font-normal leading-snug text-tamay sm:text-[1.4rem] sm:leading-tight">
          Want To Check Out How Much Your Project Will Cost
        </p>
        <div className="mt-8 border-t border-tamay-rule/80 pt-8">
          <span className="inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-sm bg-tamay px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-sm transition group-hover:bg-tamay-hover sm:w-auto sm:min-w-[12rem]">
            Click Here
          </span>
        </div>
      </div>
    </a>
  )
}
