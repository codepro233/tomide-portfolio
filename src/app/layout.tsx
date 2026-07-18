import { Syne, DM_Mono } from "next/font/google";
import LenisProvider from "../providers/LenisProvider";
import "./globals.css";
import BackgroundParticles from "../components/BackgroundParticles"
import Cursor from "../components/Cursor";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/providers/ThemeProvider";
import Loader from "@/components/Loader";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata = {
  title: "Abere Oluwatomide | Full-Stack Developer & AI Engineer",
  description:
    "Full-stack developer building production-ready AI SaaS products with Next.js, TypeScript, and AI. View live projects including ProposalIQ, BuildAI, and AI Land Inspection.",
  keywords: [
    "Abere Oluwatomide",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "TypeScript",
    "Remote Developer Nigeria",
  ],
  openGraph: {
    title: "Abere Oluwatomide | Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer building production-ready AI SaaS products with Next.js, TypeScript, and AI.",
    url: "https://tomide-dev.vercel.app",
    siteName: "Tomide.dev",
    images: [
      {
        url: "/myimage.jpeg",
        width: 1200,
        height: 630,
        alt: "Abere Oluwatomide - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abere Oluwatomide | Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer building production-ready AI SaaS products with Next.js, TypeScript, and AI.",
    images: ["/myimage.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${dmMono.variable}`}>
      <body>
        <ThemeProvider> 
          <BackgroundParticles />
          <Cursor />
          <LenisProvider>
            {children}
          </LenisProvider> 
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
