import { useEffect, useRef } from 'react'
import SwarmCursor from './SwarmCursor'

/**
 * Site-wide SwarmCursor overlay.
 * Forwards window pointer events into the swarm container so the effect
 * can follow the cursor without blocking page clicks (host is pointer-events: none).
 * Does not modify SwarmCursor internals.
 */
export default function SiteSwarmCursor() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined

    const getContainer = () => host.querySelector('.swarm-cursor')

    const forward = (event) => {
      // Only forward real user input — synthetic events must not re-enter
      // or bubbling dispatch would recurse through the window listener.
      if (!event.isTrusted) return
      const container = getContainer()
      if (!container) return
      container.dispatchEvent(
        new PointerEvent(event.type, {
          bubbles: false,
          cancelable: true,
          clientX: event.clientX,
          clientY: event.clientY,
          pointerId: event.pointerId,
          pointerType: event.pointerType,
          isPrimary: event.isPrimary,
        }),
      )
    }

    const onMove = (event) => forward(event)
    const onDown = (event) => forward(event)
    const onLeave = () => {
      const container = getContainer()
      if (!container) return
      container.dispatchEvent(
        new PointerEvent('pointerleave', { bubbles: false, cancelable: true }),
      )
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div
      ref={hostRef}
      className="pointer-events-none fixed inset-0 z-[45]"
      aria-hidden="true"
    >
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <SwarmCursor
          color="#0052FF"
          accentColor="#4D7CFF"
          count={8}
          size={5}
          speed={2.5}
          spread={100}
          wander={0.25}
          trail={0.75}
          scatterOnClick
        />
      </div>
    </div>
  )
}
