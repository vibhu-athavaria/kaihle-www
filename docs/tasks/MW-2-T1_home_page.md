# MW-2-T1 — Home Page (`/`)
**Milestone:** MW — Marketing Website
**Epic:** MW-2: Core Pages
**Status:** TODO
**Depends on:** MW-1-T1, MW-1-T2
**Estimated effort:** 1.5 days

---

## Context

The home page is the first impression. It must immediately answer: "What is Kaihle and why should my school care?" The page is conversion-oriented — every section leads toward a single action: Request a Demo. Do not add sections not specified here. Do not rewrite the copy.

---

## File to Create

```
app/page.tsx    ← replaces the placeholder from MW-1-T1
```

---

## Page Sections (in order)

---

### Section 1 — Hero

**Layout:** Two-column grid (`grid-cols-[1fr_1.05fr] gap-[72px]`). Copy on the left, `<GapHeatmap />` component on the right. NOT centred. Padding: `pt-[72px] pb-20`.

**Background:** `bg-soft` (`#f5f7f1`) — NOT a gradient. Two decorative blobs (absolute positioned, blur-[60px] opacity-15): one indigo `500×500px` top-right, one coral `300×300px` bottom-left.

**Pill badge above headline:** `<Pill variant="green" pulse>Founding Cohort · Now Open</Pill>`

**Copy (FINAL — do not change):**
```
Headline:
Every student has gaps. Most schools never find them.
```

Headline styling: `font-fraunces text-[60px] leading-[1.05] tracking-[-1.5px] text-ink`
The word/phrase "never find them." should be:
- `text-primary italic` (font-style italic via Fraunces italic axis)
- Coral underline: `relative after:absolute after:bottom-[3px] after:left-0 after:right-0 after:h-[3px] after:bg-accent after:rounded-sm`

```
Subheadline:
Kaihle is an AI-powered diagnostic platform that maps exactly where each
student is struggling — and generates personalised learning to fix it.
Built for schools. Built for real classrooms.
```
Subheadline styling: `text-[18px] leading-[1.65] text-gray-600 max-w-[460px]`

**CTAs (row, gap-3):**
- Primary: `<Button href="/demo" variant="primary" size="lg">Request a Demo</Button>`
- Text link (not a Button): `<Link href="/how-it-works">See how it works →</Link>` styled `text-[15px] font-semibold text-gray-600 hover:text-primary`

**Social proof below CTAs:**
- 4 coloured avatar orbs (`w-[34px] h-[34px] rounded-full border-[2.5px] border-soft -ml-[10px]` stacked)
- Text: `"<strong>Pilot applications open</strong> for partner schools"` — `text-[13px] text-gray-600`

**Right column:**
- Render `<GapHeatmap />` — import from `components/ui/GapHeatmap`
- The floating cards on GapHeatmap are absolutely positioned and will extend beyond the panel — ensure `overflow-visible` on the parent column

---

### Section 2 — Stats Bar

**Layout:** `bg-white border-y border-gray-200`. Three cells in a `grid-cols-3` — each cell `border-r border-gray-200` (last cell no border-right). Padding: `py-8 px-10`.

**Stat number styling:** `font-fraunces text-[36px] font-bold text-ink tracking-[-1px] leading-none` — accent parts in `text-primary`.

**Stats (FINAL — do not change):**
| Stat | Label |
|---|---|
| 7,000+ | Curriculum-aligned questions ready from day one |
| Cambridge & IB | Aligned to curricula your school already uses |
| 90 days | From first demo to signed pilot agreement |

---

### Section 3 — Feature Highlights

**Layout:** `bg-soft py-20`. Three-column `grid-cols-3 gap-5` `<FeatureCard />` grid.

**Section heading:**
```
Tag: The Platform
H2: Everything a school needs to stop guessing.
```
H2 max-width: `max-w-[560px]`

**Cards — use `<FeatureCard emoji title description />` (emoji, NOT lucide icons):**

