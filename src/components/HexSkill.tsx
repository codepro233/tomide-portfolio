"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
  icon: string;
}

export default function HexSkill({ name, icon }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      className="hex flex flex-col items-center justify-center"
      key={`${name}-${icon}`} // Ensuring unique key
    >
      <span className="text-3xl">{icon}</span>
      <h3 className="mt-3 font-semibold">{name}</h3>
    </motion.div>
  );
}
