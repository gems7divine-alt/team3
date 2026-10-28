import { Link } from 'react-router-dom'

/**
 * One nav destination, rendered as whichever element suits it.
 *
 * A href that names a page - /about, /contact - is a <Link>, so the router
 * swaps views without a document load. A href of /#anchor is left as a plain
 * anchor: the leading slash makes the browser jump to the fragment in place,
 * which is exactly the behaviour wanted, and it still does the right thing
 * when arriving from another page.
 */
export default function NavAnchor({ href, children, ...rest }) {
  const isRoute = href.startsWith('/') && !href.startsWith('/#')

  if (isRoute) return <Link to={href} {...rest}>{children}</Link>

  return <a href={href} {...rest}>{children}</a>
}