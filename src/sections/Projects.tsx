"use client";

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {

  const [category, setCategory] =
    useState("All");

  const categories = [
    "All",
    "AI",
    "Dashboard",
    "Automation",
  ];

  const filtered =
    category === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === category
        );

  return (
    <section
      id="projects"
      className="py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-4xl
          md:text-6xl
          text-center
          font-bold
          mb-12
          "
        >
          Projects
        </h2>

        {/* FILTER BUTTONS */}

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          mb-12
          "
        >
          {categories.map((item) => (
            <button
              key={item}
              onClick={() =>
                setCategory(item)
              }
              className="
              px-5
              py-3
              rounded-full
              bg-white/10
              border
              border-white/20
              "
            >
              {item}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}