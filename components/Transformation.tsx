"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Flame,
  Target,
  ShieldCheck,
  Zap,
  ArrowRight,
  Activity,
  Eye,
  Crosshair,
  Info,
} from "lucide-react";
import { getAssetPath } from "@/lib/utils";

type ViewType = "front" | "side" | "three_quarter" | "back";

interface MusclePin {
  id: string;
  name: string;
  subtitle: string;
  intensity: "primary" | "secondary" | "tertiary";
  top: string;
  left: string;
  desc: string;
}

const FRONT_PINS: MusclePin[] = [
  {
    id: "delts",
    name: "DELTOIDS",
    subtitle: "Capped Boulder Shoulders",
    intensity: "primary",
    top: "23%",
    left: "30%",
    desc: "Anterior & lateral deltoid heads built with progressive overhead pressing and strict lateral raises.",
  },
  {
    id: "chest",
    name: "PECTORALS",
    subtitle: "Upper & Lower Chest Plates",
    intensity: "primary",
    top: "28%",
    left: "52%",
    desc: "Dense, striated pectoral slabs developed through heavy incline bench pressing and cable fly crossovers.",
  },
  {
    id: "abs",
    name: "8-PACK CORE",
    subtitle: "Rectus Abdominis & Serratus",
    intensity: "primary",
    top: "37%",
    left: "48%",
    desc: "Deep intercostal grooves and shredded abdominal blocks forged by progressive resistance and low body fat.",
  },
  {
    id: "arms",
    name: "BICEPS & FOREARMS",
    subtitle: "Vascular Athletic Arms",
    intensity: "secondary",
    top: "35%",
    left: "70%",
    desc: "Peaked biceps brachii with visible vascular striations and high-grip endurance.",
  },
  {
    id: "quads",
    name: "QUADS (TEARDROP)",
    subtitle: "Vastus Medialis & Lateralis",
    intensity: "primary",
    top: "65%",
    left: "42%",
    desc: "Deep quad sweep separation and teardrop hypertrophy forged under heavy Olympic squat stations.",
  },
  {
    id: "calves",
    name: "DIAMOND CALVES",
    subtitle: "Gastrocnemius Muscle",
    intensity: "tertiary",
    top: "80%",
    left: "60%",
    desc: "Conditioned lower-leg muscularity built through standing calf overload and sprint intervals.",
  },
];

const BACK_PINS: MusclePin[] = [
  {
    id: "traps",
    name: "TRAPEZIUS",
    subtitle: "Upper Back Shelf",
    intensity: "primary",
    top: "22%",
    left: "50%",
    desc: "Thick, muscular trap slope stabilizing heavy deadlifts, shrugs, and Olympic compound pulls.",
  },
  {
    id: "rear_delts",
    name: "REAR DELTS",
    subtitle: "Posterior Deltoids",
    intensity: "secondary",
    top: "28%",
    left: "32%",
    desc: "3D shoulder roundness balancing posture and heavy upper body pulling mechanics.",
  },
  {
    id: "lats",
    name: "LATS (V-TAPER)",
    subtitle: "Latissimus Dorsi Wings",
    intensity: "primary",
    top: "36%",
    left: "65%",
    desc: "Wide aerodynamic back wings creating the iconic aesthetic bodybuilding V-taper physique.",
  },
  {
    id: "erectors",
    name: "LOWER BACK",
    subtitle: "Erector Spinae Pillars",
    intensity: "secondary",
    top: "46%",
    left: "48%",
    desc: "Dense spinal pillars supporting core stability under extreme progressive loads.",
  },
  {
    id: "glutes_hams",
    name: "HAMSTRINGS & GLUTES",
    subtitle: "Posterior Chain Drive",
    intensity: "primary",
    top: "66%",
    left: "58%",
    desc: "Athletic posterior drive developed with Romanian deadlifts and heavy sled pushes.",
  },
  {
    id: "calves_back",
    name: "CALVES",
    subtitle: "Lower Leg Definition",
    intensity: "tertiary",
    top: "80%",
    left: "40%",
    desc: "Diamond calf heads showing deep muscle separation and explosive power.",
  },
];

