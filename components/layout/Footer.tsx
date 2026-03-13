import Link from 'next/link'

const platform = [
  { label: 'For Schools', href: '/for-schools' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why Kaihle', href: '/why-kaihle' },
  { label: 'Pricing', href: '/pricing' },
]

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Request a Demo', href: '/demo' },
  { label: 'Privacy Policy', href: '/privacy' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-14">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">

          <div>
            <div className="flex items-center gap-2.5 font-fraunces font-bold text-[26px] mb-2">
              <div className="w-8 h-8 bg-primary rounded-[8px] flex items-center justify-center text-white font-black font-nunito text-[15px]">K</div>
              kaihle
            </div>
            <p className="text-[14px] text-white/55 leading-relaxed mb-5 max-w-[300px]">
              AI-powered diagnostic learning for Cambridge and IB schools worldwide.
            </p>
            <div className="text-[14px] text-white/60 leading-loose">
              <a href="mailto:hello@kaihle.com" className="text-primary-mid hover:text-white no-underline">hello@kaihle.com</a><br/>
              Cambridge, United Kingdom
            </div>
          </div>

          <div>
            <div className="text-[12px] font-bold tracking-[1.5px] uppercase text-white/40 mb-4">Platform</div>
            <ul className="flex flex-col gap-2.5">
              {platform.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] font-medium text-white/65 hover:text-white transition-colors no-underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[12px] font-bold tracking-[1.5px] uppercase text-white/40 mb-4">Company</div>
            <ul className="flex flex-col gap-2.5">
              {company.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14px] font-medium text-white/65 hover:text-white transition-colors no-underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex justify-between items-center">
          <p className="text-[13px] text-white/35">© {new Date().getFullYear()} Kaihle. All rights reserved.</p>
          <Link href="/privacy" className="text-[13px] text-white/35 hover:text-white/70 no-underline transition-colors">Privacy</Link>
        </div>
      </div>
    </footer>
  )
}
