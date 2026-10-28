import { useState } from 'react'
import { Check, Mail, MessageSquare, Phone, User } from 'lucide-react'
import AccountField from '../../components/account/AccountField'
import AccountShell from '../../components/account/AccountShell'
import Button from '../../components/Button'
import { formatPrice } from '../../utils/money'

/** The paid session's price, in whole rupees - the only figure the page carries. */
const PAID_SESSION_PRICE = 1000

/**
 * One session booking form, shared by the free and the paid card so the four
 * fields can never drift between them. `kind` only changes the words around
 * the fields and inside the confirmation; the fields themselves are the same
 * four on both cards, exactly as the page specifies.
 *
 * Submission ends in an inline confirmation and sends nothing - there is no
 * backend, the same honesty the login and buying pages state out loud.
 */
function SessionForm({ idPrefix, kind }) {
  const isFree = kind === 'free'
  const [details, setDetails] = useState({ name: '', email: '', mobile: '', reason: '' })
  const [confirmed, setConfirmed] = useState(false)

  function update(field) {
    return (event) => {
      setDetails((current) => ({ ...current, [field]: event.target.value }))
    }
  }

  function onSubmit(event) {
    event.preventDefault()
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <div className="rounded-[22px] border border-forest/10 bg-cream/70 p-7 text-center">
        <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-forest/10 text-forest">
          <Check className="size-5" strokeWidth={1.6} aria-hidden="true" />
        </span>

        <p className="mt-5 font-display text-[1.25rem] font-medium text-forest">
          Session requested.
        </p>

        <p className="mt-3 font-sans text-[0.9375rem] leading-[1.7] text-pretty text-forest/70">
          {isFree ? 'Your free half hour' : 'Your one-hour session'} - we will call{' '}
          {details.mobile} to fix the time
          {isFree ? '' : `, and the ${formatPrice(PAID_SESSION_PRICE)} is settled when it is confirmed`}.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
      <AccountField
        id={`${idPrefix}-name`}
        label="Full name"
        icon={User}
        name="name"
        required
        autoComplete="name"
        placeholder="Full name"
        value={details.name}
        onChange={update('name')}
      />

      <AccountField
        id={`${idPrefix}-email`}
        label="Email address"
        icon={Mail}
        type="email"
        name="email"
        required
        autoComplete="email"
        placeholder="you@email.com"
        value={details.email}
        onChange={update('email')}
      />

      <AccountField
        id={`${idPrefix}-mobile`}
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
        value={details.mobile}
        onChange={update('mobile')}
        hint="10 digits, no spaces or dashes."
        hintId={`${idPrefix}-mobile-hint`}
      />

      {/* The reason - a textarea, which AccountField does not carry, styled
          with the same field classes and icon position */}
      <div>
        <label htmlFor={`${idPrefix}-reason`} className="sr-only">
          Reason for the session
        </label>

        <div className="relative">
          <MessageSquare
            className="pointer-events-none absolute top-4 left-4 size-4 text-forest/45"
            strokeWidth={1.4}
            aria-hidden="true"
          />

          <textarea
            id={`${idPrefix}-reason`}
            name="reason"
            required
            rows={3}
            placeholder={isFree ? 'Reason for the session' : 'What should the hour focus on?'}
            value={details.reason}
            onChange={update('reason')}
            className="w-full resize-none rounded-2xl border border-forest/20 bg-cream/50 py-3.5 pr-4 pl-11 font-sans text-[0.9375rem] text-forest placeholder:text-forest/40 transition-colors duration-300 focus:border-forest/45 focus:bg-cream focus:outline-none"
          />
        </div>
      </div>

      <Button type="submit" className="mt-1 w-full py-4 text-[0.9375rem]">
        Book session
      </Button>
    </form>
  )
}

/**
 * Book a session page, at /book-session.
 *
 * Two sessions, kept as two separate cards on one page because choosing
 * between them is the page's whole job: the free half hour that lets someone
 * start without paying, and the paid full hour at {formatPrice}'d 1000 for
 * when they know what they want to work on.
 *
 * The frame is AccountShell, the same one login, register and the buying page
 * use, so the mark, the measure and the way home stay identical across the
 * site's forms.
 */
export default function BookSessionPage() {
  return (
    <AccountShell
      title="Book a session."
      lead="Two ways to sit down together - a free half hour to begin, and a full hour when you know what to work on."
    >
      <div className="mt-8 flex flex-col gap-6">
        {/* The free session - thirty minutes, nothing to pay */}
        <section aria-labelledby="free-session-heading" className="rounded-[22px] border border-forest/10 bg-cream/70 p-7">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="free-session-heading" className="font-display text-[1.375rem] font-medium text-forest">
              Free session
            </h2>

            <p className="shrink-0 font-display text-[1.125rem] font-medium text-forest">Free</p>
          </div>

          <p className="mt-2 font-sans text-[0.875rem] leading-[1.65] text-forest/60">
            Thirty minutes, to see whether this work is yours.
          </p>

          <SessionForm idPrefix="free" kind="free" />
        </section>

        {/* The paid session - the full hour, at the page's one price */}
        <section aria-labelledby="paid-session-heading" className="rounded-[22px] border border-forest/10 bg-cream/70 p-7">
          <div className="flex items-baseline justify-between gap-4">
            <h2 id="paid-session-heading" className="font-display text-[1.375rem] font-medium text-forest">
              Paid session
            </h2>

            <p className="shrink-0 font-display text-[1.125rem] font-medium tabular-nums text-forest">
              {formatPrice(PAID_SESSION_PRICE)}
            </p>
          </div>

          <p className="mt-2 font-sans text-[0.875rem] leading-[1.65] text-forest/60">
            One full hour, properly held - the same hour the homepage describes.
          </p>

          <SessionForm idPrefix="paid" kind="paid" />
        </section>
      </div>
    </AccountShell>
  )
}
