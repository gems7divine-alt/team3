import { Bath, Droplet, Flower2, Handshake, Leaf, Moon, Sprout, Sun, UserRound, Users } from 'lucide-react'

/**
 * Page copy. Menu items live in nav.js instead, so the two can be edited
 * independently.
 */

/** The four trust points in the card at the foot of the hero. */
export const trustFeatures = [
  { icon: Leaf, lines: ['100% Natural', '& Safe'] },
  { icon: Flower2, lines: ['Home Made', 'Inspired'] },
  { icon: UserRound, lines: ['Expert', 'Guidance'] },
  { icon: Users, lines: ['Trusted by', 'Thousands'] },
]

/** About Us - the three things we hold to. */
export const principles = [
  'Cold-pressed and blended in small batches',
  'Botanicals chosen for how they actually work',
  'Courses and sessions paced for real life',
]

/** Shop - the three product families. */
export const products = [
  {
    icon: Droplet,
    name: 'Cold-Pressed Body Oils',
    copy: 'Single-origin oils, warmed and blended by hand to soften, calm and restore.',
  },
  {
    icon: Sprout,
    name: 'Herbal Tonics',
    copy: 'Slow-steeped infusions for rest, clarity and a steadier kind of morning.',
  },
  {
    icon: Bath,
    name: 'Ritual Sets',
    copy: 'Oils, teas and tools gathered into one unhurried daily practice.',
  },
]

/** Courses - self-paced programmes. */
export const courses = [
  {
    name: 'The Daily Reset',
    copy: 'Four weeks on breath, rhythm and a restorative evening practice that survives a busy week.',
  },
  {
    name: 'Herbal Foundations',
    copy: 'Learn to blend and use everyday botanicals with real confidence and care.',
  },
  {
    name: 'Mindful Living',
    copy: 'Build a rhythm of attention and rest you can keep for years, not weeks.',
  },
]

/** Book a Session - what a session can be. */
export const sessionTypes = [
  { icon: Sun, name: 'Sixty-Minute Consultation', copy: 'A quiet one-to-one read on where you are now.' },
  { icon: Moon, name: 'Restorative Session', copy: 'Hands-on practice to settle the nervous system.' },
  { icon: Handshake, name: 'Online Follow-Up', copy: 'Continue the work from wherever you are.' },
]