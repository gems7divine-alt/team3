/**
 * Every rupee figure on the site goes through here, so the currency, the
 * grouping and the rounding are decided in exactly one place.
 *
 * `en-IN` rather than `en-US`: it is the locale that writes 1,29,999 rather
 * than 129,999, which is how the amount would be written by hand in India and
 * therefore how a customer should read it back.
 *
 * Whole rupees only. Every price in data/shop.js and data/courses.js is an
 * integer, so there is never a fractional rupee to round.
 */
const rupees = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

/** A stored integer amount as a display string, e.g. 1299 -> "₹1,299". */
export function formatPrice(amount) {
  return rupees.format(amount)
}
