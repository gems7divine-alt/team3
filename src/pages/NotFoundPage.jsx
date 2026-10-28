import { Link } from 'react-router-dom'

/**
 * Fallback for any URL that matches no route.
 *
 * Without it an unknown path renders nothing at all, because <Routes> with no
 * match outputs an empty fragment - so a mistyped or not-yet-built link looks
 * like a blank page rather than a broken one.
 */
export default function NotFoundPage() {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex min-h-[100svh] flex-col items-center justify-center bg-bone px-5 py-24 text-center"
    >
      <p className="text-[0.6875rem] font-medium tracking-[0.34em] uppercase text-forest/60">
        404
      </p>

      <h1 className="mt-4 font-display text-[clamp(2rem,5vw,3rem)] leading-[1.15] font-medium text-forest">
        This path is still unfolding.
      </h1>

      <p className="mt-4 max-w-[42ch] font-sans text-[0.9375rem] leading-[1.7] text-forest/70">
        The page you were looking for is not here yet. Everything else is a short walk back.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="rounded-full bg-forest px-7 py-3.5 font-sans text-[0.8125rem] font-medium tracking-[0.08em] text-bone transition-colors duration-300 hover:bg-forest-deep"
        >
          Back to home
        </Link>

        <Link
          to="/about"
          className="rounded-full border border-forest/35 bg-cream/55 px-7 py-3.5 font-sans text-[0.8125rem] font-medium tracking-[0.08em] text-forest backdrop-blur-sm transition-colors duration-300 hover:border-forest/55 hover:bg-cream"
        >
          About us
        </Link>
      </div>
    </main>
  )
}