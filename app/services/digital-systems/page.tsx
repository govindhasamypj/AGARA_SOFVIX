import PageHeader from '../../../components/PageHeader'
import Section from '../../../components/Section'
import ProcessSteps from '../../../components/ProcessSteps'
import CTASection from '../../../components/CTASection'

export default function DigitalSystems() {
  const approachSteps = [
    {
      step: 1,
      title: 'Assessment',
      description: 'Evaluate existing systems and identify integration points.',
    },
    {
      step: 2,
      title: 'Architecture Design',
      description: 'Design a scalable digital architecture.',
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Develop and deploy integrated solutions.',
    },
    {
      step: 4,
      title: 'Testing & Validation',
      description: 'Ensure system reliability and performance.',
    },
    {
      step: 5,
      title: 'Training & Handover',
      description: 'Train staff and provide documentation.',
    },
  ]

  return (
    <>
      <PageHeader
        title="Digital Systems Integration"
        subtitle="Seamlessly connect your industrial systems for unified operations"
      />

      <Section title="The Problem">
        <p className="text-lg mb-4">
          Many industrial operations suffer from disconnected systems that don&apos;t
          communicate effectively, leading to data silos, manual processes, and
          reduced operational efficiency.
        </p>
        <p>
          Our digital systems integration service addresses these challenges by
          creating unified platforms that provide real-time visibility and control
          across all operations.
        </p>
      </Section>

      <Section title="Our System Approach">
        <ProcessSteps steps={approachSteps} />
      </Section>

      <Section title="Who It&apos;s For">
        <ul className="list-disc list-inside space-y-2">
          <li>Manufacturing companies with multiple production lines</li>
          <li>Utilities managing distributed infrastructure</li>
          <li>Energy providers coordinating grid operations</li>
          <li>Engineering firms requiring system interoperability</li>
        </ul>
      </Section>

      <Section title="Key Outcomes">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Improved Efficiency</h3>
            <p>Reduce manual data entry and automate workflows.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Real-time Visibility</h3>
            <p>Access live data across all systems from a single dashboard.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Better Decision Making</h3>
            <p>Make informed decisions with comprehensive operational insights.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Scalable Solutions</h3>
            <p>Systems that grow with your business needs.</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Ready to Integrate Your Systems?"
        description="Let&apos;s discuss how digital systems integration can transform your operations."
        buttonText="Discuss Your System"
        buttonLink="/contact"
      />
    </>
  )
}
