import { trustFeatures } from '../data/site'

/**
 * The four trust points.
 *
 * Both backdrops run heavy lotus ink through their bottom third - measured
 * bottom-band luma is 146 on the desktop file and 152 on the mobile one -
 * so the card needs its translucent cream backing and a light blur to keep
 * the dark green labels readable. It is not decoration over a light area.
 *
 * The two variants differ structurally, not just in scale:
 *
 *   desktop - a compact two-by-two card pinned under the headline, so it
 *             reads as a supporting note rather than a full-width band.
 *   mobile  - a single four-column row with hairline dividers, which is the
 *             only arrangement four labels fit into at phone width.
 */
export default function TrustFeatures({ variant = 'desktop' }) {
  const isMobile = variant === 'mobile'

  return (
    <section
      aria-label="Why people choose Rarefactree"
      className={`animate-hero-rise w-full rounded-[22px] bg-cream/70 ring-1 ring-forest/8 shadow-[0_20px_50px_-28px_rgba(35,77,54,0.55)] backdrop-blur-md ${
        isMobile
          ? 'px-2 py-4 [animation-delay:700ms]'
          : 'mx-auto max-w-[320px] px-5 py-4 [animation-delay:760ms] lg:max-w-[344px] lg:px-6 lg:py-5'
      }`}
    >
      <ul
        className={
          isMobile
            ? 'grid grid-cols-4 divide-x divide-forest/12'
            : 'grid grid-cols-2 gap-x-4 gap-y-3.5 lg:gap-x-6'
        }
      >
        {trustFeatures.map(({ icon: Icon, lines }) => (
          <li
            key={lines.join('-')}
            className={`flex flex-col items-center text-center ${isMobile ? 'gap-1.5 px-0.5' : 'gap-1.5'}`}
          >
            <Icon
              className={`shrink-0 text-forest/75 ${isMobile ? 'size-[1.15rem]' : 'size-5'}`}
              strokeWidth={1.1}
              aria-hidden="true"
            />

            <p
              className={`font-sans font-medium tracking-[0.01em] text-balance text-forest/85 ${
                isMobile
                  ? 'text-[0.375rem] leading-[1.25] min-[360px]:text-[0.4375rem]'
                  : 'text-[0.6875rem] leading-[1.25]'
              }`}
            >
              {lines[0]}
              <br />
              {lines[1]}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}