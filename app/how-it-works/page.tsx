import { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { CTABanner } from '@/components/ui/CTABanner'
import { ClipboardCheck, BarChart3, BookMarked, Sparkles, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How It Works — Kaihle',
  description:
    'See how Kaihle works — from diagnostic assessment to personalised learning. A step-by-step guide to our AI-powered platform for schools.',
  openGraph: {
    title: 'How It Works — Kaihle',
    description:
      'See how Kaihle works — from diagnostic assessment to personalised learning.',
    url: 'https://www.kaihle.com/how-it-works',
  },
}

const steps = [
  {
    num: '01',
    Icon: ClipboardCheck,
    title: 'Student takes a diagnostic assessment',
    body: `When a student joins a class, Kaihle automatically creates a Tier 1 diagnostic — a short, curriculum-aligned assessment covering all major topics for their grade and subject. The student completes it once. The platform does the rest.

Teachers can also assign Tier 2 assessments at any point — before a new unit, mid-term, or after a period of absence.`,
    badge: 'Takes ~15 minutes · Covers full grade curriculum',
  },
  {
    num: '02',
    Icon: BarChart3,
    title: 'Kaihle maps the gaps',
    body: `Every response is scored and mapped to a specific curriculum subtopic. Kaihle calculates a mastery score per subtopic for every student — and compares it across the class.

The teacher sees a colour-coded heatmap: green for strong, amber for developing, red for needs attention. Not averages. Not letter grades. Exact gaps, by subtopic, per student.`,
    badge: 'Updated in real-time · Cambridge & IB aligned',
  },
  {
    num: '03',
    Icon: BookMarked,
    title: 'A personalised study plan is generated',
    body: `For every gap identified, Kaihle generates a study plan. This includes curated external resources matched to the student's learning profile, and an AI-generated practice quiz to reinforce the concept.

Resources are selected by semantic similarity to the curriculum subtopic — not keyword search. Quality over quantity.`,
    badge: 'Curated resources + AI practice quiz per gap',
  },
  {
    num: '04',
    Icon: Sparkles,
    title: 'AI-generated explainer content',
    body: `For deeper gaps, Kaihle generates personalised explainer content — structured around how this specific student learns. Teachers can see every student&apos;s content and progress inside the class dashboard.`,
    badge: 'Animations · Infographics · Practice questions',
  },
  {
    num: '05',
    Icon: Mail,
    title: 'Parents stay informed',
    body: `Each week, parents receive a plain-language summary of their child&apos;s progress — improvements, gaps still being addressed, and what&apos;s coming next. No jargon. No login required.`,
    badge: 'Weekly · Plain language · No parent login needed',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white border-t-4 border-primary py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14 text-center max-w-[800px]">
          <h1 className="font-fraunces text-[42px] md:text-[52px] font-bold text-ink tracking-[-1.5px] leading-[1.1] mb-6">
            From diagnostic to personalised learning — in one platform.
          </h1>
          <p className="text-[18px] text-gray-600 leading-[1.65]">
            Kaihle connects four things that have never worked together before:
            structured assessment, gap analysis, curriculum mapping, and AI-generated
            content. Here&apos;s exactly how it works.
          </p>
        </div>
      </section>

      {/* Steps */}
      <SectionWrapper>
        <div className="space-y-24">
          {steps.map((step, i) => (
            <div key={step.num} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-[120px] font-bold text-blue-100 leading-none -mb-12 -mt-8 relative z-0">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <step.Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="font-fraunces text-[28px] font-bold text-ink mb-4">{step.title}</h2>
                  <div className="text-[15px] text-gray-600 leading-[1.75] whitespace-pre-line mb-4">
                    {step.body}
                  </div>
                  <span className="inline-block bg-blue-50 text-primary text-[12px] font-bold px-4 py-2 rounded-full">
                    {step.badge}
                  </span>
                </div>
              </div>
              <div className={`bg-gradient-to-br from-primary-light to-accent-light rounded-[24px] h-[300px] flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <step.Icon className="w-24 h-24 text-primary/30" />
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper className="py-14">
        <CTABanner
          headline="Ready to see it in action?"
          subheadline="A 30-minute demo will walk you through the entire flow — from diagnostic to student experience. We&apos;ll use Cambridge content your students would actually see."
          primaryCTA={{ label: 'Request a Demo →', href: '/demo' }}
        />
      </SectionWrapper>
    </>
  )
}