Card 1:
```
emoji: "📋"
Title: Diagnostic Assessment
Description: Structured assessments that map every student's knowledge
gaps to specific curriculum subtopics — automatically, at enrolment
and throughout the year.
```

Card 2:
```
emoji: "🗺️"
Title: Real-Time Gap Map
Description: Teachers see a colour-coded heatmap of their entire class.
Instantly know who is struggling, on what topic, and by how much.
No spreadsheets. No guesswork.
```

Card 3:
```
emoji: "✨"
Title: Personalised AI Content
Description: For every gap identified, Kaihle generates a personalised
study plan with curated resources and AI-produced explainer content
tailored to how each student learns.
```

---

### Section 4 — How It Works (3-step)

**Layout:** `bg-white border-y border-gray-200 py-20`. Steps in a `grid-cols-3 gap-[2px] bg-gray-200 rounded-[20px] overflow-hidden` — each step is `bg-white p-10`.

**Section heading (centred):**
```
Tag: How it works (centred)
H2: From diagnostic to personalised learning — in three steps.
```

**Step number:** `w-[52px] h-[52px] bg-primary rounded-[14px] font-black text-[20px] text-white flex items-center justify-center mb-4`

**Step badge (below description):** `bg-primary-light text-primary text-[11px] font-bold px-3 py-1 rounded-full inline-block`

**Steps (copy FINAL):**

Step 01:
```
Title: Diagnose
Body: Students take a structured diagnostic assessment. Kaihle maps
their exact knowledge gaps across every subtopic in the curriculum.
Badge: Takes ~15 minutes
```

Step 02:
```
Title: Identify
Body: Teachers see a real-time heatmap of their class. Instantly
know who is struggling, on what topic, and by how much.
Badge: Updated in real-time
```

Step 03:
```
Title: Fix
Body: Kaihle generates a personalised study plan per student —
curated resources, practice quizzes, and AI-produced content.
Badge: Fully automated
```

**CTA below steps (centred):** `<Button href="/how-it-works" variant="outline">See the full walkthrough</Button>`

---

### Section 5 — Social Proof / Testimonial

**Layout:** `bg-soft py-20`. A single `rounded-[24px]` card with `bg-gradient-to-br from-indigo-50 to-orange-50` — `grid-cols-2 gap-12 items-center px-14 py-14`.

**Left: testimonial quote**
- Quote: `font-fraunces text-[26px] font-semibold italic text-ink leading-[1.4] mb-5`
- Attribution: `text-[14px] font-bold text-primary` / role: `block text-[13px] font-medium text-gray-600 mt-0.5`

**Copy (FINAL — render placeholders, do not invent names):**
```
Quote: "We finally know what each student actually knows — not just what they handed in."
Attribution: [Founder to complete — name]
Role/school:  [Founder to complete — Role, School Name, Location]
```

**Right: 3 stat blocks** (icon + number + label):
```
🎯  7,000+    Curriculum-aligned questions
⚡  90 days   To first paying pilot school
🌏  SEA       Expanding across worldwide and beyond
```
Stat number: `font-fraunces text-[28px] font-bold text-primary tracking-[-1px] leading-none`

---

### Section 6 — For Schools CTA

**Layout:** `py-14 bg-soft`. Render `<CTABanner>` — sits inside container, rounded corners, gradient, NOT full-bleed.

**Copy (FINAL):**
```
Headline: Ready to run a pilot?

Subheadline: We work with micro schools and small international schools.
If you have 15–300 students and a Cambridge or IB curriculum, we want to talk.

Primary CTA: Request a Demo → /demo
Secondary CTA: For Schools → /for-schools
```

---

## Design Reference

Open `/design-reference/index.html` in a browser to see the exact visual target for every section on this page. Match it pixel-for-pixel — layout, spacing, colours, type scale. Copy is identical; visual execution is the task.

---

## Metadata

