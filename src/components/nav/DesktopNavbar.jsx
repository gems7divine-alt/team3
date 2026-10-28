import { Link } from 'react-router-dom'
import Brand from './Brand'
import DesktopNavLink from './DesktopNavLink'
import { padAtTop, padScrolled, surfaceAtTop, surfaceBase, surfaceScrolled } from './navSurface'
import { navLinks } from '../../data/nav'

/**
 * Desktop and tablet landscape bar (md and up, so 768px+).
 *
 * Pinned to the top of the viewport, so it stays with the visitor once the
 * hero artwork scrolls away. It keeps its own surface rather than borrowing
 * the backdrop behind it.
 *
 * With six links there is not one comfortable desktop scale for every width,
 * so three tiers are used instead of two:
 *
 *   md  768px+   compact   ~731px of 768
 *   lg  1024px+  medium    ~955px of 1024
 *   xl  1280px+  full      ~1152px of 1280
 *
 * The full-size lockup and type arrive at xl rather than lg, which is what
 * keeps "Book a Session" on the row at the 768px floor.
 */
export default function DesktopNavbar({ scrolled }) {
  return (
    <header
      className={`animate-fade-in fixed inset-x-0 top-0 z-30 hidden ${surfaceBase} ${
        scrolled ? surfaceScrolled : surfaceAtTop
      } md:block`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex w-full max-w-[1440px] items-center gap-2.5 px-3.5 transition-[padding] duration-500 ease-out lg:gap-4 lg:px-6 xl:gap-6 xl:px-10 ${
          scrolled ? padScrolled : padAtTop
        }`}
      >
        <Brand />

        <div className="flex flex-1 justify-center">
          <ul className="flex items-center gap-2 lg:gap-4 xl:gap-6">
            {navLinks.map((item) => (
              <li key={item.label}>
                <DesktopNavLink item={item} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 lg:gap-2 xl:gap-3">
          <Link
            to="/login"
            className="rounded-full bg-forest px-2.5 py-1.5 text-[0.5625rem] font-medium tracking-[0.06em] whitespace-nowrap text-bone transition-colors duration-300 hover:bg-forest-deep lg:px-4 lg:py-2 lg:text-[0.6875rem] xl:px-5 xl:py-2.5 xl:text-[0.75rem]"
          >
            Login / Register
          </Link>
        </div>
      </nav>
    </header>
  )
}