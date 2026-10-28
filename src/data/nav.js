/**
 * Everything the navbar renders, kept apart from the page copy in site.js so
 * the menu can be edited without touching section content.
 *
 * To change the menu, edit navLinks only. Add `hasMenu: true` to give an entry
 * a caret, and `active: true` to mark the current page.
 *
 * Section entries used to be `/#anchor` rather than bare `#anchor` - from the
 * homepage the leading slash was a no-op and the browser jumped to the
 * fragment; from another page the same href loaded the homepage and landed on
 * the right section. No entry needs that any more: every row now points at its
 * own route and renders as a <Link>, so each changes view without a document
 * load. NavAnchor still carries the anchor path for any future entry that
 * needs it.
 *
 * Shop, Courses and Book a Session are pages rather than the /#shop,
 * /#courses and /#book-a-session homepage anchors so the real catalogue, the
 * full programme list and the booking forms are one click away from anywhere.
 * The homepage bands are still there for anyone linking straight to them.
 *
 * No entry carries `hasMenu` any more: the caret it draws advertises a
 * dropdown, and there is no dropdown on any of these destinations. Add the flag
 * back on the row that grows a real submenu, not before.
 */
export const navLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Shop', href: '/shop' },
  { label: 'Courses', href: '/courses' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book a Session', href: '/book-session' },
]