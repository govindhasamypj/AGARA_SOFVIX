import PageHeader from '../../components/PageHeader'
import Section from '../../components/Section'
import ContactForm from '../../components/ContactForm'

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let's discuss how we can transform your industrial systems"
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg mb-6">
              Ready to discuss your system integration needs? Our engineering experts are here to help
              you achieve operational clarity and efficiency.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Engineering Consultation</h3>
                <p>We provide free initial consultations to understand your system requirements and challenges.</p>
              </div>
              <div>
                <h3 className="font-semibold">Technical Expertise</h3>
                <p>Our team has extensive experience in industrial systems, digital integration, and engineering solutions.</p>
              </div>
              <div>
                <h3 className="font-semibold">Custom Solutions</h3>
                <p>Every solution is tailored to your specific operational needs and business objectives.</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-gray-600">
                <strong>Email:</strong> info@agara-sofvix.com<br />
                <strong>Phone:</strong> +1 (123) 456-7890<br />
                <strong>Response Time:</strong> Within 24 hours
              </p>
            </div>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}