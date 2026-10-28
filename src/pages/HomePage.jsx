import Hero from '../components/Hero'
import AboutSection from '../components/sections/AboutSection'
import ShopSection from '../components/sections/ShopSection'
import CoursesSection from '../components/sections/CoursesSection'
import SessionSection from '../components/sections/SessionSection'
import ContactSection from '../components/sections/ContactSection'

/**
 * The homepage: hero, then the sections below it.
 *
 * Every navbar anchor resolves to an id in this tree - #about, #shop,
 * #courses, #book-a-session, #contact - so the section links can be written
 * as `/#anchor` and still land here when arriving from another page.
 *
 * The pinned navbar lives above this in App, not inside it, so it survives
 * navigation instead of remounting.
 */
export default function HomePage() {
  return (
    <main id="main" tabIndex={-1}>
      <Hero />
      <AboutSection />
      <ShopSection />
      <CoursesSection />
      <SessionSection />
      <ContactSection />
    </main>
  )
}