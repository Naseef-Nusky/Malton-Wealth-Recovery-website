export function SectionRule({ className = '' }) {
  return (
    <div className={`section-rule-wrap flex justify-center py-10 sm:py-12 ${className}`} aria-hidden="true">
      <div className="section-rule h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
    </div>
  )
}
