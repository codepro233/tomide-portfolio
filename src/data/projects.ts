export const projects = [
  {
    slug: "proposaliq",
    title: "ProposalIQ",
    category: "SaaS",
    image: "/images/proposal.png",
    description:
      "AI-powered proposal generator for African freelancers. Generate, share, and manage client proposals with built-in payments.",
    liveUrl: "https://proposaliq-five.vercel.app",
    githubUrl: "https://github.com/codepro233/proposaliq",
    tech: ["Next.js", "MongoDB", "OpenRouter", "Paystack", "Resend"],
    featured: true,
    metric: "Live with real Paystack payments",
    highlights: [
      "AI-generated proposals in under a minute",
      "Shareable public links for clients",
      "Integrated Paystack payment collection",
      "Automated email notifications via Resend",
    ],
    caseStudy: {
      problem:
        "African freelancers lose contracts by sending generic, slow-turnaround proposals that don't match client expectations.",
      solution:
        "AI-generated, professional proposals in seconds, with shareable public links and built-in payment collection so freelancers get from pitch to paid without leaving the platform.",
      impact:
        "Reduced proposal turnaround from hours to under a minute, with integrated payments so freelancers get paid faster.",
    },
  },
  {
    slug: "ai-land-inspection",
    title: "AI Land Inspection",
    category: "AI",
    image: "/images/ai construction.jpeg",
    description:
      "Analyze land coordinates and generate AI-powered inspection reports with PDF export.",
    liveUrl: "https://ai-land-inspection.vercel.app/",
    githubUrl: "https://github.com/codepro233/ai-land-inspection",
    tech: ["Next.js", "Leaflet", "OpenRouter Vision", "jsPDF"],
    featured: true,
    metric: "AI vision analysis in under 10 seconds",
    highlights: [
      "Vision-model land inspection from coordinates",
      "Interactive map picker with Leaflet",
      "Downloadable PDF inspection report",
      "Multi-model fallback for reliability",
    ],
    caseStudy: {
      problem:
        "Land buyers in Nigeria can't easily verify a plot's condition remotely before committing to a purchase, leading to costly mistakes.",
      solution:
        "Upload land coordinates and get an AI vision-based inspection analysis, complete with a downloadable PDF report for offline review or sharing with legal counsel.",
      impact:
        "Solves a real trust problem in Nigerian real estate — remote due diligence before a costly land purchase.",
    },
  },
  {
    slug: "buildai",
    title: "BuildAI",
    category: "AI",
    image: "/images/con1.jpg",
    description:
      "Track construction projects with AI insights and Nigerian Naira/USD currency toggle.",
    liveUrl: "https://build-ai-one.vercel.app",
    githubUrl: "https://github.com/codepro233/BuildAi",
    tech: ["React", "Vite", "Supabase", "OpenRouter"],
    featured: true,
    metric: "Naira/USD-aware, built for the Nigerian market",
    highlights: [
      "AI-powered cost estimation and insights",
      "Naira/USD currency toggle throughout",
      "Google OAuth authentication via Supabase",
      "Project, task, and material tracking dashboards",
    ],
    caseStudy: {
      problem:
        "Construction project managers track costs and progress across spreadsheets and WhatsApp threads, leading to budget overruns and missed deadlines.",
      solution:
        "An AI-powered dashboard for cost estimation, progress tracking, and smart insights — built with a Naira/USD currency toggle for the Nigerian market from day one.",
      impact:
        "Built a currency-aware dashboard tailored to the Nigerian construction market, not a generic US-first template.",
    },
  },
  {
    slug: "scrub-unit-booking",
    title: "Scrub Unit Booking",
    category: "Dashboard",
    image: "/images/scrub.jpeg",
    description:
      "Booking platform for a cleaning business in Ado-Ekiti, Nigeria, with admin dashboard for managing jobs, customers, and scheduling.",
    liveUrl: "https://codepro233.github.io/scrubunit/",
    githubUrl: "https://github.com/codepro233/scrubunit",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: false,
    metric: "Live and in use by a real operating business",
    highlights: [
      "Online booking replacing manual WhatsApp scheduling",
      "Admin dashboard for job management",
      "Built for a business I personally run",
    ],
    caseStudy: {
      problem:
        "The Scrub Unit, a cleaning business in Ado-Ekiti, managed all bookings manually over WhatsApp — no calendar, no admin overview, no way to scale.",
      solution:
        "A booking platform with a full admin dashboard so the business can manage jobs, customers, and scheduling end-to-end.",
      impact:
        "Built for a real operating business I run — not a tutorial clone. Live and in use today.",
    },
  },
];
