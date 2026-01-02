import PageHeader from '../../../components/PageHeader'
import Section from '../../../components/Section'
import ProcessSteps from '../../../components/ProcessSteps'
import CTASection from '../../../components/CTASection'

export default function Support() {
  const supportSteps = [
    { step: 1, title: 'Monitoring', description: 'Continuous system monitoring and health checks.' },
    { step: 2, title: 'Maintenance', description: 'Regular maintenance and updates.' },
    { step: 3, title: 'Issue Resolution', description: 'Rapid response to system issues.' },
    { step: 4, title: 'Optimization', description: 'Ongoing performance optimization.' },
    { step: 5, title: 'Training', description: 'Staff training and knowledge transfer.' }
  ]

  return (
    <>
      <PageHeader
        title="Support & Maintenance"
        subtitle="Ongoing support to ensure system reliability and performance"
      />

      <Section title="The Problem">
        <p className="text-lg mb-4">
          System downtime and performance issues can severely impact operations,
          leading to lost productivity and increased costs.
        </p>
        <p>
          Our support and maintenance service provides proactive care for your systems,
          ensuring they remain reliable and efficient over time.
        </p>
      </Section>

      <Section title="Our Support Approach">
        <ProcessSteps steps={supportSteps} />
      </Section>

      <Section title="Who It's For">
        <ul className="list-disc list-inside space-y-2">
          <li>Companies with critical operational systems</li>
          <li>Operations requiring high availability</li>
          <li>Firms lacking internal IT resources</li>
          <li>Organizations needing compliance support</li>
        </ul>
      </Section>

      <Section title="Key Outcomes">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Reduced Downtime</h3>
            <p>Minimize system outages and disruptions.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Improved Reliability</h3>
            <p>Consistent system performance and availability.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Cost Efficiency</h3>
            <p>Preventive maintenance reduces repair costs.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Compliance Assurance</h3>
            <p>Stay compliant with industry standards.</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Need Ongoing System Support?"
        description="Let's discuss how we can maintain and optimize your systems."
        buttonText="Discuss Your System"
        buttonLink="/contact"
      />
    </>
  )
}