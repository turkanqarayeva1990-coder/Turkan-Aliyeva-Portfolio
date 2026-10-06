export function SectionHeading({ id, eyebrow, title }: { id: string; eyebrow: string; title: string }) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl">
        {title}
      </h2>
      <div aria-hidden="true" className="mt-4 h-1 w-12 rounded-full bg-navy" />
    </div>
  )
}
