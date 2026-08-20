"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating dust / chalk particles in the gym
function DustParticles({ count = 75 }: { count?: number }) {
  const points = useRef<THREE.Points>(null!);

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sc = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      sc[i] = Math.random() * 0.04 + 0.01;
    }
    return [pos, sc];
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y += delta * 0.03;
      points.current.rotation.x += delta * 0.015;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#D1D0D0"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// 3D Olympic Weight Plate
function WeightPlate({
  position,
  radius = 1.4,
  depth = 0.22,
  color = "#121114",
  rimColor = "#5C4E4E",
}: {
  position: [number, number, number];
  radius?: number;
  depth?: number;
  color?: string;
  rimColor?: string;
}) {
  return (
    <group position={position} rotation={[0, 0, Math.PI / 2]}>
      {/* Outer Plate Cylinder */}
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[radius, radius, depth, 48]} />
        <meshStandardMaterial
          color={color}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Outer Raised Rim Ring */}
      <mesh>
        <torusGeometry args={[radius * 0.92, depth * 0.45, 16, 48]} />
        <meshStandardMaterial
          color={rimColor}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Inner Hub Ring */}
      <mesh>
        <torusGeometry args={[radius * 0.35, depth * 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#988686"
          roughness={0.25}
          metalness={0.95}
        />
      </mesh>
    </group>
  );
}

// Complete 3D Olympic Barbell Rig
function BarbellRig() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.pointer.x * 0.35;
    const mouseY = state.pointer.y * 0.25;

    if (group.current) {
      // Gentle breathing rotation + interactive mouse parallax
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t * 0.4) * 0.08 + mouseX * 0.6 + 0.3,
        0.05
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.cos(t * 0.3) * 0.04 - mouseY * 0.4,
        0.05
      );
      group.current.position.y = Math.sin(t * 0.6) * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      {/* Center Bar (Steel Knurled shaft) */}
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 7.5, 32]} />
        <meshStandardMaterial
          color="#D1D0D0"
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>

      {/* Left Collar Sleeves */}
      <mesh position={[-2.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.2, 32]} />
        <meshStandardMaterial color="#988686" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Left Plates Stack (45lbs / 20kg + 25lbs) */}
      <WeightPlate position={[-2.55, 0, 0]} radius={1.4} depth={0.2} color="#151418" rimColor="#5C4E4E" />
      <WeightPlate position={[-2.78, 0, 0]} radius={1.4} depth={0.2} color="#151418" rimColor="#5C4E4E" />
      <WeightPlate position={[-3.0, 0, 0]} radius={1.15} depth={0.18} color="#19181C" rimColor="#E50914" />
      <WeightPlate position={[-3.2, 0, 0]} radius={0.9} depth={0.15} color="#1C1B20" rimColor="#988686" />

      {/* Left Spring Collar Clip */}
      <mesh position={[-3.32, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.12, 0.04, 16, 24]} />
        <meshStandardMaterial color="#D1D0D0" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Right Collar Sleeves */}
      <mesh position={[2.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.2, 32]} />
        <meshStandardMaterial color="#988686" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Right Plates Stack (45lbs / 20kg + 25lbs) */}
      <WeightPlate position={[2.55, 0, 0]} radius={1.4} depth={0.2} color="#151418" rimColor="#5C4E4E" />
      <WeightPlate position={[2.78, 0, 0]} radius={1.4} depth={0.2} color="#151418" rimColor="#5C4E4E" />
      <WeightPlate position={[3.0, 0, 0]} radius={1.15} depth={0.18} color="#19181C" rimColor="#E50914" />
      <WeightPlate position={[3.2, 0, 0]} radius={0.9} depth={0.15} color="#1C1B20" rimColor="#988686" />

      {/* Right Spring Collar Clip */}
      <mesh position={[3.32, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.12, 0.04, 16, 24]} />
        <meshStandardMaterial color="#D1D0D0" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Heavy Steel J-Hooks / Rack Support Bars in background */}
      <group position={[0, -1.2, -1.2]}>
        {/* Left Upright */}
        <mesh position={[-2.1, 0.6, 0]}>
          <boxGeometry args={[0.2, 3.2, 0.2]} />
          <meshStandardMaterial color="#0D0D10" metalness={0.85} roughness={0.5} />
        </mesh>
        {/* Right Upright */}
        <mesh position={[2.1, 0.6, 0]}>
          <boxGeometry args={[0.2, 3.2, 0.2]} />
          <meshStandardMaterial color="#0D0D10" metalness={0.85} roughness={0.5} />
        </mesh>
        {/* Top Crossbar */}
        <mesh position={[0, 2.1, 0]}>
          <boxGeometry args={[4.4, 0.16, 0.16]} />
          <meshStandardMaterial color="#0D0D10" metalness={0.85} roughness={0.5} />
        </mesh>
      </group>
    </group>
  );
}

export default function HeroScene() {
  return (
    <>
      {/* Studio Lighting */}
      <ambientLight intensity={0.3} />

      {/* Dramatic Top White Spotlight on knurled steel */}
      <spotLight
        position={[4, 8, 5]}
        angle={0.45}
        penumbra={0.8}
        intensity={2.2}
        color="#FFFFFF"
        castShadow
      />

      {/* Crimson Ambient Glow from below / side */}
      <pointLight position={[-4, -2, 2]} intensity={2.5} color="#E50914" distance={15} />

      {/* Gothic Noir Warm Taupe Rim Light from behind */}
      <directionalLight position={[0, 4, -5]} intensity={1.4} color="#988686" />

      {/* Front Fill Light */}
      <directionalLight position={[-2, 1, 4]} intensity={0.6} color="#D1D0D0" />

      {/* Barbell Assembly */}
      <BarbellRig />

      {/* Atmospheric Particles */}
      <DustParticles count={65} />
    </>
  );
}
