# MW-2-T4 — Why Kaihle Page (`/why-kaihle`)
**Milestone:** MW — Marketing Website
**Epic:** MW-2: Core Pages
**Status:** TODO
**Depends on:** MW-1-T1, MW-1-T2
**Estimated effort:** 1 day

---

## Context

This page handles the "but why not just use X?" objection. Every school founder will have heard of Khan Academy, has probably tried private tutoring, and may already have an LMS. This page directly addresses the comparison — using Nancy's competitive analysis — without being defensive or dismissive. Confident. Factual. School-practitioner voice.

---

## File to Create

```
app/why-kaihle/page.tsx
```

---

## Page Sections (in order)

---

### Section 1 — Hero

**Background:** White, no gradient. Clean and direct.

**Copy (FINAL):**
```
Heading:
There are a lot of learning tools.
Most of them aren't built for schools.

Subheadline:
Kaihle was built specifically for school environments — not for
individual families, not for mass-market consumer subscriptions,
and not as a generic LMS with an AI label. Here is how we are
different from the alternatives you have probably already considered.
```

No CTA in hero.

---

### Section 2 — Comparison Table

**Layout:** Full-width scrollable table on mobile, fixed on desktop. White background.

**Section heading:**
```
Kaihle vs. the alternatives.
```

**Table headers:** Kaihle · Private Tutoring · Khan Academy · Generic LMS

**Table rows (copy and values FINAL — do not change):**

| Feature | Kaihle | Private Tutoring | Khan Academy | Generic LMS |
|---|---|---|---|---|
| Diagnostic-first | ✓ | Sometimes | ✗ | ✗ |
| Cambridge & IB aligned | ✓ | Depends on tutor | ✗ | Varies |
| Built for schools (multi-class, multi-role) | ✓ | ✗ | ✗ | ✓ |
| Real-time teacher visibility | ✓ | ✗ | Limited | ✓ |
| AI-generated personalised content | ✓ | ✗ | ✗ | ✗ |
| Per-student gap tracking | ✓ | Manual | ✗ | ✗ |
| Works at class scale (30–40 students) | ✓ | ✗ | ✓ | ✓ |
| Affordable for small schools | ✓ | ✗ | Free (generic) | Varies |

**Implementation notes:**
- Kaihle column: highlight with blue-600 header background, white text
- ✓ cells in Kaihle column: `CheckCircle2` icon, text-green-500
- ✗ cells: `XCircle` icon, text-red-400
- "Sometimes" / "Limited" / "Depends" / "Varies": `MinusCircle` icon, text-gray-400
- Table must be horizontally scrollable on mobile (`overflow-x-auto`)
- Kaihle column is sticky on left when scrolling horizontally on mobile

---

### Section 3 — Core Differentiators (3-column cards)

**Section heading:**
```
The three things that make Kaihle different.
```

**Background:** `bg-gray-50`

**Cards (copy FINAL — use FeatureCard component):**

Card 1 — Icon: `Target`
```
Title: Diagnostic before prescription
Description: Most tools give every student the same content.
Kaihle starts by understanding exactly what each student knows —
and doesn't know — before generating a single learning resource.
```

Card 2 — Icon: `School`
```
Title: School-native, not consumer
Description: Kaihle is designed for classrooms. Teachers assign
assessments. Students take them. Results belong to the school.
No family subscriptions, no gamification, no distraction.
```

Card 3 — Icon: `Cpu`
```
Title: Content generated, not curated from a catalogue
Description: Kaihle doesn't match students to a fixed library.
It generates personalised explanations, quizzes, and study plans
for each student's specific gaps — every time.
```

---

### Section 4 — Core Belief Statement

**Layout:** Full-width, centred, quote-style. Dark background.

**Background:** `bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900`

**Copy (FINAL):**
```
Pull quote:
"We believe the most important question in education isn't
'did the student pass?' — it's 'what exactly does this student not yet
understand, and what's the fastest way to fix it?'"

Attribution:
Kaihle — 2026
```

**Implementation note:** Use large quotation mark glyph as decorative element (text-blue-800, opacity-30).

---

### Section 5 — CTABanner

**Copy (FINAL):**
```
Headline: See the difference in a 30-minute demo.

Subheadline: We'll walk through a real diagnostic, a real gap map,
and a real AI-generated study plan — using Cambridge content.

Primary CTA: Request a Demo → /demo
Secondary CTA: How It Works → /how-it-works
```

---

## Metadata

```tsx
export const metadata: Metadata = {
  title: 'Why Kaihle — Diagnostic Learning Built for Schools',
  description:
    'See how Kaihle compares to private tutoring, Khan Academy, and generic LMS tools. Built for school environments, Cambridge and IB aligned, diagnostic-first.',
  openGraph: {
    title: 'Why Kaihle — Built for Schools, Not Consumers',
    description:
      'Diagnostic-first, curriculum-aligned, school-native. See how Kaihle is different.',
    url: 'https://www.kaihle.com/why-kaihle',
  },
}
```

---


> **v3 UPDATE (March 2026):** Comparison table gets 2 new rows. "Three Core Differences" section updated to 6 diff cards.

