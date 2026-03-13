# MW-2-T6 — About Us Page (`/about`)
**Milestone:** MW — Marketing Website
**Epic:** MW-2: Core Pages
**Status:** TODO
**Depends on:** MW-1-T1, MW-1-T2
**Estimated effort:** 0.5 days

---

## Context

This page tells the human story behind Kaihle. It must feel personal and grounded — not a standard startup "About" page with mission-vision-values boilerplate. Nancy's strategy is clear: the founder's background and international school experience are a genuine asset. Use them. The founder needs to complete several sections marked `[FOUNDER TO COMPLETE]`. These must be rendered as visible placeholders in the code — do not fabricate content.

---

## File to Create

```
app/about/page.tsx
```

---

## Page Sections (in order)

---

### Section 1 — Hero

**Background:** `bg-gradient-to-br from-primary to-primary-dark`

**Copy (FINAL):**
```
Heading:
Built by someone who has sat on
both sides of the classroom.
```

No subheadline. No CTA. Let the story below do the work.

---

### Section 2 — Founder Story

**Layout:** Single-column, max-w-3xl, centred. White background. Large readable type (`text-lg leading-relaxed`).

**Copy — partial FINAL, partial founder-placeholder:**

```
Paragraph 1 (FOUNDER TO COMPLETE):
[Founder name] spent [X] years running an international school in
[location]. Every term, the same problem: some students were falling
behind, and by the time it was visible in their grades, the gap had
already compounded.

Paragraph 2 (FINAL):
The tools that existed were either too generic, too expensive, or
designed for a different kind of school entirely. So we built Kaihle.

Paragraph 3 (FINAL):
We started in worldwide because that is where our relationships are, where
Cambridge curriculum is already the standard, and where micro schools
are proving that small, intentional learning environments can outperform
traditional schools. We believe they deserve the same diagnostic and
content tools as schools ten times their size.
```

**Implementation:** Render `[FOUNDER TO COMPLETE]` sections as styled placeholder blocks:
```tsx
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800 text-sm">
  ✏️ Founder to complete: [description of what goes here]
</div>
```

---

### Section 3 — Mission Statement

**Layout:** Full-width, centred, on dark background.

**Background:** `bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900`

**Copy (FINAL):**
```
Label (small caps, letter-spacing wide, text-blue-300):
OUR MISSION

Heading:
Kaihle exists to make personalised learning
accessible to every school.

Body:
Not just the ones with the resources to hire a tutor for every student.
```

---

### Section 4 — Team Section

**Layout:** Card grid. 1 column if solo founder, 2–4 columns as team grows.

**Heading:**
```
The team.
```

**[FOUNDER TO COMPLETE — Team section]**

Render as a placeholder:
```tsx
<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-yellow-800">
  <p className="font-semibold mb-2">✏️ Founder to complete: Team bios</p>
  <p className="text-sm">
    Add your name, role, brief bio (2–3 sentences), and a photo.
    Real photos are strongly preferred over stock images.
    If team is currently just the founder, a single card is fine.
  </p>
</div>
```

---

### Section 5 — Location & Context

**Layout:** 2-column on desktop (text left, map/image placeholder right). Light gray background.

**Copy (FINAL):**
```
Heading:
[Founder to complete — headquarters location]
Building for worldwide first.

Body:
worldwide has one of the fastest-growing international school
ecosystems in the world. This region has dozens of micro schools and
alternative learning environments — innovative, founder-led, and
Cambridge-aligned.

These schools are our first customers. Not because they were convenient,
but because we know them, they trust us, and they are exactly the kind
of school that Kaihle was designed for.

After worldwide: Singapore, Malaysia, Thailand, and the broader
international school market globally.
```

**Image/map placeholder:**
```tsx
<div className="bg-blue-100 rounded-2xl aspect-video flex items-center justify-center">
  <p className="text-blue-400 text-sm">[Map or team photo — founder to add]</p>
</div>
```

---

### Section 6 — CTABanner

**Copy (FINAL):**
```
Headline: Want to work with us or invest?

Subheadline: We're always open to conversations with schools,
educators, and mission-aligned investors.

Primary CTA: Get in Touch → /demo
```

---

## Metadata

```tsx
export const metadata: Metadata = {
  title: 'About Us — Kaihle',
  description:
    'Kaihle was built by an international school founder. Our mission: make personalised diagnostic learning accessible to every school, not just the well-resourced ones.',
  openGraph: {
    title: 'About Kaihle — Built for Schools Worldwide',
    description:
      'The story behind Kaihle — who built it, why, and what we believe about education.',
    url: 'https://www.kaihle.com/about',
  },
}
```

---

## Design Reference

Open `/design-reference/about.html` to see the exact visual target. Match layout, spacing, colours, and type scale to the reference. All Forest Green & Gold design tokens (fonts, colours, radii, shadows) are defined in MW-1-T2 and the `tailwind.config.ts`.

---


## Acceptance Criteria

- [ ] All 6 sections render in correct order
- [ ] Hero headline matches spec exactly
- [ ] Paragraph 2 and 3 of Founder Story match spec exactly (these are FINAL)
- [ ] Paragraph 1 renders as a styled yellow placeholder block — not blank, not fake
- [ ] Team section renders as a styled yellow placeholder block
- [ ] Mission statement label, heading, and body match spec exactly
- [ ] Location copy matches spec exactly
- [ ] Map/image area renders as a visible placeholder — not a broken image
- [ ] CTABanner copy matches spec
- [ ] All yellow placeholder blocks include a clear `✏️ Founder to complete:` label
- [ ] No invented names, fake quotes, or stock people photos
- [ ] Fully responsive: 375px, 768px, 1280px
- [ ] No TypeScript errors


---

## Design Reference

> **Source of truth for this page.** MiniMax must match the layout, colors, typography, spacing, and copy in the reference file exactly.

- **HTML reference:** `docs/design-reference/about.html`
- **Color tokens:** `docs/design-reference/styles.css`
- **Font stack:** Fraunces (display/headings) + Nunito (body/UI) — loaded via Google Fonts in `lib/fonts.ts`
- **Color palette:** Forest Green & Gold — primary `#1a5c38`, accent `#c9932a`, ink `#1a2016`, bg `#f5f7f1`

### Rules
1. Convert all inline CSS in the HTML reference to Tailwind utility classes
2. All copy marked FINAL or attributed to Nancy must be used verbatim — no rephrasing
3. All [FOUNDER TO COMPLETE] placeholders must be rendered as visible TODO comments in the code
4. Button shape is always `rounded-full` (pill) — never `rounded-lg`
5. Do not add, remove, or reorder page sections without explicit instruction
