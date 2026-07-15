"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 nav-bg backdrop-blur-xl border-b transition-colors" style={{ borderColor: "var(--card-border)" }}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-cyan-400">
            Tomide.dev
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-muted hover:text-cyan-500 transition-colors">About</Link>
            <Link href="#skills" className="text-muted hover:text-cyan-500 transition-colors">Skills</Link>
            <Link href="#projects" className="text-muted hover:text-cyan-500 transition-colors">Projects</Link>
            <Link href="#blog" className="text-muted hover:text-cyan-500 transition-colors">Blog</Link>
            <Link href="#contact" className="text-muted hover:text-cyan-500 transition-colors">Contact</Link>

            <ThemeToggle />
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-3xl"
            style={{ color: "var(--fg)" }}
          >
            ☰
          </button>
        </nav>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}