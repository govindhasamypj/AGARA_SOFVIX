interface SectionProps {
  title?: string
  subtitle?: string
  dark?: boolean
  children: React.ReactNode
}

export default function Section({ title, subtitle, dark, children }: SectionProps) {
  return (
    <section className={`py-16 ${dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4">
        {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
        {subtitle && <p className="text-lg mb-8">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}