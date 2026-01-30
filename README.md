# Rosen Systems - Landing Page

A modern, responsive landing page built with **Next.js 16**, featuring the new `proxy.ts` architecture (replacing middleware).

## Tech Stack

- **Next.js 16** - Latest version with Turbopack (default bundler)
- **React 19** - With all the latest features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **proxy.ts** - Next.js 16's new proxy layer (replaces middleware.ts)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   └── components/
│       ├── Header.tsx       # Navigation header
│       ├── Hero.tsx         # Hero section
│       ├── Services.tsx     # Services/features section
│       ├── Pricing.tsx      # 3-tier pricing cards
│       └── Footer.tsx       # Footer with contact info
├── proxy.ts                 # Next.js 16 proxy (replaces middleware)
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Proxy.ts (New in Next.js 16)

This project uses `proxy.ts` instead of the deprecated `middleware.ts`. The proxy runs on the **Node.js runtime** by default (not Edge), giving you full access to Node.js APIs.

Current configuration adds security headers to all responses:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## Stripe Integration

The pricing section includes 3 plans with placeholder Stripe links. To integrate Stripe:

1. Create your products and prices in the [Stripe Dashboard](https://dashboard.stripe.com)
2. Generate payment links for each plan
3. Replace the `stripeLink: "#"` values in `src/components/Pricing.tsx` with your actual Stripe payment links

## Available Scripts

- `npm run dev` - Start development server (Turbopack)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## Customization

### Colors
Edit the CSS variables in `src/app/globals.css`:
- `--primary` - Main brand color (blue)
- `--accent` - Accent color (cyan)
- `--muted` - Muted text color

### Content
- **Hero**: Edit `src/components/Hero.tsx`
- **Services**: Edit the `services` array in `src/components/Services.tsx`
- **Pricing**: Edit the `pricingPlans` array in `src/components/Pricing.tsx`
- **Footer**: Edit contact info in `src/components/Footer.tsx`

## Deployment

This site is ready to deploy on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any platform supporting Node.js 20+
