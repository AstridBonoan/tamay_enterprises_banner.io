import { NAV_FOOTER } from '../data/siteContent'
import { PromoBanner } from './PromoBanner'

const bannerAnchorClass =
  'mx-auto flex w-full max-w-[1440px] justify-center px-4 py-8 scroll-mt-28 sm:scroll-mt-32 sm:px-8 lg:px-16'

export function SiteFooter({ showBanner, bannerHref, bannerScrollRef }) {
  return (
    <footer className="border-t border-tamay-rule bg-white">
      {showBanner && (
        <div ref={bannerScrollRef} className={bannerAnchorClass}>
          <PromoBanner href={bannerHref} />
        </div>
      )}
      <div className="mx-auto max-w-[1280px] px-4 py-10 text-center lg:px-6">
        <p className="text-base font-normal leading-normal text-tamay-muted">
          Copyright © {new Date().getFullYear()} Tamay Enterprises Inc - Todos los
          derechos reservados.
        </p>
        <nav
          className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-normal uppercase tracking-[0.071em] text-tamay-ink"
          aria-label="Footer"
        >
          {NAV_FOOTER.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-tamay-ink no-underline hover:text-tamay hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
