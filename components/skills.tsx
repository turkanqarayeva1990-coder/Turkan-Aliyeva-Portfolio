import { SectionHeading } from '@/components/section-heading'

const skillGroups = [
  {
    title: 'AI & Data',
    skills: ['AI Evaluation', 'Data Annotation', 'Reviewing AI-Generated Content', 'Image Comparison', 'Quality Assessment'],
  },
  {
    title: 'Education',
    skills: ['Educational Background'],
  },
  {
    title: 'Technology',
    skills: ['Frontend Development (in progress)'],
  },
]

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" id="skills" className="bg-secondary">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading id="skills-heading" eyebrow="Skills" title="What I bring" />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-navy">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
