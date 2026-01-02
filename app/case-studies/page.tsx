import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import CaseStudyCard from '../../components/CaseStudyCard'

export default function CaseStudies() {
  const caseStudies = [
    {
      problem: 'A manufacturing plant struggled with disconnected production systems that prevented real-time monitoring of equipment performance.',
      solution: 'Implemented an integrated digital platform that connected all production lines, providing centralized monitoring and automated reporting.',
      outcome: 'Reduced downtime by 30% and improved production efficiency through predictive maintenance capabilities.'
    },
    {
      problem: 'A water utility company had legacy SCADA systems that lacked modern connectivity and data analytics capabilities.',
      solution: 'Digitalized the SCADA infrastructure with modern IoT sensors and cloud-based analytics platform.',
      outcome: 'Enhanced leak detection, optimized pump operations, and achieved 25% reduction in operational costs.'
    },
    {
      problem: 'An energy provider needed to integrate renewable energy sources with their existing grid management systems.',
      solution: 'Developed custom engineering interfaces to seamlessly integrate solar and wind power generation with grid controls.',
      outcome: 'Improved grid stability, increased renewable energy utilization by 40%, and maintained compliance with regulatory standards.'
    },
    {
      problem: 'An engineering SME faced challenges in coordinating projects across multiple distributed teams.',
      solution: 'Implemented a unified project management and collaboration platform with integrated engineering tools.',
      outcome: 'Reduced project completion time by 20% and improved team collaboration through centralized documentation and communication.'
    }
  ]

  return (
    <>
      <PageHeader
        title="Case Studies"
        subtitle="Real-world applications of our engineering approach"
      />

      <Section>
        <p className="text-lg mb-8">
          These case studies demonstrate how our systematic approach to system integration
          and digital transformation delivers measurable operational improvements.
        </p>
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </Section>
    </>
  )
}