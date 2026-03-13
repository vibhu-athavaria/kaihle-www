# MW-2-T2 — For Schools Page (`/for-schools`)
**Milestone:** MW — Marketing Website
**Epic:** MW-2: Core Pages
**Status:** TODO
**Depends on:** MW-1-T1, MW-1-T2
**Estimated effort:** 1.5 days

---

## Context

This is the most important page on the site. Every school founder who considers a demo will land here. It must speak directly to a school practitioner — not an investor, not a parent. The copy is written by Nancy and is final. Do not rephrase it. The job of this task is implementation, not copywriting.

---

## File to Create

```
app/for-schools/page.tsx
```

---

## Page Sections (in order)

---

### Section 1 — Hero

**Background:** `bg-gradient-to-br from-primary to-primary-dark`

**Copy (FINAL):**
```
Headline:
You know some students are falling behind.
You just don't know exactly who, or why.

Subheadline:
Kaihle gives every teacher a real-time diagnostic view of their class —
and every student a personalised path forward. No guesswork. No extra
workload.
```

**CTA:** "Request a Demo" → `/demo` (Button variant=ghost, size=lg, white border)

---

### Section 2 — Problem / Solution

**Layout:** Two-column on desktop (Problem left, Solution right), stacked on mobile. White background.

**Problem column — copy (FINAL):**
```
Heading: The problem every school shares

Body:
Teachers are stretched. Class sizes make individual attention hard.
End-of-term results tell you what happened — not what to do about it.

Most schools rely on homework grades and teacher intuition to identify
struggling students. By the time a gap is spotted, it has compounded.
```
**Visual indicator:** Red/amber warning icon or subtle left-border accent

**Solution column — copy (FINAL):**
```
Heading: What Kaihle does differently

Body:
Kaihle runs structured diagnostic assessments at the start of every unit.
The platform analyses every response, maps gaps to specific curriculum
subtopics, and generates a personalised study plan for each student —
automatically.

Teachers don't get more work. They get better information.
```
**Visual indicator:** Green checkmark or blue accent

---

### Section 3 — Who It's For (Role Cards)

**Layout:** 4-column grid on desktop, 2×2 on tablet, stacked on mobile. Light gray background (`bg-gray-50`).

**Section heading:**
```
Built for every role in your school.
```

**Cards (copy FINAL — use FeatureCard component):**

Card 1 — Icon: `Building2` (lucide)
```
Title: School Administrators
Description: Full visibility across every class and every teacher.
Understand school-wide performance trends. Approve student enrolments
and manage staff in one place.
```

Card 2 — Icon: `BookOpen` (lucide)
```
Title: Teachers
Description: See exactly where your class is struggling — before you
teach the wrong thing twice. Assign assessments, review results, and
let Kaihle generate the follow-up content.
```

Card 3 — Icon: `GraduationCap` (lucide)
```
Title: Students
Description: Take a short diagnostic. Get a personalised plan. Learn
through AI-generated explanations matched to your exact gaps and your
learning style.
```

Card 4 — Icon: `Users` (lucide)
```
Title: Parents
Description: Receive a plain-language weekly summary of your child's
progress — what improved, what's still being addressed, and what's
coming next. No jargon. No login required.
```

---

### Section 4 — Pilot Programme Callout

**Layout:** Full-width accent banner — distinct from CTABanner. Use a white card with blue gradient border on dark blue background.

**Background:** `bg-gradient-to-br from-blue-900 to-blue-800`

**Copy (FINAL):**
```
Badge: FOUNDING COHORT · NOW OPEN

Heading:
Apply for the Founding Cohort

Body:
We are currently accepting applications from micro schools and small
international schools in worldwide for our founding pilot programme.

Pilot schools receive:
• Full platform access at no cost for 90 days
• Direct support from our team throughout the pilot
• Discounted pricing locked in for 12 months post-pilot
• Input into the product roadmap as a founding school

CTA: Apply for the Pilot → /demo
```

**Implementation note:** The 4 bullet points should render as a styled list with checkmark icons (use `CheckCircle2` from lucide, `text-green-400`).

---

### Section 5 — How the Platform Works (brief)

**Layout:** Horizontal step flow (same pattern as Home page Section 4 but abbreviated). White background.

**Heading:**
```
The platform, in plain terms.
```

**Steps (copy FINAL):**

Step 1:
```
Diagnostic In
Student joins a class → Kaihle creates their diagnostic assessment automatically.
```

Step 2:
```
Gaps Mapped
Every response is scored and mapped to a specific curriculum subtopic. Teacher sees results immediately.
```

Step 3:
```
Plans Generated
Personalised study plan created per student — resources, quizzes, and AI content.
```

**Link:** "See the full walkthrough" → `/how-it-works` (text link, blue-600)

---

### Section 6 — CTABanner

**Copy (FINAL):**
```
Headline: Ready to see it with your school's curriculum?

Subheadline: A demo takes 30 minutes. We'll show you the diagnostic
flow, the teacher dashboard, and the student experience — using
Cambridge content your students would actually see.

Primary CTA: Request a Demo → /demo
```

---

## Metadata

