interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
      </div>
    </section>
  )
}