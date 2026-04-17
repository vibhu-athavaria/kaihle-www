import { Metadata } from 'next'
import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTag } from '@/components/ui/SectionTag'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Why Kaihle — Kaihle',
  description: 'Why Kaihle is different from Google Classroom, Khan Academy, and traditional school tools.',
  openGraph: {
    title: 'Why Kaihle — Kaihle',
    description:
      'Why Kaihle is different from Google Classroom, Khan Academy, and traditional school tools.',
    url: 'https://www.kaihle.com/why-kaihle',
  },
}

export default function WhyKaihlePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-soft border-b border-primary-mid py-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14 text-center max-w-[900px]">
          <h1 className="font-fraunces text-[42px] md:text-[52px] font-bold text-ink tracking-[-1.5px] leading-[1.1] mb-6">
            Why schools keep failing the same students — and why that&apos;s not the teachers&apos; fault
          </h1>
          <p className="text-[18px] text-gray-600 leading-[1.65]">
            Most tools built for schools make the same mistake. Here&apos;s what&apos;s different about how Kaihle thinks.
          </p>
        </div>
      </section>

      {/* Section 1: The honest problem with testing */}
      <SectionWrapper>
        <div className="max-w-[800px] mx-auto">
          <SectionTag>The problem with testing</SectionTag>
          <h2 className="font-fraunces text-[32px] font-bold text-ink mb-6 mt-2">
            Tests tell you what happened. Not what to do next.
          </h2>
          <div className="space-y-6 text-[17px] text-gray-600 leading-[1.75]">
            <p>
              Schools have always used tests to measure learning. But tests have a structural problem: they measure performance on the day, not understanding over time. A student who memorises the night before and scores 80% may know less than a student who scored 65% through genuine comprehension. By the time results are in, weeks have passed and the gap has grown.
            </p>
            <p>
              Kaihle doesn&apos;t replace tests. But it gives teachers continuous, subtopic-level visibility between them — so they&apos;re never teaching into the dark.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 2: The tools you already use */}
      <SectionWrapper className="bg-soft">
        <div className="max-w-[900px] mx-auto">
          <SectionTag>The gap your current tools leave</SectionTag>
          <h2 className="font-fraunces text-[32px] font-bold text-ink mb-6 mt-2">
            The tools you already use — and the gap they leave
          </h2>
          
          <div className="space-y-6 text-[17px] text-gray-600 leading-[1.75] mb-10">
            <p>
              Schools aren&apos;t short of tools. Most already have Google Classroom for workflows, Khan Academy for practice content, and a student information system for records. These are good tools. Kaihle isn&apos;t here to replace them.
            </p>
            <p>
              But here&apos;s what none of them do:
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b-2 border-gray-300 font-semibold text-gray-700"></th>
                  <th className="text-center p-4 border-b-2 border-gray-300 font-semibold text-gray-700 bg-gray-50">Google Classroom</th>
                  <th className="text-center p-4 border-b-2 border-gray-300 font-semibold text-gray-700 bg-gray-50">Khan Academy</th>
                  <th className="text-center p-4 border-b-2 border-gray-300 font-semibold text-gray-700 bg-gray-50">Your SIS</th>
                  <th className="text-center p-4 border-b-2 border-primary font-bold text-primary bg-primary-light">Kaihle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Distribute assignments</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">✓</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">—</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">—</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">—</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Free practice content</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">—</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">✓</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">—</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">—</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Student records</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">—</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">—</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">✓</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">—</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Individualised assessment per class</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">✓</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Diagnostic gap mapping per subtopic</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">✓</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Cambridge / IB curriculum aligned</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">Partial</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">✓</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Personalised study plan per student</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">Partial</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">✓</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">Real-time teacher gap heatmap</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">✓</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">AI lesson planner for teachers</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">✓</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 font-medium text-gray-700">School-wide admin visibility</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50 text-gray-400">✗</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-gray-50">Partial</td>
                  <td className="p-4 border-b border-gray-200 text-center bg-primary-light font-semibold text-primary">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Three follow-up callout paragraphs */}
          <div className="space-y-8">
            <div className="border-t border-gray-200 pt-8">
              <p className="text-[17px] text-gray-600 leading-[1.75]">
                <strong className="text-ink">Google Classroom</strong> manages the logistics of learning — submissions, communication, scheduling. It tells you an assignment was turned in. Not whether the student understood it.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-[17px] text-gray-600 leading-[1.75]">
                <strong className="text-ink">Khan Academy</strong> delivers content. It&apos;s self-directed and free — but it doesn&apos;t know which of your 28 students is weak on a specific subtopic, and it wasn&apos;t built around Cambridge or IB objectives.
              </p>
            </div>
            <div className="border-t border-gray-200 pt-8">
              <p className="text-[17px] text-gray-600 leading-[1.75]">
                <strong className="text-ink">Kaihle does something neither of them does:</strong> it automatically generates an individualised diagnostic assessment the moment a student enrols in a class — mapped to that specific subject and grade — and uses those results to build a personalised learning path for each student. Every time. Without teacher intervention.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t-2 border-gray-200">
            <p className="text-[20px] font-semibold text-ink leading-[1.5]">
              Your existing tools manage the workflow of school. Kaihle manages the learning.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: The honest problem with "personalised learning" */}
      <SectionWrapper>
        <div className="max-w-[800px] mx-auto">
          <SectionTag>Personalised learning, actually</SectionTag>
          <h2 className="font-fraunces text-[32px] font-bold text-ink mb-6 mt-2">
            Every platform claims personalised learning. Most don&apos;t mean it.
          </h2>
          <div className="space-y-6 text-[17px] text-gray-600 leading-[1.75]">
            <p>
              Most platforms use &quot;personalised learning&quot; to mean the student picks their own pace through the same content everyone else sees.
            </p>
            <p>
              Kaihle personalises differently. It starts by learning how each student thinks — before a single lesson begins. Then every study plan, every AI-generated explanation, and every practice activity is built around that specific student's learning preferences. Not the class average. Not the curriculum default.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: What makes Kaihle different */}
      <SectionWrapper className="bg-soft">
        <div className="text-center mb-12">
          <SectionTag>Why Kaihle</SectionTag>
          <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1]">
            What makes Kaihle different
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
            title="Less admin, more teaching"
            description="Assessment, marking, and gap analysis happen automatically. Teachers focus on instruction, not paperwork."
          />
          <FeatureCard
            emoji="🧠"
            title="Personalised to how each student learns"
            description="Every study plan adapts to the student's learning preferences — visual, step-by-step, examples-first. Not one-size-fits-all."
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
            description="Weekly plain-language updates go straight to parents. No app, no login, no jargon."
          />
        </div>
      </SectionWrapper>

      {/* Closing CTA */}
      <SectionWrapper className="py-14">
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1] mb-6">
            Kaihle isn&apos;t for every school.
          </h2>
          <p className="text-[18px] text-gray-600 leading-[1.65] mb-9">
            It&apos;s for schools that believe every student deserves better than average — and every teacher deserves better than burnout.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button href="/demo" variant="primary" size="lg">Apply for Pilot →</Button>
            <Link href="/how-it-works" className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-semibold text-gray-600 hover:text-primary">
              See how it works →
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