```tsx
export const metadata: Metadata = {
  title: 'For Schools — Kaihle',
  description:
    'Kaihle gives teachers a real-time diagnostic view of every student\'s knowledge gaps — and generates personalised learning to fix them. Built for Cambridge and IB schools.',
  openGraph: {
    title: 'Kaihle for Schools — Diagnostic Learning Platform',
    description:
      'Real-time gap maps, personalised study plans, and AI-generated content. Built for school administrators, teachers, and students.',
    url: 'https://www.kaihle.com/for-schools',
  },
}
```

---


> **v3 UPDATE (March 2026):** Add new "What Changes for Your School" section (4 cards, 2×2 grid) before the CTA section.

**Section: What Changes for Your School**
- Section tag: What Changes for Your School
- Heading: A better platform for everyone in your institution.
- 4 cards in 2×2 grid:

  1. **For Students** — Every lesson, built for them.
     Body: Kaihle builds a Learning Profile for each student and uses it to personalise every study plan, AI-generated content, and practice activity. Not the same lesson for everyone — the right lesson for each individual. Gaps close faster. Confidence builds. Learning compounds.

  2. **For Teachers** — Your AI teaching partner.
     Body: The Teacher AI Lesson Planner generates complete, curriculum-aligned lesson plans tailored to each class's current gap map. Assessment creation and gap analysis happen automatically. Teachers get back the hours spent on planning and admin — to mentor students, run richer discussions, and build the teacher–student relationships that actually change outcomes.

  3. **For School Leaders** — Clarity across your whole school.
     Body: The school-wide analytics dashboard gives principals a live view of learning outcomes across every class and subject. See where the school performs well and where intervention is needed — based on data, not assumptions.

  4. **For the School as a Whole** — Space for the education you aspire to offer. *(use gold accent colour for label)*
     Body: When core academic learning becomes more efficient, schools gain bandwidth — more room for extra-curricular activities, deeper projects, creative exploration, and the enriched experience every school wants to offer but rarely has capacity for.


## Design Reference

Open `/design-reference/for-schools.html` to see the exact visual target. Match layout, spacing, colours, and type scale to the reference. All Forest Green & Gold design tokens (fonts, colours, radii, shadows) are defined in MW-1-T2 and the `tailwind.config.ts`.

---


## Acceptance Criteria

- [ ] All 6 sections render in correct order
- [ ] Hero headline and subheadline match spec exactly
- [ ] Problem/Solution copy matches spec exactly — both columns
- [ ] All 4 role card titles and descriptions match spec exactly
- [ ] Pilot programme callout shows 4 bullet points with CheckCircle2 icons
- [ ] Pilot programme badge renders with correct text
- [ ] "See the full walkthrough" text link points to `/how-it-works`
- [ ] CTABanner copy matches spec exactly
- [ ] "Request a Demo" appears at minimum in hero and CTABanner
- [ ] All links are valid Next.js Link components
- [ ] Fully responsive: 375px, 768px, 1280px
- [ ] No TypeScript errors
- [ ] No lorem ipsum or placeholder copy visible on the page


---


> **v3 UPDATE (March 2026):** Add new "What Changes for Your School" section (4 cards, 2×2 grid) before the CTA section.

**Section: What Changes for Your School**
- Section tag: What Changes for Your School
- Heading: A better platform for everyone in your institution.
- 4 cards in 2×2 grid:

  1. **For Students** — Every lesson, built for them.
     Body: Kaihle builds a Learning Profile for each student and uses it to personalise every study plan, AI-generated content, and practice activity. Not the same lesson for everyone — the right lesson for each individual. Gaps close faster. Confidence builds. Learning compounds.

  2. **For Teachers** — Your AI teaching partner.
     Body: The Teacher AI Lesson Planner generates complete, curriculum-aligned lesson plans tailored to each class's current gap map. Assessment creation and gap analysis happen automatically. Teachers get back the hours spent on planning and admin — to mentor students, run richer discussions, and build the teacher–student relationships that actually change outcomes.

  3. **For School Leaders** — Clarity across your whole school.
     Body: The school-wide analytics dashboard gives principals a live view of learning outcomes across every class and subject. See where the school performs well and where intervention is needed — based on data, not assumptions.

  4. **For the School as a Whole** — Space for the education you aspire to offer. *(use gold accent colour for label)*
     Body: When core academic learning becomes more efficient, schools gain bandwidth — more room for extra-curricular activities, deeper projects, creative exploration, and the enriched experience every school wants to offer but rarely has capacity for.


## Design Reference

> **Source of truth for this page.** MiniMax must match the layout, colors, typography, spacing, and copy in the reference file exactly.

- **HTML reference:** `docs/design-reference/for-schools.html`
- **Color tokens:** `docs/design-reference/styles.css`
- **Font stack:** Fraunces (display/headings) + Nunito (body/UI) — loaded via Google Fonts in `lib/fonts.ts`
- **Color palette:** Forest Green & Gold — primary `#1a5c38`, accent `#c9932a`, ink `#1a2016`, bg `#f5f7f1`

### Rules
1. Convert all inline CSS in the HTML reference to Tailwind utility classes
2. All copy marked FINAL or attributed to Nancy must be used verbatim — no rephrasing
3. All [FOUNDER TO COMPLETE] placeholders must be rendered as visible TODO comments in the code
4. Button shape is always `rounded-full` (pill) — never `rounded-lg`
5. Do not add, remove, or reorder page sections without explicit instruction
