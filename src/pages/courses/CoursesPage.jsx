import { BookOpen, Check, Clock, GraduationCap, ListVideo } from 'lucide-react'
import coursesMobile from '../../assets/coursesmobile.png'
import coursesSystem from '../../assets/coursessystem.png'
import logo from '../../assets/logo.png'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Section from '../../components/Section'
import SectionHeading from '../../components/SectionHeading'
import { contactDetails } from '../../data/about'
import { coursesCta, coursesHero, method, programmes } from '../../data/courses'
import { formatPrice } from '../../utils/money'

/**
 * Courses - the full programme catalogue, at /courses.
 *
 * Separate from the homepage's CoursesSection, which stays a three-line summary
 * of the same three programmes; this is the long version with the module
 * breakdown, the method, and the price.
 *
 * The navbar's Courses entry points here rather than at the homepage anchor,
 * so the in-page list is reachable in one click from anywhere. NavAnchor
 * decides that from the href alone - a /courses path is a route and renders a
 * <Link> - so the desktop bar and the mobile drawer both pick it up unchanged.
 *
 * Each programme is a course card the way a course marketplace shows one:
 * what it costs, what level it assumes, how long it runs and how many lessons
 * it holds, then one button that enrols. No star rating and no enrolment
 * count appear here. Both would have to be invented, and a fabricated "4.9
 * from 2,000 students" would read as a real claim, so the card leaves them
 * out until there are real figures to print.
 *
 * There is no cart in the project, so Enroll Now routes to the contact form
 * rather than a checkout - the enrolment starts as a conversation.
 *
 * Prices are rendered from the data, never typed into this file, which is why
 * the TODO PLACEHOLDER comments live in data/courses.js and not here. Until
 * the real figures replace them, what the customer sees is a demonstration.
 *
 * Copy and prices live in data/courses.js.
 */

/**
 * The opening statement shared by both course backdrops, so the wording can
 * never drift between the system and mobile compositions - the same one-copy
 * arrangement HeroCopy uses on the homepage and ShopHeroCopy on the shop.
 *
 * `variant` follows them too: the phone composition runs the tighter mobile
 * type ramp so the block stays short, and the heading is capped at 18ch so the
 * title breaks exactly as the reference artwork shows - "Learn it once." over
 * "Keep it for years.".
 *
 * The brand mark opens the block, in place of the "COURSES" eyebrow and gold
 * lotus ornament the page used to carry - the same trade the shop page made
 * when its "Shop" label became the mark: the artwork announces where you are
 * and the heading carries the meaning, so the label became redundant.
 */
function CoursesHeroCopy({ variant }) {
  const isMobile = variant === 'mobile'

  return (
    <Reveal>
      <div className="mx-auto flex max-w-[54ch] flex-col items-center text-center">
        <img
          src={logo}
          alt=""
          width={1261}
          height={1247}
          className={`block h-auto shrink-0 ${isMobile ? 'w-16' : 'w-16 lg:w-20'}`}
        />

        <h1
          className={`mx-auto mt-4 max-w-[18ch] font-display font-medium leading-[1.1] text-forest ${
            isMobile ? 'text-[2rem]' : 'text-[clamp(2.25rem,5vw,3.5rem)]'
          }`}
        >
          {coursesHero.title}
        </h1>

        <p
          className={`mt-5 font-sans text-pretty text-forest/70 ${
            isMobile
              ? 'text-[0.9375rem] leading-[1.65]'
              : 'text-[1.0625rem] leading-[1.7]'
          }`}
        >
          {coursesHero.lead}
        </p>
      </div>
    </Reveal>
  )
}

