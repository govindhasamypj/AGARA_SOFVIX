import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  link?: string
}

export default function Card({ title, description, icon, link }: CardProps) {
  const content = (
    <div className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  )

  if (link) {
    return <Link href={link}>{content}</Link>
  }

  return content
}