import { forwardRef } from 'react'
import { PromoBanner } from './PromoBanner'

export const FloatingBanner = forwardRef(function FloatingBanner({ href }, ref) {
  return (
    <div
      ref={ref}
      className="fixed bottom-4 right-4 z-[55] flex w-[min(100vw-2rem,20rem)] justify-center scroll-mt-8"
    >
      <PromoBanner href={href} className="w-full" />
    </div>
  )
})
