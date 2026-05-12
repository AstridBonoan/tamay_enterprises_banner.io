import { useMemo, useState } from 'react'
import {
  BannerPlacementControls,
  FloatingBanner,
} from './components/BannerPlacementControls'
import { CookieBanner } from './components/CookieBanner'
import { FloatingSiteChrome } from './components/FloatingSiteChrome'
import { HeroSection } from './components/HeroSection'
import { InstagramSection } from './components/InstagramSection'
import { PhotoGallerySection } from './components/PhotoGallerySection'
import { PromoBanner } from './components/PromoBanner'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { YearPromotionSection } from './components/YearPromotionSection'

/** Replace with your live web-app URL before you embed this on the real site. */
const DEFAULT_BANNER_HREF = 'https://example.com/your-app'

function App() {
  const [cookiesOpen, setCookiesOpen] = useState(true)
  const [bannerPosition, setBannerPosition] = useState('below-hero')

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

  return (
    <div className="min-h-svh bg-white text-tamay-ink antialiased">
      <SiteHeader />

      {slots.belowHeader && (
        <div className="border-b border-tamay-rule bg-[rgb(247,249,252)]">
          <div className="mx-auto max-w-[1280px] px-4 py-3 lg:px-6">
            <PromoBanner href={href} />
          </div>
        </div>
      )}

      <main>
        <HeroSection showBanner={slots.belowHero} bannerHref={href} />
        <YearPromotionSection />
        <PhotoGallerySection
          showBanner={slots.aboveGallery}
          bannerHref={href}
        />
        <InstagramSection />
        <SiteFooter showBanner={slots.aboveFooter} bannerHref={href} />
      </main>

      {slots.floating && <FloatingBanner href={href} />}

      <CookieBanner
        visible={cookiesOpen}
        onAccept={() => setCookiesOpen(false)}
      />

      <BannerPlacementControls
        position={bannerPosition}
        onChange={setBannerPosition}
        bannerHref={href}
      />

      <FloatingSiteChrome />
    </div>
  )
}

export default App
