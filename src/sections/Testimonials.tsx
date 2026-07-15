"use client";

import { testimonials } from "@/data/testimonials";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
      py-24
      px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="
          text-4xl
          font-bold
          text-center
          mb-14
          "
        >
          Testimonials
        </h2>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          "
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="
              rounded-3xl
              p-8
              bg-white/10
              border
              border-white/20
              backdrop-blur-xl
              hover:border-cyan-400/50
              transition
              "
            >
              <p
                className="
                text-gray-300
                leading-8
                mb-6
                "
              >
                "{item.text}"
              </p>

              <div>
                <h3 className="font-bold text-xl">
                  {item.name}
                </h3>

                <span className="text-cyan-400">
                  {item.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}