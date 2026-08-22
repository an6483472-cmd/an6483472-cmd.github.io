import { Link } from 'react-router-dom'
import Icon from '../components/common/Icon'
import SectionLabel from '../components/common/SectionLabel'
import { projects, worksPage } from '../data/projects'

export default function Works() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 pb-16 md:px-margin-page">
      <header className="saas-panel p-8 md:p-10">
        <SectionLabel>作品</SectionLabel>
        <h1 className="mb-4 font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
          {worksPage.title}
        </h1>
        <p className="max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
          {worksPage.summary}
        </p>
      </header>

      <section className="flex flex-col gap-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group saas-card flex flex-col gap-6 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl md:flex-row md:items-center md:p-8"
          >
            <div className="flex flex-col gap-3 md:w-1/3">
              <h2 className="font-headline-md text-headline-md text-on-surface transition-colors group-hover:text-primary">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-outline-variant bg-muted px-3 py-1 font-label-mono text-label-mono text-on-surface-variant"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <p className="border-l-2 border-primary/30 pl-5 font-body-md text-body-md text-on-surface-variant">
                {project.blurb}
              </p>
            </div>

            <div className="md:w-1/6 md:text-right">
              <Link
                to={project.href}
                className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary transition-all group-hover:gap-3"
              >
                查看详情
                <Icon name="arrow_forward" className="text-[16px]" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
