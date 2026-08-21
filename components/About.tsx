"use client";

import React from "react";
import dynamic from "next/dynamic";
import { CheckCircle2, RotateCw, MapPin, Calendar, Clock, Star, Phone } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";

const CanvasContainer = dynamic(() => import("./3d/CanvasContainer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-80 flex items-center justify-center bg-black/40">
      <div className="w-8 h-8 rounded-full border-2 border-[#E50914] border-t-transparent animate-spin" />
    </div>
  ),
});

const DumbbellScene = dynamic(() => import("./3d/DumbbellScene"), {
  ssr: false,
});

interface AboutProps {
  onOpenJoinModal: () => void;
}

export default function About({ onOpenJoinModal }: AboutProps) {
  return (
    <section id="about" className="relative w-full py-24 bg-black border-t border-[#2A2626]/40 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5C4E4E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E50914]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A181C] border border-[#5C4E4E]/40 text-xs font-bold tracking-widest uppercase text-[#D1D0D0]">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              ABOUT SM FITNESS
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
              BUILT FOR PEOPLE <br />
              <span className="silver-metallic-text">WHO DON&apos;T QUIT</span>
              <span className="text-[#E50914]">.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#D1D0D0] leading-relaxed max-w-2xl font-normal">
              Located on <strong className="text-white">SC Sen Road in Nilkuthidanga, Purulia</strong> (beside Nilkuthidanga Club), SM Fitness is engineered for athletes, fitness enthusiasts, and everyday lifters striving for real physical transformations. No fluff, no distractions—just commercial-grade weight training, indoor cycling, attentive coaching, and an energetic community.
            </p>

            {/* Core Values Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30">
                <CheckCircle2 className="w-5 h-5 text-[#E50914] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Weight Training & Free Weights</div>
                  <div className="text-xs text-[#988686]">Heavy dumbbells, Olympic bars & benches</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30">
                <CheckCircle2 className="w-5 h-5 text-[#E50914] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Indoor Cycling Suite</div>
                  <div className="text-xs text-[#988686]">High-resistance cardio & spin cycles</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30">
                <CheckCircle2 className="w-5 h-5 text-[#E50914] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Attentive Trainer Coaching</div>
                  <div className="text-xs text-[#988686]">Posture critique & personalized routines</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30">
                <CheckCircle2 className="w-5 h-5 text-[#E50914] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Vibrant A/C Atmosphere</div>
                  <div className="text-xs text-[#988686]">Rubber floor, mirrors & energetic vibe</div>
                </div>
              </div>
            </div>

            {/* Verified Statistics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-4 rounded-xl gothic-card text-left">
                <div className="flex items-center gap-1 text-[#FFD700] text-xl sm:text-2xl font-black">
                  <Star className="w-5 h-5 fill-[#FFD700]" /> 4.9★
                </div>
                <div className="text-[11px] font-bold text-[#D1D0D0] uppercase tracking-wider mt-1">
                  131+ Reviews
                </div>
                <div className="text-[10px] text-[#988686]">Google Verified</div>
              </div>

              <div className="p-4 rounded-xl gothic-card text-left">
                <div className="text-xl sm:text-2xl font-black text-white flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-[#E50914]" /> 3+ Yrs
                </div>
                <div className="text-[11px] font-bold text-[#D1D0D0] uppercase tracking-wider mt-1">
                  In Business
                </div>
                <div className="text-[10px] text-[#988686]">Purulia Landmark</div>
              </div>

              <div className="p-4 rounded-xl gothic-card text-left">
                <div className="text-lg sm:text-xl font-black text-white flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#E50914]" /> 6 AM–10 PM
                </div>
                <div className="text-[11px] font-bold text-[#D1D0D0] uppercase tracking-wider mt-1">
                  Mon – Sat
                </div>
                <div className="text-[10px] text-[#988686]">Morning to Night</div>
              </div>
            </div>

            {/* Operating Hours Note Disclaimer */}
            <p className="text-[11px] text-[#988686] italic">
              {GYM_DATA.openHours.disclaimer}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto py-3.5 px-7 rounded-xl crimson-metallic-button font-bold text-white text-xs tracking-wider uppercase cursor-pointer text-center"
              >
                Inquire For Membership
              </button>
              <a
                href={`tel:${GYM_DATA.contact.primaryPhoneRaw}`}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl noir-outline-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-4 h-4 text-[#E50914]" /> Call {GYM_DATA.contact.primaryPhone}
              </a>
            </div>
          </div>

          {/* Right Interactive 3D Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-md gothic-card rounded-3xl p-4 border border-[#5C4E4E]/40 overflow-hidden shadow-2xl group">
              
              {/* Interactive badge prompt */}
              <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 border border-[#5C4E4E]/50 text-[11px] font-semibold text-[#D1D0D0] backdrop-blur-md">
                <RotateCw className="w-3.5 h-3.5 text-[#E50914] animate-spin" />
                <span>Drag to Rotate 3D Equipment</span>
              </div>

              {/* 3D Model */}
              <CanvasContainer
                camera={{ position: [0, 0, 5], fov: 45 }}
                className="w-full h-full"
              >
                <DumbbellScene />
              </CanvasContainer>

              {/* Bottom spec label */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3 rounded-xl bg-black/85 border border-[#5C4E4E]/40 backdrop-blur-md flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white uppercase tracking-wider">Chrome Knurled Grip</div>
                  <div className="text-[11px] text-[#988686]">Heavy-duty cast iron hex heads</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-[#E50914]/20 border border-[#E50914]/40 text-[#FF2D3B] text-[10px] font-black uppercase">
                  SM FITNESS IRON
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
