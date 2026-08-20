"use client";

import React, { useState } from "react";
import {
  Dumbbell,
  UserCheck,
  Flame,
  Zap,
  Activity,
  HeartPulse,
  ArrowUpRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { GYM_DATA, ServiceItem } from "@/data/gymData";

interface TrainingProps {
  onOpenJoinModal: (serviceName?: string) => void;
}

export default function Training({ onOpenJoinModal }: TrainingProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Dumbbell":
        return <Dumbbell className="w-6 h-6" />;
      case "UserCheck":
        return <UserCheck className="w-6 h-6" />;
      case "Flame":
        return <Flame className="w-6 h-6" />;
      case "Zap":
        return <Zap className="w-6 h-6" />;
      case "Activity":
        return <Activity className="w-6 h-6" />;
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6" />;
      default:
        return <Dumbbell className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="training"
      className="relative w-full py-24 bg-[#050507] border-t border-[#2A2626]/40 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E50914]/8 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A181C] border border-[#5C4E4E]/40 text-xs font-bold tracking-widest uppercase text-[#D1D0D0]">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              TRAINING DISCIPLINES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
              TRAIN WITH <br />
              <span className="silver-metallic-text">PURPOSE</span>
              <span className="text-[#E50914]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#988686]">
              Structured workout disciplines designed to build strength, sculpt muscle, and maximize cardiovascular performance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenJoinModal("General Training")}
              className="py-3 px-6 rounded-xl crimson-metallic-button font-bold text-white text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Started</span>
            </button>
          </div>
        </div>

        {/* 6 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GYM_DATA.services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="gothic-card gothic-card-hover rounded-2xl p-7 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
            >
              {/* Subtle top index number */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#1D1C22] border border-[#5C4E4E]/40 flex items-center justify-center text-[#E50914] group-hover:bg-[#E50914] group-hover:text-white transition-colors duration-300 shadow-md">
                  {getIconComponent(service.icon)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#121115] border border-[#5C4E4E]/30 text-[10px] font-bold text-[#988686] uppercase tracking-wider">
                    {service.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#5C4E4E]">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Service Info */}
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-[#FF2D3B] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm font-semibold text-[#D1D0D0]">
                  {service.tagline}
                </p>
                <p className="text-xs text-[#988686] line-clamp-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-1.5 py-3 border-t border-[#5C4E4E]/30 text-xs text-[#D1D0D0]">
                {service.highlights.slice(0, 2).map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                    <span className="text-[#988686] text-[11px]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer Button */}
              <div className="pt-4 flex items-center justify-between text-xs font-bold text-[#D1D0D0] group-hover:text-[#E50914] transition-colors">
                <span className="uppercase tracking-wider text-[11px]">View Program Details</span>
                <div className="w-8 h-8 rounded-full bg-[#1A1920] flex items-center justify-center group-hover:bg-[#E50914] group-hover:text-white transition">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detail Modal Drawer */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="w-full max-w-lg gothic-card rounded-2xl p-6 sm:p-7 border border-[#5C4E4E]/50 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#E50914]/20 border border-[#E50914]/50 flex items-center justify-center text-[#FF2D3B]">
                {getIconComponent(selectedService.icon)}
              </div>
              <span className="px-3 py-1 rounded-full bg-[#1A181C] border border-[#5C4E4E]/40 text-xs font-bold text-[#D1D0D0] uppercase">
                {selectedService.badge}
              </span>
            </div>

            <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-1">
              {selectedService.name}
            </h3>
            <p className="text-sm font-semibold text-[#E50914] mb-4">
              {selectedService.tagline}
            </p>
            <p className="text-sm text-[#D1D0D0] leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="space-y-2 mb-8 bg-[#0E0E12] p-4 rounded-xl border border-[#5C4E4E]/30">
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                What You Get in this Program:
              </div>
              {selectedService.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-[#D1D0D0]">
                  <CheckCircle className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const sName = selectedService.name;
                  setSelectedService(null);
                  onOpenJoinModal(sName);
                }}
                className="flex-1 py-3.5 px-6 rounded-xl crimson-metallic-button font-bold text-white text-xs tracking-wider uppercase cursor-pointer"
              >
                Inquire For This Program
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3.5 px-6 rounded-xl noir-outline-button text-xs font-bold uppercase cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
