import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../Reveal'
import Section from '../Section'
import SectionHeading from '../SectionHeading'
import logo from '../../assets/logo.png'
import { coach } from '../../data/about'
import { principles } from '../../data/site'

/**
 * About Us - the brand statement, anchored at #about so the navbar link has a
 * real destination.
 *
 * Deliberately short: this is the summary that belongs on the homepage. The
 * full account lives at /about in pages/AboutUsPage, and the navbar points
 * there. Keep the two from drifting into the same length.
 *
 * The coach line names the person behind the brand - a homepage that talks
 * about "we" without ever saying who "we" is reads as a company rather than
 * a practice - and the link hands off to the full story instead of repeating it.
 */
export default function AboutSection() {
  return (
    <Section id="about" tone="cream">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="The Rarefactree Method"
            title="Balance mind, body and soul."
            lead="We work with the whole person rather than the symptom. Small, unhurried practices that fit an actual week - not a perfect one."
          />

          <p className="mt-7 font-sans text-[0.9375rem] leading-[1.7] text-forest/70">
            Led by {coach.name} &mdash; {coach.role}.
          </p>

          <ul className="mt-6 flex flex-col gap-4">
            {principles.map((principle) => (
              <li key={principle} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                  <Check className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="font-sans text-[0.9375rem] leading-[1.65] text-forest/75">
                  {principle}
                </span>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-forest/35 px-7 py-3.5 font-sans text-[0.8125rem] font-medium tracking-[0.08em] text-forest transition-colors duration-300 hover:border-forest/55 hover:bg-cream/60"
          >
            More about us
            <ArrowRight
              className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[26px] border border-forest/10 bg-bone/60 p-9 text-center backdrop-blur-sm lg:p-11">
            <img
              src={logo}
              alt=""
              width={1774}
              height={887}
              className="mx-auto block w-20 h-auto"
            />

            <p className="mt-6 font-display text-[1.375rem] leading-[1.3] font-medium text-forest">
              Rarefactree
            </p>

            <span className="gold-hairline mx-auto mt-6 block h-px w-16" aria-hidden="true" />

            <p className="mt-6 font-sans text-[0.9375rem] leading-[1.75] text-pretty text-forest/70">
              Transform your life through mindful wellness coaching and holistic healing
              practices.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}