interface TransformationProps {
  onOpenJoinModal: () => void;
}

export default function Transformation({ onOpenJoinModal }: TransformationProps) {
  const [activeView, setActiveView] = useState<ViewType>("front");
  const [activePin, setActivePin] = useState<MusclePin | null>(FRONT_PINS[1]); // default to Chest

  const viewImages: Record<ViewType, { src: string; title: string; subtitle: string }> = {
    front: {
      src: "/images/transformation/physique-front.jpg",
      title: "FRONT PHYSIQUE",
      subtitle: "Chest, Abs, Shoulders & Quad Sweep",
    },
    three_quarter: {
      src: "/images/transformation/physique-three-quarter.jpg",
      title: "3/4 AESTHETIC VIEW",
      subtitle: "Serratus, Arm Vascularity & Core Depth",
    },
    side: {
      src: "/images/transformation/physique-side.jpg",
      title: "SIDE PROFILE",
      subtitle: "Chest Thickness, Tricep Horseshoe & Quads",
    },
    back: {
      src: "/images/transformation/physique-back.jpg",
      title: "BACK V-TAPER (GLOW)",
      subtitle: "Lats, Traps, Erector Spinae & Posterior Chain",
    },
  };

  const currentPins = activeView === "back" ? BACK_PINS : FRONT_PINS;
  const selectedPin =
    activePin && currentPins.some((p) => p.id === activePin.id)
      ? activePin
      : currentPins[0];

  return (
    <section
      id="transformation"
      className="relative w-full py-20 sm:py-28 bg-[#040406] border-t border-[#2A2626]/40 overflow-hidden"
    >
      {/* Dynamic Background Red / Orange Radiant Atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[600px] bg-gradient-to-br from-[#E50914]/12 via-[#FF6B00]/8 to-transparent blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A181C] border border-[#E50914]/40 text-xs font-bold tracking-widest uppercase text-[#FF2D3B] shadow-lg">
            <Flame className="w-4 h-4 text-[#E50914] animate-pulse" />
            <span>DISCIPLINE & TRANSFORMATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            FORGED BY <br className="sm:hidden" />
            <span className="silver-metallic-text">CONSISTENCY</span>
            <span className="text-[#E50914]">.</span>
          </h2>

          <p className="text-xs sm:text-base text-[#988686] max-w-2xl mx-auto leading-relaxed">
            A state-of-the-art visual anatomical breakdown of disciplined bodybuilding aesthetics — broad capped deltoids, striated pectorals, deep 8-pack core, and wide V-taper back.
          </p>
        </div>

        {/* Studio Grid: Left Visualizer & Spotlight, Right Target Details & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Visualizer Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center w-full">
            
            {/* View Switching Navigation Pills */}
            <div className="w-full flex items-center justify-between gap-1.5 sm:gap-2 mb-3 sm:mb-4 p-1.5 rounded-2xl bg-[#0D0C11] border border-[#5C4E4E]/40 overflow-x-auto">
              {(["front", "three_quarter", "side", "back"] as ViewType[]).map((v) => {
                const isSelected = activeView === v;
                return (
                  <button
                    key={v}
                    onClick={() => {
                      setActiveView(v);
                      if (v === "back") {
                        setActivePin(BACK_PINS[0]);
                      } else {
                        setActivePin(FRONT_PINS[1]);
                      }
                    }}
                    className={`flex-1 min-w-[75px] sm:min-w-[85px] py-2 px-2 sm:px-3 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer ${
                      isSelected
                        ? "bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30 scale-[1.02]"
                        : "text-[#988686] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Eye className="w-3 h-3 shrink-0" />
                    <span className="truncate">
                      {v === "three_quarter" ? "3/4 View" : v}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Visualizer Display Box */}
            <div className="relative w-full aspect-[3/4] max-w-lg rounded-3xl bg-[#0B0A0E] border border-[#5C4E4E]/50 overflow-hidden shadow-2xl group transition-all duration-500 shadow-[0_0_50px_rgba(229,9,20,0.25)]">
              {/* Active High-Res Photo Asset */}
              <Image
                src={getAssetPath(viewImages[activeView].src)}
                alt={viewImages[activeView].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
              />

              {/* Atmospheric Edge Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/60 pointer-events-none" />

              {/* Top View Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/85 border border-[#5C4E4E]/60 text-[10px] sm:text-xs font-bold text-white uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping" />
                <span>{viewImages[activeView].title}</span>
              </div>

              {/* Interactive Muscle Pins Overlay (Shown on Front & Back) */}
              {(activeView === "front" || activeView === "back") && (
                <div className="absolute inset-0 z-20 pointer-events-auto">
                  {currentPins.map((pin) => {
                    const isSelected = selectedPin?.id === pin.id;
                    const colorClass =
                      pin.intensity === "primary"
                        ? "bg-[#E50914] text-white border-[#FF2D3B]"
                        : pin.intensity === "secondary"
                        ? "bg-[#FF6B00] text-white border-[#FFA040]"
                        : "bg-[#FFD700] text-black border-[#FFE875]";

                    return (
                      <button
                        key={pin.id}
                        style={{ top: pin.top, left: pin.left }}
                        onClick={() => setActivePin(pin)}
                        aria-label={`Inspect ${pin.name}`}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none"
                      >
                        {/* Glowing Radar Pulse */}
                        <span
                          className={`absolute -inset-2 rounded-full animate-ping opacity-75 ${
                            pin.intensity === "primary"
                              ? "bg-[#E50914]"
                              : pin.intensity === "secondary"
                              ? "bg-[#FF6B00]"
                              : "bg-[#FFD700]"
                          }`}
                        />
                        {/* Pin Center Button */}
                        <div
                          className={`relative w-6 h-6 rounded-full border-2 flex items-center justify-center font-black text-[10px] shadow-lg transition-transform duration-200 group-hover/pin:scale-125 ${colorClass} ${
                            isSelected ? "scale-125 ring-2 ring-white shadow-red-500/50" : ""
                          }`}
                        >
                          +
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Bottom Card Strip Inside Image */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-20 p-3 rounded-2xl bg-black/85 border border-[#5C4E4E]/50 backdrop-blur-md flex items-center justify-between text-xs">
                <div>
                  <div className="font-extrabold text-white uppercase tracking-wider text-xs flex items-center gap-1.5">
                    <Crosshair className="w-3.5 h-3.5 text-[#E50914]" />
                    <span>{viewImages[activeView].title}</span>
                  </div>
                  <div className="text-[11px] text-[#988686]">
                    {viewImages[activeView].subtitle}
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#E50914]/20 border border-[#E50914]/50 text-[#FF2D3B] text-[10px] font-black uppercase tracking-wider">
                  8K QUALITY
                </span>
              </div>
            </div>

            {/* Quick Muscle Selector Chips (100% visible on mobile, never cut off) */}
            {(activeView === "front" || activeView === "back") && (
              <div className="w-full max-w-lg mt-3 p-3 rounded-2xl bg-[#0E0E13] border border-[#5C4E4E]/30 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-[#988686] uppercase">
                  <span className="flex items-center gap-1 text-white font-bold">
                    <Activity className="w-3.5 h-3.5 text-[#E50914]" /> Target Muscle Groups:
                  </span>
                  <span>Tap to inspect</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {currentPins.map((pin) => {
                    const isSelected = selectedPin?.id === pin.id;
                    return (
                      <button
                        key={pin.id}
                        onClick={() => setActivePin(pin)}
                        className={`py-1.5 px-3 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#E50914] text-white shadow-md shadow-[#E50914]/30 scale-105"
                            : "bg-[#16151A] text-[#988686] hover:text-white border border-[#5C4E4E]/30"
                        }`}
                      >
                        {pin.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Selected Muscle Zone Spotlight Card (Clean, docked, fully readable, ZERO text clipping) */}
            {(activeView === "front" || activeView === "back") && selectedPin && (
              <div className="w-full max-w-lg mt-3 p-4 rounded-2xl bg-[#121117] border border-[#E50914]/40 shadow-xl space-y-1.5 text-left transition-all duration-200">
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                      selectedPin.intensity === "primary"
                        ? "bg-[#E50914]/20 border border-[#E50914]/50 text-[#FF2D3B]"
                        : selectedPin.intensity === "secondary"
                        ? "bg-[#FF6B00]/20 border border-[#FF6B00]/50 text-[#FF851B]"
                        : "bg-[#FFD700]/20 border border-[#FFD700]/50 text-[#FFD700]"
                    }`}
                  >
                    {selectedPin.intensity.toUpperCase()} TARGET ZONE
                  </span>
                  <span className="text-[10px] font-mono text-[#988686]">ANATOMICAL BREAKDOWN</span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-white uppercase tracking-tight">
                  {selectedPin.name}
                </h4>
                <div className="text-xs font-semibold text-[#D1D0D0]">
                  {selectedPin.subtitle}
                </div>
                <p className="text-xs text-[#988686] leading-relaxed pt-1">
                  {selectedPin.desc}
                </p>
              </div>
            )}

          </div>

          {/* Right Column: Muscle Target Heatmaps & Discipline Manifesto (5 cols) */}
          <div className="lg:col-span-5 space-y-6 w-full">
            
            {/* Manifesto Block */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A181C] border border-[#5C4E4E]/40 text-xs font-bold tracking-widest uppercase text-[#D1D0D0]">
                <span className="w-2 h-2 rounded-full bg-[#E50914]" />
                THE PETER&apos;S STANDARD
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight leading-[1.05]">
                BUILT WITH <br />
                <span className="silver-metallic-text">HEAVY DISCIPLINE</span>
                <span className="text-[#E50914]">.</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#D1D0D0] leading-relaxed">
                True physical aesthetics cannot be bought or rushed. Every cut in the abdominal wall, every striation across the chest, and the wide sweep of the latissimus dorsi is the direct outcome of relentless consistency, progressive resistance, and disciplined recovery.
              </p>
            </div>

            {/* Muscle Highlight Zones Legend */}
            <div className="p-4 sm:p-5 rounded-2xl gothic-card border border-[#5C4E4E]/40 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#5C4E4E]/30">
                <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#E50914]" /> Target Intensity Scale
                </span>
                <span className="text-[10px] font-mono text-[#988686]">INSPECTION GUIDE</span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E50914] shadow-sm shadow-[#E50914]" />
                    <span className="text-white font-bold">Primary Hypertrophy</span>
                  </div>
                  <span className="text-[11px] text-[#988686]">Pecs, Abs, Lats, Quads</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF6B00] shadow-sm shadow-[#FF6B00]" />
                    <span className="text-white font-bold">Secondary Stabilization</span>
                  </div>
                  <span className="text-[11px] text-[#988686]">Delts, Arms, Erectors</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FFD700] shadow-sm shadow-[#FFD700]" />
                    <span className="text-white font-bold">Tertiary Conditioning</span>
                  </div>
                  <span className="text-[11px] text-[#988686]">Calves, Serratus</span>
                </div>
              </div>
            </div>

            {/* Core Training Pillars */}
            <div className="space-y-2.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30">
                <div className="w-8 h-8 rounded-lg bg-[#E50914]/20 flex items-center justify-center text-[#FF2D3B] shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase">Progressive Overload</div>
                  <div className="text-[11px] text-[#988686]">Trackable weight increments for dense, quality muscle mass.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/20 flex items-center justify-center text-[#FF6B00] shrink-0 mt-0.5">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase">High-Intensity Atmosphere</div>
                  <div className="text-[11px] text-[#988686]">Surround yourself with dedicated lifters pushing beyond limits.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30">
                <div className="w-8 h-8 rounded-lg bg-[#E50914]/20 flex items-center justify-center text-[#FF2D3B] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase">Active Recovery & Steam</div>
                  <div className="text-[11px] text-[#988686]">Air conditioned training floor and post-workout steam sauna.</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenJoinModal}
                className="w-full py-4 px-8 rounded-xl crimson-metallic-button font-bold text-white tracking-wider uppercase text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer group shadow-xl"
              >
                <span>START YOUR TRANSFORMATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
