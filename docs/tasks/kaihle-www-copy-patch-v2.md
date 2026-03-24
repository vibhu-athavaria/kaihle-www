# Kaihle Website — Copy Patch v2
## KiloCode Implementation Prompt (Delta Only)

**Branch:** `feat/copy-patch-v2` (branch off `feat/copy-update-v2` which was already merged)
**Repo:** `kaihle-www`
**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS v3

---

## CONTEXT

The previous prompt (`copy-update-v2`) has already been executed. This prompt covers only what was missed or needs correcting from that run. Do not re-apply anything from the previous prompt.

**Files already done — DO NOT touch again:**
- `app/about/page.tsx` ✅
- `app/pricing/page.tsx` ✅
- `app/why-kaihle/page.tsx` ✅

**This prompt covers 6 targeted tasks only:**
1. `app/page.tsx` — Hero line typography styling (new) + revert founder section
2. `components/layout/Navbar.tsx` — CTA label update
3. `components/layout/Footer.tsx` — CTA label update
4. `app/for-schools/page.tsx` — CTA updates + geo copy fix
5. `app/how-it-works/page.tsx` — CTA update only

**Do NOT touch:**
- Any CSS, Tailwind classes, or design tokens
- `app/about/page.tsx`
- `app/pricing/page.tsx`
- `app/why-kaihle/page.tsx`
- `app/demo/page.tsx`
- `app/privacy/page.tsx`
- Any component in `components/ui/`
- `tailwind.config.ts`, `next.config.mjs`, or any config files

---

## TASK 1a — `app/page.tsx` — HERO SUPPORTING LINE TYPOGRAPHY

This task styles the line already added to the hero by the previous prompt:
> *"The best educator you can hire can't personalise for 25 students. Kaihle can."*

Locate this element in `app/page.tsx`. It was added as a `<p>` or `<span>` directly above the subheadline. Replace it with the following JSX — same copy, new styling:

```tsx
<p className="text-2xl md:text-3xl font-fraunces font-medium leading-snug tracking-tight text-ink/80 mb-4">
  The best educator you can hire can&apos;t personalise for 25 students.{" "}
  <span className="text-[var(--color-accent)]">Kaihle can.</span>
</p>
```

**Design rationale (do not deviate):**

- `text-2xl md:text-3xl` — larger than the Nunito body paragraph below it, smaller than the H1 above it. Creates a clear three-tier hierarchy: H1 → this line → subheadline.
- `font-fraunces` — uses the heading font, not the body font. Connects visually to the H1, gives it weight and character without competing.
- `font-medium` — lighter than the H1's bold weight, so hierarchy reads top-down correctly.
- `text-ink/80` — the first sentence is 80% opacity of the main ink colour. Slightly softer than the H1, intentional — it's the setup, not the headline.
- `text-[var(--color-accent)]` on `"Kaihle can."` — uses the existing brand accent colour token from the design system. This is the payoff of the sentence and should feel like the brand speaking. If `--color-accent` is not the correct CSS variable name in this codebase, use whatever the primary brand accent colour token is defined as in `tailwind.config.ts` (check the file — it will be under `theme.extend.colors`).
- `leading-snug` + `tracking-tight` — tight but not cramped. Matches the editorial feel of the H1.
- `mb-4` — breathing room between this line and the subheadline below.

**Do NOT:**
- Change the H1 or subheadline
- Use a hardcoded hex color — always use the existing design token
- Add any additional wrappers or divs around this element

---

## TASK 1b — `app/page.tsx` — REVERT FOUNDER SECTION (Task 2b correction)

The previous prompt incorrectly added Vibhu's name and an expanded bio to the homepage founder section. This needs to be reverted to the original anonymous copy.

Locate the founder credibility section on the homepage. It currently reads something like:

> *"Kaihle was founded by Vibhu Athavaria — a Silicon Valley technologist who left the industry to open LightHouse Academy..."*

**Replace the entire body of this section** with the following original copy:

```
After years leading an international school, our founder couldn't get a straight
answer to one question: what does each student actually understand right now —
not what they submitted, not what they scored, but what they genuinely know?
Kaihle exists to answer that question, for every teacher, every class, every day.
```

**Replace the CTA link** in this section with:

```
Book a conversation →
```
linking to `mailto:hello@kaihle.com`

The section heading — `"Built by someone who ran a school and lived this problem"` — stays exactly as-is. Do not change it.

---

## TASK 2 — `components/layout/Navbar.tsx` (or equivalent navbar file)

