import { ArrowUpRight } from 'lucide-react'
import { LinkedInIcon, LINKEDIN_URL } from '@/components/linkedin-icon'

export function Contact() {
  return (
    <section aria-labelledby="contact-heading" id="contact" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center md:px-8 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Contact</p>
        <h2 id="contact-heading" className="mt-2 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          {"Let's connect"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
          The best way to reach me is through LinkedIn. Feel free to send a message or connection request.
        </p>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-navy transition-colors hover:bg-white/90"
        >
          <LinkedInIcon className="size-4" />
          Message me on LinkedIn
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-white/60 sm:flex-row md:px-8">
          <p>
            {'© '}
            {new Date().getFullYear()} Turkan Aliyeva
          </p>
          <a href="#top" className="hover:text-white">
            Back to top
          </a>
        </div>
      </footer>
    </section>
  )
}
