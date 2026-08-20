"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

interface CanvasContainerProps {
  children: React.ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov?: number };
  fallback?: React.ReactNode;
}

export default function CanvasContainer({
  children,
  className = "w-full h-full",
  camera = { position: [0, 0, 5], fov: 45 },
  fallback,
}: CanvasContainerProps) {
  const [hasWebGL, setHasWebGL] = useState<boolean | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  if (hasWebGL === false) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-neutral-950/60 rounded-2xl border border-[#5C4E4E]/30 text-[#988686] text-sm`}
      >
        {fallback || (
          <div className="text-center p-6">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#5C4E4E]/20 flex items-center justify-center text-[#E50914]">
              ⚡
            </div>
            <p className="font-medium text-[#D1D0D0]">3D Performance View</p>
            <p className="text-xs text-[#988686] mt-1">High-performance mode active</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${className} relative overflow-hidden`}>
      <Canvas
        camera={camera}
        dpr={[1, 2]} // Balanced DPR for performance
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
