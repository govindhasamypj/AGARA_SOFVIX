import Button from './Button'

interface CTASectionProps {
  title: string
  description?: string
  buttonText: string
  buttonLink: string
}

export default function CTASection({ title, description, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {description && <p className="text-lg mb-8">{description}</p>}
        <Button variant="primary" href={buttonLink}>{buttonText}</Button>
      </div>
    </section>
  )
}