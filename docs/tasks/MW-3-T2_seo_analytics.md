# MW-3-T2 — SEO, OG Images & Analytics
**Milestone:** MW — Marketing Website
**Epic:** MW-3: Lead Capture
**Status:** TODO
**Depends on:** MW-2-T1 through MW-2-T6, MW-3-T1 (all pages must exist)
**Estimated effort:** 0.5 days

---

## Context

This task wraps up the non-page work required before QA. It ensures every page is discoverable, shareable, and tracked. Plausible is used for analytics — it's privacy-first, GDPR-compliant out of the box, and requires no cookie banner. This is important for a site targeting schools in multiple jurisdictions.

---

## Files to Create / Modify

```
app/layout.tsx                    ← add Plausible script
app/sitemap.ts                    ← auto-generated sitemap
app/robots.ts                     ← robots.txt
lib/metadata.ts                   ← shared OG image helper
public/og-default.png             ← replace placeholder (1200×630)
```

---

## 1. Plausible Analytics

Install:
```bash
npm install next-plausible
```

**`app/layout.tsx`** — add to root layout:

```tsx
import PlausibleProvider from 'next-plausible'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? 'kaihle.com'} />
      </head>
      <body ...>
        ...
      </body>
    </html>
  )
}
```

**Setup:** Create a Plausible account at plausible.io, add `kaihle.com` as a site. The script loads automatically from `plausible.io/js/plausible.js`. No cookies. No GDPR consent required.

---

## 2. OG Images with `next/og`

Create a dynamic OG image route for each page. This ensures that when any page is shared on WhatsApp, LinkedIn, or Slack, it shows a branded preview rather than the default fallback.

**`app/opengraph-image.tsx`** (default OG image — used if no page-specific one)

```tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Kaihle — AI-Powered Diagnostic Learning for Schools'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Kaihle wordmark */}
        <div style={{ fontSize: 72, fontWeight: 800, color: 'white', marginBottom: 24 }}>
          Kaihle
        </div>
        {/* Tagline */}
        <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.85)', textAlign: 'center', maxWidth: 800 }}>
          AI-Powered Diagnostic Learning for Schools
        </div>
        {/* URL */}
        <div style={{ fontSize: 20, color: 'rgba(255,255,255,0.6)', marginTop: 40 }}>
          www.kaihle.com
        </div>
      </div>
    ),
    { ...size }
  )
}
```

**Per-page OG images:** Create the same file pattern in each page directory for the P0 pages:

```
app/for-schools/opengraph-image.tsx  ← Tagline: "Diagnostic Learning Built for Schools"
app/demo/opengraph-image.tsx         ← Tagline: "Request a Demo — 30 Minutes. Real Content."
```

For P1 pages (how-it-works, why-kaihle, pricing, about), the default OG image is acceptable for v1.

---

## 3. Sitemap

**`app/sitemap.ts`**

```ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.kaihle.com'
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/for-schools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/how-it-works', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/why-kaihle', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/demo', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
```

---

## 4. Robots.txt

**`app/robots.ts`**

```ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    sitemap: 'https://www.kaihle.com/sitemap.xml',
  }
}
```

---

## 5. Per-Page Metadata Audit

Verify every page has unique, non-duplicate metadata. Required fields per page:

| Page | `title` | `description` | `og:url` |
|---|---|---|---|
| `/` | Kaihle — AI-Powered Diagnostic Learning for Schools | Kaihle maps every student's exact knowledge gaps... | https://www.kaihle.com |
| `/for-schools` | For Schools — Kaihle | Kaihle gives teachers a real-time diagnostic view... | https://www.kaihle.com/for-schools |
| `/how-it-works` | How It Works — Kaihle | See how Kaihle's diagnostic-to-personalised-learning pipeline... | https://www.kaihle.com/how-it-works |
| `/why-kaihle` | Why Kaihle — Diagnostic Learning Built for Schools | See how Kaihle compares to private tutoring... | https://www.kaihle.com/why-kaihle |
| `/pricing` | Pricing — Kaihle | Simple per-school pricing for Kaihle's AI diagnostic platform... | https://www.kaihle.com/pricing |
| `/about` | About Us — Kaihle | Kaihle was built by an international school founder... | https://www.kaihle.com/about |
| `/demo` | Request a Demo — Kaihle | Book a 30-minute live walkthrough... | https://www.kaihle.com/demo |
| `/privacy` | Privacy Policy — Kaihle | How Kaihle collects, uses, and protects your data. | https://www.kaihle.com/privacy |

All descriptions must be 150–160 characters. Verify with a character counter.

---

## Acceptance Criteria

- [ ] Plausible script loads on every page (verify in browser devtools: `plausible.io/js/plausible.js`)
- [ ] No cookie consent banner appears (Plausible is cookieless)
- [ ] `GET /sitemap.xml` returns valid XML listing all 8 pages
- [ ] `GET /robots.txt` returns correct content with sitemap URL
- [ ] `/api/` routes are disallowed in robots.txt
- [ ] Default OG image renders correctly (1200×630, blue-purple gradient)
- [ ] `/for-schools` and `/demo` have page-specific OG images
- [ ] Sharing `/for-schools` on LinkedIn shows the page-specific OG image (not the default)
- [ ] Every page has unique `<title>` — none are identical
- [ ] Every `<meta name="description">` is 150–160 characters
- [ ] All 8 pages are listed in sitemap with correct priority values
- [ ] `npm run build` passes with zero errors after all changes
