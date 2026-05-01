import { Link } from 'react-router-dom'
import { heroBg, logoImg } from '../constants.js'

export default function ThankYou() {
  return (
    <div className="flex flex-1 flex-col">
      <section
        className="hero-section relative flex min-h-[12rem] flex-col justify-end px-4 py-10 text-white sm:min-h-[13rem] sm:px-6"
        style={{ '--hero-bg-image': `url(${heroBg})` }}
      >
        <div className="hero-section-content relative z-[1] mx-auto w-full max-w-6xl px-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Thank you</h1>
        </div>
      </section>

      <div className="thank-you-bg flex flex-1 flex-col items-center justify-center px-4 py-16 sm:py-24">
        <img src={logoImg} alt="Malton Wealth Recovery" className="mb-8 h-[4.75rem] w-auto max-w-[340px] object-contain opacity-95 sm:h-24" />
        <div className="thank-you-card max-w-lg rounded-2xl border border-slate-200 bg-white p-10 shadow-xl">
          <p className="heading-thanks mb-4 text-center">Thank you for your submission.</p>
          <p className="mb-8 text-center text-lg text-slate-600">One of our experts will be in contact shortly.</p>
          <div className="flex justify-center">
            <Link
              to="/"
              className="btn-brand rounded-lg px-8 py-3 text-center font-semibold text-white shadow-md transition"
            >
              Back to website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
