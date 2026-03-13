# MW-2-T3 — How It Works Page (`/how-it-works`)
**Milestone:** MW — Marketing Website
**Epic:** MW-2: Core Pages
**Status:** TODO
**Depends on:** MW-1-T1, MW-1-T2
**Estimated effort:** 1 day

---

## Context

This page is for school administrators and teachers who want to understand the platform before committing to a demo. It must be readable by a non-technical person — a school principal, not a developer. The flow is linear: Diagnose → Map → Plan → Content → Report. Walk them through it step by step.

---

## File to Create

```
app/how-it-works/page.tsx
```

---

## Page Sections (in order)

---

### Section 1 — Hero

**Background:** White with subtle blue top border accent (4px, blue-600)

**Copy (FINAL):**
```
Heading:
From diagnostic to personalised learning — in one platform.

Subheadline:
Kaihle connects four things that have never worked together before:
structured assessment, gap analysis, curriculum mapping, and AI-generated
content. Here's exactly how it works.
```

No CTA in hero — this page is informational. The CTA is at the bottom.

---

### Section 2 — Step-by-Step Flow

**Layout:** Alternating left/right layout on desktop (text + visual illustration placeholder alternating sides). On mobile: stacked, top to bottom. Each step has a large step number, icon, title, and body.

**Step visual style:**
- Step number: large, semi-transparent (`text-8xl font-bold text-blue-100`) positioned behind the heading
- Icon: coloured circle badge (blue-100 bg, blue-600 icon)
- Connecting line between steps on desktop (thin blue-200 vertical line)

---

**Step 1 — Icon: `ClipboardCheck`**

```
Step number: 01

Title: Student takes a diagnostic assessment

Body:
When a student joins a class, Kaihle automatically creates a Tier 1
diagnostic — a short, curriculum-aligned assessment covering all major
topics for their grade and subject. The student completes it once.
The platform does the rest.

Teachers can also assign Tier 2 assessments at any point — before a
new unit, mid-term, or after a period of absence.

Detail badge: "Takes ~15 minutes · Covers full grade curriculum"
```

---

**Step 2 — Icon: `BarChart3`**

```
Step number: 02

Title: Kaihle maps the gaps

Body:
Every response is scored and mapped to a specific curriculum subtopic.
Kaihle calculates a mastery score per subtopic for every student —
and compares it across the class.

The teacher sees a colour-coded heatmap: green for strong, amber for
developing, red for needs attention. Not averages. Not letter grades.
Exact gaps, by subtopic, per student.

Detail badge: "Updated in real-time · Cambridge & IB aligned"
```

---

**Step 3 — Icon: `BookMarked`**

```
Step number: 03

Title: A personalised study plan is generated

Body:
For every gap identified, Kaihle generates a study plan. This includes
curated external resources matched to the student's learning profile,
and an AI-generated practice quiz to reinforce the concept.

Resources are selected by semantic similarity to the curriculum subtopic
— not keyword search. Quality over quantity.

Detail badge: "Curated resources + AI practice quiz per gap"
```

---

**Step 4 — Icon: `Sparkles`**

```
Step number: 04

Title: AI-generated explainer content

Body:
For deeper gaps, Kaihle generates personalised explainer content —
structured around how this specific student learns. Teachers can see
every student's content and progress inside the class dashboard.

Detail badge: "Animations · Infographics · Practice questions"
```

---

**Step 5 — Icon: `Mail`**

```
Step number: 05

Title: Parents stay informed

Body:
Each week, parents receive a plain-language summary of their child's
progress — improvements, gaps still being addressed, and what's coming
next. No jargon. No login required.

Detail badge: "Weekly · Plain language · No parent login needed"
```

---

### Section 3 — Curriculum Support

**Layout:** Simple 2-column info block. Light gray background.

**Heading:**
```
Built on curricula your school already uses.
```

**Copy (FINAL):**
```
Kaihle is built around Cambridge and IB curricula — the standard for
international and micro schools across worldwide.

Every diagnostic question, every gap map, and every AI-generated study
plan is aligned to the specific learning objectives in your curriculum.
No custom setup. No content mapping. It works from day one.
```

**Curriculum badges (use Badge component):**
- "Cambridge Primary & Secondary" (color=blue)
- "IB (coming Month 6)" (color=purple)
- "Common Core — post-seed" (color=gray)

---

### Section 4 — CTABanner

**Copy (FINAL):**
```
Headline: See it working with your school's content.

Subheadline: A 30-minute demo is worth more than any walkthrough page.
Let's show you the real thing.

Primary CTA: Request a Demo → /demo
Secondary CTA: View Pricing → /pricing
```

---

## Metadata

```tsx
export const metadata: Metadata = {
  title: 'How It Works — Kaihle',
  description:
    'See how Kaihle\'s diagnostic-to-personalised-learning pipeline works — from student assessment to AI-generated study plans. Built for Cambridge and IB schools.',
  openGraph: {
    title: 'How Kaihle Works — Diagnostic to Personalised Learning',
    description:
      'Five steps from student enrolment to personalised AI content. No guesswork. No extra teacher workload.',
    url: 'https://www.kaihle.com/how-it-works',
  },
}
```

---


> **v3 UPDATE (March 2026):** Two new steps added to the walkthrough. Step numbering updated. Total steps: 7.

