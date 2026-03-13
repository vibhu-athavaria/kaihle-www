# MW-1-T2 — Design Tokens & Shared Components
**Milestone:** MW — Marketing Website
**Epic:** MW-1: Project Setup
**Status:** TODO
**Depends on:** MW-1-T1 (repo must exist, design-reference/ HTML files present)
**Estimated effort:** 1 day

---

## Context

This task wires the Forest Green & Gold design system into the Next.js project and builds the shared component library that every page will use. The approved design is **Forest Green & Gold**: deep forest green primary, warm gold accent, Fraunces serif headings, Nunito body, pill-shaped buttons, rounded cards with soft shadows.

**The canonical reference is the HTML files in `/design-reference/`** (added in MW-1-T1). If you are uncertain about any visual decision, open the relevant HTML file and match it exactly.

Do not use any colour, font, border-radius, or shadow that is not specified here without checking the reference first.

---

## Step 1 — Font Setup (`app/layout.tsx`)

Install and configure Google Fonts via `next/font/google`. Both fonts must be available as CSS variables across the entire app.

```tsx
// app/layout.tsx
import { Fraunces, Nunito } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],           // required for optical sizing
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="font-nunito bg-soft text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
```

---

## Step 2 — Tailwind Config (`tailwind.config.ts`)

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:           '#1a2016',   // page headings, footer bg
        soft:          '#f5f7f1',   // page background
        body:          '#4a5240',   // body text
        primary:       '#1a5c38',   // forest green — buttons, links
        'primary-dark':'#0f3d25',   // hover states
        'primary-light':'#e8f2ea',  // light tint backgrounds
        'primary-mid': '#b5d4bc',   // borders, dividers
        accent:        '#c9932a',   // gold — CTA highlights
        'accent-light':'#f5ead0',   // gold tint fills
        'accent-mid':  '#e8c97a',   // gold borders
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        nunito:   ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'pill': '100px',
      },
      boxShadow: {
        'card':       '0 2px 12px rgba(30,27,75,0.04)',
        'card-hover': '0 8px 30px rgba(26,92,56,0.08)',
        'btn':        '0 4px 14px rgba(26,92,56,0.30)',
        'btn-hover':  '0 6px 20px rgba(26,92,56,0.40)',
        'float':      '0 6px 24px rgba(30,27,75,0.12)',
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Step 3 — Global CSS (`app/globals.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Live pulse dot animation — used on nav badge and hero pill */
@keyframes livepulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

.animate-livepulse { animation: livepulse 2s infinite; }

/* Decorative blob helper */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
  pointer-events: none;
}
```

---

## Files to Create

```
components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── ui/
│   ├── Button.tsx
│   ├── SectionWrapper.tsx
│   ├── SectionTag.tsx
│   ├── Pill.tsx
│   ├── FeatureCard.tsx
│   ├── CTABanner.tsx
│   └── GapHeatmap.tsx        ← hero dashboard UI — used on Home page
```

---

## Component Specs

---

### `components/layout/Navbar.tsx`

**Visual spec (match reference `index.html` nav):**
- Height: `h-[72px]`
- Background: `bg-soft/92 backdrop-blur-xl` (sticky, `top-0 z-50`)
- Border: `border-b border-gray-200`
- On scroll >50px: add `shadow-sm` (the bg/border stays the same)
- Logo: `<div class="nav-logo-mark">` (green square `w-9 h-9 bg-primary rounded-[10px]`, white "K") + wordmark "kaihle" in `font-fraunces font-bold text-[26px] text-ink tracking-[-0.5px]`
- Nav links: `text-[15px] font-semibold text-gray-600 hover:text-primary`
- Active link: `text-primary`
- CTA pill: `bg-primary text-white rounded-full px-5 py-2.5 text-[14px] font-bold shadow-[0_2px_10px_rgba(26,92,56,0.25)] hover:bg-primary-dark`
- Mobile: hamburger → full-screen drawer with same links + CTA button

```tsx
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'For Schools',   href: '/for-schools'  },
  { label: 'How It Works',  href: '/how-it-works' },
  { label: 'Why Kaihle',   href: '/why-kaihle'   },
  { label: 'Pricing',       href: '/pricing'      },
  { label: 'About',         href: '/about'        },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`sticky top-0 z-50 h-[72px] flex items-center px-14
      bg-soft/92 backdrop-blur-xl border-b border-gray-200 transition-shadow duration-300
      ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-fraunces font-bold text-[26px] text-ink tracking-[-0.5px] no-underline">
          <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center text-white font-black font-nunito text-[17px]">K</div>
          kaihle
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href}
              className={`text-[15px] font-semibold transition-colors duration-200
                ${pathname === l.href ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/demo"
            className="bg-primary hover:bg-primary-dark text-white rounded-full px-5 py-2.5 text-[14px] font-bold
            shadow-[0_2px_10px_rgba(26,92,56,0.25)] transition-all duration-200">
            Request a Demo
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden text-ink" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-soft z-40 flex flex-col p-8 gap-6">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-[18px] font-bold text-ink hover:text-primary">
              {l.label}
            </Link>
          ))}
          <Link href="/demo" onClick={() => setOpen(false)}
            className="bg-primary text-white rounded-full px-6 py-3 text-[15px] font-bold text-center mt-4">
            Request a Demo
          </Link>
        </div>
      )}
    </header>
  )
}
```

---

### `components/layout/Footer.tsx`

**Visual spec (match reference footer — ink background `#1a2016`, NOT a gradient):**
- `bg-ink text-white pt-16 pb-8`
- 3-column grid: brand (wider) + Platform links + Company links
- Brand col: logo mark + wordmark, tagline (`text-[14px] text-white/55`), email + location
- Link columns: uppercase label (`text-[12px] font-bold tracking-[1.5px] text-white/40`), links (`text-[14px] text-white/65 hover:text-white`)
- Bottom bar: `border-t border-white/10 pt-6` · copyright left · privacy link right

```tsx
import Link from 'next/link'

const platform = [
  { label: 'For Schools',  href: '/for-schools'  },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Why Kaihle',  href: '/why-kaihle'   },
  { label: 'Pricing',      href: '/pricing'      },
]

const company = [
  { label: 'About Us',        href: '/about'   },
  { label: 'Request a Demo',  href: '/demo'    },
  { label: 'Privacy Policy',  href: '/privacy' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-14">
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-12 mb-12">

          {/* Brand */}
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
              [Founder to complete — location]
            </div>
          </div>

          {/* Platform */}
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

          {/* Company */}
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
```

---

### `components/ui/Button.tsx`

Three variants: `primary`, `outline`, `ghost`
Two sizes: `md`, `lg`

```tsx
import Link from 'next/link'

type ButtonProps = {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const variants = {
  primary: `bg-primary hover:bg-primary-dark text-white
             shadow-btn hover:shadow-btn-hover hover:-translate-y-px`,
  outline: `bg-transparent border-2 border-gray-200 text-ink
             hover:border-primary-mid hover:text-primary`,
  ghost:   `bg-white/15 border-2 border-white/30 text-white
             hover:bg-white/25`,   // use ONLY on green gradient backgrounds
}

const sizes = {
  md: 'px-7 py-3.5 text-[15px]',
  lg: 'px-9 py-4 text-[16px]',
}

export function Button({
  variant = 'primary', size = 'md', href, children, className = '', ...props
}: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-bold
    font-nunito transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) return <Link href={href} className={cls}>{children}</Link>
  return <button className={cls} {...props}>{children}</button>
}
```

---

### `components/ui/SectionWrapper.tsx`

```tsx
type Props = { children: React.ReactNode; className?: string; id?: string }

export function SectionWrapper({ children, className = '', id }: Props) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-14">
        {children}
      </div>
    </section>
  )
}
```

---

### `components/ui/SectionTag.tsx`

The small "✦ LABEL" tag used above every section heading.

```tsx
export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12px] font-bold uppercase
      tracking-[1px] text-primary mb-3.5 before:content-['✦'] before:text-[10px]">
      {children}
    </div>
  )
}
```

---

### `components/ui/Pill.tsx`

Rounded badge chips — used for "Founding Cohort · Now Open", step badges, etc.

```tsx
type PillProps = {
  children: React.ReactNode
  variant?: 'green' | 'gold' | 'green' | 'amber'
  pulse?: boolean   // adds animated dot prefix
}

const variants = {
  green: 'bg-primary-light border border-primary-mid text-primary',
  gold:   'bg-accent-light border border-accent-mid text-accent',
  green:  'bg-green-50 text-green-700',
  amber:  'bg-amber-50 text-amber-700',
}

export function Pill({ children, variant = 'green', pulse = false }: PillProps) {
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
      text-[13px] font-bold ${variants[variant]}`}>
      {pulse && (
        <span className={`w-[7px] h-[7px] rounded-full bg-current animate-livepulse`} />
      )}
      {children}
    </div>
  )
}
```

---

### `components/ui/FeatureCard.tsx`

```tsx
type FeatureCardProps = {
  emoji: string
  title: string
  description: string
}