Locate the primary CTA button/link in the navbar. It currently reads `Request a Demo` and links to `/demo`.

**Change the label only:**
- From: `Request a Demo`
- To: `Apply for Pilot`

href stays: `/demo`
Do not change any styles, classes, or layout.

---

## TASK 3 — `components/layout/Footer.tsx` (or equivalent footer file)

Locate the `Request a Demo` link in the footer. It is in the Company links column and links to `/demo`.

**Change the label only:**
- From: `Request a Demo`
- To: `Apply for Pilot`

href stays: `/demo`
Do not change any other footer links, styles, or layout.

---

## TASK 4 — `app/for-schools/page.tsx` — CTA UPDATES + GEO FIX

Make the following changes only. Do not change any other copy, structure, or styles on this page.

### 4a — Hero section button
- From: `Request a Demo`
- To: `Apply for Pilot`

### 4b — Founding cohort section

**Update the section heading:**
- From: `Apply for the Founding Cohort`
- To: `Apply for the Pilot Programme`

**Update the intro paragraph.** Find:
> `"We are currently accepting applications from micro schools and small international schools in Southeast Asia for our founding pilot programme."`

Replace with:
> `"We are currently accepting applications from micro schools and small international schools worldwide for our founding pilot programme."`

**Update the CTA button in this section:**
- From: `Apply for the Pilot`
- To: `Apply for Pilot`

### 4c — Bottom CTA section
- From: `Request a Demo →`
- To: `Apply for Pilot →`

---

## TASK 5 — `app/how-it-works/page.tsx` — ONE CTA CHANGE ONLY

This page has one CTA at the bottom. Make one change only. Do not touch anything else on this page.

**Bottom CTA section button:**
- From: `Request a Demo →`
- To: `Apply for Pilot →`

href stays: `/demo`

---

## VERIFICATION CHECKLIST

Before committing, verify:

**Task 1a — Hero line typography**
- [ ] Line uses `font-fraunces` heading font
- [ ] Size is `text-2xl md:text-3xl` (between H1 and body paragraph)
- [ ] First sentence is `text-ink/80` (slightly muted)
- [ ] `"Kaihle can."` renders in the brand accent colour token
- [ ] No hardcoded hex values used — design token only

**Task 1b — Homepage founder section revert**
- [ ] Founder section body copy is the original anonymous version (no "Vibhu Athavaria" name on homepage)
- [ ] CTA link in founder section reads `Book a conversation →` → `mailto:hello@kaihle.com`
- [ ] Section heading `"Built by someone who ran a school and lived this problem"` is unchanged

**Task 2 — Navbar**
- [ ] Navbar CTA reads `Apply for Pilot`
- [ ] Navbar CTA still links to `/demo`

**Task 3 — Footer**
- [ ] Footer company column link reads `Apply for Pilot`
- [ ] Footer company column link still links to `/demo`

**Task 4 — For Schools**
- [ ] Hero button reads `Apply for Pilot`
- [ ] Founding cohort heading reads `Apply for the Pilot Programme`
- [ ] Founding cohort intro no longer says "Southeast Asia" — says "worldwide"
- [ ] Founding cohort button reads `Apply for Pilot`
- [ ] Bottom CTA reads `Apply for Pilot →`

**Task 5 — How It Works**
- [ ] Bottom CTA reads `Apply for Pilot →`

**Global final check**
- [ ] Search codebase for `Request a Demo` — zero results in any `.tsx` file
- [ ] Search codebase for `Start Free Trial` — zero results
- [ ] Search codebase for `Talk to Sales` — zero results
- [ ] Search codebase for `Apply for Founding Cohort` — zero results
- [ ] Search codebase for `Vibhu Athavaria` — only appears in `app/about/page.tsx`, nowhere else
- [ ] `npm run build` passes with no TypeScript errors
- [ ] `npm run lint` passes clean

---

## COMMIT MESSAGE

```
fix(copy): copy patch v2 — hero line styling, revert homepage founder section, global CTA completion

- Homepage: style hero supporting line (Fraunces, text-2xl/3xl, accent colour on 'Kaihle can.')
- Homepage: revert founder section to original anonymous copy (remove name from homepage)
- Navbar: 'Request a Demo' → 'Apply for Pilot'
- Footer: 'Request a Demo' → 'Apply for Pilot'
- For Schools: all CTAs unified, 'Southeast Asia' → 'worldwide', heading updated
- How It Works: bottom CTA unified to 'Apply for Pilot'
```
