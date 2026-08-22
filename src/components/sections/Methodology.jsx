import { methodology } from '../../data/home'
import { SECTION_IDS } from '../../utils/constants'
import SectionLabel from '../common/SectionLabel'

export default function Methodology() {
  return (
    <section id={SECTION_IDS.methodology} className="saas-panel p-8 md:p-10">
      <SectionLabel>产品方法论</SectionLabel>
      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="absolute top-8 right-8 left-8 z-0 hidden h-px bg-outline-variant md:block" />
        {methodology.map((node, index) => (
          <div
            key={node.id}
            className="relative z-10 overflow-hidden rounded-2xl border border-outline-variant bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 border-b border-outline-variant bg-muted/60 px-4 py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-gradient text-[11px] font-semibold text-on-primary shadow-[var(--shadow-accent)]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="font-label-mono text-label-mono text-on-surface">
                {node.label.replace(/^\d+\.\s*/, '')}
              </span>
            </div>
            <div className="min-h-[110px] p-5 font-body-md text-body-md text-on-surface-variant">
              {node.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
