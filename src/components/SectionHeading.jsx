/**
 * Eyebrow, serif heading and lead paragraph in one place, so every section
 * introduces itself the same way. `tone="light"` flips the type for the dark
 * botanical green bands.
 */
export default function SectionHeading({ eyebrow, title, lead, align = 'center', tone = 'dark' }) {
  const isLight = tone === 'light'
  const centred = align === 'center'

  return (
    <div className={centred ? 'mx-auto max-w-[54ch] text-center' : 'max-w-[54ch]'}>
      <p
        className={`text-[0.6875rem] font-medium tracking-[0.34em] uppercase ${
          isLight ? 'text-bone/60' : 'text-forest/60'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-4 font-display text-[clamp(1.875rem,4.2vw,3rem)] font-medium ${
          isLight ? 'text-bone' : 'text-forest'
        }`}
      >
        {title}
      </h2>

      {lead && (
        <p
          className={`mt-4 font-sans text-[0.9375rem] leading-[1.7] text-pretty md:text-base ${
            isLight ? 'text-bone/75' : 'text-forest/70'
          }`}
        >
          {lead}
        </p>
      )}

      <span
        aria-hidden="true"
        className={`gold-hairline mt-7 block h-px w-16 ${centred ? 'mx-auto' : ''}`}
      />
    </div>
  )
}