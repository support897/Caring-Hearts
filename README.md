# Caring Hearts Foundation

Charity donation website for Caring Hearts Foundation — humanitarian aid and relief for world hunger and global poverty.

## Tech Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS v4**
- **TypeScript**
- **Stripe** (Checkout Sessions + Payment Links)
- **PayPal** (Orders API + React SDK)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from the template:

```bash
cp .env.example .env.local
```

Fill in Stripe and PayPal credentials.

3. Run development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main homepage (Gaza) |
| `/donate-now` | Donation page with service cards |
| `/donate/[slug]` | Individual service donation |
| `/sudan-donation` | Sudan donation page |
| `/about-us` | About the foundation |
| `/contact` | Contact form |
| `/blog` | Blog |
| `/privacy-policy` | Privacy policy |
| `/terms` | Terms of service |

## Payment Integration

- **Stripe**: Checkout Sessions (one-time + recurring) via `/api/create-checkout-session`
- **PayPal**: Orders API via `/api/create-paypal-order` and `/api/capture-paypal-order`
- Pre-configured Stripe Payment Links for quick donations

## Deployment

```bash
npm run build
npm start
```

Or deploy to Vercel:

```bash
npx vercel
```

## Environment Variables

See `.env.example` for required keys.
