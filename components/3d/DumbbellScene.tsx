"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Hexagonal Dumbbell Head Component
function HexHead({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Hexagonal Prism Base (6-sided cylinder) */}
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[1.25, 1.25, 0.9, 6]} />
        <meshStandardMaterial
          color="#161519"
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Red Accent Rim Ring */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.27, 1.27, 0.15, 6]} />
        <meshStandardMaterial
          color="#E50914"
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Metallic Bevel */}
      <mesh position={[position[0] > 0 ? 0.35 : -0.35, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.7, 0.7, 0.25, 6]} />
        <meshStandardMaterial
          color="#5C4E4E"
          roughness={0.3}
          metalness={0.85}
        />
      </mesh>
    </group>
  );
}

function InteractiveDumbbell() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      // Gentle floating sine motion
      group.current.position.y = Math.sin(t * 1.2) * 0.12;
      group.current.rotation.z = Math.sin(t * 0.8) * 0.05 + 0.2;
    }
  });

  return (
    <group ref={group} rotation={[0.4, 0.6, 0.2]}>
      {/* Center Knurled Steel Handle */}
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.18, 0.18, 2.6, 32]} />
        <meshStandardMaterial
          color="#D1D0D0"
          metalness={0.98}
          roughness={0.15}
        />
      </mesh>

      {/* Handle Knurling Pattern Grooves */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.19, 0.19, 1.8, 32]} />
        <meshStandardMaterial
          color="#988686"
          metalness={0.9}
          roughness={0.4}
          wireframe={true}
        />
      </mesh>

      {/* Left Hex Head */}
      <HexHead position={[-1.75, 0, 0]} />

      {/* Right Hex Head */}
      <HexHead position={[1.75, 0, 0]} />
    </group>
  );
}

export default function DumbbellScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      
      {/* Main Crisp White Key Light */}
      <directionalLight position={[4, 6, 5]} intensity={2.2} color="#FFFFFF" castShadow />

      {/* Gothic Noir Crimson Accent Rim Light */}
      <pointLight position={[-4, -3, -2]} intensity={3.5} color="#E50914" distance={10} />

      {/* Soft Taupe Fill */}
      <pointLight position={[2, -3, 4]} intensity={1.2} color="#988686" distance={8} />

      <InteractiveDumbbell />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={true}
        autoRotateSpeed={1.6}
        maxPolarAngle={Math.PI / 1.4}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}
