import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  EMAIL_DISPLAY,
  EMAIL_HREF,
  logoImg,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '../constants.js'
import { CloseMenuIcon, MailIcon, MenuIcon, PhoneCallIcon } from './Icons.jsx'

const navLinkClass = 'rounded-md px-2 py-1 text-slate-700 transition hover:text-[var(--brand)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-cta)]'

export function Layout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileNavOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!mobileNavOpen) return
    const onEscape = (e) => {
      if (e.key === 'Escape') setMobileNavOpen(false)
    }
    document.addEventListener('keydown', onEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onEscape)
      document.body.style.overflow = ''
    }
  }, [mobileNavOpen])

  const mobileNavLinkClass =
    'block rounded-lg px-4 py-3 text-base font-semibold text-slate-800 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--brand-cta)]'

  return (
    <div className="site-landing flex min-h-svh flex-col bg-white text-left text-slate-700 antialiased">
      <header className="bg-brand-header relative sticky top-0 z-50 border-b border-slate-200 shadow-sm shadow-slate-900/8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">
          <Link to="/" className="inline-flex min-w-0 shrink-0" aria-label="Malton Wealth Recovery — home">
            <img src={logoImg} alt="" className="h-[4rem] w-auto max-w-[280px] object-contain sm:h-[4.75rem] sm:max-w-[320px]" />
          </Link>

          <nav className="hidden flex-1 justify-center md:flex md:gap-6 lg:gap-8" aria-label="Primary">
            <Link className={`${navLinkClass} text-base font-medium`} to="/">
              Home
            </Link>
            <Link className={`${navLinkClass} text-base font-medium`} to="/about">
              About Us
            </Link>
            <Link className={`${navLinkClass} text-base font-medium`} to="/services">
              Our Services
            </Link>
            <Link className={`${navLinkClass} text-base font-medium`} to="/contact">
              Contact Us
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={PHONE_HREF}
              className="header-phone-cta hidden min-[390px]:inline-flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2 text-xs font-semibold transition sm:text-sm md:px-4 md:text-base"
            >
              <PhoneCallIcon className="h-[1.125em] w-[1.125em] shrink-0" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <a
              href={PHONE_HREF}
              className="header-phone-cta inline-flex min-[390px]:hidden items-center justify-center rounded-lg border-2 p-2 transition"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <PhoneCallIcon className="h-[1.25em] w-[1.25em] shrink-0" />
            </a>

            <button
              type="button"
              className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-lg text-[var(--brand)] transition hover:bg-slate-200/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-cta)] md:hidden"
              aria-expanded={mobileNavOpen}
              aria-controls="site-mobile-nav"
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {mobileNavOpen ? (
                <CloseMenuIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
              <span className="sr-only">{mobileNavOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>

        {mobileNavOpen && (
          <nav
            id="site-mobile-nav"
            className="bg-brand-header absolute left-0 right-0 top-full border-t border-slate-200 shadow-lg md:hidden"
            aria-label="Primary mobile"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
              <Link className={mobileNavLinkClass} to="/">
                Home
              </Link>
              <Link className={mobileNavLinkClass} to="/about">
                About Us
              </Link>
              <Link className={mobileNavLinkClass} to="/services">
                Our Services
              </Link>
              <Link className={mobileNavLinkClass} to="/contact">
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </header>

      {mobileNavOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-slate-900/45 backdrop-blur-[1px] md:hidden"
          aria-hidden="true"
          tabIndex={-1}
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      <main className="relative z-10 flex-1">
        <Outlet />
      </main>

      <footer className="bg-brand-header border-t border-slate-200 px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs text-center md:text-left">
            <img src={logoImg} alt="" className="mx-auto h-[4rem] w-auto max-w-[280px] object-contain sm:h-[4.75rem] sm:max-w-[320px] md:mx-0" />
            <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate-600">
              <a href={EMAIL_HREF} className="footer-site-link flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-[var(--brand-cta)]" aria-hidden="true" />
                {EMAIL_DISPLAY}
              </a>
              <a href={PHONE_HREF} className="footer-site-link footer-link-accent flex items-center gap-2">
                <PhoneCallIcon className="h-4 w-4 shrink-0" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium md:justify-end" aria-label="Footer">
            <Link to="/about" className="footer-site-link">
              About Us
            </Link>
            <Link to="/services" className="footer-site-link">
              Our Services
            </Link>
            <Link to="/contact" className="footer-site-link">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
