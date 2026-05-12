import { useCallback, useEffect, useState } from 'react'
import {
  CAROUSEL_SLIDES,
  GALLERY_HEADINGS,
  GALLERY_PROJECT_BLOCKS,
} from '../data/siteContent'
import { assetUrl } from '../utils/publicPath'
import { PromoBanner } from './PromoBanner'
import { SectionHeading } from './SectionHeading'
import { VideoPoster } from './VideoPoster'

function CarouselSlide({ slide }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-black">
      <img
        src={assetUrl(slide.image)}
        alt=""
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-xl sm:h-[4.5rem] sm:w-[4.5rem]">
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-8 w-8 text-[#111]"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-12">
        <h3 className="text-left font-display text-xl font-normal text-white sm:text-2xl">
          {slide.title}
        </h3>
      </div>
    </div>
  )
}

const bannerAnchorClass =
  'mx-auto mb-8 flex w-full max-w-3xl justify-center scroll-mt-28 px-2 sm:scroll-mt-32'

export function PhotoGallerySection({ showBanner, bannerHref, bannerScrollRef }) {
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
      <div className="mx-auto max-w-[1440px] px-4 py-10 sm:px-8 lg:px-16 lg:py-14">
        <SectionHeading title="Photo Gallery" />

        {showBanner && (
          <div ref={bannerScrollRef} className={bannerAnchorClass}>
            <PromoBanner href={bannerHref} />
          </div>
        )}

        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden border border-[#e0e0e0] bg-[#f5f5f5] shadow-sm">
            <CarouselSlide key={slide.title} slide={slide} />
          </div>

          <div className="mt-3 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              className="inline-flex min-h-10 min-w-10 items-center justify-center border border-[#d0d0d0] bg-white text-lg text-[#333] transition hover:bg-[#fafafa]"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <span className="text-sm font-semibold text-[#666]">
              {index + 1}/{total}
            </span>
            <button
              type="button"
              onClick={() => go(1)}
              className="inline-flex min-h-10 min-w-10 items-center justify-center border border-[#d0d0d0] bg-white text-lg text-[#333] transition hover:bg-[#fafafa]"
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
                  i === index ? 'bg-tamay' : 'bg-[#ccc] hover:bg-[#999]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl space-y-16 lg:mt-20">
          {GALLERY_PROJECT_BLOCKS.map((block) => (
            <article key={block.title}>
              <SectionHeading title={block.title} />
              {block.kind === 'twin' && (
                <>
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                    <VideoPoster image={block.left} alt="" />
                    <VideoPoster image={block.right} alt="" />
                  </div>
                  <p className="mt-5 rounded-lg border border-[#e6e6e6] bg-white px-5 py-4 text-left text-base text-[#222] shadow-sm">
                    {block.caption}
                  </p>
                </>
              )}
              {block.kind === 'single' && (
                <div className="mx-auto max-w-4xl">
                  <VideoPoster image={block.image} alt="" />
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-8 border-t border-[#eee] pt-12">
          {GALLERY_HEADINGS.map((title) => (
            <div key={title}>
              <h3 className="border-b border-tamay-rule pb-2 text-center font-display text-lg font-normal uppercase tracking-[0.1em] text-tamay sm:text-xl">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
