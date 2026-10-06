import { ArrowRight } from 'lucide-react'
import { LinkedInIcon, LINKEDIN_URL } from '@/components/linkedin-icon'

const roles = ['AI Research Contributor', 'Data Annotation Specialist', 'Aspiring Frontend Developer']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div className="relative mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-32">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/60">Portfolio</p>
        <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Turkan Aliyeva
        </h1>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Roles">
          {roles.map((role) => (
            <li
              key={role}
              className="rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-sm font-medium text-white/90"
            >
              {role}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
          Working on AI evaluation and data annotation, with a background in education and a growing focus on
          frontend development.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
          >
            View my work
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <LinkedInIcon className="size-4" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
