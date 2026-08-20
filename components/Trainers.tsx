"use client";

import React from "react";
import { UserCheck, Shield, Award, Sparkles, MessageSquare } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";

interface TrainersProps {
  onOpenJoinModal: (serviceName?: string) => void;
}

export default function Trainers({ onOpenJoinModal }: TrainersProps) {
  return (
    <section
      id="trainers"
      className="relative w-full py-24 bg-black border-t border-[#2A2626]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A181C] border border-[#5C4E4E]/40 text-xs font-bold tracking-widest uppercase text-[#D1D0D0]">
            <span className="w-2 h-2 rounded-full bg-[#E50914]" />
            COACHING & SUPERVISION
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            TRAIN WITH <br className="sm:hidden" />
            <span className="silver-metallic-text">GUIDANCE</span>
            <span className="text-[#E50914]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#988686]">
            Whether you need form correction, progressive overload planning, or aggressive fat loss routines, our certified instructors support your journey.
          </p>
        </div>

        {/* Modular Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {GYM_DATA.trainers.map((trainer, index) => (
            <div
              key={trainer.id}
              className="gothic-card gothic-card-hover rounded-2xl p-7 flex flex-col justify-between border border-[#5C4E4E]/30 relative group overflow-hidden"
            >
              {/* Top Slot Badge */}
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 rounded-full bg-[#1C1A20] border border-[#5C4E4E]/40 text-[11px] font-bold text-[#D1D0D0] uppercase tracking-wider">
                  Slot 0{index + 1}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#E50914]">
                  <Award className="w-3.5 h-3.5" /> Certified
                </span>
              </div>

              {/* Graphic Silhouette Placeholder Card */}
              <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-b from-[#17161C] to-[#0A0A0D] border border-[#5C4E4E]/30 flex flex-col items-center justify-center p-6 text-center mb-6 group-hover:border-[#E50914]/40 transition">
                <div className="w-16 h-16 rounded-full bg-[#201F26] border border-[#5C4E4E]/40 flex items-center justify-center text-[#988686] mb-3 group-hover:text-[#E50914] group-hover:scale-105 transition">
                  <UserCheck className="w-8 h-8" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#D1D0D0]">
                  {trainer.role}
                </div>
                <div className="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[10px] font-semibold text-[#FF2D3B] uppercase">
                  Trainer Profile • Coming Soon
                </div>
              </div>

              {/* Info Details */}
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {trainer.role}
                </h3>
                <p className="text-xs font-bold text-[#E50914] uppercase tracking-wider">
                  {trainer.specialization}
                </p>
                <p className="text-xs text-[#988686]">
                  {trainer.experiencePlaceholder}
                </p>
              </div>

              {/* CTA trigger */}
              <button
                onClick={() => onOpenJoinModal(`Personal Training - ${trainer.role}`)}
                className="w-full py-3 rounded-xl noir-outline-button text-xs font-bold uppercase tracking-wider text-[#D1D0D0] hover:text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
                <span>Inquire For 1-on-1 Coaching</span>
              </button>
            </div>
          ))}
        </div>

        {/* Personal Training Callout Banner */}
        <div className="p-8 rounded-3xl gothic-card border border-[#E50914]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Looking For Dedicated 1-On-1 Personal Training?
            </h4>
            <p className="text-xs sm:text-sm text-[#988686] max-w-xl">
              Get customized workout splits, form critique on heavy compound lifts, and nutritional advice directly on the gym floor.
            </p>
          </div>
          <button
            onClick={() => onOpenJoinModal("Personal Training Program")}
            className="py-3.5 px-7 rounded-xl crimson-metallic-button font-bold text-white text-xs tracking-wider uppercase shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" /> Book Trainer Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
