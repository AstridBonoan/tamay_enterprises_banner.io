import { NAV_FOOTER } from '../data/siteContent'
import { PromoBanner } from './PromoBanner'

export function SiteFooter({ showBanner, bannerHref }) {
  return (
    <footer className="border-t border-tamay-rule bg-white">
      {showBanner && (
        <div className="mx-auto max-w-[1280px] px-4 py-8 lg:px-6">
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
