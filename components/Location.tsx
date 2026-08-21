"use client";

import React from "react";
import { MapPin, Phone, MessageSquare, Navigation, Clock, ShieldAlert } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";

export default function Location() {
  return (
    <section
      id="location"
      className="relative w-full py-24 bg-[#050508] border-t border-[#2A2626]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A181C] border border-[#5C4E4E]/40 text-xs font-bold tracking-widest uppercase text-[#D1D0D0]">
            <span className="w-2 h-2 rounded-full bg-[#E50914]" />
            LOCATION & TIMINGS
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            FIND <br className="sm:hidden" />
            <span className="silver-metallic-text">US</span>
            <span className="text-[#E50914]">.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#988686]">
            Conveniently situated on SC Sen Road, beside Nilkuthidanga Club in Purulia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Contact Details & Timings Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="gothic-card rounded-2xl p-7 border border-[#5C4E4E]/40 space-y-6">
              
              {/* Address details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#E50914] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" /> FACILITY ADDRESS
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  {GYM_DATA.name} (এসএম ফিটনেস)
                </h3>
                <p className="text-sm text-[#D1D0D0] leading-relaxed">
                  {GYM_DATA.contact.address.street} <br />
                  {GYM_DATA.contact.address.area}, {GYM_DATA.contact.address.city} <br />
                  {GYM_DATA.contact.address.state} — {GYM_DATA.contact.address.postalCode}, India
                </p>
              </div>

              {/* Operating Hours Box */}
              <div className="p-4 rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-bold text-white uppercase">
                    <Clock className="w-4 h-4 text-[#E50914]" /> Standard Timings
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#25D366]/20 text-[#25D366] text-[10px] font-bold">
                    Mon – Sat
                  </span>
                </div>
                <div className="text-lg font-black text-white">
                  6:00 AM – 10:00 PM
                </div>
                <p className="text-[11px] text-[#988686] italic">
                  {GYM_DATA.openHours.disclaimer}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${GYM_DATA.contact.address.mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl crimson-metallic-button font-bold text-white text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>GET DIRECTIONS ON MAPS</span>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${GYM_DATA.contact.primaryPhoneRaw}`}
                    className="py-3 px-4 rounded-xl noir-outline-button text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E50914]" />
                    <span>CALL NOW</span>
                  </a>

                  <a
                    href={`https://wa.me/${GYM_DATA.contact.whatsappPhoneRaw}?text=Hi%20SM%20Fitness,%20I%20would%20like%20to%20know%20more%20about%20gym%20timings%20and%20membership.`}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 text-center hover:bg-[#25D366]/30 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WHATSAPP</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Interactive Map Visualizer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="w-full aspect-[4/3] rounded-3xl gothic-card border border-[#5C4E4E]/40 overflow-hidden relative shadow-2xl p-2">
              <iframe
                title="SM Fitness Purulia Location Map"
                src="https://maps.google.com/maps?q=23.3320,86.3685&hl=en&z=15&output=embed"
                className="w-full h-full rounded-2xl border-0 filter grayscale invert contrast-125 opacity-85"
                loading="lazy"
                allowFullScreen
              />

              {/* Map Floating Marker Card */}
              <div className="absolute top-6 left-6 p-3.5 rounded-xl bg-black/90 border border-[#5C4E4E]/50 backdrop-blur-md flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E50914] flex items-center justify-center text-white font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs uppercase">SM FITNESS</div>
                  <div className="text-[11px] text-[#988686]">SC Sen Road, Purulia</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
