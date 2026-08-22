import { Link, useParams } from 'react-router-dom'
import Button from '../components/common/Button'
import Icon from '../components/common/Icon'
import SectionLabel from '../components/common/SectionLabel'
import { projects } from '../data/projects'
import { cn, getProjectById } from '../utils/helpers'

export default function WorkDetail() {
  const { workId } = useParams()
  const project = getProjectById(projects, workId)

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-margin-page">
        <div className="saas-panel p-10">
          <h1 className="font-headline-lg text-headline-lg text-on-surface">
            未找到该项目
          </h1>
          <p className="mt-4 font-body-md text-body-md text-on-surface-variant">
            该项目不存在，或已被移动。
          </p>
          <div className="mt-8">
            <Button to="/works" variant="secondary">
              返回作品列表
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 pb-16 md:px-margin-page">
      <div className="mb-6">
        <Link
          to="/works"
          className="inline-flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant transition-colors hover:text-primary"
        >
          <Icon name="arrow_back" className="text-sm" />
          返回作品
        </Link>
      </div>

      <header className="saas-panel mb-8 p-8 md:p-10">
        <SectionLabel>案例详情</SectionLabel>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="mb-4 font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
              {project.title}
            </h1>
            <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              {project.detailSummary}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-xl border border-outline-variant bg-muted/50 px-4 py-3">
              <span className="mb-1 block font-label-mono text-label-mono text-on-surface-variant">
                角色
              </span>
              <span className="block font-label-sm text-label-sm text-on-surface">
                {project.role}
              </span>
            </div>
            <div className="rounded-xl border border-outline-variant bg-muted/50 px-4 py-3">
              <span className="mb-1 block font-label-mono text-label-mono text-on-surface-variant">
                周期
              </span>
              <span className="block font-label-sm text-label-sm text-on-surface">
                {project.timeline}
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="mb-2 font-headline-md text-headline-md text-on-surface">
            背景与问题
          </h2>
          <div className="mb-4 h-1 w-10 rounded-full bg-accent-gradient" />
        </div>
        <div className="md:col-span-8">
          <div className="saas-card space-y-4 p-6">
            <p className="font-body-md text-body-md">{project.context}</p>
            <ul className="space-y-3">
              {project.challenges.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-3 rounded-xl bg-muted/50 p-3"
                >
                  <Icon name="warning" className="mt-0.5 text-lg text-error" />
                  <span className="font-body-md text-body-md">
                    <strong>{item.title}:</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="mb-2 font-headline-md text-headline-md text-on-surface">
            方法论
          </h2>
          <div className="mb-4 h-1 w-10 rounded-full bg-accent-gradient" />
          <p className="font-label-mono text-label-mono text-on-surface-variant">
            系统化的智能能力集成。
          </p>
        </div>
        <div className="relative space-y-4 pl-6 md:col-span-8">
          {project.phases.map((phase) => (
            <div
              key={phase.title}
              className="data-node-line data-node-dot relative"
            >
              <div className="saas-card overflow-hidden">
                <div className="border-b border-outline-variant bg-muted/50 px-4 py-3">
                  <span className="font-label-mono text-label-mono text-primary">
                    {phase.title}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {phase.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-6 font-headline-md text-headline-md text-on-surface">
          架构与方案
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {project.figures.map((figure) => (
            <div key={figure.caption} className="saas-card p-3">
              <div className="flex h-64 w-full items-center justify-center rounded-xl border border-dashed border-outline-variant bg-muted/40">
                <span className="px-4 text-center font-label-mono text-label-mono text-on-surface-variant">
                  示意图占位
                </span>
              </div>
              <p className="mt-3 px-2 font-label-mono text-label-mono text-on-surface-variant">
                {figure.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="mb-2 font-headline-md text-headline-md text-on-surface">
            成果影响
          </h2>
          <div className="mb-4 h-1 w-10 rounded-full bg-accent-gradient" />
        </div>
        <div className="flex flex-col gap-4 md:col-span-8 md:flex-row">
          {project.impact.map((metric) => (
            <div
              key={metric.label}
              className="saas-card flex flex-1 flex-col p-6"
            >
              <span className="mb-2 font-label-mono text-label-mono text-on-surface-variant">
                {metric.label}
              </span>
              <span
                className={cn(
                  'mb-1 font-headline-lg text-headline-lg text-gradient',
                )}
              >
                {metric.value}
              </span>
              <p className="mt-3 w-full border-t border-outline-variant pt-3 font-label-sm text-label-sm text-on-surface-variant">
                {metric.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex items-center justify-center rounded-2xl border border-dashed border-outline-variant bg-muted/40 p-8">
        <span className="font-label-mono text-label-mono text-on-surface-variant">
          补充指标占位
        </span>
      </div>
    </div>
  )
}
