'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './Button'

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-900">Agara-Sofvix</Link>
        <nav className="hidden md:flex space-x-8 items-center">
          <div className="relative">
            <button onClick={() => setServicesOpen(!servicesOpen)} className="hover:text-slate-600">Services</button>
            {servicesOpen && (
              <div className="absolute top-full left-0 bg-white shadow border mt-2 py-2 w-48">
                <Link href="/services/digital-systems" className="block px-4 py-2 hover:bg-gray-100">Digital Systems</Link>
                <Link href="/services/industrial-digitalization" className="block px-4 py-2 hover:bg-gray-100">Industrial Digitalization</Link>
                <Link href="/services/engineering-systems" className="block px-4 py-2 hover:bg-gray-100">Engineering Systems</Link>
                <Link href="/services/support" className="block px-4 py-2 hover:bg-gray-100">Support</Link>
              </div>
            )}
          </div>
          <Link href="/industries" className="hover:text-slate-600">Industries</Link>
          <Link href="/approach" className="hover:text-slate-600">Approach</Link>
          <Link href="/about" className="hover:text-slate-600">About</Link>
          <Link href="/case-studies" className="hover:text-slate-600">Case Studies</Link>
          <Link href="/contact" className="hover:text-slate-600">Contact</Link>
        </nav>
        <Button variant="primary" href="/contact">Discuss Your System</Button>
      </div>
    </header>
  )
}