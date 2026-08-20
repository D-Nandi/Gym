"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CheckCircle2, Rotate3d, Layers, Wind, Droplet, Shield } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";

const CanvasContainer = dynamic(() => import("./3d/CanvasContainer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 flex items-center justify-center bg-black/40">
      <div className="w-8 h-8 rounded-full border-2 border-[#E50914] border-t-transparent animate-spin" />
    </div>
  ),
});

const EquipmentScene = dynamic(() => import("./3d/EquipmentScene"), {
  ssr: false,
});

type CategoryId = "strength-zone" | "cardio-zone" | "free-weights" | "functional-zone";

export default function Equipment() {
  const [activeTab, setActiveTab] = useState<CategoryId>("strength-zone");

  const currentCategory =
    GYM_DATA.equipmentCategories.find((c) => c.id === activeTab) ||
    GYM_DATA.equipmentCategories[0];

  return (
    <section
      id="equipment"
      className="relative w-full py-24 bg-black border-t border-[#2A2626]/40 overflow-hidden"
    >
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#5C4E4E]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#E50914]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A181C] border border-[#5C4E4E]/40 text-xs font-bold tracking-widest uppercase text-[#D1D0D0]">
            <span className="w-2 h-2 rounded-full bg-[#E50914]" />
            GYM FLOOR & MACHINES
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            BUILT TO <br className="sm:hidden" />
            <span className="silver-metallic-text">PERFORM</span>
            <span className="text-[#E50914]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#988686]">
            Every machine, barbell, and cable station is selected for heavy progressive resistance, biomechanical alignment, and athlete safety.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {GYM_DATA.equipmentCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as CategoryId)}
                className={`py-3 px-5 sm:px-6 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "crimson-metallic-button text-white"
                    : "noir-outline-button text-[#988686] hover:text-white"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Split Showcase (3D Viewer on Left/Top, Specs on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 3D Model Visualizer (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-lg gothic-card rounded-3xl p-4 border border-[#5C4E4E]/40 overflow-hidden shadow-2xl">
              
              {/* Interactive badge */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-[#5C4E4E]/50 text-[11px] font-semibold text-[#D1D0D0] backdrop-blur-md">
                <Rotate3d className="w-3.5 h-3.5 text-[#E50914]" />
                <span>Interactive 3D Apparatus</span>
              </div>

              <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded bg-[#1A181C] border border-[#5C4E4E]/30 text-[10px] font-mono text-[#988686] uppercase">
                {currentCategory.title}
              </div>

              {/* 3D Canvas */}
              <CanvasContainer
                camera={{ position: [0, 0, 5], fov: 45 }}
                className="w-full h-full"
              >
                <EquipmentScene category={activeTab} />
              </CanvasContainer>

              {/* Bottom subtitle note */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-black/85 border border-[#5C4E4E]/40 backdrop-blur-md flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#E50914]" />
                  <span className="text-white font-bold">{currentCategory.subtitle}</span>
                </div>
                <span className="text-[10px] text-[#988686] font-mono">PETER&apos;S SPECS</span>
              </div>
            </div>
          </div>

          {/* Specs & Inventory Description (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#E50914] uppercase tracking-widest">
                ZONE SPECIFICATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                {currentCategory.title}
              </h3>
              <p className="text-sm text-[#D1D0D0] leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            {/* List of apparatus / items */}
            <div className="space-y-3">
              {currentCategory.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30 flex items-start justify-between gap-4 transition hover:border-[#E50914]/50"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E50914] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-white uppercase">{item.name}</div>
                      <div className="text-xs text-[#988686] mt-0.5">{item.specs}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#5C4E4E] shrink-0">
                    #{idx + 1}
                  </span>
                </div>
              ))}
            </div>

            {/* Amenities Highlights Strip */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#141318] border border-[#5C4E4E]/30 text-center">
                <Wind className="w-5 h-5 text-[#E50914] mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Full A/C Floor</div>
                <div className="text-[10px] text-[#988686]">Climate Controlled</div>
              </div>

              <div className="p-3 rounded-xl bg-[#141318] border border-[#5C4E4E]/30 text-center">
                <Droplet className="w-5 h-5 text-[#E50914] mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Steam Bath</div>
                <div className="text-[10px] text-[#988686]">Heat Recovery</div>
              </div>

              <div className="p-3 rounded-xl bg-[#141318] border border-[#5C4E4E]/30 text-center">
                <Shield className="w-5 h-5 text-[#E50914] mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Clean Lockers</div>
                <div className="text-[10px] text-[#988686]">Hygienic Facility</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
