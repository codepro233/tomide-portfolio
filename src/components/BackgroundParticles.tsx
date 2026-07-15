'use client';
import { useEffect, useState } from 'react';

export default function BackgroundParticles() {
  const [particles, setParticles] = useState<{ width: number; left: number; top: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 20 }, () => ({
      width: Math.random() * 100,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-emerald-500/20"
          style={{
            width: `${p.width}px`,
            height: `${p.width}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
        />
      ))}
    </div>
  );
}