import { assetUrl } from '../utils/publicPath'

export function VideoPoster({ image, alt = '' }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-md">
      <img
        src={assetUrl(image)}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-black/30"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg sm:h-16 sm:w-16"
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            className="ml-0.5 h-7 w-7 text-[#111]"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </div>
  )
}
