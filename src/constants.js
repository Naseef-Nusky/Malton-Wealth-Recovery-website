export const logoImg = '/logo.jpeg'
export const heroBg = '/hero.jpeg'
/** Services page banner + editorial image */
export const servicesPageImg = '/services.jpeg'
/** About page title banner (`public/aboutus.png`) */
export const aboutPageImg = '/aboutus.png'
/** Contact page title banner (`public/contactus.jpeg`) */
export const contactPageImg = '/contactus.jpeg'

/** Temporary UK mobile; client plans to swap for a company number later */
export const PHONE_DISPLAY = '+44 7787 071561'
export const PHONE_HREF = 'tel:+447787071561'

export const EMAIL_DISPLAY = 'Info@maltonwealthrecovery.com'
export const EMAIL_HREF = `mailto:${EMAIL_DISPLAY}`

/** Placeholder registered / correspondence address (UK) — replace with real details */
export const CONTACT_ADDRESS_LINES = ["535 King's Road", 'London SW10 0SZ']

export const HERO_BENEFIT_TICK_PLATE_FILL = 'hero-benefit-tick-plate-sheen'

export const SCAM_OPTIONS = [
  'Investment',
  'Cryptocurrency',
  'Impersonation',
  'Romance',
  'Trading',
  'Other',
]

/** Relative URL beside built index.html; override with VITE_CONTACT_PHP_URL when needed. */
export const CONTACT_FORM_ENDPOINT =
  typeof import.meta.env.VITE_CONTACT_PHP_URL === 'string' &&
  import.meta.env.VITE_CONTACT_PHP_URL.trim() !== ''
    ? import.meta.env.VITE_CONTACT_PHP_URL.trim()
    : '/contact.php'
