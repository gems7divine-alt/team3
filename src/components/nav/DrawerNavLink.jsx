import { ChevronDown } from 'lucide-react'
import NavAnchor from './NavAnchor'

/**
 * One row in the mobile drawer. Calls `onNavigate` so picking a link closes it.
 *
 * NavAnchor decides whether this entry is a route or an in-page anchor.
 */
export default function DrawerNavLink({ item, onNavigate }) {
  return (
    <NavAnchor
      href={item.href}
      onClick={onNavigate}
      aria-current={item.active ? 'page' : undefined}
      className={`flex items-center justify-between gap-2 rounded-2xl px-4 py-3.5 font-display text-lg tracking-[0.01em] transition-colors duration-300 ${
        item.active
          ? 'bg-cream text-forest-deep'
          : 'text-forest hover:bg-cream/70 hover:text-forest-deep'
      }`}
    >
      {item.label}

      {item.hasMenu && (
        <ChevronDown className="size-4 stroke-[1.5] text-forest/50" aria-hidden="true" />
      )}
    </NavAnchor>
  )
}