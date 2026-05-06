import { Link } from 'react-router-dom'
import { servicesPageImg } from '../constants.js'
import { SERVICES } from '../data.js'
import { ServiceCardIconDecor } from '../components/Icons.jsx'

/* Services page only — closing “free consultation” narrative lives on the homepage only */

export default function Services() {
  return (
    <div>
      <section
        className="hero-section relative flex min-h-[14rem] flex-col justify-center px-4 py-12 text-white sm:min-h-[16rem] sm:px-6"
        style={{ '--hero-bg-image': `url(${servicesPageImg})` }}
      >
        <div className="hero-section-content relative z-[1] mx-auto w-full max-w-6xl px-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h1>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {SERVICES.map((svc, index) => (
              <article
                key={svc.title}
                className={`service-card-top service-card flex h-full flex-col rounded-2xl p-7 sm:p-8 ${
                  SERVICES.length % 2 === 1 && index === SERVICES.length - 1 ? 'sm:col-span-2 sm:mx-auto sm:max-w-[34rem] sm:w-full' : ''
                }`}
              >
                <div className="service-card-title-row mb-4 flex items-center gap-3">
                  <ServiceCardIconDecor iconId={svc.iconId} />
                  <h2 className="text-brand heading-card min-w-0 flex-1">{svc.title}</h2>
                </div>
                <p className="mb-0 flex-1 text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">{svc.body}</p>
                <div className="mt-5 shrink-0 pt-1 sm:mt-6">
                  <Link
                    to="/contact"
                    className="service-card-cta btn-brand flex w-full justify-center rounded-lg px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md sm:text-base"
                  >
                    Start Your Claim Today
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
