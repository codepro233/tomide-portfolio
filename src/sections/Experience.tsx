"use client"

import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section className="py-32">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold mb-20 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experience.map((item) => (
            <div
              key={item.year}
              className="
              border-l-2
              border-cyan-400
              pl-8
              "
            >
              <h3 className="text-cyan-400">
                {item.year}
              </h3>

              <p className="text-2xl mt-3">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}