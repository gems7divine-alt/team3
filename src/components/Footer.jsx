import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { footerLinks, contactDetails, copyright } from '../data/about'

/**
 * Site footer: brand lockup, quick links, contact details and copyright.
 *
 * The links are real routes and mail/tel handlers rather than `#` stubs, so
 * clicking them actually goes somewhere. They point at the full paths, so the
 * same markup is correct whether or not the site is sitting at the root.
 */
export default function Footer() {
  return (
    <footer className="bg-forest-deep text-bone">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span className="brand-mark block w-11 shrink-0">
                <img src={logo} alt="" width={1774} height={887} />
              </span>
              <span className="font-display text-[1.0625rem] font-medium tracking-[0.14em]">
                Rarefactree Coaching
              </span>
            </Link>

            <p className="mt-5 max-w-[38ch] font-sans text-[0.9375rem] leading-[1.75] text-bone/70">
              Transform your life through mindful wellness coaching and holistic healing
              practices.
            </p>
          </div>

          <div>
            <h2 className="font-sans text-[0.6875rem] font-medium tracking-[0.28em] uppercase text-bone/55">
              Quick Links
            </h2>

            <ul className="mt-6 flex flex-col gap-3.5">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="inline-block font-sans text-[0.9375rem] text-bone/75 underline-offset-4 transition-colors duration-300 hover:text-bone hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-[0.6875rem] font-medium tracking-[0.28em] uppercase text-bone/55">
              Contact
            </h2>

            <ul className="mt-6 flex flex-col gap-3.5">
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="font-sans text-[0.9375rem] text-bone/75 underline-offset-4 transition-colors duration-300 hover:text-bone hover:underline"
                >
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                  className="font-sans text-[0.9375rem] text-bone/75 underline-offset-4 transition-colors duration-300 hover:text-bone hover:underline"
                >
                  {contactDetails.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-bone/12 pt-7 font-sans text-[0.8125rem] text-bone/45">
          {copyright}
        </p>
      </div>
    </footer>
  )
}