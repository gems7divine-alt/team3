import { ArrowRight } from 'lucide-react'
import logo from '../../assets/logo.png'

/**
 * Shared frame for the sign-in, register and buying pages: the centred card
 * width, the brand mark, the heading and lead, and the way home.
 *
 * Only the wording differs between the pages, so each takes title and lead
 * from its caller and supplies its own form as children. Nothing here is
 * sign-in specific.
 *
 * The mark renders as a plain image, exactly as the homepage, shop and course
 * heroes render it. It previously sat in the `.brand-mark` frame, whose scale
 * maths was written for an earlier, wider logo file - against the current
 * near-square one it clipped the mark down to a sliver.
 */
export default function AccountShell({ title, lead, children }) {
  return (
    <main
      id="main"
      tabIndex={-1}
      className="flex min-h-[100svh] flex-col items-center justify-center bg-bone px-5 py-24 md:px-8 md:py-28"
    >
      <div className="w-full max-w-[30rem]">
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt=""
            width={1261}
            height={1247}
            className="block h-auto w-16 shrink-0"
          />

          <h1 className="mt-7 font-display text-[2rem] leading-[1.15] font-medium text-forest md:text-[2.375rem]">
            {title}
          </h1>

          {lead && (
            <p className="mt-3 max-w-[34ch] font-sans text-[0.9375rem] leading-[1.7] text-forest/70">
              {lead}
            </p>
          )}
        </div>

        {children}
      </div>

      <p className="mt-10 flex items-center justify-center gap-2 font-sans text-[0.75rem] text-forest/45">
        <ArrowRight className="size-3.5 rotate-180" strokeWidth={1.4} aria-hidden="true" />
        <a href="/" className="transition-colors duration-300 hover:text-forest">
          Back to home
        </a>
      </p>
    </main>
  )
}