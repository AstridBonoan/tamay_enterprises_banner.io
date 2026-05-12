import { PromoBanner } from './PromoBanner'

export function HeroSection({ showBanner, bannerHref }) {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:py-14 lg:px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-[2.35rem] md:leading-tight">
          Our Work Across Connecticut
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-neutral-600 sm:text-lg">
          Every home has a story, and every project we complete becomes part of it.
          Our gallery showcases kitchen renovations, bathroom remodels, and home
          improvement projects across Connecticut. As a trusted general contractor,
          we transform outdated spaces into modern and functional homes.
        </p>
        <a
          href="https://tamayenterprises.com/home#e143443e-dbca-4e4f-9c5d-febd0c827c1b"
          className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-neutral-900 underline decoration-2 underline-offset-4 hover:text-[var(--color-brand-accent)]"
        >
          Find out more
        </a>
        {showBanner && (
          <div className="mx-auto mt-8 max-w-3xl">
            <PromoBanner href={bannerHref} />
          </div>
        )}
      </div>
    </section>
  )
}
