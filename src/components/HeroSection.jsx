import { PromoBanner } from './PromoBanner'

const bannerAnchorClass =
  'mx-auto mt-10 flex w-full max-w-3xl justify-center scroll-mt-28 sm:scroll-mt-32'

export function HeroSection({ showBanner, bannerHref, bannerScrollRef }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pb-10 pt-6 text-center sm:px-10 sm:pb-14 sm:pt-8 lg:px-16 lg:pb-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-[1.65rem] font-normal leading-snug tracking-tight text-[#2a2a2a] sm:text-3xl lg:text-[2.1rem]">
            Our Work Across Connecticut
          </h1>
          <div className="mt-4 text-base font-normal leading-relaxed text-[#6b6b6b]">
            <p className="m-0">
              Every home has a story, and every project we complete becomes part of it.
              Our gallery showcases kitchen renovations, bathroom remodels, and home
              improvement projects across Connecticut. As a trusted general contractor,
              we transform outdated spaces into modern and functional homes.
            </p>
          </div>
          <div className="mt-7 flex justify-center">
            <a
              href="https://tamayenterprises.com/home#e143443e-dbca-4e4f-9c5d-febd0c827c1b"
              className="inline-flex min-h-10 items-center justify-center bg-[#2E5085] px-8 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.12em] text-white no-underline shadow-sm transition hover:bg-[#254a75]"
            >
              Find out more
            </a>
          </div>
          {showBanner && (
            <div ref={bannerScrollRef} className={bannerAnchorClass}>
              <PromoBanner href={bannerHref} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
