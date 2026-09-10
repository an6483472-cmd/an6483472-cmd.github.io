import { useEffect, useRef, useState } from 'react'
import { about } from '../../data/about'
import { SECTION_IDS } from '../../utils/constants'
import { cn } from '../../utils/helpers'
import SectionLabel from '../common/SectionLabel'

export default function Methodology() {
  const sectionRef = useRef(null)
  const inViewRef = useRef(false)
  const [strengthIndex, setStrengthIndex] = useState(0)
  const [fadeKey, setFadeKey] = useState(0)

  const strengths = about.strengths
  const activeStrength = strengths[strengthIndex]

  const goStrength = (next) => {
    setStrengthIndex((current) => {
      const target = typeof next === 'function' ? next(current) : next
      return (target + strengths.length) % strengths.length
    })
    setFadeKey((key) => key + 1)
  }

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting
      },
      { threshold: 0.25 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!inViewRef.current) return

      const tag = event.target?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || event.target?.isContentEditable) {
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goStrength((current) => current + 1)
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goStrength((current) => current - 1)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section
      ref={sectionRef}
      id={SECTION_IDS.methodology}
      className="saas-panel p-8 md:p-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <SectionLabel>核心优势</SectionLabel>
        <p className="font-label-mono text-[0.7rem] tracking-wide text-on-surface-variant">
          ← → 切换要点
        </p>
      </div>

      {about.thesis ? (
        <p className="mb-6 max-w-3xl border-l-2 border-primary/40 pl-4 font-body-md text-body-md text-on-surface">
          {about.thesis}
        </p>
      ) : null}

      <div className="mb-6 flex flex-wrap gap-2">
        {strengths.map((item, index) => {
          const active = index === strengthIndex
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => goStrength(index)}
              className={cn(
                'rounded-xl border px-4 py-2.5 text-left transition-all duration-200',
                active
                  ? 'border-primary/40 bg-primary/5 shadow-sm'
                  : 'border-outline-variant bg-card opacity-70 hover:opacity-100',
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
              <span className="font-label-sm text-label-sm text-on-surface">
                {item.title}
              </span>
            </button>
          )
        })}
      </div>

      <div
        key={fadeKey}
        className="animate-fade-in rounded-2xl border border-outline-variant bg-muted/40 p-6 md:p-8"
      >
        <h3 className="mb-3 font-headline-md text-headline-md text-on-surface">
          {activeStrength.title}
        </h3>
        <p className="mb-5 max-w-2xl font-body-lg text-body-lg text-on-surface">
          {activeStrength.summary}
        </p>
        <div className="border-t border-outline-variant pt-5">
          <span className="mb-2 block font-label-mono text-label-mono tracking-wide text-primary">
            项目佐证 · AI 文档提效平台
          </span>
          <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">
            {activeStrength.evidence}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => goStrength((current) => current - 1)}
          className="rounded-xl border border-outline-variant px-4 py-2 font-label-sm text-label-sm text-on-surface transition-all hover:border-primary/30 hover:bg-muted"
        >
          上一点
        </button>
        <span className="font-label-mono text-label-mono text-on-surface-variant">
          {String(strengthIndex + 1).padStart(2, '0')} /{' '}
          {String(strengths.length).padStart(2, '0')}
        </span>
        <button
          type="button"
          onClick={() => goStrength((current) => current + 1)}
          className="rounded-xl border border-outline-variant px-4 py-2 font-label-sm text-label-sm text-on-surface transition-all hover:border-primary/30 hover:bg-muted"
        >
          下一点
        </button>
      </div>
    </section>
  )
}
