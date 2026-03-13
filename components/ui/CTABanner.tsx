import { Button } from './Button'

type CTABannerProps = {
  headline: string
  subheadline: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
}

export function CTABanner({ headline, subheadline, primaryCTA, secondaryCTA }: CTABannerProps) {
  return (
    <div className="relative bg-gradient-to-br from-primary to-primary-dark
      rounded-[24px] py-16 px-6 md:px-14 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `
          radial-gradient(circle at 20% 50%, rgba(255,255,255,0.07) 0%, transparent 60%),
          radial-gradient(circle at 80% 50%, rgba(201,147,42,0.15) 0%, transparent 60%)
        `}} />

      <div className="relative z-10">
        <h2 className="font-fraunces text-[36px] md:text-[40px] font-bold text-white tracking-[-1px] mb-3.5">
          {headline}
        </h2>
        <p className="text-[17px] text-white/80 mb-8 max-w-[520px] mx-auto">
          {subheadline}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button href={primaryCTA.href} variant="ghost" size="lg">{primaryCTA.label}</Button>
          {secondaryCTA && (
            <Button href={secondaryCTA.href} variant="ghost" size="lg"
              className="!bg-transparent !shadow-none">
              {secondaryCTA.label} →
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
