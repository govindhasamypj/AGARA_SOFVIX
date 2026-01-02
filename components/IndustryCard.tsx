import Card from './Card'

interface IndustryCardProps {
  name: string
  description: string
}

export default function IndustryCard({ name, description }: IndustryCardProps) {
  return <Card title={name} description={description} />
}