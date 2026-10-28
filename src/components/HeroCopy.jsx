import logo from '../assets/logo.png'
import Button from './Button'

/**
 * The hero copy block, shared by both compositions so the wording can never
 * drift between them. Only scale, measure and CTA stacking differ.
 *
 * The lotus mark opens the composition and leads the reveal, taking the first
 * delay slot that the gold ornament used to hold.
 */
export default function HeroCopy({ variant, headingId }) {
  const isMobile = variant === 'mobile'

  return (
    <div
      className={`flex flex-col items-center text-center ${
        isMobile ? 'w-full gap-5' : 'gap-6 lg:gap-7'
      }`}
    >
      <img
        src={logo}
        alt=""
        width={1774}
        height={887}
        className={`animate-hero-rise block shrink-0 [animation-delay:180ms] ${
          isMobile ? 'w-16' : 'w-16 lg:w-20'
        } h-auto`}
      />

      <h1
        id={headingId}
        className={`animate-hero-rise font-display font-medium text-forest [animation-delay:280ms] ${
          isMobile
            ? 'text-[clamp(2rem,10vw,2.75rem)] leading-[1.08] px-1'
            : // Bounded by viewport height as well as width, so a short laptop
              // screen (1366x768, ~728px of usable height) keeps the heading
              // and the trust card on screen instead of pushing one below the fold.
              'text-[clamp(2.5rem,min(6.5vw,9.5vh),5.5rem)] leading-[1.05]'
        }`}
      >
        Heal Naturally.
        <br />
        Live Consciously.
      </h1>

      <p
        className={`animate-hero-rise font-sans text-forest/75 [animation-delay:400ms] ${
          isMobile
            ? 'max-w-[30ch] text-[0.875rem] leading-[1.65] min-[360px]:text-[0.9375rem]'
            : 'max-w-[38ch] text-[1rem] leading-[1.7] lg:text-[1.0625rem]'
        }`}
      >
        Premium home made oils, holistic wellness products and transformative
        online courses to balance your mind, body and soul.
      </p>

      <div
        className={`animate-hero-rise flex w-full items-center [animation-delay:520ms] ${
          isMobile
            ? 'flex-col gap-3 max-w-[19rem]'
            : 'flex-row justify-center gap-4 max-w-none'
        }`}
      >
        <Button
          href="#shop"
          withArrow
          className={isMobile ? 'w-full py-3.5 text-[0.8125rem]' : 'px-8 py-4 text-[0.8125rem] lg:text-[0.875rem]'}
        >
          Shop Natural Products
        </Button>

        <Button
          href="#courses"
          variant="secondary"
          className={isMobile ? 'w-full py-3.5 text-[0.8125rem]' : 'px-8 py-4 text-[0.8125rem] lg:text-[0.875rem]'}
        >
          Explore Courses
        </Button>
      </div>
    </div>
  )
}