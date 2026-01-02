import PageHeader from '../../../components/PageHeader'
import Section from '../../../components/Section'
import ProcessSteps from '../../../components/ProcessSteps'
import CTASection from '../../../components/CTASection'

export default function IndustrialDigitalization() {
  const approachSteps = [
    { step: 1, title: 'Legacy Assessment', description: 'Analyze existing industrial systems and processes.' },
    { step: 2, title: 'Digital Strategy', description: 'Develop a roadmap for digital transformation.' },
    { step: 3, title: 'Technology Selection', description: 'Choose appropriate digital tools and platforms.' },
    { step: 4, title: 'Pilot Implementation', description: 'Test solutions in controlled environments.' },
    { step: 5, title: 'Full Deployment', description: 'Roll out digital solutions across operations.' }
  ]

  return (
    <>
      <PageHeader
        title="Industrial Digitalization"
        subtitle="Transform legacy industrial systems into modern digital platforms"
      />

      <Section title="The Problem">
        <p className="text-lg mb-4">
          Legacy industrial systems often lack modern connectivity and data capabilities,
          hindering efficiency and innovation in operations.
        </p>
        <p>
          Our industrial digitalization service modernizes these systems, enabling better
          monitoring, control, and optimization of industrial processes.
        </p>
      </Section>

      <Section title="Our System Approach">
        <ProcessSteps steps={approachSteps} />
      </Section>

      <Section title="Who It's For">
        <ul className="list-disc list-inside space-y-2">
          <li>Companies with outdated SCADA systems</li>
          <li>Manufacturers using legacy PLCs</li>
          <li>Utilities with aging infrastructure</li>
          <li>Energy firms needing grid modernization</li>
        </ul>
      </Section>

      <Section title="Key Outcomes">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Enhanced Monitoring</h3>
            <p>Real-time visibility into industrial processes.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Predictive Maintenance</h3>
            <p>Reduce downtime with data-driven maintenance.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Process Optimization</h3>
            <p>Improve efficiency and reduce waste.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Future-Ready Systems</h3>
            <p>Platforms that support ongoing digital innovation.</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Ready to Digitalize Your Operations?"
        description="Let's discuss how industrial digitalization can modernize your systems."
        buttonText="Discuss Your System"
        buttonLink="/contact"
      />
    </>
  )
}