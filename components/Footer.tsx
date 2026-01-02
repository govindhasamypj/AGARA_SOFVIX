import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Agara-Sofvix</h3>
            <p className="text-gray-300">Engineering-driven digital & industrial systems for operational clarity and efficiency.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/digital-systems" className="text-gray-300 hover:text-white">Digital Systems</Link></li>
              <li><Link href="/services/industrial-digitalization" className="text-gray-300 hover:text-white">Industrial Digitalization</Link></li>
              <li><Link href="/services/engineering-systems" className="text-gray-300 hover:text-white">Engineering Systems</Link></li>
              <li><Link href="/services/support" className="text-gray-300 hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link href="/approach" className="text-gray-300 hover:text-white">Approach</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white">Case Studies</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@agara-sofvix.com</p>
            <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">Engineering-Driven Digital & Industrial Systems</p>
        </div>
      </div>
    </footer>
  )
}