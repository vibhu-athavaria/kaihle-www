# MW-3-T1 — Request a Demo Page + Lead Capture (`/demo`)
**Milestone:** MW — Marketing Website
**Epic:** MW-3: Lead Capture
**Status:** TODO
**Depends on:** MW-1-T1, MW-1-T2
**Estimated effort:** 1 day

---

## Context

This is the only page on the site that writes data. When a school founder fills in this form, the lead must arrive in the founder's inbox within 60 seconds. No exceptions. This is the entire point of the marketing site — every other page leads here.

The form is simple. No CAPTCHA (friction kills conversion). Spam protection via honeypot field only. The API route sends an email via Resend — the same API key already provisioned for the platform.

---

## Files to Create

```
app/demo/page.tsx
app/api/demo-request/route.ts
```

---

## Environment Variables Required

Add to `.env.local` and Vercel:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxx          # already exists in platform — reuse
DEMO_REQUEST_TO_EMAIL=hello@kaihle.com  # founder inbox
```

---

## Page Spec: `app/demo/page.tsx`

---

### Section 1 — Hero (split layout)

**Layout:** 2-column on desktop. Left: form. Right: value prop. Stacked on mobile (form first).

**Left column — Form**

**Copy above form (FINAL):**
```
Heading:
Let's find out if Kaihle is right for your school.

Subheadline:
We don't do automated demo videos. A real person from our team will
reach out within 24 hours to understand your school and set up a
live walkthrough.
```

**Form fields (in order):**

| Field | Type | Required | Placeholder |
|---|---|---|---|
| First name | text input | Yes | "First name" |
| Last name | text input | Yes | "Last name" |
| School name | text input | Yes | "Name of your school" |
| Your role | select dropdown | Yes | "Select your role" |
| Email address | email input | Yes | "your@school.com" |
| Country | text input | Yes | "Country" |
| What's your biggest challenge? | textarea (4 rows) | No | "Tell us about your biggest challenge with student assessment (optional)" |
| honeypot | hidden text input | — | id="website" name="website" tabIndex={-1} aria-hidden={true} |

**Role dropdown options:**
- Principal / Head of School
- School Administrator
- Teacher
- Curriculum Coordinator
- IT / Operations
- Other

**Submit button:**
```
Label: "Let's Talk"
Style: Button variant=primary, size=lg, full-width
Loading state: "Sending..." + spinner, disabled
```

**Post-submit success state (replaces form):**
```
Icon: CheckCircle2, text-green-500, w-16 h-16
Heading: "You're all set."
Body:
"Thank you. We'll be in touch within 24 hours.

In the meantime, feel free to explore how the platform works or
review our pricing."

Links:
→ How It Works  (/how-it-works)
→ Pricing  (/pricing)
```

**Error state (shown below submit button):**
```
"Something went wrong. Please try emailing us directly at hello@kaihle.com"
```

**Right column — Value prop (desktop only)**

```
Heading: What to expect

Items (icon + text, 4 items):

1. Icon: Clock — "30 minutes, no more"
   "A focused walkthrough — diagnostic flow, teacher dashboard,
   and student experience."

2. Icon: GraduationCap — "Cambridge content, your curriculum"
   "We demo with actual Cambridge content. You'll see exactly what
   your students would see."

3. Icon: Users — "Bring your team"
   "School admins, lead teachers — the more context you bring,
   the more useful the session."

4. Icon: CheckCircle — "No commitment"
   "We're not trying to close a deal on the call. We're trying
   to find out if we're a fit."
```

---

## API Route Spec: `app/api/demo-request/route.ts`

```ts
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

type DemoRequestBody = {
  firstName: string
  lastName: string
  schoolName: string
  role: string
  email: string
  country: string
  challenge?: string
  website?: string   // honeypot
}

