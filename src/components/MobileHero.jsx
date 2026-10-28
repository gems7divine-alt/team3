import mobileBackground from '../assets/mobilebackground.png'
import HeroCopy from './HeroCopy'
import TrustFeatures from './TrustFeatures'

/**
 * Phone composition (below 768px), built for the phone rather than scaled
 * down from the desktop one: stacked full-width calls to action, a tighter
 * type ramp and a compact four-up trust card.
 *
 * On a 390x844 screen `cover` scales the 953x1651 artwork to full height and
 * crops about 12% off each side, so `center` keeps both bottom lotuses
 * equally trimmed. Nothing is cropped vertically.
 */
export default function MobileHero() {
  return (
    <div
      className="hero-mobile-bg relative flex min-h-[100svh] flex-col md:hidden"
      style={{ backgroundImage: `url(${mobileBackground})` }}
    >
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-20 pb-6 text-center">
        <HeroCopy variant="mobile" headingId="hero-heading-mobile" />
      </div>

      <div
        className="relative z-10 px-4 pb-5"
        style={{ paddingBottom: 'calc(1.25rem + env(safe-area-inset-bottom))' }}
      >
        <TrustFeatures variant="mobile" />
      </div>
    </div>
  )
}