export function CookieBanner({ visible, onAccept }) {
  if (!visible) return null
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] border-t border-neutral-200 bg-white p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] sm:p-5"
      role="dialog"
      aria-label="Cookies"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-left text-sm text-neutral-700">
          <h4 className="text-base font-semibold text-neutral-900">
            Este sitio web utiliza cookies
          </h4>
          <p className="mt-1 max-w-3xl leading-relaxed">
            Usamos cookies para analizar el tráfico del sitio web y optimizar tu
            experiencia en el sitio. Al aceptar nuestro uso de cookies, tus datos se
            agruparán con los datos de todos los demás usuarios.
          </p>
        </div>
        <button
          type="button"
          onClick={onAccept}
          className="shrink-0 rounded bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
