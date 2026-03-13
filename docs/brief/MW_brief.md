# Milestone MW — Marketing Website
**Version:** 2.0 · March 2026
**Prepared by:** Kramer (Technical Lead) · Copy by Nancy (Market Strategy)
**Status:** READY TO BUILD
**Timing:** Parallel to M0 — must be live before first school demo

---

## Goal

Launch a credible, conversion-focused public website at **www.kaihle.com** that supports the pilot school sales motion. Every page exists to answer one question a school founder will ask before agreeing to a demo.

---

## Exit Criteria

- [ ] All 7 public pages live and accessible at www.kaihle.com
- [ ] Request a Demo form captures leads and delivers to inbox within 60 seconds
- [ ] Lighthouse score ≥ 90 (Performance, SEO) on Home and For Schools pages
- [ ] Site is fully responsive at 375px, 768px, 1280px
- [ ] No placeholder copy, no broken links, no lorem ipsum anywhere
- [ ] www.kaihle.com and kaihle.com both resolve (redirect non-www to www)

---

## Architecture Decision

**Separate Next.js 14 repo, deployed on Vercel. NOT inside the platform monorepo.**

| Reason | Detail |
|---|---|
| SEO | Next.js SSG/SSR — Vite SPA has no SSR, will not rank |
| Deploy independence | Ships without touching platform CI/CD |
| Performance | Static pages, near-zero load time |
| Future content | MDX or headless CMS can be added post-pilot |

- Platform app lives at: `app.kaihle.com`
- Marketing site lives at: `www.kaihle.com`
- Repo name: `kaihle-www`

---

## Tech Stack (Locked)

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| CSS | Tailwind CSS v3 |
| Deployment | Vercel |
| Lead capture | Resend (reuse existing API key from platform) |
| Analytics | Plausible (privacy-first, no cookie banner needed) |
| Images | next/image + next/og for OG images |

---

## Pages in Scope

| Page | Route | Priority | Epic |
|---|---|---|---|
| Home | `/` | P0 | MW-2 |
| For Schools | `/for-schools` | P0 | MW-2 |
| How It Works | `/how-it-works` | P0 | MW-2 |
| Why Kaihle | `/why-kaihle` | P1 | MW-2 |
| Pricing | `/pricing` | P1 | MW-2 |
| About Us | `/about` | P1 | MW-2 |
| Request a Demo | `/demo` | P0 | MW-3 |
| Privacy Policy | `/privacy` | P2 | MW-3 |

**Out of scope for MW:** Blog, FAQ, Student/Teacher login (those are app.kaihle.com).

---

## Epic & Task Execution Order

```
MW-1-T1  →  MW-1-T2        (setup — must complete before any pages)
    ↓
MW-2-T1  (Home)
MW-2-T2  (For Schools)      ← most important page — do this second
MW-2-T3  (How It Works)
MW-2-T4  (Why Kaihle)
MW-2-T5  (Pricing)
MW-2-T6  (About Us)
    ↓
MW-3-T1  (Demo Request)     ← must be live for all page CTAs to work
MW-3-T2  (SEO + Analytics)
    ↓
MW-4-T1  (Deploy)
MW-4-T2  (QA)
```

Pages MW-2-T1 through MW-2-T6 can be built in parallel once MW-1 is done.
MW-3-T1 (demo form) must be complete before MW-4-T2 (QA).

---

## Design System — Forest Green & Gold (LOCKED)

**Design direction approved by founder: Forest Green & Gold.**
The approved HTML reference files live in `docs/design-reference/` (see MW-1-T1). Every visual decision — colours, fonts, spacing, component shapes — must match these references exactly. MW-1-T2 translates them into the Tailwind config and component library.

---

### Fonts

```
Display / Headings:  Fraunces (Google Fonts) — serif, italic variant used for hero emphasis
Body / UI:           Nunito (Google Fonts) — humanist sans, weights 400 / 600 / 700 / 800

next/font/google setup — import from lib/fonts.ts (do NOT redeclare in layout.tsx):
  export const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', ... })
  export const nunito   = Nunito({ subsets: ['latin'], variable: '--font-nunito', ... })
```

---

### Colour Palette

