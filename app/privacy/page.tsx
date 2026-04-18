import { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export const metadata: Metadata = {
  title: 'Privacy Policy — Kaihle',
  description: 'Kaihle privacy policy. How we protect your data.',
  openGraph: {
    title: 'Privacy Policy — Kaihle',
    description: 'Kaihle privacy policy.',
    url: 'https://www.kaihle.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-soft border-b border-primary-mid py-14">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="font-fraunces text-[42px] md:text-[52px] font-bold text-ink tracking-[-1.5px] leading-[1.1] mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last updated: March 2026</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-[800px] mx-auto prose">
          <div className="space-y-8">
            <section>
              <h2 className="font-fraunces text-[24px] font-bold text-ink mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-[1.75]">
                At Kaihle, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
              </p>
            </section>

            <section>
              <h2 className="font-fraunces text-[24px] font-bold text-ink mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 leading-[1.75]">
                We collect information you provide directly to us, including name, email, school name, and role. We also collect student assessment data, learning profiles, and usage information to provide our services.
              </p>
            </section>

            <section>
              <h2 className="font-fraunces text-[24px] font-bold text-ink mb-4">3. How We Use Information</h2>
              <p className="text-gray-600 leading-[1.75]">
                We use the information we collect to provide, maintain, and improve our services, to communicate with you about our platform, and to comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-fraunces text-[24px] font-bold text-ink mb-4">4. Data Security</h2>
              <p className="text-gray-600 leading-[1.75]">
                We implement appropriate technical and organizational measures to protect the security of your personal information. All data is encrypted in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="font-fraunces text-[24px] font-bold text-ink mb-4">5. Contact Us</h2>
              <p className="text-gray-600 leading-[1.75]">
                If you have any questions about this Privacy Policy, please contact us at hello@kaihle.com.
              </p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
