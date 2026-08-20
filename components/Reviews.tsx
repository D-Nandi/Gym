"use client";

import React from "react";
import { Star, ShieldCheck, Quote, ExternalLink, ThumbsUp } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative w-full py-24 bg-black border-t border-[#2A2626]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rating Hero Card */}
        <div className="p-8 sm:p-12 rounded-3xl gothic-card border border-[#5C4E4E]/40 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E50914]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Score Big Display */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A181C] border border-[#5C4E4E]/40 text-xs font-bold tracking-widest uppercase text-[#D1D0D0]">
                <ShieldCheck className="w-4 h-4 text-[#25D366]" />
                VERIFIED GOOGLE LISTING
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="text-6xl sm:text-7xl font-black text-white font-serif">
                  4.7
                </div>
                <div className="space-y-1 text-left">
                  <div className="flex items-center gap-1 text-[#FFD700]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FFD700]" />
                    ))}
                  </div>
                  <div className="text-xs font-bold text-[#D1D0D0] uppercase tracking-wider">
                    OUT OF 5.0 STARS
                  </div>
                  <div className="text-xs font-mono text-[#988686]">
                    337+ Verified Reviews
                  </div>
                </div>
              </div>
            </div>

            {/* Description & Google Link */}
            <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-[#5C4E4E]/30 pt-6 lg:pt-0 lg:pl-8">
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                TOP RATED FITNESS HUB IN PURULIA
              </h3>
              <p className="text-sm text-[#D1D0D0] leading-relaxed">
                Trusted by 330+ athletes, bodybuilders, and fitness seekers across Purulia for our top-tier machines, supportive training atmosphere, and clean environment.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${GYM_DATA.contact.address.mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="py-2.5 px-5 rounded-xl noir-outline-button text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <span>View All Google Reviews</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E50914]" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GYM_DATA.reviews.map((rev) => (
            <div
              key={rev.id}
              className="gothic-card gothic-card-hover rounded-2xl p-7 flex flex-col justify-between border border-[#5C4E4E]/30 relative"
            >
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#FFD700]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD700]" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#16151A] border border-[#5C4E4E]/30 text-[10px] font-bold text-[#988686] uppercase">
                    {rev.badge}
                  </span>
                </div>

                <div className="relative">
                  <Quote className="w-8 h-8 text-[#5C4E4E]/30 absolute -top-3 -left-2 -z-0" />
                  <p className="text-base font-bold text-white relative z-10 italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <p className="text-xs text-[#988686] leading-relaxed">
                  {rev.review}
                </p>
              </div>

              <div className="pt-4 border-t border-[#5C4E4E]/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#201E25] border border-[#5C4E4E]/40 flex items-center justify-center text-white font-bold text-[11px]">
                    {rev.author[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white">{rev.author}</div>
                    <div className="text-[10px] text-[#988686]">{rev.date}</div>
                  </div>
                </div>
                <ThumbsUp className="w-3.5 h-3.5 text-[#E50914]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