```
Background (page bg):  #f5f7f1    → bg-[#f5f7f1]       (Tailwind: extend as 'bg-soft')
Card / surface:        #ffffff
Ink (headings):        #1a2016    → text-[#1a2016]      (Tailwind: extend as 'ink')
Body text:             #4a5240    → text-[#4a5240]      (Tailwind: extend as 'body')
Muted:                 #9ca3af    → text-gray-400
Border:                #e5e7eb    → border-gray-200

Forest Green (primary): #1a5c38   → text/bg-[#1a5c38]  (Tailwind: extend as 'primary')
Green dark:             #0f3d25   → text/bg-[#0f3d25]  (Tailwind: extend as 'primary-dark')
Green light bg:         #e8f2ea   → bg-[#e8f2ea]       (Tailwind: extend as 'primary-light')
Green mid border:       #b5d4bc   → border-[#b5d4bc]   (Tailwind: extend as 'primary-mid')

Gold (accent):          #c9932a   → text/bg-[#c9932a]  (Tailwind: extend as 'accent')
Gold light:             #f5ead0   → bg-[#f5ead0]       (Tailwind: extend as 'accent-light')
Gold mid:               #e8c97a   → border-[#e8c97a]   (Tailwind: extend as 'accent-mid')
```

Tailwind `extend` block needed in `tailwind.config.ts`:
```ts
colors: {
  ink:           '#1a2016',
  soft:          '#f5f7f1',
  body:          '#4a5240',
  primary:       '#1a5c38',
  'primary-dark':'#0f3d25',
  'primary-light':'#e8f2ea',
  'primary-mid': '#b5d4bc',
  accent:        '#c9932a',
  'accent-light':'#f5ead0',
  'accent-mid':  '#e8c97a',
},
fontFamily: {
  fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
  nunito:   ['var(--font-nunito)', 'system-ui', 'sans-serif'],
},
```

---

### Typography Scale

```
Hero H1:       font-fraunces text-[58px] leading-[1.05] tracking-[-1.5px] font-bold
               — italic + green for emphasis word/phrase: italic text-primary
               — gold underline on emphasis: relative after:content-[''] after:bg-accent
Section H2:    font-fraunces text-[42px] tracking-[-1px] font-bold leading-[1.1]
Page hero H1:  font-fraunces text-[52px] tracking-[-1.5px] font-bold leading-[1.1]
Card H3:       font-nunito text-[18px] font-extrabold tracking-[-0.3px]
Body large:    font-nunito text-[17-18px] leading-[1.65] text-body
Body small:    font-nunito text-[14px] leading-[1.7] text-body
Label/tag:     font-nunito text-[12px] font-bold tracking-[1px] uppercase text-primary
```

---

### Buttons

```
Primary:   bg-primary hover:bg-primary-dark text-white rounded-full font-bold
           shadow-[0_4px_14px_rgba(26,92,56,0.3)]
           hover:shadow-[0_6px_20px_rgba(26,92,56,0.4)] -translate-y-px on hover
           px-7 py-3.5 (md) / px-9 py-4 (lg)

Outline:   bg-transparent border-2 border-primary-mid text-ink rounded-full font-bold
           hover:border-primary hover:text-primary

Ghost:     bg-white/15 border-2 border-white/30 text-white rounded-full font-bold
           hover:bg-white/25  — used ONLY on green gradient backgrounds

All buttons: transition-all duration-200
```

---

### Component Shapes

```
Cards:         rounded-[20px] border border-gray-200 bg-white
               shadow-[0_2px_12px_rgba(26,32,22,0.04)]
               hover: shadow-[0_8px_30px_rgba(26,92,56,0.08)] -translate-y-0.5

Nav:           sticky top-0, bg-[#f5f7f1]/92 backdrop-blur-xl border-b border-primary-mid
               height: h-[72px]

Nav logo mark: w-9 h-9 bg-primary rounded-[10px] text-white font-black

Section tags:  inline-flex items-center gap-2 text-[12px] font-bold uppercase
               tracking-[1px] text-primary
               before: content-['✦'] text-[10px]

Pills/badges:  rounded-full px-3.5 py-1.5 text-[13px] font-bold
               green variant: bg-primary-light border border-primary-mid text-primary
               gold variant:  bg-accent-light border border-accent-mid text-accent

Pill CTA (nav): bg-primary text-white rounded-full px-5 py-2.5 font-bold text-[14px]
                shadow-[0_2px_10px_rgba(26,92,56,0.25)]

Steps:         Step number box: w-[52px] h-[52px] bg-primary rounded-[14px]
               font-black text-[20px] text-white

CTA Banner:    bg-gradient-to-br from-primary to-primary-dark rounded-[24px]
               padding: py-16 px-14
               inner overlay: radial-gradient blobs using gold accent tint

Footer:        bg-ink (#1a2016) — uses ink colour, NOT a CSS gradient

Heatmap cells: rounded-[6px] h-[26px] — red #fca5a5, amber #fcd34d, green #86efac
```

---

### Page Hero Patterns

```
Internal pages (For Schools, How It Works, Why Kaihle, Demo):
  bg-gradient-to-br from-primary to-primary-dark
  py-20, text white
  radial overlay: radial-gradient(circle at 80% 50%, rgba(201,147,42,0.15), transparent 60%)
  (gold accent glow replaces old coral glow)

Light hero pages (Pricing, About, Privacy, How It Works alt):
  bg-soft (#f5f7f1) border-b border-primary-mid
  py-[72px] text-ink
```

