# Kaihle Marketing Website

AI-powered diagnostic learning platform for Cambridge and IB schools. Built with Next.js 14, TypeScript, and Tailwind CSS.

## About

Kaihle is a marketing website for an EdTech platform that helps schools identify and close learning gaps through AI-powered diagnostic assessments, personalized study plans, and teacher tools.

### Pages

- **Home** (`/`) - Hero, features, testimonials, CTA
- **For Schools** (`/for-schools`) - School-focused value proposition
- **How It Works** (`/how-it-works`) - Step-by-step platform walkthrough
- **Why Kaihle** (`/why-kaihle`) - Differentiation from competitors
- **Pricing** (`/pricing`) - Free Trial & Pay As You Go plans
- **About** (`/about`) - Company mission and values
- **Demo** (`/demo`) - Request a demo form
- **Privacy** (`/privacy`) - Privacy policy

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v3
- **Icons:** Lucide React
- **Fonts:** Fraunces (headings), Nunito (body)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd kaihle-www
```

2. Install dependencies:

```bash
npm install
```

3. Copy the environment variables:

```bash
cp .env.local.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.

2. Go to [Vercel](https://vercel.com) and sign up.

3. Click "Add New..." → "Project"

4. Import your GitHub repository.

5. Configure the project:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`

6. Add environment variables in the Vercel dashboard:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   DEMO_REQUEST_TO_EMAIL=hello@kaihle.com
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kaihle.com
   NEXT_PUBLIC_APP_URL=https://app.kaihle.com
   ```

7. Click "Deploy".

### Custom Domain

After deployment, add your custom domain in Vercel:

1. Go to Project Settings → Domains
2. Add `www.kaihle.com` as the primary domain
3. Add `kaihle.com` as a redirect to `www.kaihle.com`

## Project Structure

```
kaihle-www/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── demo/              # Demo request page
│   ├── for-schools/      # For Schools page
│   ├── how-it-works/     # How It Works page
│   ├── pricing/          # Pricing page
│   ├── privacy/          # Privacy policy
│   └── why-kaihle/      # Why Kaihle page
├── components/
│   ├── layout/            # Navbar, Footer
│   └── ui/               # Reusable UI components
├── docs/                 # Brief, tasks, design references
├── tailwind.config.ts    # Tailwind configuration
└── package.json
```

## License

All rights reserved.
