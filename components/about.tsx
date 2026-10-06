import { Brain, GraduationCap, Code } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  { icon: Brain, title: 'AI Evaluation', text: 'AI evaluation and data annotation projects' },
  { icon: GraduationCap, title: 'Education', text: 'Background in education' },
  { icon: Code, title: 'Frontend', text: 'Currently building frontend development skills' },
]

export function About() {
  return (
    <section aria-labelledby="about-heading" id="about" className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
      <SectionHeading id="about-heading" eyebrow="About Me" title="Hello, I'm Turkan" />
      <div className="grid gap-10 md:grid-cols-5 md:gap-12">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          <p>
            I have experience working on AI evaluation and data annotation projects, reviewing AI-generated content,
            image comparisons, and quality assessment.
          </p>
          <p>
            I also have a background in education and am currently building my skills in technology and frontend
            development.
          </p>
        </div>
        <ul className="flex flex-col gap-4 md:col-span-2">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-navy">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold text-navy">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
