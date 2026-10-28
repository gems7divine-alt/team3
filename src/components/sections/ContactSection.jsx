import { Mail } from 'lucide-react'
import Reveal from '../Reveal'
import Section from '../Section'
import SectionHeading from '../SectionHeading'

/**
 * Contact - the closing call to action at #contact.
 *
 * The form is presentation only: it validates the address with the browser's
 * own required/type checks and then does nothing, because there is no
 * backend. The button says so rather than implying a subscription happened.
 */
export default function ContactSection() {
  function onSubmit(event) {
    event.preventDefault()
  }

  return (
    <Section id="contact" tone="bone">
      <Reveal>
        <SectionHeading
          eyebrow="Stay in touch"
          title="Begin your reset."
          lead="New blends, course openings and session dates, sent quietly and not often at all."
        />

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-11 flex w-full max-w-[34rem] flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="contact-email" className="sr-only">
            Email address
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className="w-full rounded-full border border-forest/20 bg-cream/50 px-6 py-3.5 font-sans text-[0.9375rem] text-forest placeholder:text-forest/40 transition-colors duration-300 focus:border-forest/45 focus:bg-cream focus:outline-none"
          />

          <button
            type="submit"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 font-sans text-[0.8125rem] font-medium tracking-[0.08em] whitespace-nowrap text-bone transition-colors duration-300 hover:bg-forest-deep"
          >
            <Mail className="size-4 shrink-0" strokeWidth={1.4} aria-hidden="true" />
            Keep me posted
          </button>
        </form>

        <p className="mt-5 text-center font-sans text-[0.8125rem] text-forest/55">
          We will never share your details, and one click unsubscribes.
        </p>
      </Reveal>
    </Section>
  )
}