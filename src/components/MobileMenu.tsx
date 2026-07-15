"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            className="fixed top-0 right-0 h-screen w-[85%] max-w-[320px] bg-white dark:bg-black/80 backdrop-blur-2xl border-l border-black/10 dark:border-cyan-500/20 z-50 px-8 py-12"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-3xl text-gray-800 dark:text-white"
            >
              ×
            </button>

            <div className="mt-16 flex flex-col gap-7">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xl text-gray-700 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-5">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}