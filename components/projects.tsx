import { ClipboardCheck, Images, MessageSquareText, Code } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    icon: MessageSquareText,
    category: 'AI Evaluation',
    title: 'AI-Generated Content Review',
    description: 'Reviewing AI-generated content as part of AI evaluation projects.',
  },
  {
    icon: Images,
    category: 'Data Annotation',
    title: 'Image Comparisons',
    description: 'Comparing images as part of data annotation and AI evaluation work.',
  },
  {
    icon: ClipboardCheck,
    category: 'Quality',
    title: 'Quality Assessment',
    description: 'Assessing quality as part of AI evaluation and data annotation projects.',
  },
  {
    icon: Code,
    category: 'Frontend',
    title: 'Personal Portfolio Website',
    description: 'This one-page portfolio, built as part of my journey into frontend development.',
  },
]

export function Projects() {
  return (
    <section
      aria-labelledby="projects-heading"
      id="projects"
      className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28"
    >
      <SectionHeading id="projects-heading" eyebrow="Projects" title="Work I've contributed to" />
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map(({ icon: Icon, category, title, description }) => (
          <li
            key={title}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-11 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-navy">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
