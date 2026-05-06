import { Link } from 'react-router-dom'
import { aboutPageImg } from '../constants.js'
import { SectionRule } from '../components/SectionRule.jsx'

/* About Us — dedicated page copy (not repeated from the homepage narrative) */

export default function About() {
  return (
    <div>
      <section
        className="hero-section relative flex min-h-[14rem] flex-col justify-center px-4 py-12 text-white sm:min-h-[16rem] sm:px-6"
        style={{ '--hero-bg-image': `url(${aboutPageImg})` }}
      >
        <div className="hero-section-content relative z-[1] mx-auto w-full max-w-6xl px-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h1>
        </div>
      </section>

      <div className="px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="about-prose space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              We are a UK-based firm providing clear, professional guidance to individuals who have lost significant sums
              to financial fraud. We assist clients affected by investment scams, cryptocurrency fraud, trading platforms,
              and impersonation-related financial deception, helping them understand their position and explore whether
              recovery may be possible.
            </p>
            <p>
              We understand that financial fraud can be complex and difficult to navigate. Many individuals only realise
              what has happened after funds have already been transferred, leaving uncertainty around what to do next. Our
              role is to provide clarity in these situations, offering straightforward guidance so you can make informed
              decisions with confidence.
            </p>
          </div>

          <SectionRule />

          <h2 className="text-brand heading-section mb-6 text-center">Working with Clients Across the UK</h2>
          <div className="about-prose space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              We work with individuals across the UK who are searching for guidance on how to recover money lost to a
              scam. Whether the situation involves an investment opportunity, cryptocurrency transaction, online trading
              platform, or impersonation fraud, each case is handled individually with a focus on clarity and discretion.
            </p>
            <p>
              We recognise that financial loss can also bring uncertainty. Our aim is to provide a calm and professional
              approach, ensuring that you feel supported while maintaining full control over your decisions.
            </p>
          </div>

          <SectionRule />

          <h2 className="text-brand heading-section mb-6 text-center">Confidentiality</h2>
          <div className="about-prose space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              We treat every enquiry with complete discretion. We understand that discussing financial matters can be
              sensitive, and all information shared with us is handled in strict confidence from the outset.
            </p>
            <p>
              Our focus is on creating a professional and respectful environment where you can explain your situation
              openly and receive clear, considered guidance without pressure.
            </p>
          </div>

          <SectionRule />

          <h2 className="text-brand heading-section mb-6 text-center">Our Experience and Approach</h2>
          <div className="about-prose space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              We bring over 15 years of combined experience in supporting individuals affected by fraud. We work alongside
              experienced solicitors and financial professionals to ensure that each case is approached with care,
              precision, and professionalism.
            </p>
            <p>
              We take a measured and realistic approach. Rather than making assumptions or offering generic advice, we
              focus on understanding the details of your situation and explaining what may be possible in a clear and
              structured way. This allows you to fully understand your options before deciding how to proceed.
            </p>
          </div>
        </div>
      </div>

      <section className="section-muted px-4 pb-14 sm:px-6 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-50 px-6 py-12 text-center shadow-sm sm:px-10 sm:py-14">
          <h2 className="text-brand heading-section mx-auto mb-6 max-w-[18ch]">Think you may have been scammed?</h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-slate-600 text-pretty">
            If you have sent money and suspect fraud, do not ignore it. Speak to our team today to understand your options
            and what steps may be available to you.
          </p>
          <Link
            to="/contact"
            className="btn-brand inline-flex justify-center rounded-xl px-10 py-3.5 text-lg font-semibold text-white shadow-lg transition"
          >
            Check your eligibility now
          </Link>
        </div>
      </section>
    </div>
  )
}
