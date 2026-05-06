import { useNavigate } from 'react-router-dom'
import {
  contactPageImg,
  EMAIL_DISPLAY,
  EMAIL_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
} from '../constants.js'
import { ContactForm } from '../components/ContactForm.jsx'
import { MailIcon, PhoneCallIcon } from '../components/Icons.jsx'
import { SectionRule } from '../components/SectionRule.jsx'

/* Contact Us page + form headings — copy supplied by client */

const CONTACT_HEADING_ID = 'contact-consult-heading'

export default function Contact() {
  const navigate = useNavigate()

  return (
    <div>
      <section
        className="hero-section relative flex min-h-[14rem] flex-col justify-center px-4 py-12 text-white sm:min-h-[16rem] sm:px-6"
        style={{ '--hero-bg-image': `url(${contactPageImg})` }}
      >
        <div className="hero-section-content relative z-[1] mx-auto w-full max-w-6xl px-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h1>
        </div>
      </section>

      <div className="px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 space-y-6 text-lg leading-relaxed text-slate-600 text-pretty">
            <p>
              If you have lost £5,000 or more to a scam or financial fraud, you can take the first step by getting in
              touch with our team. We provide clear, professional guidance to help you understand your situation and
              whether there may be any options available.
            </p>
            <p>
              We understand that discussing financial loss can feel difficult. For this reason, every enquiry is handled
              with complete discretion, and all information shared is treated in strict confidence from the outset.
            </p>
          </div>

          <SectionRule className="py-8" />

          <h2 id={CONTACT_HEADING_ID} className="heading-form mb-8 text-center">
            Start Your <span className="text-[var(--brand-accent-green)]">Free</span>, Confidential Consultation
          </h2>
          <ContactForm
            onSubmitted={() => navigate('/thank-you')}
            headingId={CONTACT_HEADING_ID}
            showHeading={false}
            submitLabel="Start your claim today"
          />

          <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 sm:mt-16 sm:px-8">
            <h2 className="heading-card mb-5 text-[var(--brand)]">Contact details</h2>
            <div className="space-y-4 text-base leading-relaxed text-slate-700">
              {/* Address block hidden for now per client request.
              <div className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-cta)]" aria-hidden="true" />
                <address className="space-y-0.5 not-italic">
                  {CONTACT_ADDRESS_LINES.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </div>
              */}
              <div>
                <a href={EMAIL_HREF} className="inline-flex gap-3 font-medium text-[var(--brand-cta)] transition hover:text-[var(--brand-cta-hover)]">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  {EMAIL_DISPLAY}
                </a>
              </div>
              <div>
                <a href={PHONE_HREF} className="inline-flex gap-3 font-semibold text-[var(--brand-cta)] transition hover:text-[var(--brand-cta-hover)]">
                  <PhoneCallIcon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
