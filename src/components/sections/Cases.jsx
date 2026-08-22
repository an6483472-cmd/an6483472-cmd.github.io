import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import { SECTION_IDS } from '../../utils/constants'
import SectionLabel from '../common/SectionLabel'

export default function Cases() {
  return (
    <section id={SECTION_IDS.cases} className="saas-panel p-8 md:p-10">
      <SectionLabel>代表案例</SectionLabel>
      <div className="space-y-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.href}
            className="group relative block overflow-hidden rounded-2xl border border-outline-variant bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex flex-col gap-2">
              <h3 className="font-headline-md text-headline-md text-on-surface transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {project.summary}
              </p>
            </div>
            <div className="relative mt-5 hidden border-t border-outline-variant pt-5 group-hover:block">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {[
                  ['问题', project.problem],
                  ['方案', project.solution],
                  ['结果', project.result],
                ].map(([label, text]) => (
                  <div key={label}>
                    <span className="mb-2 block font-label-mono text-label-mono text-primary">
                      {label}
                    </span>
                    <p className="font-body-md text-body-md text-on-surface">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
