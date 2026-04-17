# Kaihle Website — Copy & Content Update
## KiloCode Implementation Prompt

**Branch:** `feat/copy-update-v2`
**Repo:** `kaihle-www`
**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS v3 · Fraunces (headings) · Nunito (body)

---

## OVERVIEW

This prompt covers copy and content updates across 5 pages:
1. `app/about/page.tsx` — Full rewrite
2. `app/page.tsx` (Homepage) — Surgical copy updates
3. `app/pricing/page.tsx` — New ROI section + founding cohort rewrite
4. `app/why-kaihle/page.tsx` — Full page rebuild
5. `components/layout/Navbar.tsx` (or equivalent) — CTA label unification

**Do NOT touch:**
- Any CSS, Tailwind classes, or design tokens
- `app/how-it-works/page.tsx`
- `app/for-schools/page.tsx`
- `app/demo/page.tsx`
- Any component in `components/ui/`
- `tailwind.config.ts`, `next.config.mjs`, or any config files
- Fonts, layout, spacing, or visual design of any page

**Rule:** All changes are copy/content only unless a new section requires a new JSX block — in which case match the existing pattern of the page exactly (same component wrappers, same Tailwind class conventions already in use on that page).

---

## TASK 1 — `app/about/page.tsx` — FULL REWRITE

Replace the entire page content with the following. Preserve the existing page wrapper, metadata export, and any layout components (Navbar, Footer) already imported. Only replace the inner content JSX.

### Page Metadata
```ts
export const metadata = {
  title: 'About Us — Kaihle',
  description: 'The story behind Kaihle — built by a school founder who lived this problem.',
}
```

### Page Content Structure

**Section 1 — Page tag + Mission headline**
- Tag label: `About Us`
- H1: `Our mission`
- Body: `We believe every student deserves to learn in a way that works for them — and every teacher deserves to know exactly where their students need help, before it's too late.`

---

**Section 2 — Founder Story**
- Section heading: `Where this started`
- Body copy (multi-paragraph — render each paragraph as its own `<p>` tag):

> Para 1: `Before building Kaihle, I founded and ran LightHouse Academy — a small international middle school in Bali, Indonesia. Thirty students. A team of dedicated teachers. A curriculum we believed in. And a problem I couldn't solve.`

> Para 2: `Every time I asked a teacher how a particular student was doing, the answer was some version of the same thing: "I think they're doing okay" or "they seem to be struggling a bit." Honest answers — but not specific ones. We had no reliable way to know, before starting a new topic, which students had the foundation to build on and which were about to fall further behind.`

> Para 3: `One day, instead of asking the teachers, I asked the students. A simple survey: "If you were the teacher, how would you teach yourself this subject? If you had a choice, how would you structure the class?"`

> Para 4: `The answers stopped me.`

> Para 5: `Thirty students. Thirty completely different answers. Some wanted examples before explanations. Some wanted to jump straight in and figure it out. Some needed to see the big picture first; others needed to go step by step. My best teachers — the ones who genuinely connected with students — were working from intuition and goodwill. But no teacher, however talented, can design thirty different lessons for thirty different minds. It's not a failure of effort. It's a structural impossibility.`

> Para 6: `We were also stretched thin. Like every small school, we were working against the budget. We wanted to hire more. We couldn't. And so the gap between what we knew was possible and what we could actually deliver just kept widening.`

---

**Section 3 — Why I built it**
- Section heading: `Why I was the one to build it`
- Body copy:

> Para 1: `I didn't come to education from the outside. Before LightHouse, I spent years building technology in Silicon Valley — including an earlier EdTech company I founded and eventually exited. I also spent time at Udemy, working closely with learning scientists to understand how people actually acquire and retain knowledge. Not how we assume they learn. How they actually do.`

> Para 2: `When AI started to mature, I saw the unlock. This wasn't about replacing teachers — it was about giving them something they'd never had: a clear, real-time picture of every student, and the tools to act on it without drowning in admin.`

> Para 3: `I left LightHouse to build Kaihle — not just to solve the problem for my school, but to build the tool I wished I'd had for every school like it.`

- Founder attribution block (render as a styled byline below the paragraphs):
  - Name: `Vibhu Athavaria`
  - Title: `Founder, Kaihle`

---

**Section 4 — Values (3 cards, same pattern as existing)**

