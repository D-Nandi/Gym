"use client";

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const isProd = typeof window !== "undefined" && window.location.pathname.startsWith("/Gym");
const modelPath = isProd ? "/Gym/models/male.glb" : "/models/male.glb";

function OriginalHumanModel() {
  const groupRef = useRef<THREE.Group>(null!);
  const auraRingsRef = useRef<THREE.Group>(null!);
  const { scene } = useGLTF(modelPath);

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.castShadow = true;
          mesh.receiveShadow = true;
          
          // Premium disciplined athletic muscular material
          mesh.material = new THREE.MeshStandardMaterial({
            color: new THREE.Color("#18171C"),
            roughness: 0.32,
            metalness: 0.85,
            emissive: new THREE.Color("#200508"),
            emissiveIntensity: 0.25,
          });
        }
      });
    }
  }, [scene]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Slow disciplined turnaround rotation
      groupRef.current.rotation.y = Math.sin(t * 0.4) * 0.4;
      
      // Breathing & deep muscular contraction pulse
      const breath = 1 + Math.sin(t * 1.8) * 0.015;
      groupRef.current.scale.set(breath * 1.6, breath * 1.6, breath * 1.6);
    }

    if (auraRingsRef.current) {
      auraRingsRef.current.rotation.y = t * 0.5;
      auraRingsRef.current.rotation.z = Math.sin(t * 0.3) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.3, 0]}>
      {/* Real 3D Human Model */}
      <primitive object={scene} />

      {/* Discipline Energy Aura Orbit Rings */}
      <group ref={auraRingsRef} position={[0, 1.0, 0]}>
        <mesh rotation={[Math.PI / 2.5, 0, 0]}>
          <torusGeometry args={[0.9, 0.008, 8, 36]} />
          <meshStandardMaterial color="#E50914" emissive="#FF1E27" emissiveIntensity={1.2} />
        </mesh>
        <mesh rotation={[-Math.PI / 3, 0.4, 0]}>
          <torusGeometry args={[1.05, 0.006, 8, 36]} />
          <meshStandardMaterial color="#5C4E4E" emissive="#E50914" emissiveIntensity={0.6} />
        </mesh>
      </group>
    </group>
  );
}

// Preload the GLTF model for instantaneous rendering
if (typeof window !== "undefined") {
  useGLTF.preload(modelPath);
}

export default function SilhouetteScene() {
  return (
    <>
      <ambientLight intensity={0.35} />

      {/* Intense Crimson Discipline Rim Backlight */}
      <pointLight position={[0, 1.2, -2.8]} intensity={8.5} color="#E50914" distance={9} />

      {/* Front Sculpting Light for Chest & Muscle definition */}
      <directionalLight position={[0, 2.5, 3.5]} intensity={2.2} color="#FFFFFF" />

      {/* Left Silver Edge Light for Deltoid & Arm definition */}
      <directionalLight position={[-4, 1.5, 1]} intensity={3.0} color="#E2E8F0" />

      {/* Right Silver Edge Light */}
      <directionalLight position={[4, 1.5, 1]} intensity={2.8} color="#CBD5E1" />

      {/* Under-glow for lower quads and core */}
      <pointLight position={[0, -1.8, 1.5]} intensity={2.0} color="#E50914" distance={5} />

      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3}>
        <OriginalHumanModel />
      </Float>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 1.7}
        autoRotate={false}
        rotateSpeed={0.8}
      />
    </>
  );
}
