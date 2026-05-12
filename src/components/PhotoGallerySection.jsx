import { useCallback, useEffect, useState } from 'react'
import { CAROUSEL_SLIDES, GALLERY_HEADINGS } from '../data/siteContent'
import { PromoBanner } from './PromoBanner'

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
      <div className="mx-auto max-w-6xl px-4 py-10 lg:px-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 sm:text-3xl">
            Photo Gallery
          </h2>
          <div className="h-px w-24 bg-neutral-300" />
        </div>

        {showBanner && (
          <div className="mx-auto mt-8 max-w-3xl">
            <PromoBanner href={bannerHref} />
          </div>
        )}

        <div className="relative mx-auto mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-sm">
            <div className="relative aspect-[16/10] w-full">
              <img
                key={slide.image}
                src={slide.image}
                alt=""
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-16">
                <h3 className="text-left text-lg font-semibold text-white sm:text-xl">
                  {slide.title}
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <span className="text-sm font-semibold text-neutral-700">
              {index + 1}/{total}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
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
                  i === index ? 'bg-neutral-900' : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-6">
          {GALLERY_HEADINGS.map((title) => (
            <div key={title}>
              <h3 className="border-b border-neutral-200 pb-2 text-center text-lg font-semibold text-neutral-900 sm:text-xl">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
