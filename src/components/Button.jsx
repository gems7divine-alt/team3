import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'bg-forest text-bone shadow-[0_12px_30px_-16px_rgba(35,77,54,0.8)] hover:bg-forest-deep',
  secondary:
    'border border-forest/35 bg-cream/55 text-forest backdrop-blur-sm hover:border-forest/55 hover:bg-cream',
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium tracking-[0.08em] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0'

/**
 * Pill CTA shared by both hero compositions. Renders an anchor when given an
 * href and a real button otherwise.
 */
export default function Button({
  href,
  variant = 'primary',
  withArrow = false,
  className = '',
  children,
  ...rest
}) {
  const Element = href ? 'a' : 'button'

  return (
    <Element
      href={href}
      type={href ? undefined : 'button'}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {withArrow && (
        <ArrowRight
          className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </Element>
  )
}