import { FloatingBanner } from './components/FloatingBanner'

/** Project cost estimator — CTA target for the floating banner. */
const BANNER_HREF = 'https://estimator.tamayenterprises.com/'

export default function App() {
  return (
    <div className="min-h-svh bg-neutral-100 text-tamay-ink antialiased">
      <FloatingBanner href={BANNER_HREF} />
    </div>
  )
}
