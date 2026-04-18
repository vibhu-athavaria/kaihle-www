import { Metadata } from 'next'
import Link from 'next/link'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTag } from '@/components/ui/SectionTag'
import { Button } from '@/components/ui/Button'
import { CTABanner } from '@/components/ui/CTABanner'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Schools — Kaihle',
  description:
    'Kaihle gives teachers a real-time diagnostic view of every student\'s knowledge gaps — and generates personalised learning to fix them. Built for Cambridge and IB schools.',
  openGraph: {
    title: 'Kaihle for Schools — Diagnostic Learning Platform',
    description:
      'Real-time gap maps, personalised study plans, and AI-generated content. Built for school administrators, teachers, and students.',
    url: 'https://www.kaihle.com/for-schools',
  },
}

export default function ForSchoolsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 50%, rgba(201,147,42,0.15) 0%, transparent 60%)' }} />
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-14 py-20 relative z-10">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 bg-white/12 border border-white/30 text-white px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-[1px] mb-6">
              Cambridge & IB Schools
            </div>
            
            <h1 className="font-fraunces text-[42px] md:text-[52px] font-bold text-white leading-[1.1] tracking-[-1.5px] mb-5">
              You know some students are falling behind.<br />
              You just don&apos;t know exactly who, or why.
            </h1>
            
            <p className="text-[18px] text-white/80 leading-[1.65] mb-8">
              Kaihle gives every teacher a real-time diagnostic view of their class —
              and every student a personalised path forward. No guesswork. No extra
              workload.
            </p>
            
            <Button href="/demo" variant="ghost" size="lg">Apply for Pilot</Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <SectionWrapper>
        <SectionTag>The Problem & The Solution</SectionTag>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-gray-200 rounded-[20px] overflow-hidden">
          <div className="bg-white p-10">
            <div className="text-[28px] mb-4">⚠️</div>
            <h3 className="font-fraunces text-[22px] font-bold text-ink mb-3.5">The problem every school shares</h3>
            <p className="text-[16px] leading-[1.75] text-gray-600">
              Teachers are stretched. Class sizes make individual attention hard.
              End-of-term results tell you what happened — not what to do about it.
              <br /><br />
              Most schools rely on homework grades and teacher intuition to identify
              struggling students. By the time a gap is spotted, it has compounded.
            </p>
          </div>
          <div className="bg-primary-light p-10">
            <div className="text-[28px] mb-4">✅</div>
            <h3 className="font-fraunces text-[22px] font-bold text-primary mb-3.5">What Kaihle does differently</h3>
            <p className="text-[16px] leading-[1.75] text-gray-600">
              Kaihle runs structured diagnostic assessments at the start of every unit.
              The platform analyses every response, maps gaps to specific curriculum
              subtopics, and generates a personalised study plan for each student —
              automatically.
              <br /><br />
              Teachers don&apos;t get more work. They get better information.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Built for every role */}
      <section className="bg-white border-y border-gray-200 py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14">
          <div className="text-center mb-12">
            <SectionTag>Built for every role</SectionTag>
            <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1]">
              One platform. Every person in your school.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-[18px] p-7 border border-gray-200">
              <div className="text-[28px] mb-3">🏫</div>
              <h3 className="text-[15px] font-extrabold text-ink mb-2">School Administrators</h3>
              <p className="text-[14px] leading-[1.65] text-gray-600">
                Full visibility across every class and every teacher.
                Understand school-wide performance trends. Approve student enrolments
                and manage staff in one place.
              </p>
            </div>
            <div className="bg-white rounded-[18px] p-7 border border-gray-200">
              <div className="text-[28px] mb-3">📖</div>
              <h3 className="text-[15px] font-extrabold text-ink mb-2">Teachers</h3>
              <p className="text-[14px] leading-[1.65] text-gray-600">
                See exactly where your class is struggling — before you
                teach the wrong thing twice. Assign assessments, review results, and
                let Kaihle generate the follow-up content.
              </p>
            </div>
            <div className="bg-white rounded-[18px] p-7 border border-gray-200">
              <div className="text-[28px] mb-3">🎓</div>
              <h3 className="text-[15px] font-extrabold text-ink mb-2">Students</h3>
              <p className="text-[14px] leading-[1.65] text-gray-600">
                Take a short diagnostic. Get a personalised plan. Learn
                through AI-generated explanations matched to your exact gaps and your
                learning style.
              </p>
            </div>
            <div className="bg-white rounded-[18px] p-7 border border-gray-200">
              <div className="text-[28px] mb-3">👨‍👩‍👧</div>
              <h3 className="text-[15px] font-extrabold text-ink mb-2">Parents</h3>
              <p className="text-[14px] leading-[1.65] text-gray-600">
                Receive a plain-language weekly summary of your child&apos;s
                progress — what improved, what&apos;s still being addressed, and what&apos;s
                coming next. No jargon. No login required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Callout */}
      <SectionWrapper>
        <div className="bg-gradient-to-br from-ink to-primary-dark rounded-[24px] p-14 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 10% 50%, rgba(79,70,229,0.3) 0%, transparent 60%)' }} />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-500/40 border border-white/20 text-white px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-[1px] mb-5">
                ✦ Founding Cohort · Now Open
              </div>
              <h2 className="font-fraunces text-[32px] md:text-[36px] font-bold text-white tracking-[-1px] mb-4">
                Apply for the Pilot Programme
              </h2>
              <p className="text-[16px] text-white/75 leading-[1.7] mb-7">
                We are currently accepting applications from micro schools and small
                international schools worldwide for our founding pilot programme.
              </p>
              <Button href="/demo" variant="ghost" size="lg">Apply for Pilot</Button>
            </div>
            <div className="flex flex-col gap-3.5">
              <div className="flex items-start gap-3 text-[14px] text-white/85 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                Full platform access at no cost for 90 days
              </div>
              <div className="flex items-start gap-3 text-[14px] text-white/85 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                Direct support from our team throughout the pilot
              </div>
              <div className="flex items-start gap-3 text-[14px] text-white/85 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                Discounted pricing locked in for 12 months post-pilot
              </div>
              <div className="flex items-start gap-3 text-[14px] text-white/85 font-medium">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                Input into the product roadmap as a founding school
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mini Steps */}
      <section className="bg-white border-y border-gray-200 py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14">
          <div className="text-center mb-12">
            <SectionTag>The platform, in plain terms</SectionTag>
            <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1]">
              From enrolment to personalised learning — automatically.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute top-5 left-[20%] right-[20%] h-0.5 bg-primary-mid hidden md:block" />
            
            <div className="text-center relative">
              <div className="w-10 h-10 bg-primary text-white rounded-full font-bold text-[14px] flex items-center justify-center mx-auto mb-4 relative z-10">1</div>
              <h3 className="text-[14px] font-extrabold text-ink mb-1.5">Diagnostic In</h3>
              <p className="text-[14px] text-gray-600 leading-[1.6]">
                Student joins a class → Kaihle creates their diagnostic assessment automatically.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-10 h-10 bg-primary text-white rounded-full font-bold text-[14px] flex items-center justify-center mx-auto mb-4 relative z-10">2</div>
              <h3 className="text-[14px] font-extrabold text-ink mb-1.5">Gaps Mapped</h3>
              <p className="text-[14px] text-gray-600 leading-[1.6]">
                Every response is scored and mapped to a specific curriculum subtopic. Teacher sees results immediately.
              </p>
            </div>
            <div className="text-center relative">
              <div className="w-10 h-10 bg-primary text-white rounded-full font-bold text-[14px] flex items-center justify-center mx-auto mb-4 relative z-10">3</div>
              <h3 className="text-[14px] font-extrabold text-ink mb-1.5">Plans Generated</h3>
              <p className="text-[14px] text-gray-600 leading-[1.6]">
                Personalised study plan created per student — resources, quizzes, and AI content.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link href="/how-it-works" className="text-primary font-bold text-[14px] hover:underline">
              See the full walkthrough →
            </Link>
          </div>
        </div>
      </section>

      {/* What Changes for Your School */}
      <SectionWrapper className="bg-primary-light border-y border-primary-mid">
        <div className="mb-12">
          <SectionTag>What Changes for Your School</SectionTag>
          <h2 className="font-fraunces text-[36px] md:text-[42px] font-bold text-ink tracking-[-1px] leading-[1.1]">
            A better platform for everyone<br />in your institution.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-card p-9 border border-primary-mid">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-primary mb-4">For Students</div>
            <h3 className="font-fraunces text-[22px] font-bold text-ink mb-4">Every lesson, built for them.</h3>
            <p className="text-[17px] text-gray-600 leading-[1.75] mb-4">
              Kaihle builds a Learning Profile for each student and uses it to personalise every study plan, every piece of AI-generated content, and every practice activity. Not the same lesson for everyone — the right lesson for each individual.
            </p>
            <p className="text-[17px] text-gray-600 leading-[1.75]">
              Gaps close faster. Students build real confidence. And the learning compounds — because each new lesson is built on an accurate picture of exactly where they are right now.
            </p>
          </div>
          <div className="bg-white rounded-card p-9 border border-primary-mid">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-primary mb-4">For Teachers</div>
            <h3 className="font-fraunces text-[22px] font-bold text-ink mb-4">Your AI teaching partner.</h3>
            <p className="text-[17px] text-gray-600 leading-[1.75]">
              The Teacher AI Lesson Planner generates complete, curriculum-aligned lesson plans tailored to each class&apos;s current gap map. Assessment creation and gap analysis happen automatically. Teachers get back the hours spent on planning and admin — to mentor students, run richer discussions, and build the teacher–student relationships that actually change outcomes.
            </p>
          </div>
          <div className="bg-white rounded-card p-9 border border-primary-mid">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-primary mb-4">For School Leaders</div>
            <h3 className="font-fraunces text-[22px] font-bold text-ink mb-4">Clarity across your whole school.</h3>
            <p className="text-[17px] text-gray-600 leading-[1.75]">
              The school-wide analytics dashboard gives principals a live view of learning outcomes across every class and subject. See where the school performs well and where intervention is needed — based on data, not assumptions.
            </p>
          </div>
          <div className="bg-white rounded-card p-9 border border-primary-mid">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-accent mb-4">For the School as a Whole</div>
            <h3 className="font-fraunces text-[22px] font-bold text-ink mb-4">Space for the education you aspire to offer.</h3>
            <p className="text-[17px] text-gray-600 leading-[1.75]">
              When core academic learning becomes more efficient, schools gain bandwidth — more room for extra-curricular activities, deeper projects, creative exploration, and the enriched experience every school wants to offer but rarely has capacity for.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <SectionWrapper className="py-14">
        <CTABanner
          headline="Ready to see it with your school's curriculum?"
          subheadline="A demo takes 30 minutes. We'll show you the diagnostic flow, the teacher dashboard, and the student experience — using Cambridge content your students would actually see."
          primaryCTA={{ label: 'Apply for Pilot →', href: '/demo' }}
        />
      </SectionWrapper>
    </>
  )
}
