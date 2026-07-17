"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [category, setCategory] = useState("All");

  const categories = ["All", "AI", "Dashboard", "Automation"];

  const featuredProjects = projects.filter((p) => p.featured);

  const filtered =
    category === "All"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center font-bold mb-6">
          Projects
        </h2>

        {/* FEATURED PROJECTS */}
        {featuredProjects.length > 0 && (
          <div className="mb-24">
            <h3 className="text-lg font-semibold text-center text-cyan-400 uppercase tracking-wide mb-10">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </div>
        )}

        {/* ALL PROJECTS */}
        <h3 className="text-lg font-semibold text-center text-muted uppercase tracking-wide mb-8">
          All Projects
        </h3>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`
                px-5
                py-3
                rounded-full
                border
                border-white/20
                transition-colors
                ${category === item ? "bg-cyan-500 text-white" : "bg-white/10"}
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
