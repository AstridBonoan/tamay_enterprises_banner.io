import { forwardRef } from 'react'
import { PromoBanner } from './PromoBanner'

export const FloatingBanner = forwardRef(function FloatingBanner({ href }, ref) {
  return (
    <div
      ref={ref}
      className="fixed bottom-[calc(1rem+3.5rem+0.75rem)] right-4 z-[55] flex w-[min(100vw-2rem,20rem)] justify-center scroll-mt-8 sm:bottom-[calc(1.5rem+3.5rem+0.75rem)] sm:right-6"
    >
      <PromoBanner href={href} className="w-full" />
    </div>
  )
})
