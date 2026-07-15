import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const { title, image, description, liveUrl, tech, caseStudy } = project;

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/" className="text-sm text-muted hover:text-cyan-400 transition-colors">
        ← Back to projects
      </Link>

      <h1
        className="mt-6 text-4xl md:text-5xl font-bold"
        style={{ color: "var(--fg)" }}
      >
        {title}
      </h1>

      <p className="mt-4 text-lg text-muted">{description}</p>

      <div className="mt-8 overflow-hidden rounded-3xl card">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={700}
          className="w-full h-80 object-cover"
        />
      </div>

      {caseStudy && (
        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
              The Problem
            </h2>
            <p className="mt-3 text-muted leading-relaxed">{caseStudy.problem}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
              The Solution
            </h2>
            <p className="mt-3 text-muted leading-relaxed">{caseStudy.solution}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
              Impact
            </h2>
            <p className="mt-3 text-muted leading-relaxed italic">{caseStudy.impact}</p>
          </section>
        </div>
      )}

      {tech && tech.length > 0 && (
        <section className="mt-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
            Stack
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="text-sm px-3 py-1 rounded-full border border-cyan-400/30 text-cyan-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {liveUrl && (
        <div className="mt-12">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-400 transition-colors px-6 py-3 rounded-xl text-sm font-semibold text-white"
          >
            View Live Demo →
          </a>
        </div>
      )}
    </div>
  );
}