export default function CoursesPage() {
  return (
    <>
      <main id="main" tabIndex={-1}>
        {/* Opening statement, on the supplied course backdrop.

            Both backdrops fill the viewport - `min-h-[100svh]`, the same
            full-bleed arrangement the homepage hero and the shop hero use -
            and the copy is centred within them. Two backdrops render and the
            md breakpoint decides which is displayed, so a phone never fetches
            the system artwork and a desktop never fetches the mobile one. The
            copy is shared, so the two compositions cannot drift apart. */}
        <section aria-label="Courses">
          <div
            className="courses-system-bg relative hidden min-h-[100svh] flex-col md:flex"
            style={{ backgroundImage: `url(${coursesSystem})` }}
          >
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pt-28 pb-10 lg:pt-32">
              <CoursesHeroCopy variant="desktop" />
            </div>
          </div>

          <div
            className="courses-mobile-bg relative flex min-h-[100svh] flex-col md:hidden"
            style={{ backgroundImage: `url(${coursesMobile})` }}
          >
            {/* The same bottom padding the shop's mobile backdrop uses: 5rem
                of bar clearance plus 30svh, lifting the centred copy up by 15%
                of the screen height so the lead clears the artwork's bottom
                ink mass, which tops out at 56% of this image's height. */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-20 pb-[calc(5rem+30svh)]">
              <CoursesHeroCopy variant="mobile" />
            </div>
          </div>
        </section>

        {/* The three programmes, priced and enrolable */}
        <Section tone="bone">
          <Reveal>
            <SectionHeading
              eyebrow="Programmes"
              title="Three ways in."
              lead="Each one stands alone. None of them assumes you have done the others, or any of them, before."
            />
          </Reveal>

          <ol className="mt-14 flex flex-col gap-8">
            {programmes.map((programme, index) => {
              const { id, name, tagline, copy, duration, format, level, lessons, price, compareAt, modules } =
                programme

              return (
                <Reveal as="li" key={id} delay={index * 110}>
                  <article className="rounded-[26px] border border-forest/10 bg-cream/55 p-7 backdrop-blur-sm md:p-9">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                      <span className="font-display text-[2rem] leading-none text-gold md:text-[2.5rem]">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-forest/20 px-3.5 py-1 font-sans text-[0.6875rem] font-medium tracking-[0.12em] uppercase text-forest/65">
                            <GraduationCap
                              className="size-3.5 shrink-0"
                              strokeWidth={1.6}
                              aria-hidden="true"
                            />
                            {level}
                          </span>

                          <span className="inline-flex items-center gap-1.5 font-sans text-[0.75rem] text-forest/55">
                            <ListVideo
                              className="size-3.5 shrink-0"
                              strokeWidth={1.6}
                              aria-hidden="true"
                            />
                            {lessons} lessons
                          </span>
                        </div>

                        <h3 className="mt-4 font-display text-[1.5rem] font-medium text-forest md:text-[1.75rem]">
                          {name}
                        </h3>

                        <p className="mt-2 font-sans text-[0.9375rem] leading-[1.6] text-forest/60">
                          {tagline}
                        </p>

                        {/* Duration and format - the two facts weighed first */}
                        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                          <div className="flex items-center gap-2.5">
                            <Clock
                              className="size-4 shrink-0 text-forest/45"
                              strokeWidth={1.4}
                              aria-hidden="true"
                            />
                            <dt className="sr-only">Duration</dt>
                            <dd className="font-sans text-[0.8125rem] tracking-[0.04em] text-forest/70">
                              {duration}
                            </dd>
                          </div>

                          <div className="flex items-center gap-2.5">
                            <BookOpen
                              className="size-4 shrink-0 text-forest/45"
                              strokeWidth={1.4}
                              aria-hidden="true"
                            />
                            <dt className="sr-only">Format</dt>
                            <dd className="font-sans text-[0.8125rem] tracking-[0.04em] text-forest/70">
                              {format}
                            </dd>
                          </div>
                        </dl>

                        <p className="mt-5 max-w-[62ch] font-sans text-[0.9375rem] leading-[1.8] text-pretty text-forest/75">
                          {copy}
                        </p>
                      </div>

                      {/* Price and enrol, pinned to the side on wide screens and
                          stacked under the copy on narrow ones */}
                      <div className="flex shrink-0 flex-row items-center justify-between gap-4 border-t border-forest/10 pt-6 md:w-52 md:flex-col md:items-stretch md:border-t-0 md:pt-0">
                        <div className="md:text-right">
                          <p className="font-display text-[1.875rem] leading-none font-medium tabular-nums text-forest">
                            {formatPrice(price)}
                          </p>

                          <p className="mt-1.5 font-sans text-[0.8125rem] tabular-nums text-forest/45">
                            <span className="line-through">{formatPrice(compareAt)}</span>
                            <span className="sr-only">(regular price)</span>
                          </p>

                          <p className="mt-1.5 font-sans text-[0.75rem] text-forest/50">
                            One payment, lifetime access
                          </p>
                        </div>

                        {/* Enrol routes to the contact form - there is no cart
                            in the project, so the press starts the enrolment
                            conversation rather than a checkout that does not
                            exist. Sized a step larger, matching the shop's
                            Buy presses. */}
                        <Button href="/contact" withArrow className="py-4 text-[0.875rem] md:w-full">
                          Enroll Now
                        </Button>
                      </div>
                    </div>

                    {/* Lesson blocks, as a checklist rather than a syllabus */}
                    <ul className="mt-8 grid gap-3 border-t border-forest/10 pt-7 sm:grid-cols-2 sm:gap-x-8">
                      {modules.map((module) => (
                        <li key={module.title} className="flex items-start gap-3.5">
                          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                            <Check className="size-3.5" strokeWidth={1.8} aria-hidden="true" />
                          </span>

                          <span>
                            <span className="block font-display text-[1.0625rem] font-medium text-forest">
                              {module.title}
                            </span>
                            <span className="mt-1 block font-sans text-[0.8125rem] leading-[1.6] text-forest/65">
                              {module.body}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              )
            })}
          </ol>
        </Section>

        {/* The method, on the dark green band */}
        <Section tone="forest">
          <Reveal>
            <SectionHeading
              eyebrow="The approach"
              title={method.title}
              lead={method.lead}
              tone="light"
            />
          </Reveal>

          <ol className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
            {method.steps.map((item, index) => (
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

        {/* Closing band - routes to the contact form, which is real */}
        <Section tone="cream">
          <Reveal>
            <div className="mx-auto max-w-[46ch] text-center">
              <h2 className="font-display text-[clamp(1.875rem,4.2vw,2.75rem)] font-medium text-forest">
                {coursesCta.title}
              </h2>

              <p className="mt-4 font-sans text-[0.9375rem] leading-[1.75] text-pretty text-forest/70 md:text-base">
                {coursesCta.copy}
              </p>

              <span aria-hidden="true" className="gold-hairline mx-auto mt-7 block h-px w-16" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 flex flex-col items-center gap-5">
              <Button href="/contact" withArrow>
                {coursesCta.buttonLabel}
              </Button>

              <p className="font-sans text-[0.8125rem] text-forest/55">
                Prefer to talk first?{' '}
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="text-forest/85 underline underline-offset-4 transition-colors duration-300 hover:text-forest"
                >
                  {contactDetails.email}
                </a>
              </p>
            </div>
          </Reveal>
        </Section>
      </main>

      <Footer />
    </>
  )
}