Card 1:
- Icon: 🎯
- Heading: `Teachers first`
- Body: `Every feature we build starts with: does this save teachers time and give them better information? If it doesn't, we don't build it.`

Card 2:
- Icon: 🧠
- Heading: `Learning is personal`
- Body: `Every student has a different way of making sense of the world. Their learning path should reflect that — not flatten it.`

Card 3:
- Icon: 🔗
- Heading: `Curriculum is the foundation`
- Body: `We don't replace Cambridge or IB — we make them work harder for every student in your school.`

---

**Section 5 — CTA (match existing pattern)**
- Heading: `Ready to see Kaihle in action?`
- Body: `Book a demo to see how we help schools close learning gaps — without adding to teacher workload.`
- Button: `Apply for Pilot →` linking to `/demo`

---

## TASK 2 — `app/page.tsx` (Homepage) — SURGICAL UPDATES ONLY

Make only the following targeted changes. Do not restructure any section.

### 2a — Hero section: Add new supporting line

Locate the hero subheadline (currently: *"Kaihle is an AI-powered diagnostic platform that maps exactly where each student is struggling..."*).

**Directly above the subheadline**, insert a new line as a separate `<p>` or `<span>` element styled as a secondary headline (use the same typographic style as other supporting hero text already on the page):

```
The best educator you can hire can't personalise for 25 students. Kaihle can.
```

### 2b — Founder credibility section: Replace current content

Locate the section with heading `"Built by someone who ran a school and lived this problem"` (currently a single paragraph).

Replace the body content of that section with:

```
Kaihle was founded by Vibhu Athavaria — a Silicon Valley technologist who left
the industry to open LightHouse Academy, a small international middle school in
Bali. After three years as its director, one staff survey, and thirty completely
different answers from thirty students about how they'd like to learn, the problem
became impossible to unsee.

Before founding LightHouse, Vibhu built and exited an EdTech company, and worked
with learning scientists at Udemy to understand how people actually acquire
knowledge. Kaihle is the product of all three.
```

Add a text link below: `Book a conversation with Vibhu →` linking to `mailto:hello@kaihle.com`

### 2c — "Three steps" section: Update Step 3 label

Locate Step 03 / "Fix" in the three-step summary section.

Update the body text from:
> `"Kaihle generates a personalised study plan per student — curated resources, practice quizzes, and AI-produced content."`

To:
> `"Students get a personalised study plan built for how they learn. Teachers coach. Kaihle handles the rest."`

### 2d — Curriculum strip: Add roadmap line

Locate the stats strip (the one with "7,000+ Curriculum-aligned questions ready from day one").

Add a small text line below or adjacent to the curriculum mention:
```
Launching with Cambridge. IB and Common Core coming soon.
```
Style as muted/secondary text (`text-sm` or equivalent secondary text style already used on the page).

### 2e — CTA unification across homepage

Find every button/link on this page and update labels as follows:

| Current label | Replace with |
|---|---|
| `Request a Demo` | `Apply for Pilot` |
| `Start Free Trial` | `Apply for Pilot` |
| `See how it works →` | `See how it works →` (keep as-is) |
| `For Schools →` | `For Schools →` (keep as-is) |
| `Book a conversation →` | `Book a conversation with Vibhu →` |
| `View plans` (in dashboard mock) | keep as-is |

---

## TASK 3 — `app/pricing/page.tsx` — NEW ROI SECTION + FOUNDING COHORT REWRITE

### 3a — Insert ROI framing section above pricing cards

Add a new section **above the existing pricing card grid**. Match the existing section wrapper pattern. No new components — use existing layout primitives already on the page.

**Section heading:** `What does $20 actually mean?`

**Body copy (3 paragraphs):**

> Para 1: `A private tutor in most cities costs $40–80 per hour. A part-time learning support teacher costs $1,500–3,000 per month. Neither gives you a real-time view of every student in every class.`

> Para 2: `At $20 per student per month, Kaihle gives every student in your school a personalised diagnostic, a learning profile, and a tailored study plan — updated continuously throughout the year. For a school of 60 students, that's $1,200 a month for what would otherwise require multiple specialists, weeks of manual assessment, and a mountain of spreadsheets.`

> Para 3: `For most schools, Kaihle costs less than one part-time hire. And it works across every class, every subject, every day.`

### 3b — Update "Founding Partner Offer" section

Locate the existing Founding Partner / Founding Cohort section.

