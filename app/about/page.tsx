import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'

export default function About() {
  return (
    <>
      <PageHeader
        title="About Agara-Sofvix"
        subtitle="Engineering-driven solutions for industrial systems"
      />

      <Section title="Who We Are">
        <p className="text-lg mb-4">
          Agara-Sofvix is a B2B engineering services company specializing in digital and industrial systems.
          We focus on integrating disconnected systems, providing operational clarity, and delivering
          engineering excellence for industrial operations.
        </p>
        <p>
          Our team combines deep engineering expertise with practical system integration experience
          to solve complex industrial challenges.
        </p>
      </Section>

      <Section title="How We Think">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Systems-First Approach</h3>
            <p>We prioritize understanding entire systems rather than individual components.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Engineering Precision</h3>
            <p>Every solution is designed with engineering rigor and attention to detail.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Practical Implementation</h3>
            <p>We focus on solutions that work in real-world industrial environments.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Long-term Partnership</h3>
            <p>We build relationships that extend beyond individual projects.</p>
          </div>
        </div>
      </Section>

      <Section title="Engineering Principles">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Reliability:</strong> Systems that perform consistently under all conditions.</li>
          <li><strong>Efficiency:</strong> Optimized processes that maximize operational value.</li>
          <li><strong>Scalability:</strong> Solutions that grow with business needs.</li>
          <li><strong>Interoperability:</strong> Systems that work seamlessly together.</li>
          <li><strong>Security:</strong> Protected systems that safeguard operations.</li>
        </ul>
      </Section>

      <Section title="Our Commitment">
        <p className="text-lg">
          We are committed to long-term partnerships that help our clients achieve operational excellence
          through engineering-driven digital and industrial systems. Our focus is on delivering value
          that extends far beyond individual projects.
        </p>
      </Section>
    </>
  )
}