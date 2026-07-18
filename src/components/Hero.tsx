"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import Scene3D from "./Scene3D";
import ResumeButton from "./ResumeButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div
            className="card w-full max-w-xl rounded-3xl p-8 md:p-10 flex flex-col items-center text-center"
            style={{ containerType: "inline-size" }}
          >

            {/* Profile Image */}
            <div className="relative">
              <Image
                src="/myimage.jpeg"
                alt="Abere Oluwatomide"
                width={220}
                height={220}
                priority
                className="w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
              />
              <div className="absolute inset-0 -z-10 rounded-full bg-cyan-500/20 blur-3xl"></div>
            </div>

            {/* Name */}
            <h1 className="mt-8 font-extrabold leading-tight tracking-tight w-full">
              <span className="block text-4xl sm:text-5xl" style={{ color: "var(--fg)" }}>
                Abere
              </span>
              <svg
                viewBox="0 0 420 90"
                className="w-full mt-2"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient id="nameGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <text
                  x="0"
                  y="68"
                  fontFamily="var(--font-syne), sans-serif"
                  fontWeight="800"
                  fontSize="70"
                  fill="url(#nameGradient)"
                  textLength="420"
                  lengthAdjust="spacingAndGlyphs"
                >
                  Oluwatomide
                </text>
              </svg>
            </h1>

            {/* Role / Headline */}
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-cyan-400">
              Full-Stack Developer &amp; AI Engineer
            </p>

            {/* Value prop */}
            <p className="mt-4 text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
              I ship production-ready SaaS with Next.js, TypeScript, and AI —
              see my live projects below.
            </p>

            {/* Location */}
            <div className="mt-4 flex items-center gap-2 text-sm text-muted">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Open to remote roles worldwide · Based in Nigeria</span>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="#projects"
                className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-cyan-400 hover:scale-105"
              >
                View Projects
              </Link>

              <ResumeButton />
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-5">
              <a
                href="https://github.com/codepro233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
                </svg>
              </a>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="w-full max-w-[650px] h-[600px]">
            <Scene3D />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
