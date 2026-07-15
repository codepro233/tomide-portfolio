"use client";

import { useEffect, useRef } from "react";

// Wireframe spinning globe drawn on canvas
// Used in the Contact section
export default function Globe() {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current, ctx = c.getContext("2d");
    const W = c.width = 260, H = c.height = 260;
    const cx = 130, cy = 130, R = 100;
    let angle = 0, raf;

    // Projects a lat/lon point onto 2D screen
    const project = (lat, lon, rot) => {
      const phi   = (90 - lat) * Math.PI / 180;
      const theta = (lon + rot) * Math.PI / 180;
      return {
        x: cx + R * Math.sin(phi) * Math.cos(theta),
        y: cy - R * Math.cos(phi),
        z: R * Math.sin(phi) * Math.sin(theta), // z tells us if it's on front or back
      };
    };

    const lats = [-60, -30, 0, 30, 60];
    const lons = Array.from({ length: 12 }, (_, i) => i * 30);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Outer glow
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
      g.addColorStop(0, "rgba(16,185,129,0.04)");
      g.addColorStop(1, "rgba(16,185,129,0)");
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = "rgba(16,185,129,0.2)"; ctx.lineWidth = .7; ctx.stroke();

      // Latitude lines
      lats.forEach(lat => {
        ctx.beginPath(); let first = true;
        for (let lo = 0; lo <= 360; lo += 3) {
          const p = project(lat, lo, angle);
          if (p.z >= 0) { first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); first = false; }
          else first = true; // break line when going to back of globe
        }
        ctx.strokeStyle = "rgba(16,185,129,0.15)"; ctx.lineWidth = .5; ctx.stroke();
      });

      // Longitude lines
      lons.forEach(lon => {
        ctx.beginPath(); let first = true;
        for (let la = -90; la <= 90; la += 3) {
          const p = project(la, lon, angle);
          if (p.z >= 0) { first ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y); first = false; }
          else first = true;
        }
        ctx.strokeStyle = "rgba(16,185,129,0.15)"; ctx.lineWidth = .5; ctx.stroke();
      });

      // Dots at grid intersections
      lats.forEach(lat => lons.forEach(lon => {
        const p = project(lat, lon, angle);
        if (p.z >= 0) {
          ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(16,185,129,0.55)"; ctx.fill();
        }
      }));

      angle += .22;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas ref={ref} style={{ borderRadius:"50%" }} />
  );
}
