"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface EquipmentSceneProps {
  category: "strength-zone" | "cardio-zone" | "free-weights" | "functional-zone";
}

// 3D Cast Iron Kettlebell (Functional)
function KettlebellModel() {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={meshRef} position={[0, -0.4, 0]}>
      {/* Heavy Spherical Bell Body */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshStandardMaterial
          color="#151419"
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Flat Bottom Ring */}
      <mesh position={[0, -1.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.2, 32]} />
        <meshStandardMaterial color="#0A0A0C" roughness={0.5} metalness={0.7} />
      </mesh>

      {/* Crimson Color Ring Band */}
      <mesh position={[0, 0.3, 0]}>
        <torusGeometry args={[1.28, 0.08, 16, 48]} />
        <meshStandardMaterial color="#E50914" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* Handle Arch (Torus Segment) */}
      <mesh position={[0, 1.4, 0]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.75, 0.16, 24, 32, Math.PI]} />
        <meshStandardMaterial
          color="#D1D0D0"
          roughness={0.2}
          metalness={0.95}
        />
      </mesh>

      {/* Handle Base Stems */}
      <mesh position={[-0.75, 0.9, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.9, 24]} />
        <meshStandardMaterial color="#D1D0D0" roughness={0.2} metalness={0.95} />
      </mesh>
      <mesh position={[0.75, 0.9, 0]}>
        <cylinderGeometry args={[0.16, 0.16, 0.9, 24]} />
        <meshStandardMaterial color="#D1D0D0" roughness={0.2} metalness={0.95} />
      </mesh>
    </group>
  );
}

// 3D Olympic Weight Plate Model (Strength)
function OlympicPlateModel() {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.45;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Main Plate Disk */}
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[1.8, 1.8, 0.35, 48]} />
        <meshStandardMaterial color="#17161B" roughness={0.35} metalness={0.8} />
      </mesh>

      {/* Outer Crimson Bumper Rim */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.72, 0.18, 16, 48]} />
        <meshStandardMaterial color="#E50914" roughness={0.25} metalness={0.9} />
      </mesh>

      {/* Inner Recessed Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.1, 0.12, 16, 36]} />
        <meshStandardMaterial color="#5C4E4E" roughness={0.4} metalness={0.85} />
      </mesh>

      {/* Stainless Steel Center Sleeve Hub */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.42, 32]} />
        <meshStandardMaterial color="#D1D0D0" roughness={0.15} metalness={0.98} />
      </mesh>

      {/* Center Bore Hole */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.26, 0.26, 0.46, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  );
}

// 3D Cardio Flywheel Dial
function CardioFlywheelModel() {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z -= delta * 1.2;
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0.4, 0.3, 0]}>
      <group ref={meshRef}>
        {/* Outer Heavy Steel Flywheel Ring */}
        <mesh>
          <torusGeometry args={[1.6, 0.22, 24, 48]} />
          <meshStandardMaterial color="#D1D0D0" roughness={0.15} metalness={0.95} />
        </mesh>

        {/* Magnetic Brake Perimeter Ring */}
        <mesh>
          <torusGeometry args={[1.35, 0.12, 16, 48]} />
          <meshStandardMaterial color="#E50914" roughness={0.3} metalness={0.85} />
        </mesh>

        {/* Inner Hub */}
        <mesh>
          <cylinderGeometry args={[0.5, 0.5, 0.3, 32]} />
          <meshStandardMaterial color="#141418" roughness={0.4} metalness={0.8} />
        </mesh>

        {/* 6 Spokes */}
        {[0, 60, 120, 180, 240, 300].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          return (
            <mesh
              key={deg}
              position={[Math.cos(rad) * 0.8, Math.sin(rad) * 0.8, 0]}
              rotation={[0, 0, rad + Math.PI / 2]}
            >
              <cylinderGeometry args={[0.06, 0.06, 1.2, 16]} />
              <meshStandardMaterial color="#988686" roughness={0.25} metalness={0.9} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

// 3D Free Weights Hex Dumbbell
function FreeWeightModel() {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.15;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Handle */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.16, 0.16, 2.4, 24]} />
        <meshStandardMaterial color="#D1D0D0" roughness={0.15} metalness={0.98} />
      </mesh>
      {/* Hex ends */}
      <mesh position={[-1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.0, 1.0, 0.8, 6]} />
        <meshStandardMaterial color="#18171C" roughness={0.35} metalness={0.8} />
      </mesh>
      <mesh position={[-1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.02, 1.02, 0.12, 6]} />
        <meshStandardMaterial color="#E50914" roughness={0.3} metalness={0.9} />
      </mesh>
      <mesh position={[1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.0, 1.0, 0.8, 6]} />
        <meshStandardMaterial color="#18171C" roughness={0.35} metalness={0.8} />
      </mesh>
      <mesh position={[1.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.02, 1.02, 0.12, 6]} />
        <meshStandardMaterial color="#E50914" roughness={0.3} metalness={0.9} />
      </mesh>
    </group>
  );
}

export default function EquipmentScene({ category }: EquipmentSceneProps) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 5, 4]} intensity={2.0} color="#FFFFFF" />
      <pointLight position={[-4, -3, 2]} intensity={3} color="#E50914" distance={10} />
      <pointLight position={[3, -2, -3]} intensity={1.5} color="#988686" distance={8} />

      {category === "strength-zone" && <OlympicPlateModel />}
      {category === "cardio-zone" && <CardioFlywheelModel />}
      {category === "free-weights" && <FreeWeightModel />}
      {category === "functional-zone" && <KettlebellModel />}

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </>
  );
}
