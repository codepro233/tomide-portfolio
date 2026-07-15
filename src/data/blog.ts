export const blogs = [
  {
    slug: "building-terrascan-ai-land-inspection",
    title: "Building TERRA·SCAN: AI Land Inspection Tool",
    date: "June 10, 2026",
    summary: "How I built an AI-powered land inspection platform with Next.js, OpenRouter vision API, and Leaflet maps.",
    content: `
## The Problem

Land inspection in Nigeria is slow, expensive, and often inaccurate. I wanted to build a tool that could analyze land images and generate professional reports instantly.

## The Stack

- **Next.js** — frontend and API routes
- **OpenRouter** — vision AI for analyzing land images
- **Leaflet** — interactive maps for coordinates
- **jsPDF** — generating downloadable PDF reports
- **react-dropzone** — drag and drop image uploads

## How It Works

Users drop an image of their land into the app. The image is sent to OpenRouter's vision API which analyzes it and returns a detailed inspection report. The report is then formatted into a branded PDF the user can download.

## Key Challenges

The biggest challenge was handling OpenRouter being blocked in Nigeria. I had to implement VPN fallback logic and proper error handling for network failures.

TERRA·SCAN is now evolving into a full B2B SaaS with org accounts, Paystack subscriptions, and per-account inspection history.
    `,
  },
  {
    slug: "building-buildai-construction-saas",
    title: "Building BuildAI: Construction Project Management SaaS",
    date: "June 18, 2026",
    summary: "How I turned a Bolt.new export into a production-ready AI construction SaaS with Supabase, OpenRouter, and Vercel.",
    content: `
## The Problem

Nigerian construction companies manage projects with spreadsheets and WhatsApp. I wanted to build a smarter tool — one that tracks projects, estimates costs, and gives AI-powered insights in real time.

## The Stack

- **Next.js + TypeScript** — full-stack framework
- **Supabase** — PostgreSQL database with Row Level Security
- **OpenRouter** — AI insights with free-model fallback
- **Vercel** — instant deployment
- **CurrencyContext** — Nigerian Naira and USD toggle

## What BuildAI Does

BuildAI is a construction project management dashboard that lets contractors track tasks, budgets, timelines, and team members. The AI layer analyzes project data and surfaces insights like cost overruns, delayed tasks, and risk areas.

## The Process

I started with a Bolt.new export and rebuilt it from scratch — adding Supabase RLS policies, OpenRouter integration with free-model fallback, and a full Naira pricing system.

## Key Lessons

Working on a Chromebook meant every change required a full build cycle. This forced me to write more deliberate code and think through features before implementing them. BuildAI is live at build-ai-one.vercel.app.
    `,
  },
  {
    slug: "building-proposaliq-ai-proposal-generator",
    title: "Building ProposalIQ: AI Proposals for African Freelancers",
    date: "June 22, 2026",
    summary: "How I built a full-stack AI proposal generator with Paystack, Resend, and public share links — deployed and live.",
    content: `
## The Problem

African freelancers lose clients because their proposals look unprofessional or take too long to write. I built ProposalIQ to fix that — generate a full proposal in under 60 seconds.

## The Stack

- **Next.js** — full-stack framework
- **Prisma + MongoDB Atlas** — database and ORM
- **NextAuth v5** — credentials and Google OAuth
- **OpenRouter** — AI proposal generation with free-model fallback
- **Paystack** — NGN payment processing (Free/Pro/Agency tiers)
- **Resend** — transactional email
- **nanoid** — public share links

## Key Features

- Multi-step proposal form with 7 pre-built templates
- Client management — save clients and reuse across proposals
- AI inline editing — select any text and rewrite, expand, shorten, or improve it
- Public share links so clients can view proposals without logging in
- PDF export with branded header
- Forgot/reset password flow with email verification
- Google OAuth sign in

## The Deployment Journey

Deploying to Vercel required fixing TypeScript errors, adding prisma generate to the build script, and carefully managing environment variables. The OpenRouter free model list changes constantly so I built a fallback chain across 5 models.

ProposalIQ is live at proposaliq-five.vercel.app. It's the most complete SaaS product I've shipped so far.
    `,
  },
  {
    slug: "full-stack-saas-in-a-weekend",
    title: "Full Stack SaaS in a Weekend",
    date: "June 25, 2026",
    summary: "How I plan, scaffold, and ship a full SaaS product in 48 hours.",
    content: `
## Speed Comes From Systems

Building a SaaS product fast requires a solid stack and a clear sprint plan. After shipping BuildAI and ProposalIQ, I've developed a repeatable system.

## My Stack

- **Next.js** — frontend and API routes
- **Supabase or MongoDB** — database and auth
- **Prisma** — type-safe ORM
- **Paystack** — Nigerian payment processing
- **OpenRouter** — AI features with free-model fallback
- **Vercel** — instant deployment

## The Sprint System

I break every project into sprints: scaffold, auth, core feature, payments, deployment. Each sprint has a clear deliverable so I never lose momentum.

## What I've Learned

Speed comes from reusing patterns across projects. Auth, payments, AI integration — these are solved problems. The only thing that changes is the core feature. Focus all your energy there.

After building ProposalIQ and BuildAI back to back, I can now go from idea to deployed SaaS in under a week.
    `,
  },
];