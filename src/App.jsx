import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { BannerPlacementControls } from './components/BannerPlacementControls'
import { CookieBanner } from './components/CookieBanner'
import { FloatingBanner } from './components/FloatingBanner'
import { FloatingSiteChrome } from './components/FloatingSiteChrome'
import { HeroSection } from './components/HeroSection'
import { InstagramSection } from './components/InstagramSection'
import { PhotoGallerySection } from './components/PhotoGallerySection'
import { PromoBanner } from './components/PromoBanner'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { YearPromotionSection } from './components/YearPromotionSection'

/** Estimator / appointments or your own tool — used by the cost CTA banner. */
const DEFAULT_BANNER_HREF = 'https://tamayenterprises.com/online-appointments'

function scrollBannerIntoView(el, slotId) {
  if (!el) return
  const block = slotId === 'floating-br' ? 'end' : 'center'
  window.requestAnimationFrame(() => {
    el.scrollIntoView({ behavior: 'smooth', block, inline: 'nearest' })
  })
}

function App() {
  const [cookiesOpen, setCookiesOpen] = useState(true)
  const [bannerPosition, setBannerPosition] = useState('below-hero')

  const belowHeaderRef = useRef(null)
  const belowHeroRef = useRef(null)
  const aboveGalleryRef = useRef(null)
  const aboveFooterRef = useRef(null)
  const floatingRef = useRef(null)

  const href = DEFAULT_BANNER_HREF

  const slots = useMemo(
    () => ({
      belowHeader: bannerPosition === 'below-header',
      belowHero: bannerPosition === 'below-hero',
      aboveGallery: bannerPosition === 'above-gallery',
      aboveFooter: bannerPosition === 'above-footer',
      floating: bannerPosition === 'floating-br',
    }),
    [bannerPosition],
  )

  const scrollToSlot = useCallback((slotId) => {
    if (slotId === 'none') return
    const map = {
      'below-header': belowHeaderRef,
      'below-hero': belowHeroRef,
      'above-gallery': aboveGalleryRef,
      'above-footer': aboveFooterRef,
      'floating-br': floatingRef,
    }
    const ref = map[slotId]
    const el = ref?.current
    scrollBannerIntoView(el, slotId)
  }, [])

  const prevBannerPosition = useRef(null)
  useEffect(() => {
    if (prevBannerPosition.current === null) {
      prevBannerPosition.current = bannerPosition
      return
    }
    if (prevBannerPosition.current === bannerPosition) {
      return
    }
    prevBannerPosition.current = bannerPosition
    scrollToSlot(bannerPosition)
  }, [bannerPosition, scrollToSlot])

  return (
    <div className="min-h-svh bg-white text-tamay-ink antialiased">
      <SiteHeader />

      {slots.belowHeader && (
        <div
          ref={belowHeaderRef}
          className="scroll-mt-28 border-b border-[#e5e5e5] bg-[#f3f4f6] sm:scroll-mt-32"
        >
          <div className="mx-auto flex w-full max-w-[1440px] justify-center px-4 py-4 sm:px-8 sm:py-5 lg:px-16">
            <PromoBanner href={href} />
          </div>
        </div>
      )}

      <main className="max-sm:pt-12">
        <HeroSection
          showBanner={slots.belowHero}
          bannerHref={href}
          bannerScrollRef={belowHeroRef}
        />
        <YearPromotionSection />
        <PhotoGallerySection
          showBanner={slots.aboveGallery}
          bannerHref={href}
          bannerScrollRef={aboveGalleryRef}
        />
        <InstagramSection />
        <SiteFooter
          showBanner={slots.aboveFooter}
          bannerHref={href}
          bannerScrollRef={aboveFooterRef}
        />
      </main>

      {slots.floating && <FloatingBanner ref={floatingRef} href={href} />}

      <CookieBanner
        visible={cookiesOpen}
        onAccept={() => setCookiesOpen(false)}
      />

      <BannerPlacementControls
        position={bannerPosition}
        onChange={setBannerPosition}
        onReselect={scrollToSlot}
        bannerHref={href}
      />

      <FloatingSiteChrome />
    </div>
  )
}

export default App
