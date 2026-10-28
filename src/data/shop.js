import dryFruitsPhoto from '../assets/Edible Dry Fruits.png'
import hairPackPhoto from '../assets/Hair Pack.png'
import hairOilPhoto from '../assets/Handmade Hair Oil.png'
import milletCookiesPhoto from '../assets/Millet Cookies.png'
import milletMixPhoto from '../assets/Millet Mix.png'
import seaSaltPhoto from '../assets/Sea Salt.png'
import { Cookie, Droplet, Flower2, Nut, Waves, Wheat } from 'lucide-react'

/**
 * Copy for the Shop page, kept apart from the markup in
 * pages/shop/ShopPage.jsx so the words, icons and product lists can be edited
 * without touching layout, the same split data/about.js and data/courses.js
 * use for their pages.
 *
 * These are the real products. The `products` array in data/site.js is a
 * different list - three brand-level families - and stays where it is,
 * because the homepage's ShopSection is a short summary of what is made here
 * rather than the catalogue itself.
 *
 * ===================================================================
 *  !! EVERY `price` BELOW IS A PLACEHOLDER AND IS NOT A REAL PRICE !!
 * ===================================================================
 *
 * These figures were invented to make the shop demonstrable. They are
 * plausible for small-batch Indian wellness goods, which is exactly why they
 * are dangerous: a wrong price on a live shop is the one mistake that a
 * customer cannot discover for themselves. Replace all six with the real
 * numbers before this site takes an order, and delete this banner when you
 * have.
 *
 * `price` is a whole number of rupees, never a float and never a string.
 * src/utils/money.js formats it for display, so keeping it an integer here is
 * what keeps every figure consistent.
 *
 * `id` is a stable slug rather than the product name so that rewording a
 * product does not orphan anything that references it.
 *
 * Every product now carries a supplied photograph in `image`, and the card
 * renders that photo at its top. The icon-and-type card stays as the fallback
 * for any product added without a photograph, so nothing ever renders as a
 * broken image placeholder or an empty image box.
 *
 * `categories` is the page's structure. Each group gets its own section with
 * its own heading, so a product is added by adding an object to the list its
 * family already belongs to - there is no second index to keep in step.
 */

/** Opening statement at the top of the page. */
export const shopHero = {
  title: 'Made in small batches, by hand.',
  lead: 'Hair care, millet snacks and a few pantry staples we make ourselves or choose ourselves. Nothing is bought in and relabelled, and nothing here is sold by weight - each is one recipe, made the same way every time.',
}

/**
 * The catalogue, grouped the way it is stocked.
 *
 * Category icons are kept distinct from their products' icons so the section
 * heading and the card it introduces never read as the same thing.
 */
export const categories = [
  {
    name: 'Hair Care',
    icon: Flower2,
    blurb: 'Two preparations for the head and hair, made in the same small batches as everything else here.',
    products: [
      {
        id: 'handmade-hair-oil',
        name: 'Handmade Hair Oil',
        icon: Droplet,
        image: hairOilPhoto, // Supplied photograph, shown at the top of the card
        price: 450, // TODO PLACEHOLDER - replace with the real price
        copy: 'A blended oil massaged into the scalp and lengths, made to soften, strengthen and cut down on breakage rather than sitting on top of it.',
        benefits: ['Cold-pressed base oils', 'No mineral or silicone fillers', 'Small-batch, hand poured'],
      },
      {
        id: 'hair-pack',
        name: 'Hair Pack',
        icon: Flower2,
        image: hairPackPhoto, // Supplied photograph, shown at the top of the card
        price: 380, // TODO PLACEHOLDER - replace with the real price
        copy: 'A botanical paste for the scalp and roots, worked in before washing. It does the work an oil cannot - lifting, conditioning and cooling.',
        benefits: ['Grounded botanicals', 'No added fragrance oils', 'Enough for several applications'],
      },
    ],
  },
  {
    name: 'Millet Kitchen',
    icon: Cookie,
    blurb: 'Everyday millet food, made to be eaten rather than to be bought for the shelf.',
    products: [
      {
        id: 'millet-cookies',
        name: 'Millet Cookies',
        icon: Cookie,
        image: milletCookiesPhoto, // Supplied photograph, shown at the top of the card
        price: 180, // TODO PLACEHOLDER - replace with the real price
        copy: 'Baked instead of fried, sweetened lightly and carrying the nuttiness of the grain rather than hiding it under butter.',
        benefits: ['Baked, not fried', 'No maida or refined flour', 'Sweetened with jaggery'],
      },
      {
        id: 'millet-mix',
        name: 'Millet Mix',
        icon: Wheat,
        image: milletMixPhoto, // Supplied photograph, shown at the top of the card
        price: 220, // TODO PLACEHOLDER - replace with the real price
        copy: 'A whole-grain millet blend for porridge, upma or a fried side dish, portioned so there is nothing to measure and nothing to get wrong.',
        benefits: ['No soaking needed', 'Cooks in 15 minutes', 'One bag, several dishes'],
      },
    ],
  },
  {
    name: 'Pantry',
    icon: Nut,
    blurb: 'Two staples worth keeping in the kitchen and worth knowing where they came from.',
    products: [
      {
        id: 'edible-dry-fruits',
        name: 'Edible Dry Fruits',
        icon: Nut,
        image: dryFruitsPhoto, // Supplied photograph, shown at the top of the card
        price: 350, // TODO PLACEHOLDER - replace with the real price
        copy: 'A straightforward mix of dried fruit and nuts, chosen for eating as they are rather than as an afterthought to something else.',
        benefits: ['No added sugar or oil', 'Sorted by hand', 'Resealable packs'],
      },
      {
        id: 'sea-salt',
        name: 'Sea Salt',
        icon: Waves,
        image: seaSaltPhoto, // Supplied photograph, shown at the top of the card
        price: 150, // TODO PLACEHOLDER - replace with the real price
        copy: 'Unrefined sea salt, coarse enough to grind and fine enough to season. It is the one thing here that goes in almost everything.',
        benefits: ['Unrefined, unwashed', 'Coarse and fine', 'Food grade, sealed'],
      },
    ],
  },
]

/**
 * The dark botanical band between the catalogue and the closing call to
 * action. Three points, because three is what the band can hold at the
 * `md:grid-cols-3` breakpoint without the cards going thin.
 */
export const sourcing = {
  title: 'Where these come from',
  lead: 'Three things we will not trade away, whatever the season or the cost.',
  points: [
    {
      title: 'Small runs',
      body: 'Made in batches we could finish by hand, which is why some things sell out and then come back.',
    },
    {
      title: 'Named ingredients',
      body: 'Anything on a label is something we could say out loud, and nothing is listed to pad the list.',
    },
    {
      title: 'No stock-ups',
      body: 'We do not buy in bulk to sit in a warehouse. A batch that sells goes back in the making, not the shelf.',
    },
  ],
}

/**
 * Closing band. `buttonLabel` names the contact form rather than a checkout,
 * because the form is real and a basket would not be.
 */
export const shopCta = {
  title: 'Want to know about a batch?',
  copy: 'Stock moves in small runs, so tell us what you are after and we will tell you honestly whether there is any left or when the next batch is ready.',
  buttonLabel: 'Ask about a product',
}
