import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Check, MapPin, Minus, Phone, Plus, User } from 'lucide-react'
import AccountField from '../../components/account/AccountField'
import AccountShell from '../../components/account/AccountShell'
import Button from '../../components/Button'
import { categories } from '../../data/shop'
import { formatPrice } from '../../utils/money'

/** One flat list, so a ?product= slug finds its product in one lookup. */
const catalogue = categories.flatMap((category) => category.products)

/**
 * The buying page, at /buy - reached from a product's Buy press on the shop.
 *
 * There is no cart in the project and no checkout, so this page collects what
 * a small-batch order actually needs - how many, who is buying, where it
 * should go - and ends in a confirmation, the same inline honesty the login
 * form applies: nothing is sent or stored anywhere.
 *
 * The product travels here as a ?product= slug rather than router state, so a
 * refresh or a shared link still shows the right product; the slug matches the
 * stable `id` each product already carries. An unknown or missing slug gets a
 * "pick something first" panel rather than an invented product.
 */
export default function ProductBuyingPage() {
  const [searchParams] = useSearchParams()
  const product = catalogue.find((entry) => entry.id === searchParams.get('product')) ?? null

  const [count, setCount] = useState(1)
  const [buyer, setBuyer] = useState({ name: '', mobile: '', address: '' })
  const [confirmed, setConfirmed] = useState(false)

  function update(field) {
    return (event) => {
      setBuyer((current) => ({ ...current, [field]: event.target.value }))
    }
  }

  function onSubmit(event) {
    event.preventDefault()
    setConfirmed(true)
  }

  return (
    <AccountShell
      title={product ? 'Almost yours.' : 'Nothing picked yet.'}
      lead={
        product
          ? 'Tell us where the batch should go and we will confirm it by phone.'
          : 'Pick something in the shop first, and this form will be waiting.'
      }
    >
      {product ? (
        confirmed ? (
          /* The confirmation replaces the form inline - no backend, no fake
             order record, just what was agreed on this screen. */
          <div className="mt-7 rounded-[22px] border border-forest/10 bg-cream/70 p-7 text-center">
            <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-forest/10 text-forest">
              <Check className="size-5" strokeWidth={1.6} aria-hidden="true" />
            </span>

            <p className="mt-5 font-display text-[1.25rem] font-medium text-forest">
              Purchase confirmed.
            </p>

            <p className="mt-3 font-sans text-[0.9375rem] leading-[1.7] text-pretty text-forest/70">
              {count} × {product.name} - {formatPrice(product.price * count)}. We will
              call {buyer.mobile} to settle delivery and payment.
            </p>

            <Button href="/shop" variant="secondary" className="mt-6">
              Back to the shop
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-4">
            {/* The product and its count, priced live against the data */}
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-forest/10 bg-cream/50 px-5 py-4">
              <div>
                <p className="font-display text-[1.0625rem] font-medium text-forest">
                  {product.name}
                </p>

                <p className="mt-1 font-sans text-[0.8125rem] text-forest/55">
                  {formatPrice(product.price)} each
                </p>
              </div>

              {/* The count of products, stepped rather than typed - a small
                  batch site does not sell thirty of anything, so the control
                  stops at nine */}
              <div className="flex shrink-0 items-center gap-1 rounded-full border border-forest/20 bg-cream p-1">
                <button
                  type="button"
                  onClick={() => setCount((current) => Math.max(1, current - 1))}
                  disabled={count <= 1}
                  aria-label="One fewer"
                  className="flex size-8 items-center justify-center rounded-full text-forest transition-colors duration-300 hover:bg-forest/10 disabled:opacity-35 disabled:hover:bg-transparent"
                >
                  <Minus className="size-4" strokeWidth={1.6} aria-hidden="true" />
                </button>

                <span
                  aria-live="polite"
                  className="w-7 text-center font-display text-[1.0625rem] font-medium tabular-nums text-forest"
                >
                  {count}
                </span>

                <button
                  type="button"
                  onClick={() => setCount((current) => Math.min(9, current + 1))}
                  disabled={count >= 9}
                  aria-label="One more"
                  className="flex size-8 items-center justify-center rounded-full text-forest transition-colors duration-300 hover:bg-forest/10 disabled:opacity-35 disabled:hover:bg-transparent"
                >
                  <Plus className="size-4" strokeWidth={1.6} aria-hidden="true" />
                </button>
              </div>
            </div>

            <p className="text-center font-sans text-[0.8125rem] font-medium text-forest/70">
              Total {formatPrice(product.price * count)}
            </p>

            <AccountField
              id="buy-name"
              label="Full name"
              icon={User}
              name="name"
              required
              autoComplete="name"
              placeholder="Full name"
              value={buyer.name}
              onChange={update('name')}
            />

            <AccountField
              id="buy-mobile"
              label="Mobile number"
              icon={Phone}
              type="tel"
              name="mobile"
              required
              autoComplete="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="10-digit mobile number"
              value={buyer.mobile}
              onChange={update('mobile')}
              hint="10 digits, no spaces or dashes."
              hintId="buy-mobile-hint"
            />

            {/* Address - a textarea, which AccountField does not carry, styled
                with the same field classes and icon position */}
            <div>
              <label htmlFor="buy-address" className="sr-only">
                Address
              </label>

              <div className="relative">
                <MapPin
                  className="pointer-events-none absolute top-4 left-4 size-4 text-forest/45"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />

                <textarea
                  id="buy-address"
                  name="address"
                  required
                  rows={3}
                  placeholder="Address - house, street, city, pincode"
                  value={buyer.address}
                  onChange={update('address')}
                  className="w-full resize-none rounded-2xl border border-forest/20 bg-cream/50 py-3.5 pr-4 pl-11 font-sans text-[0.9375rem] text-forest placeholder:text-forest/40 transition-colors duration-300 focus:border-forest/45 focus:bg-cream focus:outline-none"
                />
              </div>
            </div>

            <Button type="submit" className="mt-1 w-full py-4 text-[0.9375rem]">
              Confirm purchase
            </Button>

            <p className="text-center font-sans text-[0.75rem] text-forest/45">
              Payments are not connected yet, so confirming places no real order.
            </p>
          </form>
        )
      ) : (
        <div className="mt-7 text-center">
          <Button href="/shop" withArrow>
            Pick something in the shop
          </Button>
        </div>
      )}
    </AccountShell>
  )
}
