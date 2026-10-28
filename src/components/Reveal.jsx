import { useEffect, useRef, useState } from 'react'

/**
 * Whether the first frame should simply be visible. Checked once, during the
 * initial render, so the effect below never has to synchronously set state.
 */
function showImmediately() {
  if (typeof window === 'undefined') return true
  if (typeof IntersectionObserver === 'undefined') return true
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
}

/**
 * Fades and lifts content the first time it scrolls into view.
 *
 * Content below the fold cannot use the load-time entrance on the hero, and
 * animating everything at once is what makes a page feel busy. Each block
 * simply waits its turn.
 *
 * Falls back to plain visible content when IntersectionObserver is missing or
 * the visitor prefers reduced motion, so nothing can get stuck hidden.
 *
 * `as` exists because a wrapper <div> is invalid inside a <ul>; pass "li" when
 * a reveal sits directly in a list.
 */
export default function Reveal({ as: Tag = 'div', children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(showImmediately)

  useEffect(() => {
    if (shown) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        observer.disconnect()
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [shown])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}