import Button from '../common/Button'
import Icon from '../common/Icon'
import { site } from '../../data/site'
import { SECTION_IDS } from '../../utils/constants'

export default function ContactEntry() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="relative overflow-hidden rounded-2xl bg-inverse-surface p-10 text-center text-inverse-on-surface md:p-14"
    >
      <div className="dot-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/30 blur-[100px]" />
      <div className="relative flex flex-col items-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient shadow-[var(--shadow-accent-lg)]">
          <Icon name="mail" className="text-[28px] text-on-primary" />
        </div>
        <h2 className="mb-2 font-headline-md text-headline-md text-white md:text-[2rem]">
          一起做复杂而有价值的事。
        </h2>
        <p className="mb-6 font-label-mono text-label-mono text-white/60">
          {site.email}
        </p>
        <Button to="/contact" className="h-12 px-8">
          联系我
        </Button>
      </div>
    </section>
  )
}
