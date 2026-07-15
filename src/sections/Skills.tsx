"use client";

import { motion } from "framer-motion";
import { skills } from "../data/skills";
import HexSkill from "../components/HexSkill";

export default function Skills() {
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

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <HexSkill
              key={`${skill.name}-${index}`} // Using index as a fallback for unique key
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
