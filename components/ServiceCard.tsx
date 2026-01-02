import Card from './Card'

interface ServiceCardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  link?: string
}

export default function ServiceCard(props: ServiceCardProps) {
  return <Card {...props} />
}