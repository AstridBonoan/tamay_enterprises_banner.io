import { PromoBanner } from './PromoBanner'

/** Bottom offset = typical chat FAB inset + h-14 (3.5rem) + gap so the banner sits above the widget. */
export function FloatingBanner({ href }) {
  return (
    <div className="fixed bottom-[calc(1rem+3.5rem+0.75rem)] right-4 z-[55] flex h-[min(18rem,calc(100vw-2rem),38vmin,min(50dvh,calc(100dvh-8rem)))] w-[min(18rem,calc(100vw-2rem),38vmin,min(50dvh,calc(100dvh-8rem)))] max-w-[calc(100vw-2rem)] justify-center sm:bottom-[calc(1.5rem+3.5rem+0.75rem)] sm:right-6">
      <PromoBanner href={href} className="h-full min-h-0 w-full" />
    </div>
  )
}
