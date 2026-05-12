import { BANNER_SLOTS } from '../data/bannerSlots'
import { PromoBanner } from './PromoBanner'

export function BannerPlacementControls({ position, onChange, bannerHref }) {
  return (
    <aside
      className="fixed right-4 top-4 z-[60] max-w-[min(100vw-2rem,22rem)] border border-tamay-rule bg-white/95 p-3 text-left shadow-xl backdrop-blur-sm"
      aria-label="Banner placement preview"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.071em] text-tamay-muted">
        Banner preview
      </p>
      <p className="mb-3 text-xs leading-snug text-tamay-muted">
        Pick where your linked banner would sit on this gallery layout. This control
        panel is for planning only and would not ship on the live Tamay site.
      </p>
      <div className="flex max-h-48 flex-col gap-1 overflow-y-auto pr-1">
        {BANNER_SLOTS.map((slot) => (
          <label
            key={slot.id}
            className={`flex cursor-pointer items-start gap-2 rounded px-2 py-1.5 text-xs hover:bg-[rgb(247,247,247)] ${
              position === slot.id ? 'bg-[rgb(237,242,252)] ring-1 ring-tamay/30' : ''
            }`}
          >
            <input
              type="radio"
              name="banner-slot"
              className="mt-0.5 accent-tamay"
              checked={position === slot.id}
              onChange={() => onChange(slot.id)}
            />
            <span className="text-tamay-ink">{slot.label}</span>
          </label>
        ))}
      </div>
      {position !== 'none' && position !== 'floating-br' && (
        <div className="mt-3 border-t border-tamay-rule pt-3">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-tamay-muted">
            Mini preview
          </p>
          <PromoBanner href={bannerHref} />
        </div>
      )}
    </aside>
  )
}

export function FloatingBanner({ href }) {
  return (
    <div className="fixed bottom-4 right-4 z-[55] w-[min(100vw-2rem,20rem)]">
      <PromoBanner href={href} />
    </div>
  )
}
