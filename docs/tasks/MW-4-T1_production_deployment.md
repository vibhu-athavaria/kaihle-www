# MW-4-T1 — Production Deployment
**Milestone:** MW — Marketing Website
**Epic:** MW-4: Deploy & QA
**Status:** TODO
**Depends on:** All MW-1 through MW-3 tasks
**Estimated effort:** 0.5 days

---

## Context

The site is already deploying to Vercel from MW-1-T1. This task confirms the production configuration is correct end-to-end — domains, environment variables, redirects, and performance headers. Nothing gets built here; this is configuration and verification.

---

## Checklist

---

### 1. Domain Configuration (Vercel Dashboard)

**Primary domain:** `www.kaihle.com`
- Type: Custom domain
- Status: must show "Valid Configuration" with SSL certificate issued

**Redirect domain:** `kaihle.com`
- Redirect target: `https://www.kaihle.com`
- Type: 308 Permanent Redirect
- Verify: `curl -I https://kaihle.com` → `Location: https://www.kaihle.com`

**App subdomain (external — not this repo):**
- `app.kaihle.com` must be configured separately on the platform repo
- Verify that CTA links in this repo pointing to `app.kaihle.com` resolve correctly or show a 404 rather than a cert error

---

### 2. Environment Variables (Vercel Dashboard → Settings → Environment Variables)

All variables set for **Production** environment:

| Variable | Value | Notes |
|---|---|---|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | Same key as platform — confirm still active |
| `DEMO_REQUEST_TO_EMAIL` | `hello@kaihle.com` | Founder inbox — confirm before going live |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | `kaihle.com` | Must match Plausible site configuration |
| `NEXT_PUBLIC_APP_URL` | `https://app.kaihle.com` | Used in CTA links to platform |

**Also set for Preview environment** (for PR previews):
- `RESEND_API_KEY` — same value (so demo form can be tested on preview URLs)
- `DEMO_REQUEST_TO_EMAIL` — use a test inbox for preview, not the production inbox

---

### 3. Build & Performance Settings (Vercel Dashboard)

**Framework preset:** Next.js (auto-detected)
**Build command:** `npm run build` (default)
**Output directory:** `.next` (default)
**Node version:** 20.x

**Enable:**
- [ ] Automatically expose System Environment Variables
- [ ] Preview Deployments on every PR
- [ ] Production deployment on push to `main` branch only

---

### 4. Security Headers

Add to `next.config.ts`:

```ts
const config: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
  async redirects() {
    return []  // www redirect handled at Vercel DNS level
  },
}
```

---

### 5. Verify Production Build

Run locally before declaring done:

```bash
npm run build && npm run start
```

Check:
- [ ] Build completes with zero errors
- [ ] Zero TypeScript errors
- [ ] Zero ESLint errors
- [ ] All pages render at `localhost:3000`

---

### 6. Confirm Live URLs

Open each URL in a real browser (not just curl):

| URL | Expected |
|---|---|
| `https://www.kaihle.com` | Home page |
| `https://kaihle.com` | 308 redirect → www |
| `https://www.kaihle.com/for-schools` | For Schools page |
| `https://www.kaihle.com/how-it-works` | How It Works page |
| `https://www.kaihle.com/why-kaihle` | Why Kaihle page |
| `https://www.kaihle.com/pricing` | Pricing page |
| `https://www.kaihle.com/about` | About Us page |
| `https://www.kaihle.com/demo` | Request a Demo page |
| `https://www.kaihle.com/privacy` | Privacy Policy page |
| `https://www.kaihle.com/sitemap.xml` | Valid XML |
| `https://www.kaihle.com/robots.txt` | Valid robots.txt |
| `https://www.kaihle.com/anything-fake` | Custom 404 page |

---

## Acceptance Criteria

- [ ] `www.kaihle.com` resolves with valid SSL in all major browsers (Chrome, Safari, Firefox)
- [ ] `kaihle.com` issues 308 permanent redirect to `https://www.kaihle.com`
- [ ] All environment variables set in Vercel for Production environment
- [ ] Build completes with zero errors on Vercel CI
- [ ] Security headers present on all pages (verify with `curl -I https://www.kaihle.com`)
- [ ] `X-Frame-Options: DENY` confirmed
- [ ] `X-Content-Type-Options: nosniff` confirmed
- [ ] Preview deployments work on a test PR
- [ ] All 12 URLs in the live URL checklist return correct responses
- [ ] `/sitemap.xml` is valid (validate at https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [ ] `/robots.txt` disallows `/api/` and lists sitemap URL
