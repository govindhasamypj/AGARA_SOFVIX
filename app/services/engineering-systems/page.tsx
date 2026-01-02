import PageHeader from '../../../components/PageHeader'
import Section from '../../../components/Section'
import ProcessSteps from '../../../components/ProcessSteps'
import CTASection from '../../../components/CTASection'

export default function EngineeringSystems() {
  const approachSteps = [
    { step: 1, title: 'Requirements Analysis', description: 'Understand specific engineering challenges.' },
    { step: 2, title: 'Solution Design', description: 'Develop custom engineering solutions.' },
    { step: 3, title: 'Prototyping', description: 'Build and test proof-of-concept systems.' },
    { step: 4, title: 'Engineering Implementation', description: 'Deploy solutions with precision.' },
    { step: 5, title: 'Validation & Optimization', description: 'Ensure performance and reliability.' }
  ]

  return (
    <>
      <PageHeader
        title="Engineering Systems"
        subtitle="Custom engineering solutions for complex industrial challenges"
      />

      <Section title="The Problem">
        <p className="text-lg mb-4">
          Complex industrial challenges often require bespoke engineering solutions
          that off-the-shelf products cannot address.
        </p>
        <p>
          Our engineering systems service provides custom-designed solutions that
          solve specific operational problems with engineering precision.
        </p>
      </Section>

      <Section title="Our System Approach">
        <ProcessSteps steps={approachSteps} />
      </Section>

      <Section title="Who It's For">
        <ul className="list-disc list-inside space-y-2">
          <li>Companies with unique process requirements</li>
          <li>Industries needing specialized equipment</li>
          <li>Operations requiring custom automation</li>
          <li>Firms facing complex integration challenges</li>
        </ul>
      </Section>

      <Section title="Key Outcomes">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Tailored Solutions</h3>
            <p>Systems designed specifically for your needs.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Engineering Excellence</h3>
            <p>Solutions built with precision and reliability.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Problem Resolution</h3>
            <p>Direct solutions to complex operational issues.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Scalable Design</h3>
            <p>Systems that can adapt as requirements evolve.</p>
          </div>
        </div>
      </Section>

      <CTASection
        title="Need a Custom Engineering Solution?"
        description="Let's discuss how we can engineer solutions for your specific challenges."
        buttonText="Discuss Your System"
        buttonLink="/contact"
      />
    </>
  )
}