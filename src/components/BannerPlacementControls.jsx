import { BANNER_SLOTS } from '../data/bannerSlots'
import { PromoBanner } from './PromoBanner'

export function BannerPlacementControls({ position, onChange, bannerHref }) {
  return (
    <aside
      className="fixed right-4 top-4 z-[60] max-w-[min(100vw-2rem,22rem)] rounded-lg border border-neutral-200 bg-white/95 p-3 text-left shadow-xl backdrop-blur-sm"
      aria-label="Banner placement preview"
    >
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-neutral-500">
        Banner preview
      </p>
      <p className="mb-3 text-xs leading-snug text-neutral-600">
        Pick where your linked banner would sit on this gallery layout. This control
        panel is for planning only and would not ship on the live Tamay site.
      </p>
      <div className="flex max-h-48 flex-col gap-1 overflow-y-auto pr-1">
        {BANNER_SLOTS.map((slot) => (
          <label
            key={slot.id}
            className={`flex cursor-pointer items-start gap-2 rounded px-2 py-1.5 text-xs hover:bg-neutral-50 ${
              position === slot.id ? 'bg-amber-50 ring-1 ring-amber-200' : ''
            }`}
          >
            <input
              type="radio"
              name="banner-slot"
              className="mt-0.5"
              checked={position === slot.id}
              onChange={() => onChange(slot.id)}
            />
            <span>{slot.label}</span>
          </label>
        ))}
      </div>
      {position !== 'none' && position !== 'floating-br' && (
        <div className="mt-3 border-t border-neutral-100 pt-3">
          <p className="mb-2 text-[10px] font-semibold uppercase text-neutral-400">
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
