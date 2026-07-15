// "use client";

// import { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Float, OrbitControls, Stars, Text } from "@react-three/drei";

// /* ─────────────────────────────────────────
//    OUTER CUBE — largest, slowest rotation
// ───────────────────────────────────────── */
// function OuterCube() {
//   const ref = useRef();

//   // useFrame runs every animation frame (60fps)
//   // This is how you animate in R3F — like useEffect but for 3D
//   useFrame((state, delta) => {
//     ref.current.rotation.x += delta * 0.3;  // rotate on X axis
//     ref.current.rotation.y += delta * 0.5;  // rotate on Y axis
//   });

//   return (
//     <mesh ref={ref}>
//       {/* shape — 2.2 x 2.2 x 2.2 box */}
//       <boxGeometry args={[2.2, 2.2, 2.2]} />
//       {/* surface — wireframe so you can see through it */}
//       <meshStandardMaterial
//         color="#10b981"
//         wireframe={true}
//         transparent={true}
//         opacity={0.35}
//       />
//     </mesh>
//   );
// }

// /* ─────────────────────────────────────────
//    MID CUBE — medium, opposite rotation
// ───────────────────────────────────────── */
// function MidCube() {
//   const ref = useRef();

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta * 0.4;  // negative = opposite direction
//     ref.current.rotation.y += delta * 0.7;
//     ref.current.rotation.z += delta * 0.2;
//   });

//   return (
//     <mesh ref={ref}>
//       <boxGeometry args={[1.5, 1.5, 1.5]} />
//       <meshStandardMaterial
//         color="#10b981"
//         wireframe={true}
//         transparent={true}
//         opacity={0.5}
//       />
//     </mesh>
//   );
// }

// /* ─────────────────────────────────────────
//    INNER CUBE — smallest, fastest rotation
// ───────────────────────────────────────── */
// function InnerCube() {
//   const ref = useRef();

//   useFrame((state, delta) => {
//     ref.current.rotation.x += delta * 0.8;
//     ref.current.rotation.y -= delta * 1.0;
//     ref.current.rotation.z += delta * 0.5;
//   });

//   return (
//     <mesh ref={ref}>
//       <boxGeometry args={[0.8, 0.8, 0.8]} />
//       {/* solid material with emissive glow for the inner cube */}
//       <meshStandardMaterial
//         color="white"
//         emissive="#10b981"
//         emissiveIntensity={0.8}
//         transparent={true}
//         opacity={0.6}
//       />
//     </mesh>
//   );
// }

// /* ─────────────────────────────────────────
//    ORBITING DOT — small sphere that orbits
// ───────────────────────────────────────── */
// function OrbitDot() {
//   const ref = useRef();

//   useFrame((state) => {
//     // Math.sin/cos creates circular motion around the center
//     const t = state.clock.elapsedTime;
//     ref.current.position.x = Math.cos(t * 0.8) * 2.8;
//     ref.current.position.y = Math.sin(t * 0.8) * 0.5;
//     ref.current.position.z = Math.sin(t * 0.8) * 2.8;
//   });

//   return (
//     <mesh ref={ref}>
//       <sphereGeometry args={[0.08, 16, 16]} />
//       <meshStandardMaterial
//         color="#10b981"
//         emissive="#10b981"
//         emissiveIntensity={2}
//       />
//     </mesh>
//   );
// }

// /* ─────────────────────────────────────────
//    RING — flat torus ring that tilts
// ───────────────────────────────────────── */
// function Ring({ radius, speed, tiltX }) {
//   const ref = useRef();

//   useFrame((state, delta) => {
//     ref.current.rotation.z += delta * speed;
//   });

//   return (
//     <mesh ref={ref} rotation={[tiltX, 0, 0]}>
//       {/* torusGeometry args: [radius, tube thickness, segments, segments] */}
//       <torusGeometry args={[radius, 0.01, 8, 80]} />
//       <meshStandardMaterial
//         color="#10b981"
//         transparent={true}
//         opacity={0.2}
//       />
//     </mesh>
//   );
// }

// /* ─────────────────────────────────────────
//    FLOATING LABEL — text that hovers on a face
// ───────────────────────────────────────── */
// function FaceLabel({ text, position }) {
//   return (
//     // Float makes it gently bob up and down
//     <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
//       <Text
//         position={position}
//         fontSize={0.18}
//         color="#10b981"
//         anchorX="center"
//         anchorY="middle"
//         letterSpacing={0.1}
//       >
//         {text}
//       </Text>
//     </Float>
//   );
// }

// /* ─────────────────────────────────────────
//    MAIN SCENE — the Canvas wraps everything
//    Canvas = the 3D viewport/renderer
// ───────────────────────────────────────── */
// export default function CubeScene() {
//   return (
//     <div style={{
//       position: "absolute", right: "4vw", top: "50%",
//       transform: "translateY(-50%)",
//       width: 400, height: 400,
//       zIndex: 4, pointerEvents: "none",
//     }}>
//       <Canvas
//         camera={{ position: [0, 0, 6], fov: 50 }}  // camera position and field of view
//         style={{ background: "transparent" }}
//       >
//         {/* Lights — without these everything would be black */}
//         <ambientLight intensity={0.3} />
//         <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
//         <pointLight position={[-10, -10, -10]} intensity={0.5} color="#059669" />

//         {/* Star field background */}
//         <Stars
//           radius={50}
//           depth={30}
//           count={300}
//           factor={2}
//           fade={true}
//           speed={0.5}
//         />

//         {/* Three nested cubes */}
//         <OuterCube />
//         <MidCube />
//         <InnerCube />
        

//         {/* Three tilted orbit rings */}
//         <Ring radius={2.8} speed={0.4}  tiltX={1.2} />
//         <Ring radius={2.3} speed={-0.6} tiltX={0.7} />
//         <Ring radius={3.3} speed={0.25} tiltX={1.8} />

//         {/* Orbiting dot */}
//         <OrbitDot />

//         {/* Floating tech labels */}
//         <FaceLabel text="REACT"  position={[ 0,    1.6,  0   ]} />
//         <FaceLabel text="JS"     position={[-1.6,  0,    0   ]} />
//         <FaceLabel text="CSS3"   position={[ 1.6,  0,    0   ]} />
//         <FaceLabel text="HTML5"  position={[ 0,   -1.6,  0   ]} />
//         <FaceLabel text="UI/UX"  position={[ 0,    0,    1.6 ]} />
//         <FaceLabel text="GIT"    position={[ 0,    0,   -1.6 ]} />

//         {/* OrbitControls lets the user drag to rotate — pointer-events needs to be auto */}
//       </Canvas>
//     </div>
//   );
// }