---

### Design Reference Files

> All HTML reference files live in `docs/design-reference/`. These are the visual source of truth. MiniMax must match them exactly.

| File | Page |
|---|---|
| `docs/design-reference/index.html` | Home |
| `docs/design-reference/for-schools.html` | For Schools |
| `docs/design-reference/how-it-works.html` | How It Works |
| `docs/design-reference/why-kaihle.html` | Why Kaihle |
| `docs/design-reference/pricing.html` | Pricing |
| `docs/design-reference/about.html` | About Us |
| `docs/design-reference/demo.html` | Request a Demo |
| `docs/design-reference/styles.css` | Color tokens (CSS variables) |

---

### Voice (from Nancy)
- Direct and warm — not corporate, not startup-bro
- School founders, not VCs — talk to practitioners
- Problem-first framing — name the pain before selling the solution
- No jargon: "gap analysis" not "adaptive learning algorithms"
- Global scope — schools worldwide, starting with Cambridge and IB

---


---

## Key Product Features — v3 Update (March 2026)

The following features are now central to the product and must be present across all relevant pages. MiniMax must not omit or minimise these.

### Student Learning Profiles
Every student has a Learning Profile that is built automatically as they use the platform. It captures:
- Subject strengths and persistent gaps
- Learning style preferences (visual, step-by-step, examples-first, etc.)
- Progress velocity per topic type
- Historical assessment data

The AI uses this profile to personalise every lesson, study plan, and AI-generated resource specifically for that student. This is not generic personalisation — it is per-student adaptation.

**Appears on:** Home (features section), For Schools, How It Works (Step 02), Why Kaihle (diff card)

### Teacher AI Lesson Planner
Teachers can generate complete, curriculum-aligned lesson plans in minutes. Each plan is:
- Automatically tailored to the class's current gap map
- Differentiated across ability levels within the class
- Complete with warm-up, concept intro, practice activities, and exit quiz
- Aligned to Cambridge or IB learning objectives

This frees teachers from the administrative burden of planning — so they can focus on mentoring, coaching, and the high-value teaching only a human can do.

**Appears on:** Home (features section), For Schools, How It Works (Step 06), Why Kaihle (diff card)

### School-Level Value Proposition
The website must communicate Kaihle's value at three levels:
1. **Student level** — personalised learning closes gaps faster, builds confidence
2. **Teacher level** — AI planning tools free teachers to focus on mentoring
3. **School level** — when core learning becomes efficient, schools gain bandwidth for enrichment, extra-curricular activities, and the kind of rounded education every institution aspires to offer

This "school as a whole" framing is critical and must appear on For Schools and Home.

---

## Typography Update (March 2026)

Body and paragraph text must be readable. Minimum sizes:
- Body/paragraph copy: `text-lg` (18px) minimum
- Section descriptions (`.section-sub`): `text-lg` or `text-xl`
- Feature card descriptions: `text-base` minimum (16px), prefer `text-lg`
- FAQ answers: `text-base` minimum (16px)
- **Do not use `text-sm` or `text-xs` for any paragraph or description copy**


## Copy Ownership

All copy in these task files was written by Nancy (Market Strategy, February 2026) and is final for v1. Do not rewrite, rephrase, or "improve" the copy. If a page requires founder-specific details (names, photos, quotes), those sections are marked `[FOUNDER TO COMPLETE]` — leave them as visible placeholders in the code, do not invent content.

---

## Estimated Duration

| Epic | Tasks | Estimate |
|---|---|---|
| MW-1: Setup | 2 | 2 days |
| MW-2: Pages | 6 | 8 days |
| MW-3: Lead Capture + SEO | 2 | 2 days |
| MW-4: Deploy + QA | 2 | 2 days |
| **Total** | **12** | **~14 days** |

---

## Dependencies on Platform

- `RESEND_API_KEY` — reuse the key already provisioned for the platform. Add to Vercel environment variables.
- Pricing model is **two tiers only**: Free Trial ($0, 30 days, full access) and Pay As You Go ($20/user/month per active student or teacher). No annual tiers. No student limits by plan. Founding Partner offer: extended 60-day trial + $15/user/month locked rate for first year. Match exactly what is in the design reference.
- `app.kaihle.com` subdomain must be configured before MW-4-T1 so the CTA links point to the right place.

---

## Definition of Done

- [ ] All 12 tasks marked COMPLETE
- [ ] All exit criteria above checked off
- [ ] Demo form submits and email arrives in founder inbox
- [ ] Site reviewed by founder before first school meeting
