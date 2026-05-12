import { useState } from 'react'
import { LOGO_SRC, LOGO_SRCSET } from '../data/brand'
import { NAV_PRIMARY } from '../data/siteContent'

function MenuIcon({ open }) {
  return (
    <span className="relative block h-3 w-5 text-tamay" aria-hidden>
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

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-9 w-9"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.056 8.255a4.254 4.254 0 1 1-8.507 0 4.254 4.254 0 0 1 8.507 0zm3.052 11.71H4.496a.503.503 0 0 1-.46-.693 8.326 8.326 0 0 1 7.766-5.328 8.326 8.326 0 0 1 7.766 5.328.503.503 0 0 1-.46.694z"
      />
    </svg>
  )
}

const navLinkClass =
  'px-1.5 py-1.5 text-[14px] font-normal uppercase tracking-[0.071em] text-tamay-ink no-underline transition hover:opacity-80'
const navLinkActive = 'font-bold'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-tamay-rule bg-white">
      <section className="px-4 py-6 lg:px-6 lg:py-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex items-center justify-between gap-4 lg:hidden">
            <a
              href="https://tamayenterprises.com/home"
              className="inline-flex shrink-0"
              title="Tamay  Enterprises"
            >
              <img
                src={LOGO_SRC}
                srcSet={LOGO_SRCSET}
                alt="Tamay  Enterprises"
                className="h-[72px] w-auto max-w-[min(70vw,280px)] object-contain sm:h-[98px]"
                width={200}
                height={98}
              />
            </a>
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center text-tamay"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label="Hamburger Site Navigation Icon"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:gap-8">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <a
                href="https://tamayenterprises.com/home"
                className="inline-flex shrink-0"
                title="Tamay  Enterprises"
              >
                <img
                  src={LOGO_SRC}
                  srcSet={LOGO_SRCSET}
                  alt="Tamay  Enterprises"
                  className="h-[98px] w-auto object-contain"
                  width={220}
                  height={98}
                />
              </a>
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center justify-center text-tamay"
                  aria-expanded={accountOpen}
                  aria-haspopup="true"
                  aria-label="Cuenta"
                  onClick={() => setAccountOpen((v) => !v)}
                >
                  <UserIcon />
                </button>
                {accountOpen && (
                  <div className="absolute right-0 z-20 mt-2 min-w-[12rem] rounded-sm border border-tamay-rule bg-white py-1 text-left shadow-lg">
                    <div className="border-b border-tamay-rule px-3 py-2 text-sm text-tamay-muted">
                      Iniciaste sesión como:
                      <div className="mt-0.5 font-normal text-tamay-ink">
                        filler@godaddy.com
                      </div>
                    </div>
                    <a
                      href="https://tamayenterprises.com/m/bookings"
                      className="block px-3 py-2 text-sm text-tamay-ink hover:bg-[rgb(247,247,247)]"
                    >
                      Reservaciones
                    </a>
                    <a
                      href="https://tamayenterprises.com/m/account"
                      className="block px-3 py-2 text-sm text-tamay-ink hover:bg-[rgb(247,247,247)]"
                    >
                      Mi cuenta
                    </a>
                    <button
                      type="button"
                      className="block w-full px-3 py-2 text-left text-sm text-tamay-ink hover:bg-[rgb(247,247,247)]"
                    >
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
            </div>

            <nav
              className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-1 border-t border-tamay-rule pt-6"
              aria-label="Primary"
            >
              {NAV_PRIMARY.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${navLinkClass} ${item.current ? navLinkActive : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-tamay-rule bg-white lg:hidden"
        >
          <nav className="mx-auto max-h-[70vh] max-w-[1280px] overflow-y-auto px-4 py-4">
            <ul className="flex flex-col">
              {NAV_PRIMARY.map((item) => (
                <li key={item.label} className="border-b border-tamay-rule">
                  <a
                    href={item.href}
                    className={`block py-3 text-[22px] font-normal leading-snug text-tamay-ink no-underline ${
                      item.current ? 'font-bold text-tamay' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-normal text-tamay-muted">Cuenta</p>
            <ul className="mt-2 flex flex-col border-t border-tamay-rule">
              <li className="border-b border-tamay-rule">
                <a
                  href="https://tamayenterprises.com/m/bookings"
                  className="block py-3 text-[22px] text-tamay-ink no-underline"
                >
                  Reservaciones
                </a>
              </li>
              <li className="border-b border-tamay-rule">
                <a
                  href="https://tamayenterprises.com/m/account"
                  className="block py-3 text-[22px] text-tamay-ink no-underline"
                >
                  Mi cuenta
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
