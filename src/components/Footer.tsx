import { FaGithub, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 border-t transition-colors" style={{ borderColor: "var(--card-border)" }}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <h2 className="text-2xl font-bold" style={{ color: "var(--fg)" }}>Tomide.dev</h2>

        <div className="flex gap-6 text-2xl text-muted">
          <Link
            href="https://github.com/codepro233"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://wa.me/2348165924570"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </footer>
  );
}