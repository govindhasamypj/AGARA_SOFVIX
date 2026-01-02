import PageHeader from '../../components/PageHeader'
import ServiceCard from '../../components/ServiceCard'
import CTASection from '../../components/CTASection'

export default function Services() {
  const services = [
    {
      title: 'Digital Systems',
      description: 'Comprehensive digital solutions that integrate seamlessly with your existing infrastructure, providing real-time data access and control.',
      link: '/services/digital-systems'
    },
    {
      title: 'Industrial Digitalization',
      description: 'Transform legacy industrial systems into modern, connected platforms that improve efficiency and reduce operational costs.',
      link: '/services/industrial-digitalization'
    },
    {
      title: 'Engineering Systems',
      description: 'Custom engineering solutions designed to solve complex industrial challenges with precision and reliability.',
      link: '/services/engineering-systems'
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing technical support and maintenance services to ensure your systems remain operational and up-to-date.',
      link: '/services/support'
    }
  ]

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Engineering-driven solutions for digital and industrial systems"
      />
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Need a Custom Solution?"
        description="Contact us to discuss your specific system requirements."
        buttonText="Discuss Your System"
        buttonLink="/contact"
      />
    </>
  )
}