export function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-card border border-gray-200 p-8 shadow-card
      hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200">
      <span className="text-[32px] mb-4 block">{emoji}</span>
      <h3 className="text-[18px] font-extrabold text-ink tracking-[-0.3px] mb-2.5">{title}</h3>
      <p className="text-[14px] leading-[1.7] text-gray-600">{description}</p>
    </div>
  )
}
```

---

### `components/ui/CTABanner.tsx`

Full-width CTA section used at the bottom of every page (before footer).

**Visual spec:** `bg-gradient-to-br from-primary to-primary-dark rounded-[24px]`
with two radial gradient overlays (see reference HTML). NOT a full-bleed section — it sits inside `SectionWrapper` with `py-14` padding, rounded corners.

```tsx
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
      rounded-[24px] py-16 px-14 text-center overflow-hidden">
      {/* Radial overlays */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: `
          radial-gradient(circle at 20% 50%, rgba(255,255,255,0.07) 0%, transparent 60%),
          radial-gradient(circle at 80% 50%, rgba(249,115,22,0.10) 0%, transparent 60%)
        `}} />

      <div className="relative z-10">
        <h2 className="font-fraunces text-[40px] font-bold text-white tracking-[-1px] mb-3.5">
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
```

---

### `components/ui/GapHeatmap.tsx`

**This is the hero dashboard UI visible on the Home page.** It is a key visual — the product-in-action screenshot that appears alongside the hero copy. Build it as a standalone component so it can be reused in demos.

```tsx
// Static demo data — do not fetch from API on the marketing site
const rows = [
  { topic: 'Linear Equations',    pct: 43, color: '#fca5a5', label: '#ef4444' },
  { topic: 'Quadratic Expr.',     pct: 61, color: '#fcd34d', label: '#d97706' },
  { topic: 'Angles & Triangles',  pct: 81, color: '#86efac', label: '#16a34a' },
  { topic: 'Fractions & Ratios',  pct: 38, color: '#fca5a5', label: '#ef4444' },
]

