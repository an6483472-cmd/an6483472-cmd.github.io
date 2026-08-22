import { useState } from 'react'
import Icon from '../components/common/Icon'
import SectionLabel from '../components/common/SectionLabel'
import { site } from '../data/site'
import { copyText } from '../utils/helpers'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  async function handleCopyWechat() {
    const ok = await copyText(site.wechat)
    if (!ok) return
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 pb-16 md:flex-row md:px-margin-page">
      <div className="flex w-full flex-col gap-6 md:w-1/3">
        <div className="saas-card flex aspect-[3/4] w-full items-center justify-center">
          <span className="px-4 text-center font-label-mono text-label-mono text-on-surface-variant">
            照片占位
            <span className="mt-2 block text-[10px] opacity-70">
              （按要求不生成真实头像）
            </span>
          </span>
        </div>
        <div>
          <SectionLabel>联系</SectionLabel>
          <h1 className="mb-3 font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
            发起联系
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {site.contactIntro}
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 md:w-2/3">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="group saas-card flex min-h-[170px] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl">
            <div className="mb-4 flex items-center justify-between border-b border-outline-variant pb-3">
              <span className="font-label-mono text-label-mono tracking-wider text-on-surface">
                工作邮箱
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient text-on-primary shadow-[var(--shadow-accent)]">
                <Icon name="mail" className="text-[18px]" />
              </div>
            </div>
            <div>
              <a
                href={`mailto:${site.email}`}
                className="break-all font-headline-md text-headline-md text-on-surface transition-colors hover:text-primary"
              >
                {site.email}
              </a>
              <p className="mt-2 font-label-sm text-label-sm text-on-surface-variant">
                正式沟通首选：{site.email}
                {site.phone ? ` · 电话 ${site.phone}` : ''}
              </p>
            </div>
          </div>

          <div className="group saas-card flex min-h-[170px] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl">
            <div className="mb-4 flex items-center justify-between border-b border-outline-variant pb-3">
              <span className="font-label-mono text-label-mono tracking-wider text-on-surface">
                微信号
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient text-on-primary shadow-[var(--shadow-accent)]">
                <Icon name="chat_bubble" className="text-[18px]" />
              </div>
            </div>
            <div>
              <button
                type="button"
                onClick={handleCopyWechat}
                className="cursor-pointer text-left font-headline-md text-headline-md text-on-surface transition-colors hover:text-primary"
              >
                {site.wechat}
              </button>
              <p className="mt-2 font-label-sm text-label-sm text-on-surface-variant">
                {copied ? '已复制。' : '点击复制微信号。'}
              </p>
            </div>
          </div>

          <div className="group saas-card flex min-h-[170px] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-xl md:col-span-2">
            <div className="mb-4 flex items-center justify-between border-b border-outline-variant pb-3">
              <span className="font-label-mono text-label-mono tracking-wider text-on-surface">
                代码仓库
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient text-on-primary shadow-[var(--shadow-accent)]">
                <Icon name="code" className="text-[18px]" />
              </div>
            </div>
            <div>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 font-headline-md text-headline-md text-on-surface transition-colors hover:text-primary"
              >
                {site.githubLabel}
                <Icon name="arrow_outward" className="text-[18px]" />
              </a>
              <p className="mt-2 font-label-sm text-label-sm text-on-surface-variant">
                查看系统架构与实验性项目。
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-outline-variant bg-muted/50 p-5">
          <p className="font-body-md text-body-md text-on-surface-variant">
            {site.contactNote}
          </p>
        </div>
      </div>
    </div>
  )
}
