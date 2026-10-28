import { Mail, MessageCircle, Phone } from 'lucide-react'
import Reveal from '../../components/Reveal'
import Section from '../../components/Section'
import { contactDetails } from '../../data/about'

const input =
  'w-full rounded-2xl border border-forest/20 bg-cream/50 px-5 py-3.5 font-sans text-[0.9375rem] text-forest placeholder:text-forest/40 transition-colors duration-300 focus:border-forest/45 focus:bg-cream focus:outline-none'

const label = 'font-sans text-[0.75rem] font-medium tracking-[0.14em] uppercase text-forest/60'

/**
 * Contact page, at /contact.
 *
 * A fuller route than the homepage's #contact band: that one is a single-field
 * signup strip, this one carries the phone number and a message box.
 *
 * The form is presentation only. The browser validates it, then submit stops -
 * there is no backend, and the page says so rather than implying a message was
 * delivered. The direct links above it are real and do work.
 *
 * Field styling matches AccountField by hand rather than importing it: that
 * component is built around the account forms' leading icon and reveal toggle,
 * and a message textarea needs none of that.
 */
export default function Contact() {
  function onSubmit(event) {
    event.preventDefault()
  }

  return (
    <>
      <main id="main" tabIndex={-1}>
        <Section tone="cream" className="pt-32 md:pt-40">
          <Reveal>
            <div className="mx-auto max-w-[54ch] text-center">
              <p className="text-[0.6875rem] font-medium tracking-[0.34em] uppercase text-forest/60">
                Contact
              </p>

              <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] font-medium text-forest">
                Let&apos;s talk.
              </h1>

              <p className="mt-5 font-sans text-[1.0625rem] leading-[1.7] text-pretty text-forest/70">
                Questions about a blend, a course or a session - whichever it is, start here
                and it will reach the right person.
              </p>
            </div>
          </Reveal>

          {/* Direct routes, which work today */}
          <ul className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
            <Reveal as="li">
              <a
                href={`mailto:${contactDetails.email}`}
                className="group flex h-full items-start gap-5 rounded-[22px] border border-forest/10 bg-bone/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-forest/25"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Mail className="size-5" strokeWidth={1.2} aria-hidden="true" />
                </span>

                <span>
                  <span className="block font-sans text-[0.6875rem] font-medium tracking-[0.22em] uppercase text-forest/50">
                    Email
                  </span>
                  <span className="mt-2 block font-display text-[1.25rem] font-medium text-forest">
                    {contactDetails.email}
                  </span>
                  <span className="mt-2 block font-sans text-[0.875rem] leading-[1.6] text-forest/60">
                    The quickest way to reach us.
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal as="li" delay={110}>
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                className="group flex h-full items-start gap-5 rounded-[22px] border border-forest/10 bg-bone/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-forest/25"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Phone className="size-5" strokeWidth={1.2} aria-hidden="true" />
                </span>

                <span>
                  <span className="block font-sans text-[0.6875rem] font-medium tracking-[0.22em] uppercase text-forest/50">
                    Phone
                  </span>
                  <span className="mt-2 block font-display text-[1.25rem] font-medium text-forest">
                    {contactDetails.phone}
                  </span>
                  <span className="mt-2 block font-sans text-[0.875rem] leading-[1.6] text-forest/60">
                    Weekdays, mid-morning to early evening.
                  </span>
                </span>
              </a>
            </Reveal>
          </ul>

          {/* Message form - validates, then stops */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-16 w-full max-w-[42rem] rounded-[26px] border border-forest/10 bg-bone/60 p-7 backdrop-blur-sm md:p-10"
            >
              <h2 className="flex items-center gap-3 font-display text-[1.5rem] font-medium text-forest">
                <MessageCircle className="size-5 shrink-0 text-gold" strokeWidth={1.3} aria-hidden="true" />
                Send a message
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={label}>
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={`${input} mt-2.5`}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={label}>
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    className={`${input} mt-2.5`}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className={label}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What would you like to know?"
                  className={`${input} mt-2.5 resize-y`}
                />
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-forest px-7 py-3.5 font-sans text-[0.8125rem] font-medium tracking-[0.08em] text-bone transition-colors duration-300 hover:bg-forest-deep"
              >
                Send message
              </button>

              <p className="mt-4 text-center font-sans text-[0.75rem] leading-[1.6] text-forest/50">
                This form is not connected yet, so sending will not deliver a message. Use the
                email or phone above and it will.
              </p>
            </form>
          </Reveal>
        </Section>
      </main>
    </>
  )
}