/**
 * Copy for the About Us page, kept apart from the markup in
 * pages/AboutUsPage/AboutUs.jsx so the words can be edited without touching
 * layout. The homepage still carries its own shorter summary in
 * components/sections/AboutSection.jsx - this is the full account.
 */

export const aboutHero = {
  title: 'Meet your guide to wellness',
  lead: 'A journey of transformation begins with understanding and compassion',
  photoCaption: 'Wellness coach in peaceful meditation',
}

/**
 * The coach, in one line. The name and role restate the opening of
 * myStory.paragraphs[0] as structured facts, so the homepage can introduce
 * the person behind the brand without quoting a whole paragraph.
 */
export const coach = {
  name: 'Ananthi Josh',
  role: 'Rarefactree Coach',
}

export const myStory = {
  title: 'My story',
  paragraphs: [
    "I'm Ananthi Josh, a Rarefactree Coach. My transformation started when stress and burnout took over my life. Through breathwork, mudras, energy alignment, and mindful practices, I learned how to reset my inner state. Now, I help others release stress, calm their mind, and return to clarity and balance from within.",
    'This awakening guided me to study with renowned teachers across both ancient and modern disciplines, from yoga and meditation to mudras and behavioral psychology. Through this journey, I discovered that true wellness is not about perfection, but about living in balance and trusting the body’s natural intelligence',
    'Today, I help others unlock their path to true vitality. Through Rarefactree coaching, I integrate evidence-based methods with intentional guidance to drive real, sustainable transformation.',
  ],
}

export const philosophy = {
  title: 'The Rarefactree philosophy',
  paragraphs: [
    'Prana, the life force that flows within all of us, often becomes blocked through stress, lifestyle imbalances, and a disconnect from who we truly are. The Rarefactree approach gently clears these blockages, allowing you to return to your natural flow of energy, clarity, and vitality',
  ],
}

/** The three ordered stages. `step` is rendered, not derived from position. */
export const philosophySteps = [
  {
    step: '1',
    title: 'Awareness',
    body: 'Develop deep understanding of your patterns, triggers, and innate strengths',
  },
  {
    step: '2',
    title: 'Integration',
    body: 'Build sustainable practices that align with your values and lifestyle',
  },
  {
    step: '3',
    title: 'Transformation',
    body: 'Experience lasting change that radiates through all areas of your life',
  },
]

export const credentials = {
  title: 'Credentials and training',
  items: [
    'Certified Mudra Practitioner',
    'Chakra Alignment Coach',
    'Holistic Health Specialist',
    '500+ clients guided',
  ],
}

/**
 * Footer copy, on the About page for now.
 *
 * `Testimonials` points at a route that does not exist yet - it lands on the
 * not-found page rather than a blank screen, because App routes `*` to one.
 * Contact stays a fragment so it returns to the homepage contact band.
 */
export const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/#contact' },
]

export const contactDetails = {
  email: 'aj@pranareset.org',
  phone: '+91 9840206469',
}

export const copyright = '© 2026 Rarefactree Coaching. All rights reserved.'