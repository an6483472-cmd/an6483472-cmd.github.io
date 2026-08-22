import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NAV_OFFSET = 112

/**
 * Scrolls to the element matching location.hash after route changes.
 * Needed because React Router does not auto-scroll hash targets.
 */
export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return undefined
    }

    const id = hash.replace(/^#/, '')
    let attempts = 0

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (!el) {
        attempts += 1
        if (attempts < 20) {
          window.requestAnimationFrame(tryScroll)
        }
        return
      }

      const top =
        el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
      window.scrollTo({ top, behavior: 'smooth' })
    }

    // Wait one frame so the destination page can mount.
    const timer = window.setTimeout(tryScroll, 0)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}
