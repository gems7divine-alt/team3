import { Menu } from 'lucide-react'
import Brand from './Brand'
import { surfaceAtTop, surfaceBase, surfaceScrolled } from './navSurface'

/**
 * Phone bar (below 768px). No navigation links, no cart and no Login /
 * Register button here - those live behind the hamburger drawer.
 *
 * Pinned to the top of the viewport exactly like the desktop bar, so the
 * header behaves the same way once the visitor starts scrolling.
 */
export default function MobileNavbar({ scrolled, onMenuClick, menuButtonRef, menuOpen }) {
  return (
    <header
      className={`animate-fade-in fixed inset-x-0 top-0 z-30 ${surfaceBase} ${
        scrolled ? surfaceScrolled : surfaceAtTop
      } md:hidden`}
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <nav
        aria-label="Primary"
        className="flex items-center justify-between gap-1 px-2.5 py-3 min-[360px]:px-4"
      >
        <Brand />

        <div className="flex shrink-0 items-center gap-0.5">
          <button
            ref={menuButtonRef}
            type="button"
            onClick={onMenuClick}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex size-8 items-center justify-center rounded-full text-forest transition-colors duration-300 hover:bg-forest/10 min-[360px]:size-9"
          >
            <Menu className="size-[1.2rem] stroke-[1.4]" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  )
}