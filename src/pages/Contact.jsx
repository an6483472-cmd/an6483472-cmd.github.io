import Button from '../components/common/Button'
import Icon from '../components/common/Icon'
import SectionLabel from '../components/common/SectionLabel'
import { site } from '../data/site'
import { cn } from '../utils/helpers'

const channels = [
  {
    id: 'email',
    label: '邮箱',
    value: site.email,
    href: `mailto:${site.email}`,
    note: '正式沟通首选',
    icon: 'mail',
  },
  {
    id: 'phone',
    label: '手机 / 微信',
    value: site.phone,
    href: `tel:${site.phone}`,
    note: '同微信号，紧急事项可用',
    icon: 'phone',
  },
]

const topics = [
  {
    title: 'ToB AI 产品协作',
    text: '复杂业务场景下的 AI 产品方案、Agent 架构与落地节奏对齐。',
  },
  {
    title: '文档 / 知识智能化',
    text: '文档提效、知识底座、评测体系与数据飞轮相关交流。',
  },
  {
    title: '机会沟通',
    text: 'AI 产品经理相关机会、项目咨询或合作意向。',
  },
]

export default function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 pb-16 md:px-margin-page">
      <header className="saas-panel p-8 md:p-10">
        <SectionLabel>联系</SectionLabel>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1 className="mb-3 font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
              发起联系
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {site.contactIntro}
            </p>
            <p className="mt-3 font-body-md text-body-md text-on-surface-variant">
              {site.contactNote}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`} className="h-11 px-5">
              发送邮件
            </Button>
            <Button
              href={`tel:${site.phone}`}
              variant="secondary"
              className="h-11 px-5"
            >
              电话联系
            </Button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="saas-card overflow-hidden p-0">
            <div className="aspect-[4/5] w-full">
              <img
                src={site.portraitHref}
                alt={`${site.name} 照片`}
                className="h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="space-y-1 border-t border-outline-variant p-5">
              <p className="font-headline-md text-headline-md text-on-surface">
                {site.name}
              </p>
              <p className="font-label-mono text-label-mono tracking-wide text-primary">
                {site.roleLine}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {site.org}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {site.focus}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:col-span-8">
          <section>
            <h2 className="mb-2 font-headline-md text-headline-md text-on-surface">
              联系方式
            </h2>
            <div className="mb-4 h-1 w-10 rounded-full bg-accent-gradient" />
            <div className="overflow-hidden rounded-2xl border border-outline-variant bg-card">
              {channels.map((channel, index) => (
                <a
                  key={channel.id}
                  href={channel.href}
                  className={cn(
                    'group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-muted/50 md:px-6',
                    index > 0 && 'border-t border-outline-variant',
                  )}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-on-primary shadow-[var(--shadow-accent)]">
                    <Icon name={channel.icon} className="text-[18px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="mb-1 block font-label-mono text-label-mono tracking-wide text-on-surface-variant">
                      {channel.label}
                    </span>
                    <span className="block break-all font-headline-md text-[1.15rem] text-on-surface transition-colors group-hover:text-primary md:text-headline-md">
                      {channel.value}
                    </span>
                    <span className="mt-1 block font-label-sm text-label-sm text-on-surface-variant">
                      {channel.note}
                    </span>
                  </div>
                  <Icon
                    name="arrow_outward"
                    className="shrink-0 text-on-surface-variant transition-colors group-hover:text-primary"
                  />
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-2 font-headline-md text-headline-md text-on-surface">
              可以聊什么
            </h2>
            <div className="mb-4 h-1 w-10 rounded-full bg-accent-gradient" />
            <div className="overflow-hidden rounded-2xl border border-outline-variant bg-card">
              {topics.map((topic, index) => (
                <div
                  key={topic.title}
                  className={cn(
                    'px-5 py-5 md:px-6',
                    index > 0 && 'border-t border-outline-variant',
                  )}
                >
                  <h3 className="mb-1 font-label-sm text-label-sm font-medium text-on-surface">
                    {topic.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {topic.text}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
