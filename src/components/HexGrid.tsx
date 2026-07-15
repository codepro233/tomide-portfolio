// "use client";

// // 3D spinning hexagon grid — used in the Skills section
// const techHexes = [
//   { label: "React",   top: "8%",  left: "36%" },
//   { label: "JS",      top: "32%", left: "8%"  },
//   { label: "CSS3",    top: "32%", left: "64%" },
//   { label: "HTML5",   top: "56%", left: "8%"  },
//   { label: "Figma",   top: "56%", left: "64%" },
//   { label: "Tailwind",top: "76%", left: "36%" },
// ];

// export default function HexGrid() {
//   return (
//     <div style={{ perspective: 700, display:"flex", alignItems:"center", justifyContent:"center", height: 260 }}>
//       <style>{`
//         .hex-grid{transform-style:preserve-3d;animation:hexSpin 22s linear infinite;position:relative;width:180px;height:180px}
//         @keyframes hexSpin{from{transform:rotateX(28deg) rotateY(0deg)}to{transform:rotateX(28deg) rotateY(360deg)}}
//         .hex{position:absolute;width:52px;height:60px;clip-path:polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);display:flex;align-items:center;justify-content:center;font-size:.48rem;letter-spacing:.07em;color:var(--em);background:rgba(16,185,129,.07);animation:hexP var(--hp,4s) ease-in-out infinite;animation-delay:var(--hd,0s)}
//         @keyframes hexP{0%,100%{background:rgba(16,185,129,.05)}50%{background:rgba(16,185,129,.18)}}
//       `}</style>

//       <div className="hex-grid">
//         {techHexes.map((h, i) => (
//           <div
//             key={h.label}
//             className="hex"
//             style={{ top: h.top, left: h.left, "--hp": `${3.5 + i * .5}s`, "--hd": `${i * .3}s` }}
//           >
//             {h.label}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
