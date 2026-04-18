'use client'

import { useState } from 'react'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Button } from '@/components/ui/Button'

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    role: '',
    students: '',
    curriculum: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to submit form. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <>
        <section className="relative bg-gradient-to-br from-primary to-primary-dark overflow-hidden py-14 min-h-[60vh] flex items-center">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(201,147,42,0.15) 0%, transparent 60%)' }} />

          <div className="max-w-[600px] mx-auto px-6 text-center relative z-10">
            <div className="text-[64px] mb-6">🎉</div>
            <h1 className="font-fraunces text-[36px] md:text-[48px] font-bold text-white tracking-[-1.5px] leading-[1.1] mb-6">
              Thank you!
            </h1>
            <p className="text-[18px] text-white/80 leading-[1.65] mb-8">
              We&apos;ve received your demo request. Our team will be in touch within 24 hours to schedule your demo.
            </p>
            <Button href="/" variant="ghost" size="lg">Back to Home</Button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark overflow-hidden py-14">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(201,147,42,0.15) 0%, transparent 60%)' }} />

        <div className="max-w-[600px] mx-auto px-6 text-center relative z-10">
          <h1 className="font-fraunces text-[42px] md:text-[52px] font-bold text-white tracking-[-1.5px] leading-[1.1] mb-6">
            Request a Demo
          </h1>
          <p className="text-[18px] text-white/80 leading-[1.65]">
            See Kaihle in action. A 30-minute demo with our team, using your school&apos;s curriculum content.
          </p>
        </div>
      </section>

      {/* Form */}
      <SectionWrapper>
        <div className="max-w-[600px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[14px] font-bold text-ink mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[14px] font-bold text-ink mb-2">
                Work Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="you@school.edu"
              />
            </div>

            <div>
              <label htmlFor="school" className="block text-[14px] font-bold text-ink mb-2">
                School Name *
              </label>
              <input
                type="text"
                id="school"
                name="school"
                required
                value={formData.school}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                placeholder="Your school's name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="role" className="block text-[14px] font-bold text-ink mb-2">
                  Your Role *
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                >
                  <option value="">Select role</option>
                  <option value="founder">School Founder</option>
                  <option value="principal">Principal</option>
                  <option value="head">Head of School</option>
                  <option value="teacher">Teacher</option>
                  <option value="curriculum">Curriculum Director</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="students" className="block text-[14px] font-bold text-ink mb-2">
                  Number of Students *
                </label>
                <select
                  id="students"
                  name="students"
                  required
                  value={formData.students}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                >
                  <option value="">Select range</option>
                  <option value="under-50">Under 50</option>
                  <option value="50-100">50-100</option>
                  <option value="100-200">100-200</option>
                  <option value="200-500">200-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="curriculum" className="block text-[14px] font-bold text-ink mb-2">
                Curriculum *
              </label>
              <select
                id="curriculum"
                name="curriculum"
                required
                value={formData.curriculum}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              >
                <option value="">Select curriculum</option>
                <option value="cambridge">Cambridge</option>
                <option value="ib">IB (International Baccalaureate)</option>
                <option value="both">Both Cambridge & IB</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-[14px] font-bold text-ink mb-2">
                Anything else we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                placeholder="Tell us about your school..."
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </Button>

            <p className="text-[14px] text-gray-500 text-center">
              By submitting, you agree to our privacy policy. We&apos;ll be in touch within 24 hours.
            </p>
          </form>
        </div>
      </SectionWrapper>
    </>
  )
}