type CellFill = '#fca5a5' | '#fcd34d' | '#86efac' | '#d1d5db'

function pctToCells(pct: number): CellFill[] {
  // 5 cells per row
  const filled = Math.round(pct / 20)
  return Array.from({ length: 5 }, (_, i) => {
    if (i < filled - 1) return '#86efac'
    if (i === filled - 1) return pct < 50 ? '#fca5a5' : pct < 70 ? '#fcd34d' : '#86efac'
    return '#d1d5db'
  })
}

export function GapHeatmap() {
  return (
    <div className="relative">
      {/* Float card — top left */}
      <div className="absolute -top-5 -left-14 bg-white rounded-[16px] shadow-float p-4 z-10 min-w-[148px]">
        <div className="text-[22px] mb-1">🎯</div>
        <div className="text-[22px] font-extrabold text-ink leading-none">24</div>
        <div className="text-[11px] text-gray-400 font-medium mt-0.5">Gaps found today</div>
      </div>

      {/* Main panel */}
      <div className="bg-white rounded-[24px] shadow-[0_16px_60px_rgba(30,27,75,0.10)] overflow-hidden relative z-0">

        {/* Header bar */}
        <div className="bg-primary px-6 py-5 flex justify-between items-center">
          <div>
            <div className="text-[14px] font-bold text-white">Class Gap Map · Grade 8</div>
            <div className="text-[11px] text-white/55 mt-0.5">Mathematics · 32 students</div>
          </div>
          <div className="flex items-center gap-1.5 bg-white/12 px-3 py-1.5 rounded-full text-[12px] text-white/85 font-bold">
            <span className="w-[7px] h-[7px] rounded-full bg-green-400 animate-livepulse" />
            Live
          </div>
        </div>

        {/* Heatmap rows */}
        <div className="px-6 py-5">
          <div className="text-[10px] font-bold uppercase tracking-[1px] text-gray-400 mb-2.5">Algebra</div>
          {rows.slice(0, 2).map(r => <HeatRow key={r.topic} {...r} />)}
          <div className="text-[10px] font-bold uppercase tracking-[1px] text-gray-400 mb-2.5 mt-4">Geometry</div>
          {rows.slice(2).map(r => <HeatRow key={r.topic} {...r} />)}
        </div>

        {/* Footer strip */}
        <div className="bg-primary-light px-6 py-3.5 flex items-center justify-between">
          <span className="text-[13px] font-semibold text-primary">✦ 12 study plans auto-generated</span>
          <Link href="/demo" className="text-[12px] font-bold text-primary bg-white px-3.5 py-1.5 rounded-full shadow-[0_1px_4px_rgba(201,147,42,0.15)] no-underline">
            View plans
          </Link>
        </div>
      </div>

      {/* Float card — bottom right */}
      <div className="absolute -bottom-4 -right-12 bg-white rounded-[16px] shadow-float p-4 z-10 min-w-[148px]">
        <div className="text-[22px] mb-1">📚</div>
        <div className="text-[22px] font-extrabold text-ink leading-none">12</div>
        <div className="text-[11px] text-gray-400 font-medium mt-0.5">Plans generated today</div>
      </div>
    </div>
  )
}

