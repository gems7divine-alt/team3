import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import Section from '../Section'
import SectionHeading from '../SectionHeading'
import { programmes } from '../../data/courses'
import { courses } from '../../data/site'
import { formatPrice } from '../../utils/money'

/**
 * Courses - self-paced programmes, anchored at #courses.
 *
 * Numbered rather than illustrated, to stay clear of the shop grid directly
 * above it.
 *
 * Each row carries a meta line - duration, level, lesson count and price -
 * looked up from data/courses.js by programme name rather than retyped, so
 * the summary and the /courses page it points at can never quote different
 * figures. The names are deliberately identical in both data files, which is
 * what makes the lookup safe; rename a programme in one place and this line
 * is the thing that will tell you, by rendering nothing.
 */
const detailByName = Object.fromEntries(programmes.map((programme) => [programme.name, programme]))
export default function CoursesSection() {
  return (
    <Section id="courses" tone="cream">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Courses"
            title="Learn it once. Keep it for years."
            lead="Each programme is paced for a life that already has things in it. Work through a lesson when you can, and pick it back up when you can't."
          />
        </Reveal>

        <Reveal delay={120}>
          <ol className="flex flex-col gap-5">
            {courses.map(({ name, copy }, index) => {
              const detail = detailByName[name]

              return (
                <li
                  key={name}
                  className="flex gap-5 rounded-2xl border border-forest/10 bg-bone/55 px-6 py-5"
                >
                  <span className="shrink-0 font-display text-[1.5rem] leading-none text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-[1.25rem] font-medium text-forest">
                        {name}
                      </h3>

                      {detail && (
                        <p className="shrink-0 font-sans text-[0.9375rem] font-medium tabular-nums text-forest">
                          {formatPrice(detail.price)}
                        </p>
                      )}
                    </div>

                    <p className="mt-2 font-sans text-[0.9375rem] leading-[1.7] text-pretty text-forest/70">
                      {copy}
                    </p>

                    {detail && (
                      <p className="mt-3 font-sans text-[0.75rem] tracking-[0.04em] text-forest/55">
                        {detail.duration} &middot; {detail.level} &middot; {detail.lessons} lessons
                      </p>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>

          <Link
            to="/courses"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-forest/35 px-7 py-3.5 font-sans text-[0.8125rem] font-medium tracking-[0.08em] text-forest transition-colors duration-300 hover:border-forest/55 hover:bg-cream/60"
          >
            See all courses
            <ArrowRight
              className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </Section>
  )
}