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
}

export default function ProjectCard({ slug, title, image, description, liveUrl }: Props) {
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
            <h3 className="text-2xl font-bold" style={{ color: "var(--fg)" }}>{title}</h3>
            <p className="mt-4 text-muted">{description}</p>
          </div>
        </motion.div>
      </Link>

      {liveUrl && (
        <div className="px-6 pb-6">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition-colors px-6 py-2 rounded-xl text-sm font-semibold text-white"
          >
            Live Demo
          </a>
        </div>
      )}
    </div>
  );
}