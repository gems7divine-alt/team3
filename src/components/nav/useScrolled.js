import { useEffect, useState } from 'react'

/**
 * True once the page has scrolled past `offset`.
 *
 * The listener is passive and reads inside a single animation frame, and the
 * state update bails out when the threshold has not been crossed, so a fast
 * flick does not re-render the bar on every event.
 */
export default function useScrolled(offset = 24) {
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > offset,
  )

  useEffect(() => {
    let frame = 0

    function read() {
      frame = 0
      setScrolled((previous) => {
        const next = window.scrollY > offset
        return next === previous ? previous : next
      })
    }

    function onScroll() {
      if (frame) return
      frame = window.requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [offset])

  return scrolled
}