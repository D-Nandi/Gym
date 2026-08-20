"use client";

import React from "react";
import { Phone, Sparkles, Navigation, MessageSquare, Flame } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";

interface ContactCTAProps {
  onOpenJoinModal: () => void;
}

export default function ContactCTA({ onOpenJoinModal }: ContactCTAProps) {
  return (
    <section
      id="contact"
      className="relative w-full py-28 bg-black border-t border-[#2A2626]/40 overflow-hidden text-center"
    >
      {/* Dramatic Center Red Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E50914]/15 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Top Mini Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A181C] border border-[#5C4E4E]/50 text-xs font-bold tracking-widest uppercase text-[#FF2D3B]">
          <Flame className="w-4 h-4 text-[#E50914]" />
          TAKE ACTION TODAY
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.95]">
          STOP THINKING. <br />
          <span className="silver-metallic-text">START TRAINING</span>
          <span className="text-[#E50914]">.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#D1D0D0] max-w-2xl mx-auto font-normal">
          The best time to build your strongest physique is now. Visit our facility on S Lake Road, Purulia or contact us directly.
        </p>

        {/* Big Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto py-4 px-9 rounded-xl crimson-metallic-button font-extrabold text-white tracking-wider uppercase text-sm flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4" />
            <span>JOIN PETER&apos;S GYM</span>
          </button>

          <a
            href={`tel:${GYM_DATA.contact.primaryPhoneRaw}`}
            className="w-full sm:w-auto py-4 px-8 rounded-xl noir-outline-button font-bold text-white tracking-wider uppercase text-sm flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#E50914]" />
            <span>CALL NOW</span>
          </a>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${GYM_DATA.contact.address.mapsQuery}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto py-4 px-8 rounded-xl noir-outline-button font-bold text-[#D1D0D0] hover:text-white tracking-wider uppercase text-sm flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4 text-[#E50914]" />
            <span>GET DIRECTIONS</span>
          </a>
        </div>

        {/* Direct Contact Phone display */}
        <div className="pt-6">
          <div className="text-xs uppercase font-mono tracking-widest text-[#988686]">
            DIRECT HOTLINE
          </div>
          <a
            href={`tel:${GYM_DATA.contact.primaryPhoneRaw}`}
            className="text-2xl sm:text-3xl font-black text-white hover:text-[#E50914] transition tracking-tight inline-block mt-1"
          >
            {GYM_DATA.contact.primaryPhone}
          </a>
        </div>

      </div>
    </section>
  );
}
