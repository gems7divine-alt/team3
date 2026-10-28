import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUsPage/AboutUs'
import ShopPage from './pages/shop/ShopPage'
import ProductBuyingPage from './pages/productsbuying/ProductBuyingPage'
import BookSessionPage from './pages/booksession/BookSessionPage'
import CoursesPage from './pages/courses/CoursesPage'
import Contact from './pages/contact/Contact'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/registerpage/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'

/**
 * Layout and routing.
 *
 * The navbar is its own section, pinned above the page, and carries its own
 * background surface - it does not borrow either hero backdrop. It sits
 * outside Routes so it persists across pages rather than remounting.
 *
 * Both routes render their own <main id="main">, which is what the skip link
 * targets.
 *
 * Section links are deliberately plain anchors rather than <Link>: they point
 * at /#anchor, and letting the browser handle those means one code path for
 * both "already on the homepage" and "arriving from another page". Only real
 * page changes go through the router.
 */
export default function App() {
  const { pathname } = useLocation()

  // A <Link> change swaps the route without a document load, so the scroll
  // position would otherwise carry over and leave the next page opened
  // part-way down. Keyed on pathname only: a /#anchor navigation is a real
  // browser load, so it never reaches this and keeps its native jump.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-xs focus:font-medium focus:uppercase focus:tracking-[0.18em] focus:text-bone"
      >
        Skip to content
      </a>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/buy" element={<ProductBuyingPage />} />
        <Route path="/book-session" element={<BookSessionPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}