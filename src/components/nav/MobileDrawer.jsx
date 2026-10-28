import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
import Brand from './Brand'
import DrawerNavLink from './DrawerNavLink'
import { navLinks } from '../../data/nav'

/**
 * Slide-in navigation drawer for phones. Closes on Escape, on overlay press
 * and on any link press, locks background scroll while open, and returns
 * focus to the hamburger that opened it.
 */
export default function MobileDrawer({ open, onClose, triggerRef }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    const trigger = triggerRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    panelRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      trigger?.focus()
    }
  }, [open, onClose, triggerRef])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="animate-fade-in absolute inset-0 w-full cursor-default bg-forest/35 backdrop-blur-[2px]"
      />

      <div
        ref={panelRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        tabIndex={-1}
        className="animate-drawer-slide absolute inset-y-0 right-0 flex w-[min(21rem,86vw)] flex-col overflow-y-auto bg-bone shadow-[0_0_60px_-10px_rgba(35,77,54,0.45)]"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-forest/10 px-5 py-4">
          <Brand />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-forest transition-colors duration-300 hover:bg-forest/10"
          >
            <X className="size-[1.15rem] stroke-[1.4]" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 px-5 py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <li key={item.label}>
                <DrawerNavLink item={item} onNavigate={onClose} />
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="px-5 pt-4 pb-6"
          style={{ paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))' }}
        >
          <Link
            to="/login"
            onClick={onClose}
            className="block rounded-full bg-forest py-3.5 text-center text-sm font-medium tracking-[0.06em] text-bone transition-colors duration-300 hover:bg-forest-deep"
          >
            Login / Register
          </Link>
        </div>
      </div>
    </div>
  )
}