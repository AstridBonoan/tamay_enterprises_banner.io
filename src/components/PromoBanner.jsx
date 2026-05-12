/**
 * Cost / estimate CTA — uses Tamay palette (navy rgb(53,85,143), whites, soft grays)
 * like [tamayenterprises.com/gallery](https://tamayenterprises.com/gallery).
 * Pass `href` from `App.jsx` (defaults to [estimator.tamayenterprises.com](https://estimator.tamayenterprises.com/)).
 */
export function PromoBanner({
  href,
  className = '',
  compact = false,
  floatingSquare = false,
}) {
  const to = href ?? 'https://estimator.tamayenterprises.com/'
  const shell =
    floatingSquare
      ? 'flex h-full min-h-0 flex-col rounded-lg shadow-md'
      : compact
        ? 'rounded-md shadow-sm'
        : 'max-w-2xl rounded-lg shadow-md'

  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={`group mx-auto block w-full overflow-hidden border border-[#dce3ee] bg-gradient-to-b from-[#f5f8fc] to-white text-center no-underline transition hover:border-tamay hover:shadow-lg ${shell} ${className}`}
    >
      <div className="h-1 shrink-0 bg-gradient-to-r from-tamay via-[rgb(69,109,181)] to-tamay" aria-hidden />
      <div
        className={
          floatingSquare
            ? 'flex min-h-0 flex-1 flex-col justify-center px-4 py-3 sm:px-5 sm:py-4'
            : compact
              ? 'px-3 py-3 sm:px-4 sm:py-3.5'
              : 'px-6 py-6 sm:px-8 sm:py-7'
        }
      >
        <p
          className={`font-display font-normal text-tamay ${
            floatingSquare
              ? 'text-balance text-[0.95rem] leading-snug sm:text-lg sm:leading-tight'
              : compact
                ? 'text-sm leading-snug sm:text-[0.9375rem] sm:leading-tight'
                : 'text-[1.25rem] leading-snug sm:text-[1.4rem] sm:leading-tight'
          }`}
        >
          Want To Check Out How Much Your Project Will Cost
        </p>
        <div
          className={
            floatingSquare
              ? 'mt-4 border-t border-tamay-rule/80 pt-4'
              : compact
                ? 'mt-3 border-t border-tamay-rule/80 pt-3'
                : 'mt-8 border-t border-tamay-rule/80 pt-8'
          }
        >
          <span
            className={`inline-flex w-full max-w-xs items-center justify-center rounded-sm bg-tamay font-semibold tracking-wide text-white shadow-sm transition group-hover:bg-tamay-hover sm:w-auto ${
              floatingSquare
                ? 'min-h-10 px-5 py-2.5 text-sm sm:min-w-[10rem]'
                : compact
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
