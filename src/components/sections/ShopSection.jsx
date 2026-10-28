import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal'
import Section from '../Section'
import SectionHeading from '../SectionHeading'
import { categories } from '../../data/shop'
import { products } from '../../data/site'
import { formatPrice } from '../../utils/money'

/**
 * Shop - the three product families, anchored at #shop.
 *
 * Cards are named but not priced and carry no imagery: there are no product
 * photographs in the project, and inventing stock-like prices would be worse
 * than saying nothing.
 *
 * Below the families sits the shelves strip: one line per real shop category,
 * each with its product count and starting price, computed from data/shop.js
 * rather than typed here so the two can never disagree. It answers the only
 * question the family cards leave open - "so what can I actually buy?" - and
 * hands off to /shop instead of repeating the catalogue.
 */
export default function ShopSection() {
  return (
    <Section id="shop" tone="bone">
      <Reveal>
        <SectionHeading
          eyebrow="Shop"
          title="Small-batch, hand blended."
          lead="Everything here is made in small runs, by hand, with botanicals chosen for how they actually work rather than how they look on a label."
        />
      </Reveal>

      <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {products.map(({ icon: Icon, name, copy }, index) => (
          <Reveal as="li" key={name} delay={index * 110}>
            <article className="flex h-full flex-col rounded-[22px] border border-forest/10 bg-cream/55 p-7 backdrop-blur-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon className="size-5" strokeWidth={1.2} aria-hidden="true" />
              </span>

              <h3 className="mt-6 font-display text-[1.375rem] font-medium text-forest">
                {name}
              </h3>

              <p className="mt-3 font-sans text-[0.9375rem] leading-[1.75] text-pretty text-forest/70">
                {copy}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>

      {/* One line per real shelf: count and starting price, both derived */}
      <Reveal>
        <p className="mt-14 text-center font-sans text-[0.6875rem] font-medium tracking-[0.28em] uppercase text-forest/50">
          From the shelves
        </p>

        <ul className="mx-auto mt-6 grid max-w-[46rem] gap-3 sm:grid-cols-3">
          {categories.map(({ name, icon: Icon, products: shelf }) => {
            const from = Math.min(...shelf.map((item) => item.price))

            return (
              <li key={name}>
                <Link
                  to="/shop"
                  className="group flex items-center gap-3.5 rounded-2xl border border-forest/10 bg-cream/55 px-5 py-4 backdrop-blur-sm transition-colors duration-300 hover:border-forest/25"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <Icon className="size-4" strokeWidth={1.4} aria-hidden="true" />
                  </span>

                  <span className="min-w-0">
                    <span className="block truncate font-display text-[1.0625rem] font-medium text-forest">
                      {name}
                    </span>
                    <span className="mt-0.5 block font-sans text-[0.75rem] tabular-nums text-forest/55">
                      {shelf.length} products &middot; from {formatPrice(from)}
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Reveal>

      <Reveal>
        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 rounded-full border border-forest/35 px-7 py-3.5 font-sans text-[0.8125rem] font-medium tracking-[0.08em] text-forest transition-colors duration-300 hover:border-forest/55 hover:bg-cream/60"
          >
            Browse the full shop
            <ArrowRight
              className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Reveal>
    </Section>
  )
}