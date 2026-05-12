import { useEffect, useState } from 'react'
import { BANNER_SLOTS } from '../data/bannerSlots'
import { PromoBanner } from './PromoBanner'

function SlotRadios({ position, onChange, onReselect, compact }) {
  return (
    <div
      className={
        compact
          ? 'flex flex-col gap-0.5 pr-1'
          : 'flex max-h-48 flex-col gap-1 overflow-y-auto pr-1'
      }
      role="radiogroup"
      aria-label="Banner placement"
    >
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
            onClick={() => {
              if (position === slot.id) {
                onReselect?.(slot.id)
              }
            }}
          />
          <span className="text-tamay-ink">{slot.label}</span>
        </label>
      ))}
    </div>
  )
}

/**
 * Fixed below the sticky header and on the left (sm+) so it never overlaps
 * logo / nav. On small screens, a compact bar opens a scrollable sheet so the
 * preview does not cover the page by default.
 */
export function BannerPlacementControls({ position, onChange, onReselect, bannerHref }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const currentLabel = BANNER_SLOTS.find((s) => s.id === position)?.label ?? ''

  useEffect(() => {
    if (!mobileOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileOpen])

  const handleMobilePick = (id) => {
    onChange(id)
    setMobileOpen(false)
  }

  return (
    <>
      {/* —— Mobile: backdrop + compact trigger + sheet —— */}
      <button
        type="button"
        aria-label="Close banner preview"
        className={`fixed inset-0 z-[38] bg-black/35 backdrop-blur-[1px] transition-opacity sm:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
      />

      <div className="pointer-events-none fixed left-0 right-0 top-20 z-[40] px-3 sm:hidden">
        <div className="pointer-events-auto">
          {!mobileOpen && (
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex w-full items-center gap-2 rounded-lg border border-tamay-rule bg-white/95 py-2.5 pl-3 pr-2 text-left shadow-lg backdrop-blur-sm"
              aria-expanded={false}
            >
              <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.071em] text-tamay-muted">
                Banner
              </span>
              <span className="min-w-0 flex-1 truncate text-xs font-normal text-tamay-ink" title={currentLabel}>
                {currentLabel}
              </span>
              <svg
                className="h-4 w-4 shrink-0 text-tamay-muted"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div
        className={`fixed left-2 right-2 top-20 z-[40] max-h-[min(85dvh,calc(100dvh-5.25rem))] flex-col overflow-hidden rounded-b-xl border border-tamay-rule bg-white shadow-2xl sm:hidden ${
          mobileOpen ? 'flex min-h-0' : 'hidden'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Banner placement preview"
      >
        <div className="flex shrink-0 items-center justify-between gap-2 border-b border-tamay-rule bg-white px-3 py-2">
          <p className="text-xs font-bold uppercase tracking-[0.071em] text-tamay-muted">Banner preview</p>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-md text-tamay-ink hover:bg-[rgb(247,247,247)]"
            aria-label="Close"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 [-webkit-overflow-scrolling:touch]">
          <p className="mb-2 text-[11px] leading-snug text-tamay-muted">
            Pick a slot; the page scrolls to that banner. Planning preview only.
          </p>
          <SlotRadios
            position={position}
            onChange={handleMobilePick}
            onReselect={onReselect}
            compact
          />
        </div>
      </div>

      {/* —— sm+: floating left panel (unchanged intent) —— */}
      <aside
        className="fixed left-4 top-24 z-40 hidden max-w-[min(100vw-2rem,22rem)] border border-tamay-rule bg-white/95 p-3 text-left shadow-xl backdrop-blur-sm sm:left-6 sm:block sm:top-28 lg:top-32"
        aria-label="Banner placement preview"
      >
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.071em] text-tamay-muted">
          Banner preview
        </p>
        <p className="mb-3 text-xs leading-snug text-tamay-muted">
          Pick where your linked banner would sit on this gallery layout. This control
          panel is for planning only and would not ship on the live Tamay site.
        </p>
        <SlotRadios position={position} onChange={onChange} onReselect={onReselect} compact={false} />
        {position !== 'none' && position !== 'floating-br' && (
          <div className="mt-3 border-t border-tamay-rule pt-3">
            <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-wide text-tamay-muted">
              Mini preview
            </p>
            <div className="flex justify-center">
              <PromoBanner href={bannerHref} className="max-w-[min(100%,18rem)]" />
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
