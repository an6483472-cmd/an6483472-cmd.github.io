import Button from '../common/Button'
import GradientWaves from '../common/GradientWaves'
import { site } from '../../data/site'
import { SECTION_IDS } from '../../utils/constants'

export default function Hero() {
  const [name, rest] = site.title.split('|').map((part) => part.trim())

  return (
    <section
      id={SECTION_IDS.positioning}
      className="animate-fade-up relative overflow-hidden rounded-2xl border border-outline-variant shadow-sm"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(165deg,#dbe4ff_0%,#4d7cff_42%,#0052ff_100%)]"
        style={{ width: '100%', height: '100%', position: 'absolute' }}
        aria-hidden="true"
      >
        <GradientWaves
          className="h-full min-h-[520px] w-full md:min-h-[560px]"
          horizonColor="#0039C7"
          waveColor="#8EB4FF"
          crestColor="#FFFFFF"
          speed={0.7}
          amplitude={3.6}
          waveScale={0.45}
          waveRatio={0.85}
          swell={28}
          turbulence={14}
          tilt={1.05}
          zoom={0.95}
          height={5.8}
          fogDepth={20}
          detail="medium"
          brightness={1.1}
          opacity={1}
          mouseInteraction
          parallaxStrength={0.7}
          grain
          grainIntensity={0.05}
        />
      </div>

      <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 pointer-events-none md:min-h-[560px] md:p-12">
        <div className="pointer-events-auto max-w-3xl rounded-2xl border border-white/50 bg-card/85 p-6 shadow-lg backdrop-blur-md md:p-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-primary" />
              <span className="font-label-mono text-label-mono tracking-wide text-primary">
                AI 产品经理
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
              {name}
              {rest ? (
                <>
                  {' '}
                  <span className="text-gradient">| {rest}</span>
                </>
              ) : null}
            </h1>
            <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              {site.tagline}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button to="/works" className="h-12 px-6">
                查看作品
              </Button>
              <Button to="/contact" variant="secondary" className="h-12 px-6">
                联系我
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
