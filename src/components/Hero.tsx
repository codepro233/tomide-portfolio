"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
          <div className="card w-full max-w-xl rounded-3xl p-8 md:p-10 flex flex-col items-center text-center">

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

              {/* Glow */}
              <div className="absolute inset-0 -z-10 rounded-full bg-cyan-500/20 blur-3xl"></div>
            </div>

            {/* Name */}
            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              <span
                className="block"
                style={{ color: "var(--fg)" }}
              >
                Abere
              </span>

              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Oluwatomide
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-muted max-w-lg leading-relaxed">
              Building modern web experiences with{" "}
              <span className="font-semibold text-cyan-400">
                AI
              </span>
              ,{" "}
              <span className="font-semibold text-cyan-400">
                Full-Stack Development
              </span>
              , and beautiful user interfaces.
            </p>

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