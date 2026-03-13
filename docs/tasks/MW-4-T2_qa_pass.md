# MW-4-T2 — QA Pass
**Milestone:** MW — Marketing Website
**Epic:** MW-4: Deploy & QA
**Status:** TODO
**Depends on:** MW-4-T1 (site must be live at www.kaihle.com)
**Estimated effort:** 0.5 days

---

## Context

This is the final gate before the milestone is marked COMPLETE. Every page, every link, every form interaction, every breakpoint. This task is a manual QA pass — not automated tests. Do not mark MW COMPLETE until every item below is checked.

The founder must personally review the site before the first school meeting.

---

## QA Checklist

---

### 1. Copy Accuracy

For each page, verify the copy on the live site matches the task file spec **word for word** on all P0 copy (headlines, subheadlines, CTAs, form labels). P1 body copy: verify it is not placeholder/lorem ipsum and that it matches spec in substance.

| Page | Headline verified | Subheadline verified | CTA labels verified | No lorem ipsum |
|---|---|---|---|---|
| `/` | [ ] | [ ] | [ ] | [ ] |
| `/for-schools` | [ ] | [ ] | [ ] | [ ] |
| `/how-it-works` | [ ] | [ ] | [ ] | [ ] |
| `/why-kaihle` | [ ] | [ ] | [ ] | [ ] |
| `/pricing` | [ ] | [ ] | [ ] | [ ] |
| `/about` | [ ] | [ ] | [ ] | [ ] |
| `/demo` | [ ] | [ ] | [ ] | [ ] |
| `/privacy` | [ ] | [ ] | [ ] | [ ] |

---

### 2. Pricing Accuracy

Critical — must match schema:

| Check | Expected | Verified |
|---|---|---|
| TRIAL price | $0 | [ ] |
| TRIAL student limit | 30 students | [ ] |
| TRIAL duration | 15 days | [ ] |
| STARTER price | $75/student/year | [ ] |
| STARTER student limit | Up to 100 | [ ] |
| GROWTH price | $100/student/year | [ ] |
| GROWTH student limit | Up to 500 | [ ] |
| SCALE price | $125/student/year | [ ] |
| SCALE student limit | Unlimited | [ ] |

---

### 3. Responsive Layout

Test each page at these exact viewport widths in Chrome DevTools:

| Page | 375px (mobile) | 768px (tablet) | 1280px (desktop) |
|---|---|---|---|
| `/` | [ ] | [ ] | [ ] |
| `/for-schools` | [ ] | [ ] | [ ] |
| `/how-it-works` | [ ] | [ ] | [ ] |
| `/why-kaihle` | [ ] | [ ] | [ ] |
| `/pricing` | [ ] | [ ] | [ ] |
| `/about` | [ ] | [ ] | [ ] |
| `/demo` | [ ] | [ ] | [ ] |

**Common issues to check at 375px:**
- [ ] Navbar hamburger menu opens and closes
- [ ] No horizontal overflow / scrollbar on any page
- [ ] Pricing cards stack correctly (no cut-off)
- [ ] Comparison table on `/why-kaihle` is horizontally scrollable
- [ ] Demo form fields are full-width and usable with mobile keyboard

---

### 4. Navigation

- [ ] Every Navbar link navigates to the correct page
- [ ] Every Footer link navigates to the correct page
- [ ] No 404s on any internal link across the entire site
- [ ] "Request a Demo" CTA appears on every page and links to `/demo`
- [ ] Logo in Navbar links to `/`
- [ ] Active page is visually indicated in Navbar on every route

**Full link inventory — verify each:**

