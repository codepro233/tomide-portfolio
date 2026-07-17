"use client";

import { motion } from "framer-motion";
import { skills } from "../data/skills";
import HexSkill from "../components/HexSkill";

const CATEGORY_ORDER = ["Frontend", "Backend", "AI / ML", "Tools"];

export default function Skills() {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: skills.filter((skill) => skill.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Skills
        </h2>

        <div className="space-y-16">
          {grouped.map((group) => (
            <div key={group.category}>
              <h3
                className="text-xl font-semibold text-center mb-8 text-cyan-400 uppercase tracking-wide"
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {group.items.map((skill, index) => (
                  <HexSkill
                    key={`${skill.name}-${index}`}
                    name={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
