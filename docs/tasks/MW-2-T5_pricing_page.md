# MW-2-T5 — Pricing Page (`/pricing`)
**Milestone:** MW — Marketing Website
**Epic:** MW-2: Core Pages
**Status:** TODO
**Depends on:** MW-1-T1, MW-1-T2
**Estimated effort:** 1 day

---

## Context

The pricing page is informational — no payment flow, no Stripe integration. It shows school founders what the commitment looks like before they request a demo. Kaihle uses two pricing tiers only: Free Trial and Pay As You Go. See tiers below — these supersede the v1 schema tiers.

---

## File to Create

```
app/pricing/page.tsx
```

---

## Pricing Tiers

**Two tiers only:**

| Plan | Price | Details |
|---|---|---|
| Free Trial | $0 | 30 days, no credit card, full feature access |
| Pay As You Go | $20/user/month | Per active student or teacher, no lock-in |

**Founding Partner Offer:** Schools joining before 1 July 2026 get 60-day free trial + locked rate of $15/user/month for first full year.

**No annual contracts. No student limits by plan. No feature gating.**



## Page Sections (in order)

---

### Section 1 — Hero

**Background:** White

**Copy (FINAL):**
```
Heading:
Start free. Pay only for what you use.

Subheadline:
Every plan includes full access to the platform for all roles —
Super Admin, School Admin, Teachers, and Students. You pay for the
school, not the headcount beyond your tier.
```

---

### Section 2 — Pricing Cards

**Layout:** 4-column grid on desktop, 2×2 on tablet, stacked on mobile. White background.

**Card design:**
- White card, rounded-2xl, border border-gray-200, shadow-sm
- GROWTH tier: highlighted with blue-600 border-2 and "Most Popular" badge
- Card structure: tier name badge → price → student limit → feature list → CTA button

---

**TRIAL Card (copy FINAL):**
```
Badge: TRIAL (Badge color=gray)
Price: Free
Student limit: Up to 30 students
Duration note: 15-day access

Features:
✓ Full platform access — all roles
✓ All assessment and diagnostic features
✓ AI-generated study plans
✓ Email support

CTA: Start Free Trial → /demo
Note below CTA: "No credit card required"
```

---

**STARTER Card (copy FINAL):**
```
Badge: STARTER (Badge color=blue)
Price: $75
Price sub-label: per student / year
Student limit: Up to 100 students

Features:
✓ Everything in Trial
✓ Unlimited assessments
✓ AI study plan generation
✓ Parent weekly reports
✓ Standard support

CTA: Request a Demo → /demo
```

---

**GROWTH Card — HIGHLIGHTED (copy FINAL):**
```
Badge: GROWTH (Badge color=blue, white text on blue bg)
Label above card: "Most Popular"
Price: $100
Price sub-label: per student / year
Student limit: Up to 500 students

Features:
✓ Everything in Starter
✓ AI-generated explainer content
✓ Advanced teacher dashboard
✓ Class-level analytics
✓ Priority support

CTA: Request a Demo → /demo
```

---

**SCALE Card (copy FINAL):**
```
Badge: SCALE (Badge color=purple)
Price: $125
Price sub-label: per student / year
Student limit: Unlimited students

Features:
✓ Everything in Growth
✓ Custom curriculum configuration
✓ Dedicated onboarding support
✓ Multi-campus management
✓ SLA-backed support

CTA: Contact Us → /demo
```

---

### Section 3 — Pilot Programme Note

**Layout:** Highlighted callout box (blue-50 bg, blue-600 left border). Centred.

**Copy (FINAL):**
```
Heading: Starting a pilot?

Body:
Most of our founding schools start on TRIAL and move to STARTER within
the first month. If you're evaluating Kaihle for a pilot programme,
start with the free trial — no credit card, no commitment.

Our team will be with you throughout.

CTA: Talk to Us First → /demo (text link)
```

---

### Section 4 — FAQ (3 questions)

**Layout:** Accordion or simple Q&A list. White background.

**Heading:**
```
Common questions about pricing.
```

**Q&A (copy FINAL):**

Q1:
```
Q: Is the per-student price per year or per month?
A: Annual pricing, billed once per school year. The student count is
   set at the start of the billing period. For pilots, the free TRIAL
   tier has no billing at all.
```

Q2:
```
Q: What happens if we go over our student limit?
A: We'll notify your School Admin when you're approaching the limit.
   You can upgrade to the next tier at any time — the price difference
   is prorated for the remaining period.
```

Q3:
```
Q: Can we switch plans mid-year?
A: Yes. Upgrading is immediate. Downgrades take effect at the next
   billing cycle.
```

---

### Section 5 — CTABanner

**Copy (FINAL):**
```
Headline: Not sure which plan fits?

Subheadline: Most schools start with TRIAL and scale from there.
Let's talk about your school's size and curriculum first.

Primary CTA: Talk to Us → /demo
```

---

## Metadata

```tsx
export const metadata: Metadata = {
  title: 'Pricing — Kaihle',
  description:
    'Simple per-school pricing for Kaihle\'s AI diagnostic platform. Free trial for up to 30 students. STARTER from $75/student/year. No per-student surprises.',
  openGraph: {
    title: 'Kaihle Pricing — School-Based Plans',
    description:
      'Free trial, then STARTER ($75), GROWTH ($100), or SCALE ($125) per student per year. Full platform access on every plan.',
    url: 'https://www.kaihle.com/pricing',
  },
}
```

---

## Design Reference

Open `/design-reference/pricing.html` to see the exact visual target. Match layout, spacing, colours, and type scale to the reference. All Forest Green & Gold design tokens (fonts, colours, radii, shadows) are defined in MW-1-T2 and the `tailwind.config.ts`.

---


## Acceptance Criteria

- [ ] All 5 sections render in correct order
- [ ] All 4 pricing tier names match schema exactly: TRIAL, STARTER, GROWTH, SCALE
- [ ] All prices match schema exactly: $0, $75, $100, $125 per student/year
- [ ] All student limits match schema exactly: 30, 100, 500, Unlimited
- [ ] TRIAL shows "15-day access" note
- [ ] TRIAL shows "No credit card required" below CTA
- [ ] GROWTH card is visually highlighted with blue border and "Most Popular" label
- [ ] All feature list items match spec per card
- [ ] Pilot programme callout renders correctly with left blue border
- [ ] All 3 FAQ items render with correct Q&A copy
- [ ] CTABanner copy matches spec
- [ ] Pricing cards are horizontally scrollable or stack correctly at 375px
- [ ] All CTAs point to `/demo`
- [ ] No TypeScript errors


---

## Design Reference

> **Source of truth for this page.** MiniMax must match the layout, colors, typography, spacing, and copy in the reference file exactly.

- **HTML reference:** `docs/design-reference/pricing.html`
- **Color tokens:** `docs/design-reference/styles.css`
- **Font stack:** Fraunces (display/headings) + Nunito (body/UI) — loaded via Google Fonts in `lib/fonts.ts`
- **Color palette:** Forest Green & Gold — primary `#1a5c38`, accent `#c9932a`, ink `#1a2016`, bg `#f5f7f1`

### Rules
1. Convert all inline CSS in the HTML reference to Tailwind utility classes
2. All copy marked FINAL or attributed to Nancy must be used verbatim — no rephrasing
3. All [FOUNDER TO COMPLETE] placeholders must be rendered as visible TODO comments in the code
4. Button shape is always `rounded-full` (pill) — never `rounded-lg`
5. Do not add, remove, or reorder page sections without explicit instruction
