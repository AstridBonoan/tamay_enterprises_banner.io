import { useState, useRef, useEffect } from 'react'
import { LOGO_SRC, LOGO_SRCSET } from '../data/brand'
import { NAV_INLINE, NAV_MORE } from '../data/siteContent'

function MenuIcon({ open }) {
  return (
    <span className="relative block h-3 w-5 text-[#1a1a1a]" aria-hidden>
      <span
        className={`absolute left-0 top-0 block h-0.5 w-full bg-current transition ${
          open ? 'translate-y-1.5 rotate-45' : ''
        }`}
      />
      <span
        className={`absolute left-0 top-1.5 block h-0.5 w-full bg-current transition ${
          open ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`absolute left-0 top-3 block h-0.5 w-full bg-current transition ${
          open ? '-translate-y-1.5 -rotate-45' : ''
        }`}
      />
    </span>
  )
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      <path d="M6 6h15l-1.5 9h-12z" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.056 8.255a4.254 4.254 0 1 1-8.507 0 4.254 4.254 0 0 1 8.507 0zm3.052 11.71H4.496a.503.503 0 0 1-.46-.693 8.326 8.326 0 0 1 7.766-5.328 8.326 8.326 0 0 1 7.766 5.328.503.503 0 0 1-.46.694z"
      />
    </svg>
  )
}

const link =
  'whitespace-nowrap px-1 py-1.5 text-[12px] font-normal uppercase tracking-[0.06em] text-[#3a3a3a] no-underline hover:text-black sm:text-[13px]'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const moreRef = useRef(null)

  useEffect(() => {
    function onDoc(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4">
        <a
          href="https://tamayenterprises.com/home"
          className="inline-flex shrink-0 items-center"
          title="Tamay  Enterprises"
        >
          <img
            src={LOGO_SRC}
            srcSet={LOGO_SRCSET}
            alt="Tamay  Enterprises"
            className="h-[56px] w-auto object-contain sm:h-[72px] lg:h-[86px]"
            width={200}
            height={86}
          />
        </a>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-1 lg:flex xl:gap-2"
          aria-label="Primary"
        >
          {NAV_INLINE.map((item) => (
            <a key={item.label} href={item.href} className={link}>
              {item.label}
            </a>
          ))}

          <div className="relative shrink-0" ref={moreRef}>
            <button
              type="button"
              className={`${link} inline-flex items-center gap-0.5`}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={(e) => {
                e.stopPropagation()
                setMoreOpen((v) => !v)
              }}
            >
              Más
              <svg
                viewBox="0 0 24 24"
                className={`h-3.5 w-3.5 transition ${moreOpen ? 'rotate-180' : ''}`}
                fill="currentColor"
                aria-hidden
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </button>
            {moreOpen && (
              <ul
                className="absolute right-0 top-full z-30 mt-1 min-w-[14rem] border border-[#e5e5e5] bg-white py-1 shadow-lg"
                role="menu"
              >
                {NAV_MORE.map((item) => (
                  <li key={item.label} role="none">
                    <a
                      role="menuitem"
                      href={item.href}
                      className={`block px-4 py-2.5 text-sm uppercase tracking-wide text-[#3a3a3a] no-underline hover:bg-[#f7f7f7] ${
                        item.current ? 'font-bold text-tamay' : 'font-normal'
                      }`}
                      onClick={() => setMoreOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <a
            href="https://tamayenterprises.com/m/bookings"
            className="ml-2 flex h-10 w-10 shrink-0 items-center justify-center text-[#1a1a1a] no-underline hover:opacity-70"
            aria-label="Reservaciones"
          >
            <CartIcon />
          </a>

          <div className="relative shrink-0">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-[#1a1a1a] hover:opacity-70"
              aria-expanded={accountOpen}
              aria-haspopup="true"
              aria-label="Cuenta"
              onClick={() => setAccountOpen((v) => !v)}
            >
              <UserIcon />
            </button>
            {accountOpen && (
              <div className="absolute right-0 z-30 mt-1 min-w-[12rem] border border-[#e5e5e5] bg-white py-1 text-left shadow-lg">
                <div className="border-b border-[#eee] px-3 py-2 text-xs text-[#666]">
                  Iniciaste sesión como:
                  <div className="mt-0.5 font-medium text-[#1a1a1a]">
                    filler@godaddy.com
                  </div>
                </div>
                <a
                  href="https://tamayenterprises.com/m/bookings"
                  className="block px-3 py-2 text-sm text-[#1a1a1a] hover:bg-[#f7f7f7]"
                >
                  Reservaciones
                </a>
                <a
                  href="https://tamayenterprises.com/m/account"
                  className="block px-3 py-2 text-sm text-[#1a1a1a] hover:bg-[#f7f7f7]"
                >
                  Mi cuenta
                </a>
                <button
                  type="button"
                  className="block w-full px-3 py-2 text-left text-sm text-[#1a1a1a] hover:bg-[#f7f7f7]"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Menú"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-[#e5e5e5] bg-white lg:hidden">
          <nav className="mx-auto max-h-[80vh] max-w-[1440px] overflow-y-auto px-4 py-3">
            <ul>
              {[...NAV_INLINE, ...NAV_MORE].map((item) => (
                <li key={item.label} className="border-b border-[#eee]">
                  <a
                    href={item.href}
                    className={`block py-3 text-[17px] uppercase tracking-wide text-[#1a1a1a] no-underline ${
                      item.current ? 'font-bold text-tamay' : 'font-normal'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
