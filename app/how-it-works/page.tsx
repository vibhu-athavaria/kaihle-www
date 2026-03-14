import { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { CTABanner } from '@/components/ui/CTABanner'
import { ClipboardCheck, BarChart3, BookMarked, Sparkles, Mail, UserRound } from 'lucide-react'

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
    Icon: UserRound,
    title: "Before anything else: tell Kaihle about yourself",
    body: `When a student joins Kaihle for the first time, the very first thing they do isn't a test — it's a short onboarding conversation. Kaihle asks the student a few simple questions about how they like to learn: Do they prefer to see examples before explanations, or the other way around? Do they find it easier to work through problems step by step, or see the big picture first? How do they feel about the subject they're about to study?

This isn't a quiz. There are no right or wrong answers. It's Kaihle getting to know the person behind the student — so that from the very first lesson, every piece of content, every study plan, and every AI-generated explanation is built around how this student actually learns. Not how the average student learns. Them.`,
    badge: '🙋 Takes ~5 minutes · No right answers · Sets up everything that follows',
    isOnboarding: true,
  },
  {
    num: '02',
    Icon: ClipboardCheck,
    title: 'Student takes their Initial Diagnostic Assessment',
    body: `When a student joins a class, Kaihle automatically runs an Initial Diagnostic Assessment — a short, curriculum-aligned assessment covering all major topics for their grade and subject. The student completes it once. The platform does the rest.

Teachers can also assign Progress Checks at any point — before a new unit, mid-term, or after a period of absence. These are shorter, focused assessments that update each student's gap map with fresh data as the year progresses.`,
    badge: 'Takes ~15 minutes · Covers full grade curriculum',
  },
  {
    num: '03',
    Icon: BarChart3,
    title: 'Kaihle maps the gaps',
    body: `Every response is scored and mapped to a specific curriculum subtopic. Kaihle calculates a mastery score per subtopic for every student — and compares it across the class.

The teacher sees a colour-coded heatmap: green for strong, amber for developing, red for needs attention. Not averages. Not letter grades. Exact gaps, by subtopic, per student.`,
    badge: 'Updated in real-time · Cambridge & IB aligned',
  },
  {
    num: '04',
    Icon: BookMarked,
    title: 'A personalised study plan is generated',
    body: `For every gap identified, Kaihle generates a study plan. This includes curated external resources matched to the student's learning profile, and an AI-generated practice quiz to reinforce the concept.

Resources are selected by semantic similarity to the curriculum subtopic — not keyword search. Quality over quantity.`,
    badge: 'Curated resources + AI practice quiz per gap',
  },
  {
    num: '05',
    Icon: Sparkles,
    title: 'AI-generated explainer content',
    body: `For deeper gaps, Kaihle generates personalised explainer content — structured around how this specific student learns. Teachers can see every student&apos;s content and progress inside the class dashboard.`,
    badge: 'Animations · Infographics · Practice questions',
  },
  {
    num: '06',
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
              <div className={`bg-gradient-to-br from-primary-light to-accent-light rounded-[24px] h-[300px] flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : ''} ${step.isOnboarding ? '!h-auto !p-6' : ''}`}>
                {step.isOnboarding ? (
                  <div className="w-full max-w-[320px] bg-white rounded-[16px] shadow-lg overflow-hidden">
                    <div className="bg-primary/5 px-4 py-3 border-b border-gray-100">
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wide">Welcome to Kaihle</span>
                      <span className="text-gray-300 mx-2">·</span>
                      <span className="text-[11px] font-medium text-gray-500">Student Onboarding</span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full w-[50%] bg-primary rounded-full"></div>
                        </div>
                        <span className="text-[11px] font-medium text-gray-400">Step 2 of 4</span>
                      </div>
                      <p className="text-[14px] font-semibold text-ink mb-4">When you&apos;re learning something new, what usually works best for you?</p>
                      <div className="space-y-2 mb-4">
                        <button className="w-full text-left px-4 py-3 rounded-[10px] bg-primary text-white border-2 border-primary">
                          <span className="text-[14px] font-medium">👀 See a worked example first, then try it myself</span>
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-[10px] bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300">
                          <span className="text-[14px] font-medium">📖 Read the explanation first, then examples</span>
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-[10px] bg-white text-gray-600 border-2 border-gray-200 hover:border-gray-300">
                          <span className="text-[14px] font-medium">🧩 Jump straight in and figure it out as I go</span>
                        </button>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] font-semibold">Visual learner</span>
                        <span className="px-3 py-1 rounded-full bg-primary text-white text-[11px] font-semibold">Maths · Grade 8</span>
                        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-[11px] font-semibold">Cambridge Checkpoint</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <step.Icon className="w-24 h-24 text-primary/30" />
                )}
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
