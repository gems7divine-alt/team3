import { Award, Check } from 'lucide-react'
import personView from '../../assets/persionview.jpg'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Section from '../../components/Section'
import SectionHeading from '../../components/SectionHeading'
import {
  aboutHero,
  myStory,
  philosophy,
  philosophySteps,
  credentials,
} from '../../data/about'

/**
 * About Us - the full account, at /about.
 *
 * Separate from the homepage's AboutSection, which stays a short brand
 * summary; this is the long-form version with the coach's photograph, story,
 * method and credentials.
 *
 * The photograph is a 736x1103 portrait, so it is framed at its own 2:3 ratio
 * and cropped with object-cover rather than stretched. `object-top` keeps the
 * head in frame on short landscape crops.
 *
 * Copy lives in data/about.js.
 */
export default function AboutUs() {
  return (
    <>
      <main id="main" tabIndex={-1}>
        {/* Opening statement and photograph */}
        <Section tone="cream" className="pt-32 md:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            <Reveal>
              <p className="text-[0.6875rem] font-medium tracking-[0.34em] uppercase text-forest/60">
                About us
              </p>

              <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] font-medium text-forest">
                {aboutHero.title}
              </h1>

              <p className="mt-5 max-w-[42ch] font-sans text-[1.0625rem] leading-[1.7] text-pretty text-forest/70">
                {aboutHero.lead}
              </p>

              <figure className="mt-12">
                <img
                  src={personView}
                  alt="Wellness coach sitting in peaceful meditation"
                  width={736}
                  height={1103}
                  className="w-full rounded-[26px] object-cover object-top shadow-[0_28px_60px_-40px_rgba(35,77,54,0.55)]"
                  style={{ aspectRatio: '2 / 3' }}
                />
                <figcaption className="mt-4 font-sans text-[0.8125rem] text-forest/55">
                  {aboutHero.photoCaption}
                </figcaption>
              </figure>
            </Reveal>

            <Reveal delay={120}>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  align="left"
                  eyebrow="My story"
                  title={myStory.title}
                  tone="dark"
                />

                <div className="mt-7 flex flex-col gap-5">
                  {myStory.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 32)}
                      className="font-sans text-[0.9375rem] leading-[1.8] text-pretty text-forest/75"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Method and the three stages, on the dark green band */}
        <Section tone="forest">
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              title={philosophy.title}
              lead={philosophy.paragraphs[0]}
              tone="light"
            />
          </Reveal>

          <ol className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
            {philosophySteps.map((item, index) => (
              <Reveal as="li" key={item.step} delay={index * 110}>
                <div className="h-full rounded-[22px] border border-bone/12 bg-bone/5 p-7 backdrop-blur-sm">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-gold/45 font-display text-[1.0625rem] text-gold">
                    {item.step}
                  </span>

                  <h3 className="mt-6 font-display text-[1.375rem] font-medium text-bone">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-sans text-[0.9375rem] leading-[1.75] text-pretty text-bone/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Section>

        {/* Credentials */}
        <Section tone="bone">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Qualified to guide"
                title={credentials.title}
              />
            </Reveal>

            <Reveal delay={120}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {credentials.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3.5 rounded-2xl border border-forest/10 bg-cream/55 px-5 py-4"
                  >
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      {item.includes('clients') ? (
                        <Award className="size-3.5" strokeWidth={1.5} aria-hidden="true" />
                      ) : (
                        <Check className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
                      )}
                    </span>

                    <span className="font-sans text-[0.9375rem] leading-[1.5] text-forest/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  )
}