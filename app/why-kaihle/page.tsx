import { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTag } from '@/components/ui/SectionTag'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { CTABanner } from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: 'Why Kaihle — Kaihle',
  description:
    'Why Kaihle is different from other edtech platforms. See how we help schools close learning gaps with AI-powered diagnostic learning.',
  openGraph: {
    title: 'Why Kaihle — Kaihle',
    description:
      'Why Kaihle is different. See how we help schools close learning gaps.',
    url: 'https://www.kaihle.com/why-kaihle',
  },
}

export default function WhyKaihlePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark overflow-hidden py-20">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(201,147,42,0.15) 0%, transparent 60%)' }} />
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-14 text-center relative z-10 max-w-[800px]">
          <h1 className="font-fraunces text-[42px] md:text-[52px] font-bold text-white tracking-[-1.5px] leading-[1.1] mb-6">
            Why Kaihle is different
          </h1>
          <p className="text-[18px] text-white/80 leading-[1.65]">
            Most edtech platforms add to teacher workload. Kaihle reduces it — while delivering better outcomes for every student.
          </p>
        </div>
      </section>

      {/* Why Different */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <SectionTag>Why Kaihle</SectionTag>
          <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1]">
            What makes us different
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            emoji="🎯"
            title="Actual gaps, not grades"
            description="We don&apos;t give you averages. We map exact subtopic gaps per student — so you know precisely what to teach next."
          />
          <FeatureCard
            emoji="⚡"
            title="Less marking, more teaching"
            description="Assessment, marking, and gap analysis happen automatically. Teachers focus on instruction, not admin."
          />
          <FeatureCard
            emoji="🧠"
            title="Personalised to how each student learns"
            description="Every study plan adapts to the student&apos;s learning profile — visual, step-by-step, examples-first. Not one-size-fits-all."
          />
          <FeatureCard
            emoji="📊"
            title="School-wide visibility"
            description="Principals see outcomes across every class. Data-backed decisions, not gut feel."
          />
          <FeatureCard
            emoji="🔗"
            title="Built on your curriculum"
            description="Every question, resource, and standard is aligned to Cambridge or IB. No adaptation needed."
          />
          <FeatureCard
            emoji="👨‍👩‍👧"
            title="Parents stay in the loop"
            description="Weekly updates go straight to parents. No app downloads, no logins, no jargon."
          />
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-14">
        <CTABanner
          headline="See the difference Kaihle can make"
          subheadline="Book a demo to see how we help schools close learning gaps — without adding to teacher workload."
          primaryCTA={{ label: 'Request a Demo →', href: '/demo' }}
        />
      </SectionWrapper>
    </>
  )
}
