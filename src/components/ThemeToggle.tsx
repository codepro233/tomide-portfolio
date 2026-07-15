"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition-all text-sm font-semibold"
    >
      {resolvedTheme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}