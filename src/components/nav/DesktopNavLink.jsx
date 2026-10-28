import { ChevronDown } from 'lucide-react'
import NavAnchor from './NavAnchor'

/**
 * One entry in the desktop bar: caret for dropdown parents, hairline that
 * grows in on hover and sits permanently under the active page.
 *
 * Links sit at full brand green rather than a translucent tint, matching the
 * wordmark. With the base colour no longer carrying opacity, hover deepens the
 * green instead of just removing the transparency.
 *
 * NavAnchor decides whether this entry is a route or an in-page anchor.
 */
export default function DesktopNavLink({ item }) {
  return (
    <NavAnchor
      href={item.href}
      aria-current={item.active ? 'page' : undefined}
      className="group relative inline-flex items-center gap-1 py-1.5 text-[0.59375rem] font-medium tracking-[0.04em] whitespace-nowrap text-forest transition-colors duration-300 hover:text-forest-deep lg:text-[0.72rem] xl:text-[0.8rem]"
    >
      {item.label}

      {item.hasMenu && (
        <ChevronDown
          className="size-3 stroke-[1.5] transition-transform duration-300 group-hover:rotate-180"
          aria-hidden="true"
        />
      )}

      <span
        aria-hidden="true"
        className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-forest transition-transform duration-300 ease-out ${
          item.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </NavAnchor>
  )
}