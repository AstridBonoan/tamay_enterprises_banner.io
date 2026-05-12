import { PromoBanner } from './PromoBanner'

export function FloatingBanner({ href }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex h-[min(18rem,calc(100vw-2rem),38vmin,min(50dvh,calc(100dvh-8rem)))] w-[min(18rem,calc(100vw-2rem),38vmin,min(50dvh,calc(100dvh-8rem)))] max-w-[calc(100vw-2rem)] justify-center sm:bottom-6 sm:right-6">
      <PromoBanner href={href} className="h-full min-h-0 w-full" />
    </div>
  )
}
