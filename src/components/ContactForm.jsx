import { useState } from 'react'
import { SCAM_OPTIONS } from '../constants.js'

export function ContactForm({
  onSubmitted,
  headingId,
  layout = 'page',
  submitLabel = 'Submit',
  showHeading = true,
}) {
  const [scamType, setScamType] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitted()
  }

  const formOuter =
    layout === 'modal'
      ? 'modal-form-inner w-full min-w-0 bg-transparent px-5 pb-10 pt-8 shadow-none sm:px-8'
      : 'contact-form-card rounded-2xl bg-white p-6 sm:p-8'

  return (
    <form
      className={formOuter}
      onSubmit={handleSubmit}
      aria-labelledby={headingId}
    >
      {showHeading ? (
        <h2 id={headingId} className="heading-form mb-6 text-center">
          Check your eligibility for a free,
          <br />
          confidential consultation
        </h2>
      ) : null}
      <div className="space-y-4 text-left">
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Full name</span>
          <input
            name="fullName"
            type="text"
            required
            autoComplete="name"
            className="input-field w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Mobile number</span>
          <input
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            className="input-field w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Email address</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input-field w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Approximate amount lost</span>
          <input
            name="amountLost"
            type="text"
            required
            className="input-field w-full rounded-lg border border-slate-300 px-3 py-2.5 text-slate-900"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-sm font-medium text-slate-700">Type of scam</span>
          <select
            name="scamType"
            required
            value={scamType}
            onChange={(e) => setScamType(e.target.value)}
            className={`select-modern w-full${scamType ? '' : ' select-modern-placeholder'}`}
          >
            <option value="">Select an option</option>
            {SCAM_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-8 flex justify-center">
        <button
          type="submit"
          className="btn-brand w-full rounded-lg px-10 py-3.5 text-base font-semibold text-white shadow-md transition sm:w-auto sm:min-w-[200px]"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  )
}