export async function POST(request: NextRequest) {
  const body: DemoRequestBody = await request.json()

  // 1. Honeypot check — bots fill this, humans don't
  if (body.website) {
    return NextResponse.json({ success: true })  // silent reject
  }

  // 2. Basic validation
  const required = ['firstName', 'lastName', 'schoolName', 'role', 'email', 'country']
  for (const field of required) {
    if (!body[field as keyof DemoRequestBody]?.toString().trim()) {
      return NextResponse.json({ error: `${field} is required` }, { status: 400 })
    }
  }

  // 3. Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // 4. Send notification email to founder
  await resend.emails.send({
    from: 'Kaihle Website <noreply@kaihle.com>',
    to: process.env.DEMO_REQUEST_TO_EMAIL!,
    subject: `Demo Request — ${body.schoolName} (${body.country})`,
    html: `
      <h2>New Demo Request</h2>
      <table>
        <tr><td><strong>Name:</strong></td><td>${body.firstName} ${body.lastName}</td></tr>
        <tr><td><strong>School:</strong></td><td>${body.schoolName}</td></tr>
        <tr><td><strong>Role:</strong></td><td>${body.role}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${body.email}</td></tr>
        <tr><td><strong>Country:</strong></td><td>${body.country}</td></tr>
        ${body.challenge ? `<tr><td><strong>Challenge:</strong></td><td>${body.challenge}</td></tr>` : ''}
      </table>
      <p style="margin-top:16px">
        <a href="mailto:${body.email}">Reply to ${body.firstName}</a>
      </p>
    `,
  })

  // 5. Send confirmation email to the requester
  await resend.emails.send({
    from: 'Kaihle <hello@kaihle.com>',
    to: body.email,
    subject: "We've received your demo request — Kaihle",
    html: `
      <p>Hi ${body.firstName},</p>
      <p>Thank you for reaching out about Kaihle. Someone from our team will be in touch
      within 24 hours to arrange a time that works for you.</p>
      <p>In the meantime, feel free to explore
      <a href="https://www.kaihle.com/how-it-works">how the platform works</a>
      or review our <a href="https://www.kaihle.com/pricing">pricing</a>.</p>
      <p>— The Kaihle Team</p>
    `,
  })

  return NextResponse.json({ success: true })
}
```

---

## Privacy Policy Page (lightweight — same task)

**File:** `app/privacy/page.tsx`

This is a minimal legal page. Content is a standard privacy policy placeholder. It must exist so the footer link doesn't 404.

```
Heading: Privacy Policy
Subheading: Last updated: March 2026

Sections:
1. What data we collect
   - Contact form submissions (name, email, school, role, country)
   - Page analytics (via Plausible — anonymised, no cookies)

2. How we use it
   - Demo requests: to respond to your enquiry only
   - Analytics: to understand which pages are useful

3. Who we share it with
   - Resend (email delivery) — no data sold to third parties

4. Your rights
   - Email hello@kaihle.com to request deletion

5. Contact
   - hello@kaihle.com
```

**Note:** This is not legal advice. The founder should have this reviewed before launch.

---

## Metadata

```tsx
// /demo
export const metadata: Metadata = {
  title: 'Request a Demo — Kaihle',
  description:
    'Book a 30-minute live walkthrough of Kaihle\'s diagnostic learning platform. A real person will show you the platform using Cambridge content.',
  openGraph: {
    title: 'Request a Demo — Kaihle',
    url: 'https://www.kaihle.com/demo',
  },
}
```

---

## Design Reference

Open `/design-reference/demo.html` to see the exact visual target. Match layout, spacing, colours, and type scale to the reference. All Forest Green & Gold design tokens (fonts, colours, radii, shadows) are defined in MW-1-T2 and the `tailwind.config.ts`.

---


## Acceptance Criteria

- [ ] Form renders all fields in correct order with correct types and placeholders
- [ ] Role dropdown contains all 6 options listed
- [ ] Honeypot field is hidden (not visible, not in tab order)
- [ ] Submit button shows loading state while API request is in flight
- [ ] Submit button is disabled during loading state
- [ ] On success: form is replaced by success state with heading, body, and two links
- [ ] On API error: error message renders below submit button with email fallback
- [ ] `POST /api/demo-request` sends notification email to `DEMO_REQUEST_TO_EMAIL`
- [ ] `POST /api/demo-request` sends confirmation email to the submitter
- [ ] Honeypot-filled submission returns 200 silently (no email sent)
- [ ] Missing required field returns 400 with field name
- [ ] Invalid email returns 400
- [ ] Value prop right column renders on desktop (≥768px), hidden on mobile
- [ ] All 4 value prop items render with correct icons and copy
- [ ] Privacy Policy page renders at `/privacy` without errors
- [ ] Privacy Policy footer link resolves to `/privacy` without 404
- [ ] E2E: Fill form with valid data → submit → notification email arrives in inbox within 60 seconds
- [ ] No TypeScript errors


---

## Design Reference

> **Source of truth for this page.** MiniMax must match the layout, colors, typography, spacing, and copy in the reference file exactly.

- **HTML reference:** `docs/design-reference/demo.html`
- **Color tokens:** `docs/design-reference/styles.css`
- **Font stack:** Fraunces (display/headings) + Nunito (body/UI) — loaded via Google Fonts in `lib/fonts.ts`
- **Color palette:** Forest Green & Gold — primary `#1a5c38`, accent `#c9932a`, ink `#1a2016`, bg `#f5f7f1`

### Rules
1. Convert all inline CSS in the HTML reference to Tailwind utility classes
2. All copy marked FINAL or attributed to Nancy must be used verbatim — no rephrasing
3. All [FOUNDER TO COMPLETE] placeholders must be rendered as visible TODO comments in the code
4. Button shape is always `rounded-full` (pill) — never `rounded-lg`
5. Do not add, remove, or reorder page sections without explicit instruction
