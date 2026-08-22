import { useEffect, useState } from 'react'
import SectionLabel from '../components/common/SectionLabel'
import { about } from '../data/about'
import { cn } from '../utils/helpers'

export default function About() {
  const [activeId, setActiveId] = useState(about.index[0].id)

  useEffect(() => {
    const elements = about.index
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.15, 0.4] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 md:px-margin-page">
      <header className="saas-panel p-8 md:p-10">
        <SectionLabel>关于</SectionLabel>
        <h1 className="mb-4 font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
          {about.title}
        </h1>
        <p className="max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
          {about.summary}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <aside className="hidden md:col-span-3 md:block">
          <div className="sticky top-[120px] flex flex-col gap-3">
            {about.index.map((item) => {
              const active = activeId === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    'rounded-xl border px-4 py-3 transition-all',
                    active
                      ? 'border-primary/30 bg-primary/5 shadow-sm'
                      : 'border-transparent opacity-60 hover:opacity-100',
                  )}
                >
                  <span
                    className={cn(
                      'mb-1 block font-label-mono text-label-mono',
                      active ? 'text-primary' : 'text-on-surface-variant',
                    )}
                  >
                    {item.number}
                  </span>
                  <span className="font-label-sm text-label-sm tracking-wider text-on-surface uppercase">
                    {item.label}
                  </span>
                </a>
              )
            })}
          </div>
        </aside>

        <div className="flex flex-col gap-8 md:col-span-9">
          <section id="experience" className="saas-panel p-8">
            <h2 className="mb-6 font-label-mono text-label-mono tracking-[0.15em] text-primary uppercase">
              01 — 职业时间线
            </h2>
            <div className="flex flex-col gap-6 rounded-xl border border-outline-variant bg-muted/40 p-5 md:flex-row">
              <div className="md:w-1/4">
                <span className="block font-label-mono text-label-mono text-on-surface">
                  {about.experience.period}
                </span>
                <span className="mt-1 block font-label-sm text-label-sm text-on-surface-variant">
                  {about.experience.org}
                </span>
              </div>
              <div className="flex flex-col gap-2 md:w-3/4">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {about.experience.role}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {about.experience.description}
                </p>
              </div>
            </div>
          </section>

          <section id="education" className="saas-panel p-8">
            <h2 className="mb-6 font-label-mono text-label-mono tracking-[0.15em] text-primary uppercase">
              02 — 学术基础
            </h2>
            <div className="flex flex-col gap-6 rounded-xl border border-outline-variant bg-muted/40 p-5 md:flex-row">
              <div className="md:w-1/4">
                <span className="block font-label-mono text-label-mono text-on-surface">
                  {about.education.city}
                </span>
                <span className="mt-1 block font-label-sm text-label-sm text-on-surface-variant">
                  {about.education.country}
                </span>
              </div>
              <div className="flex flex-col gap-2 md:w-3/4">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  {about.education.school}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {about.education.description}
                </p>
              </div>
            </div>
          </section>

          <section id="honors" className="saas-panel p-8">
            <h2 className="mb-6 font-label-mono text-label-mono tracking-[0.15em] text-primary uppercase">
              03 — 关键指标与荣誉
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {about.metrics.map((metric) => (
                <div
                  key={metric.id}
                  className="flex flex-col gap-3 rounded-2xl border border-outline-variant bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="font-label-mono text-label-mono text-primary">
                    {metric.label}
                  </span>
                  <span className="font-headline-md text-headline-md text-on-surface">
                    {metric.value}
                  </span>
                  <div className="mt-auto border-t border-outline-variant pt-3">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {metric.note}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
