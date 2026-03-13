import { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTag } from '@/components/ui/SectionTag'
import { CTABanner } from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: 'About Us — Kaihle',
  description:
    'Learn about Kaihle — our mission to help schools close learning gaps with AI-powered diagnostic learning.',
  openGraph: {
    title: 'About Us — Kaihle',
    description: 'Our mission to help schools close learning gaps.',
    url: 'https://www.kaihle.com/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-soft border-b border-primary-mid py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14 text-center max-w-[800px]">
          <SectionTag>About Us</SectionTag>
          <h1 className="font-fraunces text-[42px] md:text-[52px] font-bold text-ink tracking-[-1.5px] leading-[1.1] mb-6">
            Our mission
          </h1>
          <p className="text-[18px] text-gray-600 leading-[1.65]">
            We believe every student deserves to learn at their own pace — and every teacher deserves to know exactly where their students need help.
          </p>
        </div>
      </section>

      {/* Story */}
      <SectionWrapper>
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-fraunces text-[32px] font-bold text-ink mb-6">The problem we solve</h2>
          <div className="space-y-6 text-[17px] text-gray-600 leading-[1.75]">
            <p>
              Schools have more data than ever — but less time to make sense of it. Teachers are stretched thin, balancing teaching with marking, planning, and admin. By the time they spot a struggling student, months of learning have been lost.
            </p>
            <p>
              Most edtech tools add to the problem. More dashboards to check. More apps for students to log in to. More data that tells you what happened, not what to do next.
            </p>
            <p>
              Kaihle was built to solve this. We connect four things that have never worked together: structured assessment, gap analysis, curriculum mapping, and AI-generated content. The result? Teachers spend less time on admin, and every student gets a learning path built for them.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-soft">
        <div className="text-center mb-12">
          <SectionTag>Our Values</SectionTag>
          <h2 className="font-fraunces text-[36px] font-bold text-ink">What we believe</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-card p-8 border border-gray-200">
            <div className="text-[32px] mb-4">🎯</div>
            <h3 className="font-fraunces text-[20px] font-bold text-ink mb-3">Teachers first</h3>
            <p className="text-gray-600">Every feature we build starts with &quot;does this save teachers time?&quot; If it doesn&apos;t, we don&apos;t build it.</p>
          </div>
          <div className="bg-white rounded-card p-8 border border-gray-200">
            <div className="text-[32px] mb-4">🧠</div>
            <h3 className="font-fraunces text-[20px] font-bold text-ink mb-3">Personalised learning</h3>
            <p className="text-gray-600">Every student learns differently. Their learning path should reflect that — not a one-size-fits-all curriculum.</p>
          </div>
          <div className="bg-white rounded-card p-8 border border-gray-200">
            <div className="text-[32px] mb-4">🔗</div>
            <h3 className="font-fraunces text-[20px] font-bold text-ink mb-3">Curriculum aligned</h3>
            <p className="text-gray-600">We don&apos;t replace your curriculum — we make it work harder. Every question and resource is aligned to Cambridge and IB.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-14">
        <CTABanner
          headline="Ready to see Kaihle in action?"
          subheadline="Book a demo to see how we help schools close learning gaps — without adding to teacher workload."
          primaryCTA={{ label: 'Request a Demo →', href: '/demo' }}
        />
      </SectionWrapper>
    </>
  )
}