**Step 02 — NEW: Student Learning Profile is built**
- Insert after Step 01 (Diagnostic Assessment)
- Step number: 02
- Title: A Learning Profile is built for every student
- Body: As students complete assessments and work through their study plans, Kaihle builds a rich Learning Profile for each one. This profile captures their strengths, the areas where they consistently struggle, how they prefer to learn, and how quickly they progress on different topic types. The profile is not static — it evolves with every activity. The AI uses it to personalise every single lesson for that student.
- Badge: 🧠 Builds automatically · Gets smarter over time
- Visual: Student profile card showing learning style tags, subject strength bars, and an AI recommendation

**Step 06 — NEW: Teacher AI Lesson Planner**
- Insert before the "Parents stay informed" step
- Step number: 06
- Title: Teachers generate lesson plans with AI
- Body: Kaihle doesn't just help students — it transforms how teachers work. The Teacher AI Lesson Planner generates full lesson plans for any subject, topic, and year group at the click of a button. Each plan is automatically tailored to the class's current gap map. Teachers review, customise, and teach. The hours previously spent creating assessments and planning can now go to mentoring students, building relationships, and doing the work only a human teacher can do.
- Badge: 📝 Lesson plans in minutes · Curriculum-aligned · Gap-aware
- Visual: Lesson planner UI showing lesson structure with steps auto-generated

**Renumbering:**
- Old Step 02 (Kaihle maps the gaps) → Step 03
- Old Step 03 (AI generates study plan) → Step 04
- Old Step 04 (Student works through plan) → Step 05
- Old Step 05 (Parents stay informed) → Step 07

**Curriculum section fix:**
- Cambridge AND IB are both built in from day one — no "coming Month 6"
- Remove "Common Core — post-seed" badge
- Replace with: "Custom curricula — available with onboarding support"


## Design Reference

Open `/design-reference/how-it-works.html` to see the exact visual target. Match layout, spacing, colours, and type scale to the reference. All Forest Green & Gold design tokens (fonts, colours, radii, shadows) are defined in MW-1-T2 and the `tailwind.config.ts`.

---


## Acceptance Criteria

- [ ] All 4 sections render in correct order
- [ ] All 5 steps render with correct step numbers (01–05), icons, titles, and body copy
- [ ] Body copy for each step matches spec exactly
- [ ] Detail badges render below each step body
- [ ] Curriculum section shows all 3 Badge components with correct labels and colours
- [ ] CTABanner copy and CTA labels match spec exactly
- [ ] Step layout alternates left/right on desktop (≥1280px)
- [ ] Step layout is stacked vertically on mobile (≤768px)
- [ ] No technical jargon visible — language is appropriate for a school administrator
- [ ] Fully responsive: 375px, 768px, 1280px
- [ ] No TypeScript errors


---


> **v3 UPDATE (March 2026):** Two new steps added to the walkthrough. Step numbering updated. Total steps: 7.

**Step 02 — NEW: Student Learning Profile is built**
- Insert after Step 01 (Diagnostic Assessment)
- Step number: 02
- Title: A Learning Profile is built for every student
- Body: As students complete assessments and work through their study plans, Kaihle builds a rich Learning Profile for each one. This profile captures their strengths, the areas where they consistently struggle, how they prefer to learn, and how quickly they progress on different topic types. The profile is not static — it evolves with every activity. The AI uses it to personalise every single lesson for that student.
- Badge: 🧠 Builds automatically · Gets smarter over time
- Visual: Student profile card showing learning style tags, subject strength bars, and an AI recommendation

**Step 06 — NEW: Teacher AI Lesson Planner**
- Insert before the "Parents stay informed" step
- Step number: 06
- Title: Teachers generate lesson plans with AI
- Body: Kaihle doesn't just help students — it transforms how teachers work. The Teacher AI Lesson Planner generates full lesson plans for any subject, topic, and year group at the click of a button. Each plan is automatically tailored to the class's current gap map. Teachers review, customise, and teach. The hours previously spent creating assessments and planning can now go to mentoring students, building relationships, and doing the work only a human teacher can do.
- Badge: 📝 Lesson plans in minutes · Curriculum-aligned · Gap-aware
- Visual: Lesson planner UI showing lesson structure with steps auto-generated

**Renumbering:**
- Old Step 02 (Kaihle maps the gaps) → Step 03
- Old Step 03 (AI generates study plan) → Step 04
- Old Step 04 (Student works through plan) → Step 05
- Old Step 05 (Parents stay informed) → Step 07

**Curriculum section fix:**
- Cambridge AND IB are both built in from day one — no "coming Month 6"
- Remove "Common Core — post-seed" badge
- Replace with: "Custom curricula — available with onboarding support"


## Design Reference

> **Source of truth for this page.** MiniMax must match the layout, colors, typography, spacing, and copy in the reference file exactly.

- **HTML reference:** `docs/design-reference/how-it-works.html`
- **Color tokens:** `docs/design-reference/styles.css`
- **Font stack:** Fraunces (display/headings) + Nunito (body/UI) — loaded via Google Fonts in `lib/fonts.ts`
- **Color palette:** Forest Green & Gold — primary `#1a5c38`, accent `#c9932a`, ink `#1a2016`, bg `#f5f7f1`

### Rules
1. Convert all inline CSS in the HTML reference to Tailwind utility classes
2. All copy marked FINAL or attributed to Nancy must be used verbatim — no rephrasing
3. All [FOUNDER TO COMPLETE] placeholders must be rendered as visible TODO comments in the code
4. Button shape is always `rounded-full` (pill) — never `rounded-lg`
5. Do not add, remove, or reorder page sections without explicit instruction
