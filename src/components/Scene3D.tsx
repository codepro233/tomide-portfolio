"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  Stars,
} from "@react-three/drei";
import Laptop from "./Laptop";

function FloatingSphere() {
  return (
    <Float speed={2} rotationIntensity={2}>
      <Sphere args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={2}
        />
        </Sphere>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1.5} />

      <pointLight
        position={[3, 3, 3]}
        intensity={20}
      />

       <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
      /> 
      <Laptop/>

       <FloatingSphere />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1}
    
        
      />
    </Canvas>
  );
}