**New comparison table rows (insert after "Diagnostic-first" row):**
- Student Learning Profiles: Kaihle ✓ | Private Tutoring: Manual/informal | Khan Academy: ✗ | Generic LMS: ✗
- Teacher AI Lesson Planner: Kaihle ✓ | Private Tutoring: ✗ | Khan Academy: ✗ | Generic LMS: ✗
- Cambridge & IB aligned — built in: Kaihle ✓ | Private Tutoring: Depends on tutor | Khan Academy: ✗ | Generic LMS: Varies
- Transparent pay-as-you-go pricing: Kaihle ✓ | Private Tutoring: ✗ | Khan Academy: Free (generic) | Generic LMS: Varies

**Updated section heading:** "Six things that make Kaihle different." (was Three)

**New diff cards (insert as cards 2 and 3, renumber existing):**

Card 2 — NEW:
- Icon: 🧠
- Title: A learning profile for every student
- Body: Kaihle builds a rich Learning Profile for each student — capturing how they learn, where they're strong, and where they consistently struggle. Every lesson is generated using that profile. It's not personalised for a type of student. It's personalised for that specific student.

Card 3 — NEW:
- Icon: 📝
- Title: Teachers become mentors, not planners
- Body: The Teacher AI Lesson Planner generates gap-aware, curriculum-aligned lesson plans in minutes. The hours spent creating assessments and planning lessons can now go to mentoring, coaching, and the work only a great teacher can do.

Card 6 — NEW:
- Icon: 🌱
- Title: More learning creates more space
- Body: When core academics become more efficient, schools gain bandwidth — for enrichment, extra-curricula, deeper projects, and the kind of rounded education that every school aspires to offer but rarely has capacity for.


## Design Reference

Open `/design-reference/why-kaihle.html` to see the exact visual target. Match layout, spacing, colours, and type scale to the reference. All Forest Green & Gold design tokens (fonts, colours, radii, shadows) are defined in MW-1-T2 and the `tailwind.config.ts`.

---


## Acceptance Criteria

- [ ] All 5 sections render in correct order
- [ ] Hero copy matches spec exactly
- [ ] Comparison table renders all 8 rows with correct values per column
- [ ] Kaihle column is visually highlighted (blue-600 header)
- [ ] ✓ / ✗ / partial cells use correct icons and colours as specified
- [ ] Table is horizontally scrollable on 375px mobile viewport
- [ ] All 3 differentiator card titles and descriptions match spec exactly
- [ ] Core belief quote renders correctly with large decorative quotation mark
- [ ] Attribution line renders as "Kaihle — 2026"
- [ ] CTABanner copy matches spec exactly
- [ ] No TypeScript errors
- [ ] Fully responsive: 375px, 768px, 1280px


---


> **v3 UPDATE (March 2026):** Comparison table gets 2 new rows. "Three Core Differences" section updated to 6 diff cards.

**New comparison table rows (insert after "Diagnostic-first" row):**
- Student Learning Profiles: Kaihle ✓ | Private Tutoring: Manual/informal | Khan Academy: ✗ | Generic LMS: ✗
- Teacher AI Lesson Planner: Kaihle ✓ | Private Tutoring: ✗ | Khan Academy: ✗ | Generic LMS: ✗
- Cambridge & IB aligned — built in: Kaihle ✓ | Private Tutoring: Depends on tutor | Khan Academy: ✗ | Generic LMS: Varies
- Transparent pay-as-you-go pricing: Kaihle ✓ | Private Tutoring: ✗ | Khan Academy: Free (generic) | Generic LMS: Varies

**Updated section heading:** "Six things that make Kaihle different." (was Three)

**New diff cards (insert as cards 2 and 3, renumber existing):**

Card 2 — NEW:
- Icon: 🧠
- Title: A learning profile for every student
- Body: Kaihle builds a rich Learning Profile for each student — capturing how they learn, where they're strong, and where they consistently struggle. Every lesson is generated using that profile. It's not personalised for a type of student. It's personalised for that specific student.

Card 3 — NEW:
- Icon: 📝
- Title: Teachers become mentors, not planners
- Body: The Teacher AI Lesson Planner generates gap-aware, curriculum-aligned lesson plans in minutes. The hours spent creating assessments and planning lessons can now go to mentoring, coaching, and the work only a great teacher can do.

Card 6 — NEW:
- Icon: 🌱
- Title: More learning creates more space
- Body: When core academics become more efficient, schools gain bandwidth — for enrichment, extra-curricula, deeper projects, and the kind of rounded education that every school aspires to offer but rarely has capacity for.


## Design Reference

> **Source of truth for this page.** MiniMax must match the layout, colors, typography, spacing, and copy in the reference file exactly.

- **HTML reference:** `docs/design-reference/why-kaihle.html`
- **Color tokens:** `docs/design-reference/styles.css`
- **Font stack:** Fraunces (display/headings) + Nunito (body/UI) — loaded via Google Fonts in `lib/fonts.ts`
- **Color palette:** Forest Green & Gold — primary `#1a5c38`, accent `#c9932a`, ink `#1a2016`, bg `#f5f7f1`

### Rules
1. Convert all inline CSS in the HTML reference to Tailwind utility classes
2. All copy marked FINAL or attributed to Nancy must be used verbatim — no rephrasing
3. All [FOUNDER TO COMPLETE] placeholders must be rendered as visible TODO comments in the code
4. Button shape is always `rounded-full` (pill) — never `rounded-lg`
5. Do not add, remove, or reorder page sections without explicit instruction
