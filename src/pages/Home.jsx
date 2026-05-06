import { Link } from 'react-router-dom'
import { heroBg, HERO_BENEFIT_TICK_PLATE_FILL, PHONE_HREF } from '../constants.js'
import { HeroBenefitTick, PageTick, PhoneCallIcon } from '../components/Icons.jsx'
import { SectionRule } from '../components/SectionRule.jsx'

/* --- Malton Wealth Recovery: the client’s homepage narrative lives only on this route --- */

const HERO_TICKS = [
  'Fraud recovery guidance across the UK',
  'Experienced solicitors and financial experts',
  'Confidential and professional service',
  'Clear, structured approach to recovering lost funds',
]

const TYPES_OF_FRAUD = [
  'Investment scam recovery UK',
  'Cryptocurrency scam recovery UK',
  'Forex and trading scam recovery',
  'Authorised push payment fraud UK',
  'Impersonation scams and bank fraud',
  'Romance scams and social engineering fraud',
  'Other types of fraud not listed above',
]

const SIMPLE_STEPS = [
  {
    title: 'Initial Consultation',
    body: 'We begin with a free, confidential consultation to understand your situation and analyse the key details of your case.',
  },
  {
    title: 'Case Assessment',
    body: 'Your case is carefully assessed alongside experienced legal and financial professionals to determine the most appropriate approach.',
  },
  {
    title: 'Recovery Process',
    body: 'We guide you through the recovery process, keeping you informed at every stage as your case progresses.',
  },
]

export default function Home() {
  return (
    <>
      <section
        className="hero-section hero-section-front flex flex-col justify-center px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24"
        style={{ '--hero-bg-image': `url(${heroBg})` }}
      >
        <svg
          className="pointer-events-none absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <radialGradient id={HERO_BENEFIT_TICK_PLATE_FILL} cx="28%" cy="18%" fx="28%" fy="18%" r="92%">
              <stop offset="0%" stopColor="rgb(255 255 255)" stopOpacity="0.28" />
              <stop offset="42%" stopColor="rgb(255 255 255)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="rgb(201 212 223)" stopOpacity="0.06" />
            </radialGradient>
          </defs>
        </svg>
        <div className="hero-section-content mx-auto w-full max-w-7xl">
          <div className="hero-section-centered-inner flex flex-col items-center text-center">
            <h1 className="hero-heading-display mb-5 px-2 text-balance max-sm:text-wrap sm:px-0">
              <span className="inline-block max-sm:whitespace-nowrap">Have you lost £5,000</span>
              <br className="sm:hidden" aria-hidden="true" />
              {' '}or more to a scam
              <br className="sm:hidden" aria-hidden="true" />
              {' '}or fraud?
            </h1>
            <p className="hero-sublead mb-6 font-medium">
              Take the first step towards understanding your options with expert fraud recovery guidance in the UK.
            </p>
            <ul className="hero-tick-list mb-8 flex w-full max-w-xl flex-col gap-3.5 text-left text-base sm:gap-4 sm:text-lg">
              {HERO_TICKS.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <HeroBenefitTick />
                  <span className="text-hero-muted min-w-0 pt-px sm:text-balance">{line}</span>
                </li>
              ))}
            </ul>
            <p className="hero-intro mb-10 px-2 sm:px-0">
              We assist individuals across the UK who have lost significant sums to financial fraud, including
              investment scams, cryptocurrency scams, trading fraud, and online deception. If you are searching for how
              to recover money lost to a scam, our team provides clear, structured guidance to help you understand what
              may be possible.
            </p>
            <div className="flex w-full max-w-2xl flex-col items-stretch gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <Link
                to="/contact"
                className="hero-cta-primary inline-flex min-h-12 min-w-0 flex-1 justify-center rounded-xl px-8 py-3.5 text-center text-base font-semibold sm:min-h-0 sm:flex-none sm:px-10"
              >
                Contact us
              </Link>
              <a
                href={PHONE_HREF}
                className="hero-cta-secondary inline-flex min-h-12 min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-center text-base font-semibold sm:min-h-0 sm:flex-none sm:px-10"
              >
                <PhoneCallIcon className="h-[1.125em] w-[1.125em] shrink-0 opacity-95" />
                Call now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-brand heading-section mb-6 text-center">Professional Guidance</h2>
          <p className="mb-4 text-center text-lg leading-relaxed text-slate-600 text-pretty">
            Losing money to a scam can be overwhelming. Whether you have been affected by an investment scam,
            cryptocurrency fraud, or authorised push payment fraud, it is important to understand that there may still
            be options available.
          </p>
          <p className="text-center text-lg leading-relaxed text-slate-600 text-pretty">
            Our role is to provide clarity. We help individuals understand how fraud recovery works in the UK, what steps
            may be taken, and whether there may be a route to recovering funds.
          </p>
        </div>
      </section>

      <SectionRule />

      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-brand heading-section mb-6 text-center">Types of Fraud We Help With</h2>
          <p className="mb-6 text-center text-lg leading-relaxed text-slate-600 text-pretty">
            We provide fraud recovery guidance for a wide range of scams, including:
          </p>
          <ul className="mx-auto mb-8 grid w-full max-w-none grid-cols-1 gap-x-12 gap-y-3.5 text-left text-base text-slate-700 sm:grid-cols-2 sm:text-lg">
            {TYPES_OF_FRAUD.map((line) => (
              <li key={line} className="flex items-start gap-3">
                <PageTick />
                <span className="min-w-0 pt-0.5">{line}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-lg leading-relaxed text-slate-600 text-pretty">
            If you are searching for help with recovering money from a scam, our team is here to guide you.
          </p>
        </div>
      </section>

      <SectionRule />

      <section className="px-4 pb-14 sm:px-6 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-brand heading-section mb-8 text-center">3 Simple Steps</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {SIMPLE_STEPS.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand)] text-sm font-semibold text-white shadow-sm">
                  {index + 1}
                </span>
                <h3 className="heading-step mb-2.5 text-[var(--brand)]">{step.title}</h3>
                <p className="text-base leading-relaxed text-slate-600">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-muted px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-brand heading-section mb-6">Begin with a Free, Confidential Consultation</h2>
          <p className="mb-4 text-lg leading-relaxed text-slate-600 text-pretty">
            If you have lost £5,000 or more to a scam and are looking for clarity, the first step is a free,
            confidential consultation. This allows you to explain your situation and understand whether there may be any
            options available to you.
          </p>
          <p className="mb-10 text-lg leading-relaxed text-slate-600 text-pretty">
            Taking that first step can provide reassurance and direction at a time when it is most needed.
          </p>
          <Link
            to="/contact"
            className="btn-brand inline-flex justify-center rounded-lg px-10 py-3.5 text-lg font-semibold text-white shadow-lg transition"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}
