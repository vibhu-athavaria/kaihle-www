import { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SectionTag } from '@/components/ui/SectionTag'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Pricing — Kaihle',
  description:
    'Simple, transparent pricing for Kaihle. Choose the plan that works for your school.',
  openGraph: {
    title: 'Pricing — Kaihle',
    description: 'Simple, transparent pricing for schools.',
    url: 'https://www.kaihle.com/pricing',
  },
}

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-soft border-b border-primary-mid py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-14 text-center max-w-[800px]">
          <SectionTag>Pricing</SectionTag>
          <h1 className="font-fraunces text-[42px] md:text-[52px] font-bold text-ink tracking-[-1.5px] leading-[1.1] mb-6">
            Simple pricing. No hidden fees.
          </h1>
          <p className="text-[18px] text-gray-600 leading-[1.65]">
            One plan. Per-student pricing. No per-teacher or per-admin charges.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {/* Free Trial */}
          <div className="bg-white rounded-card border-2 border-primary-mid p-8">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-primary mb-2">Free Trial</div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-fraunces text-[48px] font-bold text-ink">$0</span>
              <span className="text-gray-500">/30 days</span>
            </div>
            <p className="text-gray-600 mb-6">Full platform access to try Kaihle with your school.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span> Full teacher dashboard
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span> Student Learning Profiles
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span> AI Lesson Planner
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span> School-wide analytics
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-primary">✓</span> Parent reports
              </li>
            </ul>
            <Button href="/demo" variant="outline" className="w-full">Start Free Trial</Button>
          </div>

          {/* Pay As You Go */}
          <div className="bg-primary rounded-card border-2 border-primary p-8 text-white">
            <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-white/80 mb-2">Pay As You Go</div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-fraunces text-[48px] font-bold">$20</span>
              <span className="text-white/80">/user/month</span>
            </div>
            <p className="text-white/80 mb-6">Per active student or teacher. No minimums. Cancel anytime.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm">
                <span className="text-white">✓</span> Everything in Free Trial
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-white">✓</span> Priority support
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-white">✓</span> Dedicated onboarding
              </li>
              <li className="flex items-center gap-2 text-sm">
                <span className="text-white">✓</span> Regular feature updates
              </li>
            </ul>
            <Button href="/demo" variant="ghost" className="w-full">Start Pilot</Button>
          </div>
        </div>

        {/* Founding Partner Offer */}
        <div className="mt-12 bg-accent-light border border-accent-mid rounded-card p-8 text-center">
          <div className="text-[13px] font-bold uppercase tracking-[1.5px] text-accent mb-2">Founding Partner Offer</div>
          <h3 className="font-fraunces text-[24px] font-bold text-ink mb-2">Extended trial + locked rate</h3>
          <p className="text-gray-600 mb-4">
            First 10 partner schools get 60-day free trial + $15/user/month locked for 12 months.
          </p>
          <Button href="/demo" variant="primary">Apply for Founding Cohort</Button>
        </div>
      </SectionWrapper>

      {/* FAQ CTA */}
      <SectionWrapper className="bg-soft">
        <div className="text-center">
          <h2 className="font-fraunces text-[32px] font-bold text-ink mb-4">Questions?</h2>
          <p className="text-gray-600 mb-6">We’re happy to answer any questions about pricing.</p>
          <Button href="/demo" variant="outline">Talk to Sales</Button>
        </div>
      </SectionWrapper>
    </>
  )
}
