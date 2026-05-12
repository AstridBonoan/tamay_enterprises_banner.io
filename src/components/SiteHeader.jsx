import { useState } from 'react'
import { NAV_PRIMARY } from '../data/siteContent'

function MenuIcon({ open }) {
  return (
    <span className="relative block h-3.5 w-5" aria-hidden>
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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
        <a
          href="https://tamayenterprises.com/home"
          className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl"
        >
          Tamay&nbsp;&nbsp;Enterprises
        </a>

        <nav
          className="hidden flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] font-semibold uppercase tracking-wide text-neutral-700 xl:flex xl:gap-x-5"
          aria-label="Primary"
        >
          {NAV_PRIMARY.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`whitespace-nowrap border-b-2 border-transparent pb-0.5 hover:border-neutral-900 hover:text-neutral-900 ${
                item.current ? 'border-neutral-900 text-neutral-900' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              type="button"
              className="rounded border border-neutral-200 px-2 py-1 text-xs font-medium text-neutral-800 hover:bg-neutral-50 sm:px-3"
              aria-expanded={accountOpen}
              onClick={() => setAccountOpen((v) => !v)}
            >
              Cuenta
            </button>
            {accountOpen && (
              <div className="absolute right-0 mt-1 min-w-[11rem] rounded border border-neutral-200 bg-white py-1 text-left text-sm shadow-lg">
                <div className="border-b border-neutral-100 px-3 py-2 text-xs text-neutral-500">
                  Iniciaste sesión como:
                  <div className="mt-0.5 font-medium text-neutral-800">
                    filler@godaddy.com
                  </div>
                </div>
                <a
                  href="https://tamayenterprises.com/m/bookings"
                  className="block px-3 py-2 hover:bg-neutral-50"
                >
                  Reservaciones
                </a>
                <a
                  href="https://tamayenterprises.com/m/account"
                  className="block px-3 py-2 hover:bg-neutral-50"
                >
                  Mi cuenta
                </a>
                <button
                  type="button"
                  className="block w-full px-3 py-2 text-left hover:bg-neutral-50"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            className="flex items-center gap-2 rounded border border-neutral-200 px-2 py-1 text-xs font-semibold uppercase text-neutral-800 hover:bg-neutral-50 xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon open={menuOpen} />
            <span className="hidden sm:inline">Menú</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-neutral-200 bg-white xl:hidden"
        >
          <nav className="mx-auto max-h-[70vh] max-w-6xl overflow-y-auto px-4 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-800">
            <ul className="flex flex-col gap-1">
              {NAV_PRIMARY.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`block rounded px-2 py-2 hover:bg-neutral-50 ${
                      item.current ? 'bg-neutral-100' : ''
                    }`}
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
