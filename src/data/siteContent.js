/** First row in header (matches live site + your reference). */
export const NAV_INLINE = [
  { label: 'HOME', href: 'https://tamayenterprises.com/home' },
  { label: 'CONSTRUCTION', href: 'https://tamayenterprises.com/construction' },
  { label: 'REAL ESTATE', href: 'https://tamayenterprises.com/real-estate' },
  { label: 'LOGISTICS', href: 'https://tamayenterprises.com/logistics' },
  {
    label: 'HOME PREVENTIVE SERVICES',
    href: 'https://tamayenterprises.com/home-preventive-services-1',
  },
]

/** “Más” menu — remaining primary destinations. */
export const NAV_MORE = [
  { label: 'REVIEWS', href: 'https://tamayenterprises.com/reviews' },
  { label: 'GALLERY', href: 'https://tamayenterprises.com/gallery', current: true },
  {
    label: 'ONLINE APPOINTMENTS',
    href: 'https://tamayenterprises.com/online-appointments',
  },
  {
    label: 'CAREERS & PARTNERSHIPS',
    href: 'https://tamayenterprises.com/careers-&-partnerships',
  },
  {
    label: 'ASSSEMBLY & INSTALLATION',
    href: 'https://tamayenterprises.com/asssembly-&-installation',
  },
]

export const NAV_PRIMARY = [...NAV_INLINE, ...NAV_MORE]

export const NAV_FOOTER = [
  {
    label: 'HOME PREVENTIVE SERVICES',
    href: 'https://tamayenterprises.com/home-preventive-services-1',
  },
  {
    label: 'ONLINE APPOINTMENTS',
    href: 'https://tamayenterprises.com/online-appointments',
  },
  {
    label: 'CAREERS & PARTNERSHIPS',
    href: 'https://tamayenterprises.com/careers-&-partnerships',
  },
  {
    label: 'ASSSEMBLY & INSTALLATION',
    href: 'https://tamayenterprises.com/asssembly-&-installation',
  },
]

/** Paths under `public/gallery/` — your provided screenshots. */
export const CAROUSEL_SLIDES = [
  { title: 'Complete basement Renovation', image: 'gallery/slide-01.png' },
  { title: 'Full Bathroom Renovation', image: 'gallery/slide-02.png' },
  { title: 'Co-op apartment Renovation', image: 'gallery/slide-03.png' },
  { title: 'Retaining wall', image: 'gallery/slide-04.png' },
  { title: 'Bathroom remodeling', image: 'gallery/slide-05.png' },
  { title: 'Full basement transformation', image: 'gallery/slide-06.png' },
]

export const GALLERY_PROJECT_BLOCKS = [
  {
    kind: 'twin',
    title: 'CO-OP APARTMENT RENOVATION',
    caption: 'Apartment Transformation - Bridgeport, CT',
    left: 'gallery/grid-coop-left.png',
    right: 'gallery/grid-coop-right.png',
  },
  {
    kind: 'single',
    title: 'RETAINING WALL',
    image: 'gallery/slide-04.png',
  },
  {
    kind: 'twin',
    title: 'BATHROOM REMODELING',
    caption: 'Bathroom Renovation- Wilton, CT',
    left: 'gallery/grid-bath-left.png',
    right: 'gallery/grid-bath-right.png',
  },
]

export const GALLERY_HEADINGS = [
  'Apartment Re-Layout & Renovation',
  'ADA BATHROOM CONSTRUCTION',
  'Full Home Lighting Installation',
  'Vinyl Fence Installation',
  'Bathroom Remodel',
]

export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/Tamay.Constructions',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/tamay.enterprises/',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@tamayconstruction1',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@tamayconstructions8766',
  },
]
