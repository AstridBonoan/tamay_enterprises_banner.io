import { useCallback, useEffect, useState } from 'react'
import { CAROUSEL_SLIDES, GALLERY_HEADINGS } from '../data/siteContent'
import { PromoBanner } from './PromoBanner'
import { SectionHeading } from './SectionHeading'

export function PhotoGallerySection({ showBanner, bannerHref }) {
  const [index, setIndex] = useState(0)
  const total = CAROUSEL_SLIDES.length

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + total) % total)
    },
    [total],
  )

  useEffect(() => {
    const id = setInterval(() => go(1), 7000)
    return () => clearInterval(id)
  }, [go])

  const slide = CAROUSEL_SLIDES[index]

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 py-10 lg:px-6 lg:py-14">
        <SectionHeading title="Photo Gallery" />

        {showBanner && (
          <div className="mx-auto mb-8 max-w-3xl">
            <PromoBanner href={bannerHref} />
          </div>
        )}

        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-sm border border-tamay-rule bg-[rgb(245,245,245)]">
            <div className="relative aspect-[16/10] w-full">
              <img
                key={slide.image}
                src={slide.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-16">
                <h3 className="text-left font-cinzel text-xl font-normal text-white sm:text-2xl">
                  {slide.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex min-h-10 min-w-10 items-center justify-center border border-tamay-rule bg-white text-lg text-tamay-ink transition hover:bg-[rgb(247,247,247)]"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <span className="text-sm font-semibold text-tamay-muted">
              {index + 1}/{total}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex min-h-10 min-w-10 items-center justify-center border border-tamay-rule bg-white text-lg text-tamay-ink transition hover:bg-[rgb(247,247,247)]"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {CAROUSEL_SLIDES.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? 'bg-tamay' : 'bg-tamay-rule hover:bg-tamay-muted'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-8">
          {GALLERY_HEADINGS.map((title) => (
            <div key={title}>
              <h3 className="border-b border-tamay-rule pb-2 text-center font-cinzel text-xl font-normal text-tamay sm:text-2xl">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
