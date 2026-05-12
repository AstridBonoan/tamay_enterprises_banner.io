export function CookieBanner({ visible, onAccept }) {
  if (!visible) return null
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-tamay-rule bg-white p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] sm:p-5"
      role="dialog"
      aria-label="Cookies"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-left text-base font-normal leading-normal text-tamay-muted">
          <h4 className="text-base font-semibold text-tamay-ink">
            Este sitio web utiliza cookies
          </h4>
          <p className="mt-2 max-w-3xl">
            Usamos cookies para analizar el tráfico del sitio web y optimizar tu
            experiencia en el sitio. Al aceptar nuestro uso de cookies, tus datos se
            agruparán con los datos de todos los demás usuarios.
          </p>
        </div>
        <button
          type="button"
          onClick={onAccept}
          className="shrink-0 border-0 bg-tamay px-8 py-2.5 text-sm font-normal uppercase tracking-[0.071em] text-white transition hover:bg-tamay-hover"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
