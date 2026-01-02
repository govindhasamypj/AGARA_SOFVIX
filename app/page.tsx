import Button from '../components/Button'
import Section from '../components/Section'
import ServiceCard from '../components/ServiceCard'
import IndustryCard from '../components/IndustryCard'
import ProcessSteps from '../components/ProcessSteps'
import CTASection from '../components/CTASection'

export default function Home() {
  const services = [
    { title: 'Digital Systems', description: 'Integrated digital solutions for operational efficiency.', link: '/services/digital-systems' },
    { title: 'Industrial Digitalization', description: 'Transform legacy systems into modern digital platforms.', link: '/services/industrial-digitalization' },
    { title: 'Engineering Systems', description: 'Custom engineering solutions for complex challenges.', link: '/services/engineering-systems' },
    { title: 'Support & Maintenance', description: 'Ongoing support to ensure system reliability.', link: '/services/support' }
  ]

  const industries = [
    { name: 'Manufacturing', description: 'Streamline production processes and improve quality control.' },
    { name: 'Water & Utilities', description: 'Optimize resource management and infrastructure monitoring.' },
    { name: 'Energy', description: 'Enhance grid stability and renewable energy integration.' },
    { name: 'Infrastructure', description: 'Build resilient systems for transportation and utilities.' },
    { name: 'Engineering SMEs', description: 'Scale operations with tailored digital solutions.' }
  ]

  const approachSteps = [
    { step: 1, title: 'Understand', description: 'Deep dive into your operational challenges and goals.' },
    { step: 2, title: 'Analyze', description: 'Assess current systems and identify improvement opportunities.' },
    { step: 3, title: 'Design', description: 'Create integrated solutions tailored to your needs.' },
    { step: 4, title: 'Implement', description: 'Deploy systems with minimal disruption.' },
    { step: 5, title: 'Support & Scale', description: 'Provide ongoing support and help you scale.' }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Engineering-Driven Digital & Industrial Systems</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We integrate disconnected systems, provide operational clarity, and deliver engineering excellence for industrial operations.
          </p>
          <div className="space-x-4">
            <Button variant="primary" href="/contact">Discuss Your System</Button>
            <Button variant="secondary" href="/services">Explore Services</Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <Section title="Common Challenges in Industrial Operations">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="font-semibold mb-2">Disconnected Systems</h3>
            <p>Siloed tools and platforms leading to inefficiencies.</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Poor Visibility</h3>
            <p>Lack of real-time insights into operations.</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">Tool-Focused Vendors</h3>
            <p>Vendors pushing products without understanding your systems.</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold mb-2">High Operational Risk</h3>
            <p>Increased downtime and compliance issues.</p>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section title="Our Engineering Approach" subtitle="A systematic process to transform your operations">
        <ProcessSteps steps={approachSteps} orientation="horizontal" />
      </Section>

      {/* Services Overview */}
      <Section title="Our Services" subtitle="Comprehensive solutions for digital and industrial systems">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* Industries Snapshot */}
      <Section title="Industries We Serve">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Transform Your Operations?"
        description="Let's discuss how we can integrate your systems for better efficiency and clarity."
        buttonText="Talk to a Systems Expert"
        buttonLink="/contact"
      />
    </>
  )
}