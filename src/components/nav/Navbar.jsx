import { useCallback, useRef, useState } from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import MobileDrawer from './MobileDrawer'
import useScrolled from './useScrolled'

/**
 * Navbar section root - the bar's own layer of the page, independent of both
 * hero backdrops. At the top of the page it is transparent and floats over the
 * artwork; once the page scrolls it takes on its own surface so it stays
 * readable against whatever passes underneath.
 *
 * Both bars render and the md breakpoint decides which is displayed, so media
 * queries stay the single source of truth: no resize listener, no first-paint
 * mismatch. The inactive bar is display:none, which also keeps it out of the
 * accessibility tree.
 *
 * The cart button and the drawer it used to open are gone from the bar, and
 * the cart code has been removed from the project entirely - the search and
 * account icons went the same way earlier. The bar carries the brand, the
 * links and the menu drawer, and nothing else.
 *
 * Menu contents live in src/data/nav.js.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const scrolled = useScrolled()

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const openMenu = useCallback(() => setMenuOpen(true), [])

  return (
    <>
      <DesktopNavbar scrolled={scrolled} />
      <MobileNavbar
        scrolled={scrolled}
        onMenuClick={openMenu}
        menuButtonRef={menuButtonRef}
        menuOpen={menuOpen}
      />
      <MobileDrawer open={menuOpen} onClose={closeMenu} triggerRef={menuButtonRef} />
    </>
  )
}
