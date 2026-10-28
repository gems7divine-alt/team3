import { Check } from 'lucide-react'
import logo from '../../assets/logo.png'
import mobileShop from '../../assets/mobileshop.png'
import systemShop from '../../assets/systemshop.png'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Reveal from '../../components/Reveal'
import Section from '../../components/Section'
import SectionHeading from '../../components/SectionHeading'
import { contactDetails } from '../../data/about'
import { categories, shopCta, shopHero, sourcing } from '../../data/shop'
import { formatPrice } from '../../utils/money'

/**
 * Alternating tone per category band, so consecutive sections do not run
 * together as one long block. Indexed rather than hard-coded per category, so
 * adding a fourth group keeps the rhythm without a new class here.
 */
const tones = ['bone', 'cream', 'bone']

/**
 * The opening statement shared by both shop backdrops, so the wording and the
 * mark can never drift between the system and mobile compositions - the same
 * one-copy arrangement HeroCopy uses for the homepage hero.
 *
 * `variant` follows HeroCopy too: the phone composition runs the tighter
 * mobile type ramp (2rem heading, 15px lead) so the whole block is short
 * enough to sit inside the mobile artwork's clean upper field - the lotus ink
 * only starts at 61% of that image's height - while the system composition
 * keeps the larger ramp centred over the wide artwork's open middle.
 *
 * The lotus mark opens the block in place of the small-caps "Shop" eyebrow the
 * page used to carry: the artwork announces where you are and the heading
 * carries the meaning, so the label text became redundant.
 */
function ShopHeroCopy({ variant }) {
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
          className={`mt-4 font-display font-medium leading-[1.1] text-forest ${
            isMobile ? 'text-[2rem]' : 'text-[clamp(2.25rem,5vw,3.5rem)]'
          }`}
        >
          {shopHero.title}
        </h1>

        <p
          className={`mt-5 font-sans text-pretty text-forest/70 ${
            isMobile
              ? 'text-[0.9375rem] leading-[1.65]'
              : 'text-[1.0625rem] leading-[1.7]'
          }`}
        >
          {shopHero.lead}
        </p>
      </div>
    </Reveal>
  )
}

/**
 * Shop - the real product catalogue, at /shop.
 *
 * Separate from the homepage's ShopSection, which lists three brand-level
 * families as a summary. This is the catalogue itself: six products in three
 * groups, each priced for display. There is no cart in the project - each
 * card's Buy press routes to the contact form, where a batch can actually be
 * asked about.
 *
 * The navbar's Shop entry points here rather than at the homepage anchor, so
 * the catalogue is one click away from anywhere. NavAnchor decides that from
 * the href alone - a /shop path is a route and renders a <Link> - so the
 * desktop bar and the mobile drawer both pick it up unchanged.
 *
 * Cards lead with a photograph - every product now carries one, held on the
 * product in data/shop.js beside its price. A product added without one falls
 * back to the icon-and-type card, so nothing renders as a broken image
 * placeholder and the catalogue never shows an empty image box.
 *
 * Each group is a left-hand heading beside a two-card row, the layout
 * CoursesSection already uses, rather than one flat six-card grid - a shopper
 * looking for millet should not have to read past hair care to find it.
 *
 * Prices are rendered from the data, never typed into this file, which is why
 * the TODO PLACEHOLDER comments live in data/shop.js and not here. Until the
 * real figures replace them, what the customer sees is a demonstration.
 *
 * Copy and prices live in data/shop.js.
 */
