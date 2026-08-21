"use client";

import React from "react";
import { Dumbbell, Phone, MapPin, Star, ShieldCheck, Heart } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020203] border-t border-[#2A2626]/60 pt-16 pb-12 text-[#988686] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#141318] border border-[#5C4E4E]/50 flex items-center justify-center text-[#E50914]">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-extrabold tracking-wider text-xl text-white uppercase font-serif">
                SM <span className="text-[#E50914]">FITNESS</span>
              </span>
            </div>
            
            <p className="text-sm text-[#988686] max-w-sm leading-relaxed">
              Premier weight training, indoor cycling, and bodybuilding fitness facility on SC Sen Road, Purulia, West Bengal.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D1D0D0]">
              <span className="flex items-center gap-1 text-[#FFD700]">
                <Star className="w-3.5 h-3.5 fill-[#FFD700]" /> 4.9
              </span>
              <span>•</span>
              <span>131+ Google Reviews</span>
              <span>•</span>
              <span className="text-[#25D366] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Verified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              NAVIGATION
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition">Disciplines</a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition">Equipment</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              SERVICES
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#training" className="hover:text-white transition">Weight Training</a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition">Indoor Cycling & Spin</a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition">Personal Coaching</a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition">Bodybuilding & Hypertrophy</a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition">Weight Loss & Diet</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              LOCATION & CONTACT
            </div>
            <div className="space-y-2 text-[#988686]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                <span>SC Sen Road (Beside Nilkuthidanga Club), Purulia 723101</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E50914] shrink-0" />
                <a href={`tel:${GYM_DATA.contact.primaryPhoneRaw}`} className="text-white hover:text-[#E50914] transition">
                  {GYM_DATA.contact.primaryPhone}
                </a>
              </p>
              <p className="text-[11px] pt-1">
                Hours: Mon – Sat (6:00 AM – 10:00 PM)
              </p>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#2A2626]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p>
            © {new Date().getFullYear()} {GYM_DATA.name} (এসএম ফিটনেস). All rights reserved. SC Sen Road, Nilkuthidanga, Purulia.
          </p>
          <p className="text-[#988686]/80 italic">
            *Hours, schedules, and specific programs subject to change. Please contact the gym for current membership details.
          </p>
        </div>

      </div>
    </footer>
  );
}
