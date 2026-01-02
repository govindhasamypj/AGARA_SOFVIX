'use client'

import { useState } from 'react'
import Button from './Button'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  industry: string
  requirement: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    requirement: ''
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name) newErrors.name = 'Name is required'
    if (!formData.company) newErrors.company = 'Company is required'
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.phone) newErrors.phone = 'Phone is required'
    if (!formData.industry) newErrors.industry = 'Industry is required'
    if (!formData.requirement) newErrors.requirement = 'Requirement is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // API placeholder
      console.log('Form submitted', formData)
      setSubmitted(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return <div className="text-center py-8">Thank you for your message. We will get back to you soon.</div>
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border" />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="company" className="block mb-1">Company</label>
        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border" />
        {errors.company && <p className="text-red-500">{errors.company}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border" />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block mb-1">Phone</label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border" />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>
      <div>
        <label htmlFor="industry" className="block mb-1">Industry</label>
        <select id="industry" name="industry" value={formData.industry} onChange={handleChange} className="w-full p-2 border">
          <option value="">Select Industry</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="water-utilities">Water & Utilities</option>
          <option value="energy">Energy</option>
          <option value="infrastructure">Infrastructure</option>
          <option value="engineering-smes">Engineering SMEs</option>
        </select>
        {errors.industry && <p className="text-red-500">{errors.industry}</p>}
      </div>
      <div>
        <label htmlFor="requirement" className="block mb-1">Requirement</label>
        <textarea id="requirement" name="requirement" value={formData.requirement} onChange={handleChange} className="w-full p-2 border" rows={4}></textarea>
        {errors.requirement && <p className="text-red-500">{errors.requirement}</p>}
      </div>
      <Button variant="primary">Submit</Button>
    </form>
  )
}