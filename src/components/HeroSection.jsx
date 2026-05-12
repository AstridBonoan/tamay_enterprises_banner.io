import { PromoBanner } from './PromoBanner'

export function HeroSection({ showBanner, bannerHref }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-10 lg:px-6 lg:py-14">
        <div className="max-w-3xl text-left">
          <h1 className="text-[22px] font-normal leading-[1.25] text-tamay-ink">
            Our Work Across Connecticut
          </h1>
          <div className="mt-4 text-base font-normal leading-[1.5] text-tamay-muted">
            <p className="m-0">
              Every home has a story, and every project we complete becomes part of it.
              Our gallery showcases kitchen renovations, bathroom remodels, and home
              improvement projects across Connecticut. As a trusted general contractor,
              we transform outdated spaces into modern and functional homes.
            </p>
          </div>
          <div className="mt-6">
            <a
              href="https://tamayenterprises.com/home#e143443e-dbca-4e4f-9c5d-febd0c827c1b"
              className="inline-flex min-h-10 items-center justify-center border-0 bg-tamay px-5 py-1 text-center text-xs font-normal uppercase tracking-[0.071em] text-white no-underline transition hover:bg-tamay-hover"
            >
              Find out more
            </a>
          </div>
          {showBanner && (
            <div className="mt-8">
              <PromoBanner href={bannerHref} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
