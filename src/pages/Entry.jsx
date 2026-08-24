import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GradientWaves from '../components/common/GradientWaves'
import { useAccess } from '../utils/access-context'
import './Entry.css'

const BOOT_LINES = [
  'boot sequence · portfolio shell v1.0',
  'awaiting authorization…',
  'ready.',
]

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Entry() {
  const navigate = useNavigate()
  const { unlock, passphrase } = useAccess()
  const inputRef = useRef(null)
  const measureRef = useRef(null)
  const cancelledRef = useRef(false)

  const [bootLines, setBootLines] = useState([])
  const [typingLine, setTypingLine] = useState(null)
  const [inputReady, setInputReady] = useState(false)
  const [command, setCommand] = useState('')
  const [status, setStatus] = useState({ tone: 'muted', text: '' })
  const [shaking, setShaking] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [caretVisible, setCaretVisible] = useState(false)
  const [caretLeft, setCaretLeft] = useState(0)

  useEffect(() => {
    let cancelled = false
    cancelledRef.current = false
    setBootLines([])
    setTypingLine(null)
    setInputReady(false)

    const reduceMotion = prefersReducedMotion()

    async function typeLine(text, speed = 18) {
      if (reduceMotion) {
        if (cancelled) return
        setBootLines((prev) => [...prev, text])
        setTypingLine(null)
        return
      }

      setTypingLine({ text: '', full: text })
      for (let i = 0; i < text.length; i += 1) {
        if (cancelled) return
        setTypingLine({ text: text.slice(0, i + 1), full: text })
        await sleep(speed)
      }
      if (cancelled) return
      setBootLines((prev) => [...prev, text])
      setTypingLine(null)
    }

    async function runBoot() {
      for (const line of BOOT_LINES) {
        if (cancelled) return
        await typeLine(line, reduceMotion ? 0 : 18)
        if (cancelled) return
        if (!reduceMotion) await sleep(220)
      }
      if (cancelled) return
      setInputReady(true)
    }

    runBoot()
    return () => {
      cancelled = true
      cancelledRef.current = true
    }
  }, [])

  useEffect(() => {
    if (!inputReady || submitting) return
    inputRef.current?.focus()
  }, [inputReady, submitting])

  function updateCaret() {
    const input = inputRef.current
    const measure = measureRef.current
    if (!input || !measure || !inputReady || submitting) {
      setCaretVisible(false)
      return
    }
    measure.textContent = command
    setCaretLeft(measure.offsetWidth)
    setCaretVisible(document.activeElement === input)
  }

  useEffect(() => {
    updateCaret()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync custom caret with typed value
  }, [command, inputReady, submitting])

  async function handleSubmit(event) {
    event.preventDefault()
    if (!inputReady || submitting) return

    const value = command.trim().toLowerCase()
    setStatus({ tone: 'muted', text: '' })
    setShaking(false)

    if (value === passphrase.toLowerCase()) {
      setSubmitting(true)
      setSuccess(true)
      setCaretVisible(false)
      setStatus({ tone: 'ok', text: 'access granted · opening portfolio…' })

      const reduceMotion = prefersReducedMotion()
      if (reduceMotion) {
        setBootLines((prev) => [...prev, 'auth ok → redirecting'])
      } else {
        const msg = 'auth ok → redirecting'
        setTypingLine({ text: '', full: msg })
        for (let i = 0; i < msg.length; i += 1) {
          if (cancelledRef.current) return
          setTypingLine({ text: msg.slice(0, i + 1), full: msg })
          await sleep(16)
        }
        setBootLines((prev) => [...prev, msg])
        setTypingLine(null)
        await sleep(420)
      }

      unlock()
      navigate('/', { replace: true })
      return
    }

    setStatus({ tone: 'error', text: 'access denied · try again' })
    setShaking(true)
    window.setTimeout(() => setShaking(false), 400)
    inputRef.current?.select()
    inputRef.current?.focus()
  }

  const statusClass =
    status.tone === 'ok'
      ? 'text-primary'
      : status.tone === 'error'
        ? 'text-error'
        : 'text-on-surface-variant'

  return (
    <main className="entry-canvas relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-12 antialiased sm:px-8">
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(165deg,#dbe4ff_0%,#4d7cff_42%,#0052ff_100%)]"
        style={{ position: 'absolute', width: '100%', height: '100%' }}
        aria-hidden="true"
      >
        <GradientWaves
          className="h-full w-full"
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

      <div className="entry-fade relative z-10 w-full max-w-xl pointer-events-none">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10">
          <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/40 bg-white/15 px-5 py-2 backdrop-blur-sm">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-white" />
            <span className="font-label-mono text-xs uppercase tracking-[0.15em] text-white">
              Access Gate
            </span>
          </div>
          <h1 className="font-[Calistoga,Georgia,serif] text-[2.5rem] leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl">
            Enter to <span className="text-white/90 underline decoration-white/40 decoration-4 underline-offset-4">begin</span>
          </h1>
          <p className="max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            Type the passphrase, then press Enter.
          </p>
        </div>

        <section
          className={`entry-terminal pointer-events-auto rounded-2xl p-5 sm:p-7${success ? ' is-success' : ''}`}
          role="region"
          aria-label="Access terminal"
        >
          <div className="mb-5 flex items-center gap-2 border-b border-outline-variant pb-4">
            <span className="entry-traffic entry-traffic--red h-2.5 w-2.5 rounded-full" aria-hidden="true" />
            <span className="entry-traffic entry-traffic--amber h-2.5 w-2.5 rounded-full" aria-hidden="true" />
            <span className="entry-traffic entry-traffic--green h-2.5 w-2.5 rounded-full" aria-hidden="true" />
            <span className="ml-2 font-label-mono text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
              session://portfolio
            </span>
          </div>

          <div
            className="mb-4 min-h-[5.5rem] space-y-1.5 font-label-mono text-[13px] leading-relaxed text-on-surface/80 sm:text-sm"
            aria-live="polite"
          >
            {bootLines.map((line, index) => (
              <div key={`${index}-${line}`} className="flex items-start gap-2">
                <span className="select-none text-primary/70" aria-hidden="true">
                  ›
                </span>
                <span className="whitespace-pre-wrap break-words">{line}</span>
              </div>
            ))}
            {typingLine ? (
              <div className="flex items-start gap-2">
                <span className="select-none text-primary/70" aria-hidden="true">
                  ›
                </span>
                <span className="whitespace-pre-wrap break-words">
                  {typingLine.text}
                  <span className="entry-caret" aria-hidden="true" />
                </span>
              </div>
            ) : null}
          </div>

          <form className="relative" autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="command-input" className="sr-only">
              Passphrase
            </label>
            <div
              className={`flex items-center gap-2 font-label-mono text-sm sm:text-base${shaking ? ' entry-shake' : ''}`}
            >
              <span className="select-none font-medium text-primary" aria-hidden="true">
                &gt;
              </span>
              <div className="relative min-w-0 flex-1">
                <input
                  ref={inputRef}
                  id="command-input"
                  name="command"
                  type="text"
                  spellCheck={false}
                  autoCapitalize="off"
                  autoCorrect="off"
                  autoComplete="off"
                  disabled={!inputReady || submitting}
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  onFocus={updateCaret}
                  onBlur={() => setCaretVisible(false)}
                  onClick={updateCaret}
                  onKeyUp={updateCaret}
                  className="entry-input w-full bg-transparent py-2 pr-2 text-on-surface outline-none placeholder:text-on-surface-variant/40"
                  aria-describedby="status-msg"
                />
                <span
                  ref={measureRef}
                  className="pointer-events-none absolute left-0 top-0 -z-10 whitespace-pre font-[inherit] opacity-0"
                  aria-hidden="true"
                />
                {caretVisible ? (
                  <span
                    className="entry-input-caret"
                    style={{ left: caretLeft }}
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            </div>
            <p
              id="status-msg"
              className={`mt-3 min-h-[1.25rem] font-label-mono text-xs ${statusClass}`}
              role="status"
            >
              {status.text}
            </p>
          </form>
        </section>

        <p className="mt-6 font-label-mono text-[11px] tracking-wide text-white/75">
          Press{' '}
          <kbd className="rounded border border-white/30 bg-white/15 px-1.5 py-0.5 text-[10px] text-white">
            Enter
          </kbd>{' '}
          to submit
        </p>
      </div>
    </main>
  )
}
