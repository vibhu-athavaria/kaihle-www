import Link from 'next/link'
import { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTag } from '@/components/ui/SectionTag'
import { Button } from '@/components/ui/Button'
import { FeatureCard } from '@/components/ui/FeatureCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { GapHeatmap } from '@/components/ui/GapHeatmap'
import { Pill } from '@/components/ui/Pill'

export const metadata: Metadata = {
  title: 'Kaihle — AI-Powered Diagnostic Learning for Schools',
  description:
    'Kaihle maps every student\'s exact knowledge gaps and generates personalised learning to fix them. Built for Cambridge and IB schools worldwide.',
  openGraph: {
    title: 'Kaihle — AI-Powered Diagnostic Learning for Schools',
    description:
      'Kaihle maps every student\'s exact knowledge gaps and generates personalised learning to fix them.',
    url: 'https://www.kaihle.com',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-soft pt-[72px] pb-20 overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-500/15 blur-[60px] pointer-events-none" />
        <div className="absolute bottom-[100px] left-[-60px] w-[300px] h-[300px] rounded-full bg-orange-400/15 blur-[60px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-14 grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-[72px] items-center pb-20">
          <div>
            <Pill variant="green" pulse className="mb-8">Founding Cohort · Now Open</Pill>
            
            <h1 className="font-fraunces text-[48px] md:text-[60px] leading-[1.05] tracking-[-1.5px] text-ink mb-[22px]">
              Every student<br />
              has gaps. Most<br />
              <span className="text-primary italic relative">
                schools never<br />find them.
                <span className="absolute bottom-[3px] left-0 right-0 h-[3px] bg-accent rounded-sm" />
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-fraunces font-medium leading-snug tracking-tight text-ink/80 mb-4">
              The best educator you can hire can&apos;t personalise for 25 students.{" "}
              <span className="text-accent">Kaihle can.</span>
            </p>
            
            <p className="text-[18px] leading-[1.65] text-gray-600 max-w-[460px] mb-9">
              Kaihle is an AI-powered diagnostic platform that maps exactly where each
              student is struggling — and generates personalised learning to fix it.
              Built for schools. Built for real classrooms.
            </p>
            
            <div className="flex gap-3 mb-11 items-center flex-wrap">
              <Button href="/demo" variant="primary" size="lg">Apply for Pilot</Button>
              <Link href="/how-it-works" className="text-[15px] font-semibold text-gray-600 hover:text-primary">
                See how it works →
              </Link>
            </div>
            
            <div className="flex items-center gap-3.5">
              <div className="flex">
                <div className="w-[34px] h-[34px] rounded-full border-[2.5px] border-soft bg-indigo-400 -ml-[10px]" />
                <div className="w-[34px] h-[34px] rounded-full border-[2.5px] border-soft bg-emerald-400 -ml-[10px]" />
                <div className="w-[34px] h-[34px] rounded-full border-[2.5px] border-soft bg-orange-400 -ml-[10px]" />
                <div className="w-[34px] h-[34px] rounded-full border-[2.5px] border-soft bg-blue-400 -ml-[10px]" />
              </div>
              <p className="text-[14px] text-gray-600">
                <strong>Pilot applications open</strong> for partner schools
              </p>
            </div>
          </div>
          
          <div className="relative overflow-visible">
            <GapHeatmap />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3">
          <div className="p-8 md:px-10 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="font-fraunces text-[36px] font-bold text-ink tracking-[-1px] leading-none">
              7,000<span className="text-primary">+</span>
            </div>
            <div className="text-[13px] text-gray-500 font-medium mt-1">Curriculum-aligned questions ready from day one</div>
            <div className="text-[12px] text-gray-400 mt-1">Launching with Cambridge. IB and Common Core coming soon.</div>
          </div>
          <div className="p-8 md:px-10 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="font-fraunces text-[28px] font-bold text-ink tracking-[-1px] leading-none">
              Per-<br /><span className="text-primary">student</span>
            </div>
            <div className="text-[13px] text-gray-500 font-medium mt-1">Diagnostic reports for every student in your class</div>
          </div>
          <div className="p-8 md:px-10">
            <div className="font-fraunces text-[28px] font-bold text-ink tracking-[-1px] leading-none">
              AI-<br /><span className="text-primary">generated</span>
            </div>
             <div className="text-[13px] text-gray-500 font-medium mt-1">Personalised study plans built around each student{"'"}s gaps</div>
          </div>
        </div>
      </div>

      {/* Feature Highlights */}
      <SectionWrapper>
        <div className="mb-12">
          <SectionTag>The Platform</SectionTag>
          <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1] max-w-[560px]">
            Everything your school needs to unlock better learning.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            emoji="📋"
            title="Diagnostic Assessment"
            description="Structured assessments that map every student's knowledge gaps to specific curriculum subtopics — automatically, at enrolment and throughout the year."
          />
          <FeatureCard
            emoji="🧠"
            title="Student Learning Profiles"
            description="Kaihle builds a rich learning profile for every student — capturing their strengths, learning style, and progress patterns. The AI uses this to personalise every lesson specifically for them."
          />
          <FeatureCard
            emoji="🗺️"
            title="Real-Time Gap Map"
            description="Teachers see a colour-coded heatmap of their entire class. Instantly know who is struggling, on what topic, and by how much. No spreadsheets. No guesswork."
          />
          <FeatureCard
            emoji="✨"
            title="Personalised AI Lessons"
            description="For every gap identified, Kaihle generates a personalised study plan with AI-produced explainer content, animations, and practice tailored to how each student learns best."
          />
          <FeatureCard
            emoji="📝"
            title="Teacher AI Lesson Planner"
            description="Teachers generate complete, gap-aware lesson plans in minutes. Spend less time creating resources and more time mentoring, coaching, and connecting with students."
          />
          <FeatureCard
            emoji="🏫"
            title="School-Wide Analytics"
            description="Principals and heads of school see learning outcomes across every class. Identify where the school excels and where attention is needed — backed by real data, not gut feel."
          />
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <section className="bg-white border-y border-gray-200 py-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14">
          <div className="text-center mb-12">
            <SectionTag>How it works</SectionTag>
            <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1]">
              From diagnostic to personalised learning — in three steps.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-gray-200 rounded-[20px] overflow-hidden">
            <div className="bg-white p-10">
              <div className="w-[52px] h-[52px] bg-primary rounded-[14px] font-black text-[20px] text-white flex items-center justify-center mb-4">01</div>
              <h3 className="text-[19px] font-extrabold text-ink mb-2.5">Diagnose</h3>
              <p className="text-[15px] leading-[1.7] text-gray-600 mb-3.5">Students take a structured diagnostic assessment. Kaihle maps their exact knowledge gaps across every subtopic in the curriculum.</p>
              <span className="bg-primary-light text-primary text-[12px] font-bold px-3 py-1 rounded-full inline-block">Takes about 30 to 45 minutes</span>
            </div>
            <div className="bg-white p-10">
              <div className="w-[52px] h-[52px] bg-primary rounded-[14px] font-black text-[20px] text-white flex items-center justify-center mb-4">02</div>
              <h3 className="text-[19px] font-extrabold text-ink mb-2.5">Identify</h3>
              <p className="text-[15px] leading-[1.7] text-gray-600 mb-3.5">Teachers see a real-time heatmap of their class. Instantly know who is struggling, on what topic, and by how much.</p>
              <span className="bg-primary-light text-primary text-[12px] font-bold px-3 py-1 rounded-full inline-block">Updated in real-time</span>
            </div>
            <div className="bg-white p-10">
              <div className="w-[52px] h-[52px] bg-primary rounded-[14px] font-black text-[20px] text-white flex items-center justify-center mb-4">03</div>
              <h3 className="text-[19px] font-extrabold text-ink mb-2.5">Fix</h3>
              <p className="text-[15px] leading-[1.7] text-gray-600 mb-3.5">Students get a personalised study plan built for how they learn. Teachers coach. Kaihle handles the rest.</p>
              <span className="bg-primary-light text-primary text-[12px] font-bold px-3 py-1 rounded-full inline-block">Fully automated</span>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button href="/how-it-works" variant="outline">See the full walkthrough</Button>
          </div>
        </div>
      </section>

      {/* School Value Prop */}
      <SectionWrapper className="bg-primary-light border-y border-primary-mid">
        <div className="text-center mb-12">
          <SectionTag>The School Difference</SectionTag>
          <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1]">
            When learning works better,<br />the whole school changes.
          </h2>
          <p className="text-[18px] text-gray-600 mt-4 max-w-[600px] mx-auto">
            Kaihle isn&apos;t just a student tool or a teacher tool. It&apos;s a system that changes what&apos;s possible for your entire institution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-card p-8 border border-primary-mid">
            <div className="text-[36px] mb-4">🎯</div>
            <h3 className="font-fraunces text-[20px] font-bold text-ink mb-3">Students learn faster</h3>
            <p className="text-[16px] text-gray-600 leading-[1.7]">
              Every student gets a lesson built for them — not a one-size-fits-all lesson built for the class average. Gaps close faster. Confidence grows.
            </p>
          </div>
          <div className="bg-white rounded-card p-8 border border-primary-mid">
            <div className="text-[36px] mb-4">👩‍🏫</div>
            <h3 className="font-fraunces text-[20px] font-bold text-ink mb-3">Teachers become mentors</h3>
            <p className="text-[16px] text-gray-600 leading-[1.7]">
              When AI handles lesson planning, assessment creation, and gap analysis, teachers can focus on what they do best — building relationships, inspiring curiosity, and mentoring students as individuals.
            </p>
          </div>
          <div className="bg-white rounded-card p-8 border border-primary-mid">
            <div className="text-[36px] mb-4">🌱</div>
            <h3 className="font-fraunces text-[20px] font-bold text-ink mb-3">Schools can do more</h3>
            <p className="text-[16px] text-gray-600 leading-[1.7]">
              When core learning becomes more efficient, schools gain bandwidth. More time for extra-curricular activities, deeper projects, and the kind of enriched education every school aspires to offer.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Founder Credibility */}
      <SectionWrapper className="bg-white">
        <div className="text-center max-w-[680px] mx-auto">
          <SectionTag>Why Kaihle exists</SectionTag>
          <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1] mt-4 mb-6">
            Built by someone who ran a school<br className="hidden md:block" /> and lived this problem
          </h2>
          <p className="text-[18px] leading-[1.65] text-gray-600 mb-9">
            After years leading an international school, our founder couldn&apos;t get a straight
            answer to one question: what does each student actually understand right now —
            not what they submitted, not what they scored, but what they genuinely know?
            Kaihle exists to answer that question, for every teacher, every class, every day.
          </p>
          <Button href="mailto:hello@kaihle.com" variant="primary" size="lg">
            Book a conversation →
          </Button>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper className="py-14">
        <CTABanner
          headline="Ready to run a pilot?"
          subheadline="We work with micro schools and small international schools. If you have 15–300 students and a Cambridge or IB curriculum, we want to talk."
          primaryCTA={{ label: 'Apply for Pilot →', href: '/demo' }}
          secondaryCTA={{ label: 'For Schools', href: '/for-schools' }}
        />
      </SectionWrapper>
    </>
  )
}
