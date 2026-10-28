import { Eye } from 'lucide-react'
import { useState } from 'react'

const base =
  'w-full rounded-2xl border border-forest/20 bg-cream/50 py-3.5 pl-11 font-sans text-[0.9375rem] text-forest placeholder:text-forest/40 transition-colors duration-300 focus:border-forest/45 focus:bg-cream focus:outline-none'

/**
 * One labelled field in an account form.
 *
 * The reveal toggle owns its own state rather than lifting it to the page, so
 * each password field flips independently and the pages above do not have to
 * keep a `revealed` boolean in sync. Two fields that mirror each other - the
 * password and its confirmation - would need lifting on purpose, so callers
 * that need that can pass revealable={false} on one and control it.
 */
export default function AccountField({
  id,
  label,
  icon: Icon,
  type = 'text',
  revealable = false,
  hint,
  hintId,
  ...rest
}) {
  const [revealed, setRevealed] = useState(false)
  const resolved = revealable && revealed ? 'text' : type

  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>

      {/* Only the input and its overlays sit inside the positioning context.
          Adding the hint here would make it part of the box the icon and the
          reveal button centre on, so on any field that has a hint they would
          both drop below the middle of the input. */}
      <div className="relative">
        <Icon
          className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-forest/45"
          strokeWidth={1.4}
          aria-hidden="true"
        />

        <input
          id={id}
          type={resolved}
          aria-describedby={hint ? hintId : undefined}
          className={`${base} ${revealable ? 'pr-12' : 'pr-4'}`}
          {...rest}
        />

        {revealable && (
          <button
            type="button"
            onClick={() => setRevealed((shown) => !shown)}
            aria-label={revealed ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}
            aria-pressed={revealed}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1.5 text-forest/50 transition-colors duration-300 hover:bg-forest/10 hover:text-forest"
          >
            <Eye className="size-4" strokeWidth={1.4} aria-hidden="true" />
          </button>
        )}
      </div>

      {hint && (
        <p id={hintId} className="mt-2 font-sans text-[0.75rem] text-forest/50">
          {hint}
        </p>
      )}
    </div>
  )
}