| Link text | Expected destination | Status |
|---|---|---|
| Home (Navbar) | `/` | [ ] |
| For Schools (Navbar) | `/for-schools` | [ ] |
| How It Works (Navbar) | `/how-it-works` | [ ] |
| Why Kaihle (Navbar) | `/why-kaihle` | [ ] |
| Pricing (Navbar) | `/pricing` | [ ] |
| About (Navbar) | `/about` | [ ] |
| Request a Demo (Navbar CTA) | `/demo` | [ ] |
| All Footer quick links | correct routes | [ ] |
| Privacy Policy (Footer) | `/privacy` | [ ] |
| "See How It Works" (Home hero) | `/how-it-works` | [ ] |
| "For Schools" (Home CTA banner) | `/for-schools` | [ ] |
| "Apply for the Pilot" (For Schools) | `/demo` | [ ] |
| "See the full walkthrough" (For Schools) | `/how-it-works` | [ ] |
| "View Pricing" (How It Works CTA) | `/pricing` | [ ] |
| "How It Works" (Why Kaihle CTA) | `/how-it-works` | [ ] |
| "Talk to Us" (Pricing) | `/demo` | [ ] |
| "Start Free Trial" (TRIAL card) | `/demo` | [ ] |
| Success page links on `/demo` | `/how-it-works`, `/pricing` | [ ] |

---

### 5. Demo Form — End-to-End

- [ ] Fill in all required fields with valid test data
- [ ] Submit the form
- [ ] Loading state shows ("Sending..." + spinner)
- [ ] Success state replaces the form after submission
- [ ] Notification email arrives in `DEMO_REQUEST_TO_EMAIL` inbox within 60 seconds
- [ ] Notification email contains: name, school, role, email, country
- [ ] Notification email has a "Reply to [firstName]" link
- [ ] Confirmation email arrives in the test email inbox within 60 seconds
- [ ] Confirmation email mentions 24-hour response time
- [ ] Submit with missing required field → validation error visible, no email sent
- [ ] Submit with invalid email → validation error visible, no email sent
- [ ] Fill honeypot field → 200 response, no email sent

---

### 6. Lighthouse Scores

Run Lighthouse in Chrome DevTools (Incognito mode, Desktop preset) on:

| Page | Performance | SEO | Accessibility |
|---|---|---|---|
| `/` | ≥ 90 | ≥ 90 | ≥ 85 |
| `/for-schools` | ≥ 90 | ≥ 90 | ≥ 85 |
| `/demo` | ≥ 85 | ≥ 90 | ≥ 85 |

---

### 7. Social Sharing Preview

Test OG image previews using https://www.opengraph.xyz:

| URL | Shows correct OG image | Shows correct title | Shows correct description |
|---|---|---|---|
| `https://www.kaihle.com` | [ ] | [ ] | [ ] |
| `https://www.kaihle.com/for-schools` | [ ] | [ ] | [ ] |
| `https://www.kaihle.com/demo` | [ ] | [ ] | [ ] |

---

### 8. About Page Placeholders

Verify `[FOUNDER TO COMPLETE]` sections are visible and clearly marked — they should NOT be blank or hidden:

- [ ] Founder Story paragraph 1 shows yellow placeholder block with instructions
- [ ] Team section shows yellow placeholder block with instructions
- [ ] Location image shows blue placeholder block

---

### 9. Analytics

- [ ] Visit `https://www.kaihle.com` in a real browser
- [ ] Check Plausible dashboard — pageview recorded within 30 seconds
- [ ] Visit 3 different pages — all 3 appear in Plausible

---

### 10. Final Sign-Off

- [ ] Founder has reviewed the live site personally
- [ ] Founder approves copy on `/for-schools` and `/pricing` (these are seen by school customers)
- [ ] Founder has been given instructions to complete `[FOUNDER TO COMPLETE]` sections before first demo
- [ ] `DEMO_REQUEST_TO_EMAIL` confirmed as the correct inbox the founder monitors

---

## Milestone Complete Checklist

MW is COMPLETE when all of the following are true:

- [ ] All 12 task files in MW are marked **Status: COMPLETE**
- [ ] All items in this QA checklist are checked
- [ ] Demo form is live and delivering leads to founder inbox
- [ ] Lighthouse scores meet minimums on Home and For Schools pages
- [ ] Founder has personally approved the site
- [ ] Site is live and accessible at `https://www.kaihle.com`
