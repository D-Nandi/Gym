"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Dumbbell } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";
import { getAssetPath } from "@/lib/utils";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<{
    id: string;
    title: string;
    category: string;
    caption: string;
    image?: string;
  } | null>(null);

  const categories = ["All", "Free Weights", "Strength", "Cardio", "Machines", "Functional", "Amenities"];

  const filteredItems =
    activeCategory === "All"
      ? GYM_DATA.gallery
      : GYM_DATA.gallery.filter(
          (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section
      id="gallery"
      className="relative w-full py-24 bg-[#050508] border-t border-[#2A2626]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A181C] border border-[#5C4E4E]/40 text-xs font-bold tracking-widest uppercase text-[#D1D0D0]">
              <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
              THE FACILITY
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
              FLOOR <br />
              <span className="silver-metallic-text">ATMOSPHERE</span>
              <span className="text-[#E50914]">.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#988686]">
              Explore the training zones, heavy iron stations, and indoor cycling suite at SM Fitness Purulia.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-2 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#E50914] text-white shadow-lg shadow-[#E50914]/25 scale-105"
                    : "bg-[#141318] border border-[#5C4E4E]/30 text-[#988686] hover:text-white hover:border-[#5C4E4E]/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="gothic-card rounded-2xl p-4 sm:p-5 border border-[#5C4E4E]/30 group cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-[#E50914]/60 hover:shadow-xl hover:shadow-[#E50914]/15 hover:-translate-y-1"
            >
              {/* Image Graphic Canvas / Preview Block */}
              <div className="w-full aspect-[16/10] rounded-xl bg-[#0E0E12] border border-[#5C4E4E]/30 relative overflow-hidden flex flex-col justify-between p-4 mb-4">
                {/* Real Photo Asset */}
                {item.image ? (
                  <Image
                    src={getAssetPath(item.image)}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1920] to-[#050508]" />
                )}

                {/* Atmospheric Rim & Shadow Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 pointer-events-none group-hover:via-black/10 transition-colors duration-300" />
                
                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-black/80 border border-[#5C4E4E]/50 text-[10px] font-bold text-[#D1D0D0] uppercase tracking-wider backdrop-blur-md">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/70 border border-[#5C4E4E]/50 flex items-center justify-center text-[#988686] group-hover:text-white group-hover:bg-[#E50914] group-hover:border-[#E50914] transition-all duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom caption overlay inside image */}
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-[#E50914] font-bold uppercase tracking-widest">
                    ZONE {index + 1}
                  </div>
                  <div className="text-sm font-black text-white uppercase tracking-tight drop-shadow-md">
                    {item.title}
                  </div>
                </div>
              </div>

              {/* Caption info below */}
              <div className="space-y-1">
                <div className="text-xs text-[#988686] leading-relaxed">
                  {item.caption}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="w-full max-w-3xl gothic-card rounded-3xl p-5 sm:p-7 border border-[#5C4E4E]/60 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2 rounded-full bg-black/80 text-[#988686] hover:text-white hover:bg-[#E50914] border border-[#5C4E4E]/40 transition"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image Preview */}
            <div className="w-full aspect-[16/9] rounded-2xl bg-[#121116] border border-[#5C4E4E]/40 relative overflow-hidden mb-5">
              {lightboxItem.image ? (
                <Image
                  src={getAssetPath(lightboxItem.image)}
                  alt={lightboxItem.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <Dumbbell className="w-16 h-16 text-[#E50914]" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-[#E50914]/20 border border-[#E50914]/40 text-xs font-bold text-[#FF2D3B] uppercase tracking-wider">
                {lightboxItem.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-2">
                {lightboxItem.title}
              </h3>
              <p className="text-sm text-[#D1D0D0] leading-relaxed">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