Replace heading with: `Founding Partner Offer — 10 schools only`

Replace body with:
```
We're opening Kaihle to a founding cohort of ten schools. In exchange for early
access, you get our full attention: direct input into the product roadmap,
dedicated onboarding support, and pricing locked well below what schools will
pay at launch.
```

Replace the bullet list with:
- `60-day free trial — full platform, no restrictions`
- `$15/user/month locked for 12 months post-trial`
- `Direct line to the founding team throughout`
- `Your school's curriculum needs shape the product`

Replace CTA button label: `Apply for Founding Cohort` → `Apply for Pilot`

### 3c — CTA unification on pricing page

| Current label | Replace with |
|---|---|
| `Request a Demo` | `Apply for Pilot` |
| `Start Free Trial` | `Apply for Pilot` |
| `Start Pilot` | `Apply for Pilot` |
| `Talk to Sales` | `Book a 30-min Demo →` |
| `Apply for Founding Cohort` | `Apply for Pilot` |

All buttons/links pointing to `/demo` — keep the href as `/demo`.

---

## TASK 4 — `app/why-kaihle/page.tsx` — FULL PAGE REBUILD

Replace the entire page content. Preserve existing page wrapper, metadata export, Navbar/Footer imports. Match the structural patterns (section wrappers, heading hierarchy, card grids) already established on other pages of the site.

### Page Metadata
```ts
export const metadata = {
  title: 'Why Kaihle — Kaihle',
  description: 'Why Kaihle is different from Google Classroom, Khan Academy, and traditional school tools.',
}
```

### Page Content Structure

---

**Page hero**
- H1: `Why schools keep failing the same students — and why that's not the teachers' fault`
- Subheadline: `Most tools built for schools make the same mistake. Here's what's different about how Kaihle thinks.`

---

**Section 1 — The honest problem with testing**
- Section tag: `The problem with testing`
- Heading: `Tests tell you what happened. Not what to do next.`
- Body:

> `Schools have always used tests to measure learning. But tests have a structural problem: they measure performance on the day, not understanding over time. A student who memorises the night before and scores 80% may know less than a student who scored 65% through genuine comprehension. By the time results are in, weeks have passed and the gap has grown.`

> `Kaihle doesn't replace tests. But it gives teachers continuous, subtopic-level visibility between them — so they're never teaching into the dark.`

---

**Section 2 — The tools you already use**
- Section tag: `The gap your current tools leave`
- Heading: `The tools you already use — and the gap they leave`
- Intro paragraph:

> `Schools aren't short of tools. Most already have Google Classroom for workflows, Khan Academy for practice content, and a student information system for records. These are good tools. Kaihle isn't here to replace them.`

> `But here's what none of them do:`

**Comparison table** — render as a styled HTML table or equivalent grid. Content:

| | Google Classroom | Khan Academy | Your SIS | Kaihle |
|---|---|---|---|---|
| Distribute assignments | ✓ | — | — | — |
| Free practice content | — | ✓ | — | — |
| Student records | — | — | ✓ | — |
| Individualised assessment per class | ✗ | ✗ | ✗ | ✓ |
| Diagnostic gap mapping per subtopic | ✗ | ✗ | ✗ | ✓ |
| Cambridge / IB curriculum aligned | ✗ | ✗ | Partial | ✓ |
| Personalised study plan per student | ✗ | Partial | ✗ | ✓ |
| Real-time teacher gap heatmap | ✗ | ✗ | ✗ | ✓ |
| AI lesson planner for teachers | ✗ | ✗ | ✗ | ✓ |
| School-wide admin visibility | ✗ | ✗ | Partial | ✓ |

Style the Kaihle column with the brand accent colour. Style ✗ cells as muted/dimmed. Style ✓ cells as standard. Use existing colour tokens from the design system — do NOT introduce new colour values.

**Three follow-up callout paragraphs** (render as distinct blocks with a subtle divider or spacing):

Block 1:
> **Google Classroom** manages the logistics of learning — submissions, communication, scheduling. It tells you an assignment was turned in. Not whether the student understood it.

Block 2:
> **Khan Academy** delivers content. It's self-directed and free — but it doesn't know which of your 28 students is weak on a specific subtopic, and it wasn't built around Cambridge or IB objectives.

Block 3:
> **Kaihle does something neither of them does:** it automatically generates an individualised diagnostic assessment the moment a student enrols in a class — mapped to that specific subject and grade — and uses those results to build a personalised learning path for each student. Every time. Without teacher intervention.

