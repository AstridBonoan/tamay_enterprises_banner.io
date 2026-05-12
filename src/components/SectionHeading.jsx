/**
 * Matches GoDaddy “HeadingBeta” blocks: Cinzel ~28px, brand blue, centered, HR below.
 */
export function SectionHeading({ title }) {
  return (
    <header className="mb-10 text-center">
      <h2 className="font-cinzel text-[28px] font-normal leading-[1.4] text-tamay">
        {title}
      </h2>
      <hr className="mx-auto mt-6 max-w-[min(100%,28rem)] border-0 border-b-2 border-tamay-rule" />
    </header>
  )
}
