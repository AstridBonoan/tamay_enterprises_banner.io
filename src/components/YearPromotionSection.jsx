import { assetUrl } from '../utils/publicPath'

export function YearPromotionSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 pb-10 text-center sm:px-8 lg:px-16 lg:pb-14">
        <h2 className="font-display text-[clamp(1.15rem,2.8vw,1.65rem)] font-normal leading-snug text-[#5c7fbf]">
          2026 🎉 NEW YEAR PROMOTION 🎉
        </h2>
        <hr className="mx-auto mt-5 max-w-md border-0 border-b border-[#d8d8d8]" />
        <div className="mx-auto mt-8 max-w-5xl">
          <img
            src={assetUrl('gallery/promo-newyear.png')}
            alt="2026 New Year promotion"
            className="w-full rounded-sm object-cover shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
