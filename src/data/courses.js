/**
 * Copy for the Courses page, kept apart from the markup in
 * pages/courses/CoursesPage.jsx so the words can be edited without touching
 * layout, the same split data/about.js uses for the About Us page.
 *
 * ===================================================================
 *  !! EVERY `price` AND `compareAt` BELOW IS A PLACEHOLDER           !!
 *  !! THESE ARE NOT REAL PRICES - REPLACE THEM BEFORE TAKING AN ORDER !!
 * ===================================================================
 *
 * The figures were invented to make the course cards look complete.
 * `compareAt` is the struck-through "was" price that makes a course card read
 * as a sale, which is why there are two numbers per programme and not one - a
 * discount that is entirely invented is the easiest thing on this page to
 * mislead someone. Delete both fields and this banner once real pricing
 * exists.
 *
 * Prices are whole numbers of rupees, and src/utils/money.js formats them for
 * display.
 *
 * The three programme names and summaries are deliberately identical to the
 * `courses` array in data/site.js, which the homepage's CoursesSection still
 * renders as a short summary. That is the whole reason this file exists: the
 * homepage needs a sentence per course, the full page needs several
 * paragraphs and a module list, and neither should have to be rewritten when
 * the other grows or changes.
 */

/** Opening statement at the top of the page. */
export const coursesHero = {
  title: 'Learn it once. Keep it for years.',
  lead: 'Self-paced programmes in breath, rhythm and everyday botanicals - built to be picked up in a spare half hour and put down again when life gets loud.',
}

/**
 * The three programmes, in the order they are taught, from the most
 * immediately useful to the widest-reaching.
 *
 * `duration` and `format` are the two facts a visitor weighs first, so they sit
 * together as a meta row rather than being buried in the copy.
 *
 * `modules` is a flat list of lesson blocks rather than a numbered syllabus -
 * the page renders them as a checklist, not a table of contents, because the
 * order they are worked through in is the reader's own business.
 */
export const programmes = [
  {
    id: 'the-daily-reset',
    name: 'The Daily Reset',
    tagline: 'Four weeks to a practice that survives a busy week',
    copy: 'Stress does not need more willpower to manage, it needs somewhere to put itself. This programme works on breath, mudra and the rhythm of the last hour of the day, so that the practice belongs to your actual life rather than to a version of it with more spare time.',
    duration: '4 weeks',
    format: 'Self-paced, daily practice',
    level: 'Beginner',
    lessons: 16,
    price: 1299, // TODO PLACEHOLDER - replace with the real price
    compareAt: 1799, // TODO PLACEHOLDER - replace with the real strike price
    modules: [
      {
        title: 'Recognising the signal',
        body: 'Reading stress in the body before it reaches your mood - the jaw, the breath, the shallow chest.',
      },
      {
        title: 'Breath as a lever',
        body: 'Four patterns you can use anywhere, and which one to reach for at which hour.',
      },
      {
        title: 'Mudra and still point',
        body: 'Simple hand positions to settle a racing mind, and how long to hold them.',
      },
      {
        title: 'The evening unwind',
        body: 'A twenty-minute wind-down that makes the morning easier to begin.',
      },
    ],
  },
  {
    id: 'herbal-foundations',
    name: 'Herbal Foundations',
    tagline: 'Blend, use and care for everyday botanicals',
    copy: 'Most herbal knowledge is scattered across labels and inherited from whoever taught you first. This programme puts it in order: which plants do what, how to combine them safely, and how to keep a small home shelf that stays fresh and stays useful.',
    duration: '6 weeks',
    format: 'Self-paced, with a blending journal',
    level: 'Beginner',
    lessons: 22,
    price: 1499, // TODO PLACEHOLDER - replace with the real price
    compareAt: 1899, // TODO PLACEHOLDER - replace with the real strike price
    modules: [
      {
        title: 'Reading a plant',
        body: 'Actions, energetics and the language used on labels - decoded.',
      },
      {
        title: 'Blending with intent',
        body: 'Why a formula needs a lead, a support and a finish, and how to build one.',
      },
      {
        title: 'Safety and dosage',
        body: 'Contraindications, interactions and the questions worth asking a pharmacist.',
      },
      {
        title: 'Shelf life and storage',
        body: 'Keeping oils, teas and tinctures potent instead of decorative.',
      },
    ],
  },
  {
    id: 'mindful-living',
    name: 'Mindful Living',
    tagline: 'A rhythm of attention and rest you can keep for years',
    copy: 'The widest of the three, and the one that changes the most. Rather than adding anything to your day, it takes things away: a practice of attention small enough to hold on a difficult morning, and a structure for rest that does not depend on having a free weekend.',
    duration: '8 weeks',
    format: 'Self-paced, weekly reflection',
    level: 'All levels',
    lessons: 28,
    price: 1799, // TODO PLACEHOLDER - replace with the real price
    compareAt: 2299, // TODO PLACEHOLDER - replace with the real strike price
    modules: [
      {
        title: 'Attention, trained',
        body: 'Short daily practices that rebuild the habit of noticing, in ten minutes or less.',
      },
      {
        title: 'Rest without a weekend',
        body: 'Recovering on an ordinary Tuesday rather than waiting for a gap in the diary.',
      },
      {
        title: 'Ritual and repetition',
        body: 'Why the same sequence, repeated, does more than a new one each time.',
      },
      {
        title: 'Keeping it',
        body: 'What to drop when a week goes wrong, so the practice outlasts a bad month.',
      },
    ],
  },
]

/** How a programme actually runs, on the dark botanical band. */
export const method = {
  title: 'How a programme runs',
  lead: 'The same three stages every time, whichever course you pick. Nothing here needs a calendar appointment, and nothing here is over before you have started it.',
  steps: [
    {
      step: '1',
      title: 'Begin',
      body: 'A short orientation so you know what to do first, and what a hard week looks like before you have one.',
    },
    {
      step: '2',
      title: 'Practise',
      body: 'Lessons and guidance at your own speed. Pause for as long as you need, and pick up the same place again.',
    },
    {
      step: '3',
      title: 'Settle',
      body: 'A closing reflection and a maintenance plan, so the practice stays yours after the course ends.',
    },
  ],
}

/** Closing band. The button is a real route to the contact form. */
export const coursesCta = {
  title: 'Not sure which one fits?',
  copy: 'Tell us what you are trying to make easier and we will point you at the right programme - or tell you honestly that a session would serve you better.',
  buttonLabel: 'Ask which course fits',
}
