"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectGallery() {
  const [category, setCategory] =
    useState("All");

  const filtered =
    category === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category === category
        );

  const categories = [
    "All",
    "AI",
    "Dashboard",
    "Automation",
  ];

  return (
    <section className="py-24">
      <h2 className="text-5xl text-center mb-10">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() =>
              setCategory(item)
            }
            className="px-4 py-2 rounded-xl bg-white/10"
          >
            {item}
          </button>
        ))}
      </div>

      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      ">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
          >
            <div className="
              bg-white/10
              rounded-3xl
              p-6
              hover:scale-105
              transition
            ">
              <h3>{project.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}