```tsx
export const metadata: Metadata = {
  title: 'Kaihle — AI-Powered Diagnostic Learning for Schools',
  description:
    'Kaihle maps every student\'s exact knowledge gaps and generates personalised learning to fix them. Built for Cambridge and IB schools in worldwide.',
  openGraph: {
    title: 'Kaihle — AI-Powered Diagnostic Learning for Schools',
    description:
      'Kaihle maps every student\'s exact knowledge gaps and generates personalised learning to fix them.',
    url: 'https://www.kaihle.com',
  },
}
```

---

## Acceptance Criteria

- [ ] All 6 sections render in correct order with no layout breaks
- [ ] Hero copy matches spec exactly — no paraphrasing
- [ ] Stats bar shows all 3 stats correctly
- [ ] FeatureCard titles and descriptions match spec exactly
- [ ] 3-step section headings and body copy match spec exactly
- [ ] Testimonial renders with `[FOUNDER TO COMPLETE]` placeholders — not fake names
- [ ] CTABanner headline, subheadline, and both CTA labels match spec exactly
- [ ] "Request a Demo" CTA appears on the page at minimum twice (hero + footer banner)
- [ ] All internal links (`/demo`, `/how-it-works`, `/for-schools`) are valid Next.js Link components
- [ ] Fully responsive: correct layout at 375px, 768px, 1280px
- [ ] Lighthouse Performance ≥ 90, SEO ≥ 90 on this page
- [ ] No TypeScript errors in strict mode


---

## Design Reference

> **Source of truth for this page.** MiniMax must match the layout, colors, typography, spacing, and copy in the reference file exactly.

- **HTML reference:** `docs/design-reference/index.html`
- **Color tokens:** `docs/design-reference/styles.css`
- **Font stack:** Fraunces (display/headings) + Nunito (body/UI) — loaded via Google Fonts in `lib/fonts.ts`
- **Color palette:** Forest Green & Gold — primary `#1a5c38`, accent `#c9932a`, ink `#1a2016`, bg `#f5f7f1`

### Rules
1. Convert all inline CSS in the HTML reference to Tailwind utility classes
2. All copy marked FINAL or attributed to Nancy must be used verbatim — no rephrasing
3. All [FOUNDER TO COMPLETE] placeholders must be rendered as visible TODO comments in the code
4. Button shape is always `rounded-full` (pill) — never `rounded-lg`
5. Do not add, remove, or reorder page sections without explicit instruction

> **v3 UPDATE (March 2026):** Two new feature cards added to The Platform section. Total is now 6 cards in a 3-column grid.

**New feature cards to add:**

**Card: Student Learning Profiles** (insert after Diagnostic Assessment card)
- Emoji: 🧠
- Title: Student Learning Profiles
- Description: Kaihle builds a rich learning profile for every student — capturing their strengths, learning style, and progress patterns. The AI uses this to personalise every lesson specifically for them.

**Card: Teacher AI Lesson Planner** (insert as 5th card)
- Emoji: 📝
- Title: Teacher AI Lesson Planner
- Description: Teachers generate complete, gap-aware lesson plans in minutes. Spend less time creating resources and more time mentoring, coaching, and connecting with students.

**Card: School-Wide Analytics** (insert as 6th card)
- Emoji: 🏫
- Title: School-Wide Analytics
- Description: Principals and heads of school see learning outcomes across every class. Identify where the school excels and where attention is needed — backed by real data, not gut feel.

**Also add: School Value Prop section** (insert between features and testimonial sections)

Section heading: When learning works better, the whole school changes.
Section tag: The School Difference

Three cards:
1. 🎯 Students learn faster — Every student gets a lesson built for them — not a one-size-fits-all lesson built for the class average. Gaps close faster. Confidence grows.
2. 👩‍🏫 Teachers become mentors — When AI handles lesson planning, assessment creation, and gap analysis, teachers can focus on what they do best — building relationships, inspiring curiosity, and mentoring students as individuals.
3. 🌱 Schools can do more — When core learning becomes more efficient, schools gain bandwidth. More time for extra-curricular activities, deeper projects, and the kind of enriched education every school aspires to offer.

