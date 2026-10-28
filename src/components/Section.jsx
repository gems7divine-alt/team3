const tones = {
  bone: 'bg-bone text-forest',
  cream: 'bg-cream text-forest',
  forest: 'bg-forest text-bone',
}

/**
 * Shared page-section frame: consistent rhythm, measure and padding, plus the
 * id that the navbar anchors point at.
 *
 * scroll-mt clears the pinned bar, so following an anchor never parks a
 * section title underneath it.
 */
export default function Section({ id, tone = 'bone', className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 md:py-28 ${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">{children}</div>
    </section>
  )
}