export default function ShopPage() {
  return (
    <>
      <main id="main" tabIndex={-1}>
        {/* Opening statement, on the supplied shop backdrop.

            Both backdrops fill the viewport - `min-h-[100svh]`, the same
            full-bleed arrangement the homepage hero uses - and the copy is
            centred within them, so the statement sits in the middle of the
            artwork's open field instead of hugging the bar at the top.

            Two backdrops render and the md breakpoint decides which is
            displayed, so a phone never fetches the system artwork and a
            desktop never fetches the mobile one. The copy is shared, so the
            two compositions cannot drift apart. */}
        <section aria-label="Shop">
          <div
            className="shop-system-bg relative hidden min-h-[100svh] flex-col md:flex"
            style={{ backgroundImage: `url(${systemShop})` }}
          >
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 pt-28 pb-10 lg:pt-32">
              <ShopHeroCopy variant="desktop" />
            </div>
          </div>

          <div
            className="shop-mobile-bg relative flex min-h-[100svh] flex-col md:hidden"
            style={{ backgroundImage: `url(${mobileShop})` }}
          >
            {/* The bottom padding is the bar clearance (5rem) plus 30svh: with
                the copy centred, that lifts the statement up by 15% of the
                screen height - past the 10% first asked for, because at exactly
                10% the lead's last line still lands on the lotus on shorter
                phones. The clean upper field of the artwork runs to 61% of its
                height; this is the smallest lift that clears it everywhere. */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pt-20 pb-[calc(5rem+30svh)]">
              <ShopHeroCopy variant="mobile" />
            </div>
          </div>
        </section>

        {/* One section per category, alternating bone and cream */}
        {categories.map(({ name, icon: CategoryIcon, blurb, products }, categoryIndex) => (
          <Section key={name} tone={tones[categoryIndex % tones.length]}>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <span className="flex size-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <CategoryIcon className="size-5" strokeWidth={1.2} aria-hidden="true" />
                  </span>

                  <h2 className="mt-6 font-display text-[clamp(1.75rem,3.4vw,2.375rem)] font-medium text-forest">
                    {name}
                  </h2>

                  <p className="mt-4 max-w-[42ch] font-sans text-[0.9375rem] leading-[1.75] text-pretty text-forest/70">
                    {blurb}
                  </p>

                  <span aria-hidden="true" className="gold-hairline mt-7 block h-px w-16" />
                </div>
              </Reveal>

              <ul className="grid gap-6 sm:grid-cols-2 sm:gap-7">
                {products.map((product, index) => {
                  const {
                    name: productName,
                    icon: ProductIcon,
                    image: productImage,
                    price,
                    copy,
                    benefits,
                  } = product

                  return (
                    <Reveal
                      as="li"
                      key={productName}
                      delay={index * 110 + categoryIndex * 60}
                      className="h-full"
                    >
                      <article className="flex h-full flex-col rounded-[22px] border border-forest/10 bg-bone/60 p-7 backdrop-blur-sm">
                        {productImage ? (
                          <>
                            {/* A supplied photograph opens the card, framed by
                                the card's own padding the way the artwork shows.
                                `cover` unifies the two supplied aspect ratios
                                (3:2 and 16:9) onto one 3:2 frame. */}
                            <img
                              src={productImage}
                              alt=""
                              className="aspect-[3/2] w-full rounded-xl object-cover"
                              loading="lazy"
                            />

                            {/* Name and price share the row under the photo */}
                            <div className="mt-6 flex items-baseline justify-between gap-4">
                              <h3 className="font-display text-[1.375rem] font-medium text-forest">
                                {productName}
                              </h3>

                              <p className="shrink-0 font-display text-[1.375rem] font-medium tabular-nums text-forest">
                                {formatPrice(price)}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-start justify-between gap-4">
                              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                                <ProductIcon className="size-5" strokeWidth={1.2} aria-hidden="true" />
                              </span>

                              {/* Price first-class, beside the icon rather than under the copy */}
                              <p className="shrink-0 text-right font-display text-[1.375rem] font-medium tabular-nums text-forest">
                                {formatPrice(price)}
                              </p>
                            </div>

                            <h3 className="mt-6 font-display text-[1.375rem] font-medium text-forest">
                              {productName}
                            </h3>
                          </>
                        )}

                        <p className="mt-3 font-sans text-[0.9375rem] leading-[1.75] text-pretty text-forest/70">
                          {copy}
                        </p>

                        {/* What it is made of, in place of a specification table */}
                        <ul className="mt-6 flex flex-col gap-2.5">
                          {benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2.5">
                              <Check
                                className="mt-0.5 size-3.5 shrink-0 text-gold"
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                              <span className="font-sans text-[0.8125rem] leading-[1.5] text-forest/60">
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Buy opens the buying form at /buy for this exact
                            product (the slug is the product's stable `id`),
                            slightly larger than a standard CTA so it reads as
                            the card's one action */}
                        <div className="mt-7">
                          <Button
                            href={`/buy?product=${product.id}`}
                            withArrow
                            className="w-full py-4 text-[0.875rem]"
                          >
                            Buy
                          </Button>
                        </div>
                      </article>
                    </Reveal>
                  )
                })}
              </ul>
            </div>
          </Section>
        ))}

        {/* Sourcing, on the dark botanical band */}
        <Section tone="forest">
          <Reveal>
            <SectionHeading eyebrow="How we make it" title={sourcing.title} lead={sourcing.lead} tone="light" />
          </Reveal>

          <ol className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
            {sourcing.points.map((point, index) => (
              <Reveal as="li" key={point.title} delay={index * 110}>
                <div className="h-full rounded-[22px] border border-bone/12 bg-bone/5 p-7 backdrop-blur-sm">
                  <span className="inline-flex size-10 items-center justify-center rounded-full border border-gold/45 font-display text-[1.0625rem] text-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="mt-6 font-display text-[1.375rem] font-medium text-bone">
                    {point.title}
                  </h3>

                  <p className="mt-3 font-sans text-[0.9375rem] leading-[1.75] text-pretty text-bone/70">
                    {point.body}
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
                {shopCta.title}
              </h2>

              <p className="mt-4 font-sans text-[0.9375rem] leading-[1.75] text-pretty text-forest/70 md:text-base">
                {shopCta.copy}
              </p>

              <span aria-hidden="true" className="gold-hairline mx-auto mt-7 block h-px w-16" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-9 flex flex-col items-center gap-5">
              <Button href="/contact" withArrow>
                {shopCta.buttonLabel}
              </Button>

              <p className="font-sans text-[0.8125rem] text-forest/55">
                Prefer to just ask?{' '}
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
