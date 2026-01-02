import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import IndustryCard from '../../components/IndustryCard'

export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Streamline production processes, improve quality control, and optimize supply chain operations through integrated digital systems.'
    },
    {
      name: 'Water & Utilities',
      description: 'Optimize resource management, enhance infrastructure monitoring, and ensure regulatory compliance with smart utility systems.'
    },
    {
      name: 'Energy',
      description: 'Enhance grid stability, integrate renewable energy sources, and improve operational efficiency in power generation and distribution.'
    },
    {
      name: 'Infrastructure',
      description: 'Build resilient systems for transportation networks, utilities infrastructure, and public services with advanced monitoring and control.'
    },
    {
      name: 'Engineering SMEs',
      description: 'Scale operations with tailored digital solutions, improve project management, and enhance collaboration across engineering teams.'
    },
    {
      name: 'Oil & Gas',
      description: 'Ensure safety compliance, optimize extraction processes, and maintain operational continuity in challenging environments.'
    }
  ]

  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Tailored system solutions for diverse industrial sectors"
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </Section>
    </>
  )
}