**Closing line for this section:**
> `Your existing tools manage the workflow of school. Kaihle manages the learning.`

---

**Section 3 — The honest problem with "personalised learning"**
- Section tag: `Personalised learning, actually`
- Heading: `Every platform claims personalised learning. Most don't mean it.`
- Body:

> `Most platforms use "personalised learning" to mean the student picks their own pace through the same content everyone else sees.`

> `Kaihle personalises differently. It starts by learning how each student thinks — before a single lesson begins. Then every study plan, every AI-generated explanation, and every practice activity is built around that specific student's learning preferences. Not the class average. Not the curriculum default.`

---

**Section 4 — What makes Kaihle different (6-card grid, same pattern as homepage features)**

Card 1:
- Icon: 🎯
- Heading: `Actual gaps, not grades`
- Body: `We don't give you averages. We map exact subtopic gaps per student — so you know precisely what to teach next.`

Card 2:
- Icon: ⚡
- Heading: `Less admin, more teaching`
- Body: `Assessment, marking, and gap analysis happen automatically. Teachers focus on instruction, not paperwork.`

Card 3:
- Icon: 🧠
- Heading: `Personalised to how each student learns`
- Body: `Every study plan adapts to the student's learning preferences — visual, step-by-step, examples-first. Not one-size-fits-all.`

Card 4:
- Icon: 📊
- Heading: `School-wide visibility`
- Body: `Principals see outcomes across every class. Data-backed decisions, not gut feel.`

Card 5:
- Icon: 🔗
- Heading: `Built on your curriculum`
- Body: `Every question, resource, and standard is aligned to Cambridge or IB. No adaptation needed.`

Card 6:
- Icon: 👨‍👩‍👧
- Heading: `Parents stay in the loop`
- Body: `Weekly plain-language updates go straight to parents. No app, no login, no jargon.`

---

**Closing CTA section**

- Heading: `Kaihle isn't for every school.`
- Body: `It's for schools that believe every student deserves better than average — and every teacher deserves better than burnout.`
- Primary button: `Apply for Pilot →` → `/demo`
- Secondary link: `See how it works →` → `/how-it-works`

---

## TASK 5 — Global CTA Audit

After completing Tasks 1–4, do a final pass across all modified files and confirm:

- Every primary action button reads: **`Apply for Pilot`**
- Every secondary inline text link reads: **`Book a 30-min Demo →`** (where "Talk to Sales" or "Request a Demo" appeared as a link, not a button)
- No page uses: "Request a Demo", "Start Free Trial", "Start Pilot", "Talk to Sales", or "Apply for Founding Cohort" as button labels

---

## VERIFICATION CHECKLIST

Before committing, verify:

- [ ] `app/about/page.tsx` — Founder story renders in full with all 6 body paragraphs
- [ ] `app/about/page.tsx` — Founder attribution (name + title) renders below story
- [ ] `app/about/page.tsx` — Three value cards intact
- [ ] `app/page.tsx` — New hero line appears above subheadline
- [ ] `app/page.tsx` — Founder section updated with Vibhu's full bio
- [ ] `app/page.tsx` — Step 03 body copy updated
- [ ] `app/page.tsx` — Curriculum roadmap line added
- [ ] `app/pricing/page.tsx` — ROI section appears above pricing cards
- [ ] `app/pricing/page.tsx` — Founding cohort section rewritten with 4 bullets
- [ ] `app/why-kaihle/page.tsx` — Full new page with 4 sections + comparison table
- [ ] `app/why-kaihle/page.tsx` — Comparison table Kaihle column is visually distinct
- [ ] All modified pages — No button reads "Request a Demo", "Start Free Trial", or "Talk to Sales"
- [ ] `npm run build` passes with no TypeScript errors
- [ ] `npm run lint` passes clean

---

## COMMIT MESSAGE

```
feat(copy): website copy update v2 — founder story, homepage, pricing ROI, why-kaihle rebuild

- About: full founder story rewrite with LightHouse Academy narrative
- Homepage: new hero line, updated step 3, curriculum roadmap note, founder bio
- Pricing: ROI framing section, founding cohort rewrite
- Why Kaihle: full page rebuild with tool comparison table and new narrative sections
- Global: CTA unification to 'Apply for Pilot' across all pages
```
