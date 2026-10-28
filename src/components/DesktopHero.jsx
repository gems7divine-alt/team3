import desktopBackground from '../assets/desktopbackground.png'
import HeroCopy from './HeroCopy'
import TrustFeatures from './TrustFeatures'

/**
 * Desktop and tablet landscape composition (768px and up).
 *
 * The artwork is a 1672x941 file, so `cover` trims roughly 5% off each side
 * on a 16:10 screen and nothing at all on a 16:9 one. It is referenced
 * through a CSS class rather than a utility so background-size/position can
 * be retuned in index.css without touching markup.
 */
export default function DesktopHero() {
  return (
    <div
      className="hero-desktop-bg relative hidden min-h-[100svh] flex-col md:flex"
      style={{ backgroundImage: `url(${desktopBackground})` }}
    >
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-28 pb-8 text-center lg:pt-32">
        <HeroCopy variant="desktop" headingId="hero-heading-desktop" />
      </div>

      <div className="relative z-10 flex justify-center px-6 pb-6 lg:px-10 lg:pb-8">
        <TrustFeatures variant="desktop" />
      </div>
    </div>
  )
}