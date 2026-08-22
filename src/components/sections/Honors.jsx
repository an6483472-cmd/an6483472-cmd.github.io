import { honors } from '../../data/home'
import { SECTION_IDS } from '../../utils/constants'
import SectionLabel from '../common/SectionLabel'

export default function Honors() {
  return (
    <section id={SECTION_IDS.honors} className="saas-panel p-8 md:p-10">
      <SectionLabel>荣誉</SectionLabel>
      <ul className="space-y-3">
        {honors.map((item) => (
          <li
            key={item.id}
            className="group flex items-center justify-between rounded-xl border border-outline-variant bg-muted/30 px-5 py-4 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-md"
          >
            <span className="font-body-md text-body-md font-medium text-on-surface transition-colors group-hover:text-primary">
              {item.title}
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              {item.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
