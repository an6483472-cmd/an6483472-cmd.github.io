import { achievements } from '../../data/home'
import { SECTION_IDS } from '../../utils/constants'
import Icon from '../common/Icon'
import SectionLabel from '../common/SectionLabel'

export default function Achievements() {
  return (
    <section id={SECTION_IDS.achievements} className="saas-panel p-8 md:p-10">
      <SectionLabel>核心成就</SectionLabel>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {achievements.map((item) => (
          <div
            key={item.id}
            className="group flex items-start gap-4 rounded-xl border border-outline-variant bg-muted/40 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-card hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-on-primary shadow-[var(--shadow-accent)]">
              <Icon name={item.icon} filled={item.filled} className="text-[22px]" />
            </div>
            <div>
              <div className="mb-1 font-label-mono text-label-mono text-primary">
                {item.label}
              </div>
              <div className="font-body-md text-body-md text-on-surface">
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
