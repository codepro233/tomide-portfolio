"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  slug: string;
  title: string;
  image: string;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  tech?: string[];
  highlights?: string[];
  metric?: string;
}

export default function ProjectCard({
  slug,
  title,
  image,
  description,
  liveUrl,
  githubUrl,
  tech,
  highlights,
  metric,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl card">
      <Link href={`/projects/${slug}`}>
        <motion.div whileHover={{ y: -15, scale: 1.03 }}>
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="w-full h-60 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold" style={{ color: "var(--fg)" }}>
              {title}
            </h3>
            <p className="mt-4 text-muted">{description}</p>

            {highlights && highlights.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {highlights.slice(0, 4).map((point) => (
                  <li
                    key={point}
                    className="text-sm text-muted flex items-start gap-2"
                  >
                    <span className="text-cyan-400 mt-0.5">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {metric && (
              <p className="mt-4 text-sm font-semibold text-cyan-400">
                ✓ {metric}
              </p>
            )}

            {tech && tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </Link>

      <div className="px-6 pb-6 flex flex-wrap gap-3">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition-colors px-6 py-2 rounded-xl text-sm font-semibold text-white"
          >
            Live Demo
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-cyan-400/60 transition-colors px-6 py-2 rounded-xl text-sm font-semibold text-white"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
            </svg>
            Code
          </a>
        )}
      </div>
    </div>
  );
}
