"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateMobileStatus = () => setIsMobile(window.innerWidth < 768);
    updateMobileStatus(); // Initial check

    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateMobileStatus); // Update on resize

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateMobileStatus);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-cyan-400/40 blur-md pointer-events-none z-50"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
    />
  );
};

export default Cursor;
