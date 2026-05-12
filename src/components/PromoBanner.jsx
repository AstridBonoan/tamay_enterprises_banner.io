/**
 * Cost / estimate CTA — uses Tamay palette (navy rgb(53,85,143), whites, soft grays)
 * like [tamayenterprises.com/gallery](https://tamayenterprises.com/gallery).
 * Pass `href` from `App.jsx` (defaults to [estimator.tamayenterprises.com](https://estimator.tamayenterprises.com/)).
 */
export function PromoBanner({ href, className = '', compact = false }) {
  const to = href ?? 'https://estimator.tamayenterprises.com/'
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`group mx-auto block w-full overflow-hidden border border-[#dce3ee] bg-gradient-to-b from-[#f5f8fc] to-white text-center no-underline transition hover:border-tamay hover:shadow-lg ${
        compact ? 'rounded-md shadow-sm' : 'max-w-2xl rounded-lg shadow-md'
      } ${className}`}
    >
      <div className="h-1 bg-gradient-to-r from-tamay via-[rgb(69,109,181)] to-tamay" aria-hidden />
      <div
        className={
          compact
            ? 'px-3 py-3 sm:px-4 sm:py-3.5'
            : 'px-6 py-6 sm:px-8 sm:py-7'
        }
      >
        <p
          className={`font-display font-normal text-tamay ${
            compact
              ? 'text-sm leading-snug sm:text-[0.9375rem] sm:leading-tight'
              : 'text-[1.25rem] leading-snug sm:text-[1.4rem] sm:leading-tight'
          }`}
        >
          Want To Check Out How Much Your Project Will Cost
        </p>
        <div
          className={
            compact
              ? 'mt-3 border-t border-tamay-rule/80 pt-3'
              : 'mt-8 border-t border-tamay-rule/80 pt-8'
          }
        >
          <span
            className={`inline-flex w-full max-w-xs items-center justify-center rounded-sm bg-tamay font-semibold tracking-wide text-white shadow-sm transition group-hover:bg-tamay-hover sm:w-auto ${
              compact
                ? 'min-h-8 px-3 py-1.5 text-xs sm:min-w-[7.5rem]'
                : 'min-h-11 px-6 py-3 text-sm sm:min-w-[12rem]'
            }`}
          >
            Click Here
          </span>
        </div>
      </div>
    </a>
  )
}
