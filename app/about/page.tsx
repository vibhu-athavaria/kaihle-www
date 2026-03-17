import { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTag } from '@/components/ui/SectionTag'
import { CTABanner } from '@/components/ui/CTABanner'

export const metadata: Metadata = {
  title: 'About Us — Kaihle',
  description: 'The story behind Kaihle — built by a school founder who lived this problem.',
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
            We believe every student deserves to learn in a way that works for them — and every teacher deserves to know exactly where their students need help, before it&apos;s too late.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <SectionWrapper>
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-fraunces text-[32px] font-bold text-ink mb-6">Where this started</h2>
          <div className="space-y-6 text-[17px] text-gray-600 leading-[1.75]">
            <p>
              Before building Kaihle, I founded and ran LightHouse Academy — a small international middle school in Bali, Indonesia. Thirty students. A team of dedicated teachers. A curriculum we believed in. And a problem I couldn&apos;t solve.
            </p>
            <p>
              Every time I asked a teacher how a particular student was doing, the answer was some version of the same thing: &quot;I think they&apos;re doing okay&quot; or &quot;they seem to be struggling a bit.&quot; Honest answers — but not specific ones. We had no reliable way to know, before starting a new topic, which students had the foundation to build on and which were about to fall further behind.
            </p>
            <p>
              One day, instead of asking the teachers, I asked the students. A simple survey: &quot;If you were the teacher, how would you teach yourself this subject? If you had a choice, how would you structure the class?&quot;
            </p>
            <p>
              The answers stopped me.
            </p>
            <p>
              Thirty students. Thirty completely different answers. Some wanted examples before explanations. Some wanted to jump straight in and figure it out. Some needed to see the big picture first; others needed to go step by step. My best teachers — the ones who genuinely connected with students — were working from intuition and goodwill. But no teacher, however talented, can design thirty different lessons for thirty different minds. It&apos;s not a failure of effort. It&apos;s a structural impossibility.
            </p>
            <p>
              We were also stretched thin. Like every small school, we were working against the budget. We wanted to hire more. We couldn&apos;t. And so the gap between what we knew was possible and what we could actually deliver just kept widening.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Why I built it */}
      <SectionWrapper>
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-fraunces text-[32px] font-bold text-ink mb-6">Why I was the one to build it</h2>
          <div className="space-y-6 text-[17px] text-gray-600 leading-[1.75]">
            <p>
              I didn&apos;t come to education from the outside. Before LightHouse, I spent years building technology in Silicon Valley — including an earlier EdTech company I founded and eventually exited. I also spent time at Udemy, working closely with learning scientists to understand how people actually acquire and retain knowledge. Not how we assume they learn. How they actually do.
            </p>
            <p>
              When AI started to mature, I saw the unlock. This wasn&apos;t about replacing teachers — it was about giving them something they&apos;d never had: a clear, real-time picture of every student, and the tools to act on it without drowning in admin.
            </p>
            <p>
              I left LightHouse to build Kaihle — not just to solve the problem for my school, but to build the tool I wish I&apos;d had for every school like it.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="font-semibold text-ink">Vibhu Athavaria</p>
            <p className="text-gray-600">Founder, Kaihle</p>
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
            <p className="text-gray-600">Every feature we build starts with: does this save teachers time and give them better information? If it doesn&apos;t, we don&apos;t build it.</p>
          </div>
          <div className="bg-white rounded-card p-8 border border-gray-200">
            <div className="text-[32px] mb-4">🧠</div>
            <h3 className="font-fraunces text-[20px] font-bold text-ink mb-3">Learning is personal</h3>
            <p className="text-gray-600">Every student has a different way of making sense of the world. Their learning path should reflect that — not flatten it.</p>
          </div>
          <div className="bg-white rounded-card p-8 border border-gray-200">
            <div className="text-[32px] mb-4">🔗</div>
            <h3 className="font-fraunces text-[20px] font-bold text-ink mb-3">Curriculum is the foundation</h3>
            <p className="text-gray-600">We don&apos;t replace Cambridge or IB — we make them work harder for every student in your school.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-14">
        <CTABanner
          headline="Ready to see Kaihle in action?"
          subheadline="Book a demo to see how we help schools close learning gaps — without adding to teacher workload."
          primaryCTA={{ label: 'Apply for Pilot →', href: '/demo' }}
        />
      </SectionWrapper>
    </>
  )
}
