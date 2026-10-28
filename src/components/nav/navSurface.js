/**
 * The bar's own background layer, shared by the desktop and phone bars so the
 * two switch to an identical surface at the same moment.
 *
 * The transparent state still declares a 1px bottom border in order to keep
 * the height identical either way, so the bar does not jump when the surface
 * appears.
 */
export const surfaceBase =
  'border-b transition-[background-color,box-shadow,border-color] duration-500 ease-out'

export const surfaceAtTop = 'border-transparent bg-transparent'

export const surfaceScrolled =
  'border-forest/10 bg-bone/85 bar-shadow backdrop-blur-md'

/** The bar eases a little tighter once it is pinned. */
export const padAtTop = 'py-5'
export const padScrolled = 'py-3'