"use client";

import { useGLTF, Float } from "@react-three/drei";

export default function Laptop() {
  const { scene } = useGLTF("/models/gaming_laptop.glb");

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <primitive
        object={scene}
        scale={2}
      />
    </Float>
  );
}