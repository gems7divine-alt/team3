import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import Section from '../Section'
import SectionHeading from '../SectionHeading'
import { sessionTypes } from '../../data/site'
import { contactDetails } from '../../data/about'

/**
 * Book a Session - the dark botanical band, anchored at #book-a-session.
 *
 * On the forest tone throughout, so headings and rules are flipped with
 * tone="light".
 */
export default function SessionSection() {
  return (
    <Section id="book-a-session" tone="forest">
      <Reveal>
        <SectionHeading
          eyebrow="Book a Session"
          title="One hour, properly held."
          lead="A session is a quiet hour with nothing else competing for your attention. Come as you are."
          tone="light"
        />
      </Reveal>

      <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {sessionTypes.map(({ icon: Icon, name, copy }, index) => (
          <Reveal as="li" key={name} delay={index * 110}>
            <div className="flex h-full flex-col rounded-[22px] border border-bone/12 bg-bone/5 p-7 backdrop-blur-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Icon className="size-5" strokeWidth={1.2} aria-hidden="true" />
              </span>

              <h3 className="mt-6 font-display text-[1.375rem] font-medium text-bone">
                {name}
              </h3>

              <p className="mt-3 font-sans text-[0.9375rem] leading-[1.75] text-pretty text-bone/70">
                {copy}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <div className="mt-12 flex flex-col items-center gap-5">
          <a
            href="/book-session"
            className="group inline-flex items-center gap-2 rounded-full bg-bone px-7 py-3.5 font-sans text-[0.8125rem] font-medium tracking-[0.08em] text-forest transition-colors duration-300 hover:bg-cream"
          >
            Request a session
            <ArrowRight
              className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>

          <p className="font-sans text-[0.8125rem] text-bone/55">
            Prefer to talk first?{' '}
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-bone/85 underline underline-offset-4 transition-colors duration-300 hover:text-bone"
            >
              {contactDetails.email}
            </a>
          </p>

          {/* A session is booked with a person, so the booking routes are a
              person too: the same email and phone the contact page uses, kept
              in data/about.js so the two can never disagree. */}
          <p className="font-sans text-[0.8125rem] text-bone/55">
            Or book directly by phone:{' '}
            <a
              href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
              className="text-bone/85 underline underline-offset-4 transition-colors duration-300 hover:text-bone"
            >
              {contactDetails.phone}
            </a>
          </p>
        </div>
      </Reveal>
    </Section>
  )
}