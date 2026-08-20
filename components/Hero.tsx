"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ArrowRight, ChevronDown, MapPin, Star, ShieldCheck, Flame } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";

// Dynamically import 3D Hero Scene with SSR disabled for optimal loading
const CanvasContainer = dynamic(() => import("./3d/CanvasContainer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-black/40">
      <div className="w-8 h-8 rounded-full border-2 border-[#E50914] border-t-transparent animate-spin" />
    </div>
  ),
});

const HeroScene = dynamic(() => import("./3d/HeroScene"), {
  ssr: false,
});

interface HeroProps {
  onOpenJoinModal: () => void;
}

export default function Hero({ onOpenJoinModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 pb-16"
    >
      {/* 3D Background Canvas Layer */}
      <div className="absolute inset-0 z-0 opacity-80 sm:opacity-90">
        <CanvasContainer
          camera={{ position: [0, 0.4, 5.2], fov: 48 }}
          className="w-full h-full"
        >
          <HeroScene />
        </CanvasContainer>
      </div>

      {/* Atmospheric Vignette & Color Gradients */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black via-black/30 to-black/60" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-radial-gradient from-transparent via-black/40 to-black" />
      
      {/* Bottom Red Glow Spot */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E50914]/15 blur-[120px] rounded-full pointer-events-none z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center justify-center">
        {/* Top Verified Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151419]/90 border border-[#5C4E4E]/60 text-[#D1D0D0] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-xl">
          <span className="flex items-center gap-1 text-[#FFD700]">
            <Star className="w-3.5 h-3.5 fill-[#FFD700]" />
            <span className="font-bold text-white">4.7</span>
          </span>
          <span className="text-[#5C4E4E]">|</span>
          <span className="text-[#988686]">337+ Verified Reviews</span>
          <span className="text-[#5C4E4E]">|</span>
          <span className="flex items-center gap-1 text-[#E50914]">
            <MapPin className="w-3.5 h-3.5" /> Purulia
          </span>
        </div>

        {/* Brand Headline */}
        <p className="text-xs sm:text-sm md:text-base font-extrabold tracking-[0.35em] text-[#988686] uppercase mb-2">
          {GYM_DATA.name}
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] max-w-5xl mb-6">
          FORGE YOUR <br className="hidden sm:inline" />
          <span className="silver-metallic-text">BEST SELF</span>
          <span className="text-[#E50914]">.</span>
        </h1>

        {/* Supporting Motto */}
        <p className="text-base sm:text-xl md:text-2xl font-medium text-[#D1D0D0] max-w-2xl mx-auto tracking-wide mb-8">
          Strength. <span className="text-[#988686]">Discipline.</span> <span className="text-[#E50914] font-semibold">Performance.</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-14">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto py-4 px-8 rounded-xl crimson-metallic-button font-bold text-white tracking-wider uppercase text-sm flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>JOIN THE GYM</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#about"
            className="w-full sm:w-auto py-4 px-8 rounded-xl noir-outline-button font-bold text-[#D1D0D0] tracking-wider uppercase text-sm flex items-center justify-center gap-2 text-center"
          >
            <span>EXPLORE THE GYM</span>
          </a>
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-4 border-t border-[#5C4E4E]/30">
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#121115]/80 border border-[#5C4E4E]/30 backdrop-blur-md text-center">
            <div className="text-xl sm:text-2xl font-black text-white">4.7★</div>
            <div className="text-[11px] sm:text-xs font-semibold text-[#988686] uppercase tracking-wider mt-0.5">
              337+ Google Reviews
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#121115]/80 border border-[#5C4E4E]/30 backdrop-blur-md text-center">
            <div className="text-xl sm:text-2xl font-black text-white">2022</div>
            <div className="text-[11px] sm:text-xs font-semibold text-[#988686] uppercase tracking-wider mt-0.5">
              Established
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#121115]/80 border border-[#5C4E4E]/30 backdrop-blur-md text-center">
            <div className="text-xl sm:text-2xl font-black text-white">6 AM – 10 PM</div>
            <div className="text-[11px] sm:text-xs font-semibold text-[#988686] uppercase tracking-wider mt-0.5">
              Open Daily*
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-[#121115]/80 border border-[#5C4E4E]/30 backdrop-blur-md text-center">
            <div className="text-xl sm:text-2xl font-black text-[#E50914] flex items-center justify-center gap-1">
              <Flame className="w-5 h-5" /> 100%
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-[#988686] uppercase tracking-wider mt-0.5">
              Heavy Duty Iron
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#988686] hover:text-[#E50914] transition-colors group"
        aria-label="Scroll down to about section"
      >
        <span className="text-[10px] tracking-widest uppercase font-bold">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#E50914]" />
      </a>
    </section>
  );
}
