import DesktopHero from './DesktopHero'
import MobileHero from './MobileHero'

/**
 * The hero compositions. Purely the backdrop and its content - the navbar is
 * owned by App and overlaid on top, so neither has to know about the other.
 *
 * Both variants render and the md breakpoint decides which is displayed, so
 * the backdrop for the other is never fetched on a phone.
 */
export default function Hero() {
  return (
    <section id="home" aria-label="Rarefactree">
      <DesktopHero />
      <MobileHero />
    </section>
  )
}