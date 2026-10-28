import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

/**
 * Brand lockup: the supplied lotus mark beside the wordmark and strapline.
 *
 * Shared by the desktop bar, the phone bar and the drawer. Four tiers keep it
 * proportionate as the bar grows: phone scale, compact at the 768px tablet
 * floor, medium at 1024px, full at 1280px.
 *
 * The small left offset nudges the lockup off the very edge of the bar; it
 * stays in step with the bar's own padding, and is kept small at md because
 * that tier has the least horizontal room to spare.
 */
export default function Brand() {
  return (
    <Link
      to="/"
      aria-label="Rarefactree — Natural Healing, Mindful Living. Home."
      className="group ml-1 inline-flex shrink-0 items-center gap-2 min-[360px]:gap-2.5 md:ml-1.5 md:gap-2.5 lg:ml-2 lg:gap-2.75 xl:ml-3 xl:gap-3"
    >
      <img
        src={logo}
        alt=""
        width={1774}
        height={887}
        className="w-9 min-[360px]:w-10 md:w-10 lg:w-12 xl:w-16 h-auto transition-[filter] duration-700 ease-out group-hover:brightness-105"
      />

      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-[0.6875rem] font-medium tracking-[0.12em] text-forest min-[360px]:text-[0.75rem] md:tracking-[0.12em] lg:text-[0.9375rem] lg:tracking-[0.15em] xl:text-[1.05rem] xl:tracking-[0.18em]">
          RAREFACTREE
        </span>
        <span className="mt-1 font-sans text-[0.375rem] tracking-[0.08em] whitespace-nowrap text-forest/65 min-[360px]:text-[0.4375rem] min-[360px]:tracking-[0.12em] md:tracking-[0.06em] lg:text-[0.5rem] lg:tracking-[0.14em] xl:text-[0.5625rem] xl:tracking-[0.18em]">
          Natural Healing | Mindful Living
        </span>
      </span>
    </Link>
  )
}