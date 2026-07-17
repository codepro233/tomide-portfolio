"use client";

import { motion } from "framer-motion";
import FlipCard from "@/components/FlipCard";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-8" style={{ color: "var(--fg)" }}>
            About Me
          </h2>
          <p className="text-muted leading-8 text-lg">
            I&apos;m a self-taught Full-Stack Developer who ships production-ready
            AI SaaS products end to end — from architecture to deployment.
            My four live projects (ProposalIQ, BuildAI, AI Land Inspection,
            and Scrub Unit Booking) handle real users, real payments, and
            real business problems, built with Next.js, TypeScript, and
            modern AI APIs. I care about fast iteration, clean code, and
            interfaces that feel as good as they function.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <FlipCard
            title="Who Am I?"
            frontText="AI Developer"
            backText="Building intelligent web applications and automation systems."
          />
          <FlipCard
            title="Mission"
            frontText="Problem Solver"
            backText="Helping businesses grow through AI and software."
          />
          <FlipCard
            title="Tech Stack"
            frontText="Modern Technologies"
            backText="Next.js, TypeScript, React, Three.js, OpenAI and PostgreSQL."
          />
        </div>
      </motion.div>
    </section>
  );
}