function HeatRow({ topic, pct, label }: { topic: string; pct: number; label: string; color: string }) {
  const cells = pctToCells(pct)
  return (
    <div className="flex items-center gap-2.5 mb-[7px]">
      <div className="text-[12px] font-semibold text-gray-600 min-w-[130px]">{topic}</div>
      <div className="flex gap-[3px] flex-1">
        {cells.map((c, i) => (
          <div key={i} className="h-[26px] rounded-[6px] flex-1" style={{ background: c }} />
        ))}
      </div>
      <div className="text-[12px] font-extrabold min-w-[34px] text-right" style={{ color: label }}>{pct}%</div>
    </div>
  )
}
```

Note: add `import Link from 'next/link'` at the top of `GapHeatmap.tsx`.

---

## Acceptance Criteria

- [ ] `font-fraunces` and `font-nunito` classes apply correctly — verify in browser DevTools
- [ ] `bg-soft` renders as `#f5f7f1` (not white, not grey)
- [ ] `bg-ink` renders as `#1a2016`
- [ ] All three `Button` variants visually match the reference HTML
- [ ] `Button` renders as `<Link>` when `href` provided, `<button>` otherwise
- [ ] `Navbar`: sticky, correct height, logo mark present, active link highlighted, mobile drawer works
- [ ] `Footer`: ink background (NOT gradient), 3-column layout, all links correct
- [ ] `GapHeatmap`: renders correctly with coloured cells and both floating cards visible
- [ ] `CTABanner`: gradient with rounded corners — NOT full-bleed
- [ ] `npm run build` passes with zero TypeScript errors in strict mode
- [ ] All components render without errors at 375px, 768px, 1280px
