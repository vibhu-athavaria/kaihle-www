# MW-1-T1 — Next.js Repo Initialisation & Vercel Setup
**Milestone:** MW — Marketing Website
**Epic:** MW-1: Project Setup
**Status:** TODO
**Depends on:** Nothing — this is the first task
**Estimated effort:** 1 day

---

## Context

This task creates the `kaihle-www` repository from scratch and gets it deploying to Vercel at `www.kaihle.com`. Nothing else in MW can start until this is done. Keep it lean — no component library, no CMS, no extras. Just a working Next.js 14 App Router project with Tailwind, TypeScript strict mode, and a live Vercel deployment.

---

## Files to Create

```
kaihle-www/
├── app/
│   ├── layout.tsx              ← Root layout: metadata, fonts, globals
│   ├── page.tsx                ← Home page placeholder (filled in MW-2-T1)
│   ├── globals.css             ← Tailwind directives + livepulse animation
│   └── not-found.tsx           ← 404 page
├── components/
│   └── layout/
│       ├── Navbar.tsx          ← Top navigation (built in MW-1-T2)
│       └── Footer.tsx          ← Footer (built in MW-1-T2)
├── design-reference/           ← ⚠️ APPROVED DESIGN — read-only reference files
│   ├── index.html              ← Home page visual reference
│   ├── for-schools.html
│   ├── how-it-works.html
│   ├── why-kaihle.html
│   ├── pricing.html
│   ├── about.html
│   ├── demo.html
│   ├── privacy.html
│   └── styles.css              ← All Forest Green & Gold design tokens in plain CSS
├── lib/
│   └── metadata.ts             ← Shared metadata helpers
├── public/
│   ├── favicon.ico
│   └── og-default.png          ← Default OG image (1200×630, placeholder)
├── .env.local.example
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
├── .gitignore
└── package.json
```

**Note on `design-reference/`:** Copy the approved HTML files (from the MW HTML output package) into this folder at project init. These are the canonical visual specification. Every page task references the matching file. Do not modify them — they are the source of truth for design decisions. Add a `design-reference/README.md` with one line: `# Design Reference — Forest Green & Gold. Do not edit. Read-only visual spec.`

---

## Implementation Spec

### 1. Initialise project

```bash
npx create-next-app@latest kaihle-www \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir=false \
  --import-alias="@/*"
```

### 2. `tsconfig.json` — enforce strict mode

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### 3. `tailwind.config.ts` — Forest Green & Gold design tokens

See MW-1-T2 for the full config. Create this file now so it's ready before MW-1-T2 adds components.

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink:  '#1a2016',
        soft: '#f5f7f1',
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

### 4. `app/layout.tsx` — root layout with Forest Green & Gold fonts (Fraunces + Nunito)

```tsx
import type { Metadata } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  axes: ['opsz'],
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Kaihle — AI-Powered Diagnostic Learning for Schools',
    template: '%s | Kaihle',
  },
  description:
    "Kaihle maps every student's exact knowledge gaps and generates personalised learning to fix them. Built for Cambridge and IB schools in worldwide.",
  metadataBase: new URL('https://www.kaihle.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.kaihle.com',
    siteName: 'Kaihle',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <body className="font-nunito bg-soft text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### 4b. `app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@keyframes livepulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.3; }
}

.animate-livepulse { animation: livepulse 2s infinite; }

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.15;
  pointer-events: none;
}
```

### 5. `app/page.tsx` — placeholder (replaced in MW-2-T1)

```tsx
export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Home page — coming in MW-2-T1</p>
    </div>
  )
}
```

### 6. `app/not-found.tsx`

```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="font-fraunces text-[80px] font-bold text-ink tracking-[-3px] leading-none mb-4">404</h1>
      <p className="text-[18px] text-gray-600 mb-8">Page not found.</p>
      <Link href="/" className="bg-primary text-white rounded-full px-7 py-3.5 text-[15px] font-bold hover:bg-primary-dark transition-colors font-nunito">
        Back to Home
      </Link>
    </div>
  )
}
```

### 7. `.env.local.example`

```bash
# Resend — for demo request form (MW-3-T1)
RESEND_API_KEY=re_xxxxxxxxxxxx
DEMO_REQUEST_TO_EMAIL=hello@kaihle.com

# Plausible analytics (MW-3-T2)
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kaihle.com

# App URL (for CTA links to platform)
NEXT_PUBLIC_APP_URL=https://app.kaihle.com
```

### 8. `next.config.ts`

```ts
import type { NextConfig } from 'next'

const config: NextConfig = {
  // Redirect kaihle.com → www.kaihle.com (handled in Vercel dashboard, but belt-and-suspenders)
  async redirects() {
    return []
  },
}

export default config
```

### 9. Vercel setup

- Create Vercel project linked to `kaihle-www` GitHub repo
- Add custom domain: `www.kaihle.com` (primary) and `kaihle.com` (redirect to www)
- Set environment variables in Vercel dashboard (from `.env.local.example`)
- Enable Preview Deployments on every PR
- Branch `main` → Production deployment

---

## Acceptance Criteria

- [ ] `npm run dev` starts without errors
- [ ] `npm run build` produces zero TypeScript errors (strict mode)
- [ ] `npm run lint` passes with zero warnings
- [ ] Vercel project created, linked to GitHub repo, auto-deploys on push to `main`
- [ ] `www.kaihle.com` resolves to the deployed site in a real browser
- [ ] `kaihle.com` redirects to `www.kaihle.com`
- [ ] Root layout renders Navbar and Footer placeholders without crashing
- [ ] 404 page renders correctly at any unknown route
- [ ] `.env.local` is git-ignored and `.env.local.example` is committed
- [ ] No hardcoded API keys anywhere in committed code
