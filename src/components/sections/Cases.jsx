import { useNavigate } from 'react-router-dom'
import { projects } from '../../data/projects'
import { SECTION_IDS } from '../../utils/constants'
import CardSwap, { Card } from '../common/CardSwap/CardSwap'
import SectionLabel from '../common/SectionLabel'
import Button from '../common/Button'

const CARD_SKINS = [
  'linear-gradient(165deg, #f5f8ff 0%, #dbe4ff 48%, #c7d6ff 100%)',
  'linear-gradient(165deg, #eef3ff 0%, #d4e0ff 50%, #b8c9ff 100%)',
  'linear-gradient(165deg, #f8faff 0%, #e4ecff 45%, #cddbff 100%)',
]

export default function Cases() {
  const navigate = useNavigate()

  return (
    <section
      id={SECTION_IDS.cases}
      className="saas-panel overflow-visible p-8 md:p-10"
    >
      <SectionLabel>代表案例</SectionLabel>

      <div className="relative flex min-h-[480px] flex-col gap-8 overflow-visible md:min-h-[520px] md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="relative z-10 w-full max-w-sm shrink-0 space-y-4 md:pt-1">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            三款 ToB AI 产品，从 0 到 1
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            点击任意一张，进入对应作品详情。
          </p>
          <Button to="/works" variant="secondary" className="h-11 px-5">
            查看全部作品
          </Button>
        </div>

        <div className="relative h-[360px] w-full min-w-0 flex-1 md:h-[440px]">
          <CardSwap
            width={440}
            height={320}
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover
            onCardClick={(index) => {
              const project = projects[index]
              if (project) navigate(project.href)
            }}
          >
            {projects.map((project, index) => (
              <Card
                key={project.id}
                style={{
                  cursor: 'pointer',
                  background: CARD_SKINS[index % CARD_SKINS.length],
                  border: '1px solid rgba(77, 124, 255, 0.28)',
                  boxShadow: '0 10px 28px rgba(0, 82, 255, 0.1)',
                }}
              >
                <div className="flex h-full flex-col justify-between p-6 text-on-surface md:p-8">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 font-label-mono text-[0.65rem] tracking-wide text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-headline-md text-[1.25rem] leading-snug text-on-surface">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-sm leading-relaxed text-on-surface-variant">
                      {project.summary}
                    </p>
                  </div>
                  <p className="mt-6 font-label-mono text-label-mono tracking-wide text-primary">
                    点击查看详情 →
                  </p>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  )
}
