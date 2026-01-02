import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import ProcessSteps from '../../components/ProcessSteps'

export default function Approach() {
  const executionSteps = [
    {
      step: 1,
      title: 'Discovery & Assessment',
      description: 'We begin by thoroughly understanding your current systems, challenges, and objectives. This includes detailed analysis of existing infrastructure, processes, and pain points.'
    },
    {
      step: 2,
      title: 'Strategic Planning',
      description: 'Based on our assessment, we develop a comprehensive strategy that outlines the optimal path forward, including technology recommendations and implementation roadmap.'
    },
    {
      step: 3,
      title: 'Solution Design',
      description: 'Our engineering team designs integrated solutions that address your specific needs. This includes system architecture, data flows, and integration specifications.'
    },
    {
      step: 4,
      title: 'Implementation',
      description: 'We execute the implementation with minimal disruption to your operations. This includes system integration, testing, and validation at each stage.'
    },
    {
      step: 5,
      title: 'Testing & Validation',
      description: 'Rigorous testing ensures system reliability and performance. We validate functionality, security, and compliance before full deployment.'
    },
    {
      step: 6,
      title: 'Training & Handover',
      description: 'We provide comprehensive training to your team and ensure smooth knowledge transfer. Documentation and support materials are provided.'
    },
    {
      step: 7,
      title: 'Ongoing Support',
      description: 'Post-implementation support ensures continued system performance. We provide monitoring, maintenance, and optimization services.'
    }
  ]

  return (
    <>
      <PageHeader
        title="Our Approach"
        subtitle="A systematic, engineering-driven process for system transformation"
      />

      <Section title="Execution Process">
        <p className="text-lg mb-8">
          Our approach is rooted in engineering discipline and practical experience.
          We follow a proven methodology that ensures successful system integration and operational improvement.
        </p>
        <ProcessSteps steps={executionSteps} orientation="vertical" />
      </Section>

      <Section title="Key Principles">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Engineering Rigor</h3>
            <p>Every solution is designed with precision, reliability, and scalability in mind.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Minimal Disruption</h3>
            <p>Implementation strategies that maintain operational continuity.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Proven Methodology</h3>
            <p>Structured processes based on years of industrial system experience.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Measurable Results</h3>
            <p>Clear metrics and KPIs to track success and ROI.</p>
          </div>
        </div>
      </Section>
    </>
  )
}