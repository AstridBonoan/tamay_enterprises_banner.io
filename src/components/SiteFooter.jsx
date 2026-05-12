import { NAV_FOOTER } from '../data/siteContent'
import { PromoBanner } from './PromoBanner'

export function SiteFooter({ showBanner, bannerHref }) {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      {showBanner && (
        <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
          <PromoBanner href={bannerHref} />
        </div>
      )}
      <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-neutral-600 lg:px-6">
        <p>
          Copyright © {new Date().getFullYear()} Tamay Enterprises Inc - Todos los
          derechos reservados.
        </p>
        <nav
          className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-wide text-neutral-800"
          aria-label="Footer"
        >
          {NAV_FOOTER.map((item) => (
            <a key={item.label} href={item.href} className="hover:underline">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
