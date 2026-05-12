/**
 * Centered serif section title + rule (matches gallery project blocks on live site).
 */
export function SectionHeading({ title }) {
  return (
    <header className="mb-8 text-center sm:mb-10">
      <h2 className="font-display text-[clamp(1.15rem,2.5vw,1.5rem)] font-normal uppercase leading-snug tracking-[0.12em] text-tamay">
        {title}
      </h2>
      <hr className="mx-auto mt-4 max-w-[10rem] border-0 border-b border-[#d0d0d0]" />
    </header>
  )
}
