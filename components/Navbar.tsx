"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Dumbbell, MapPin, Sparkles } from "lucide-react";
import { GYM_DATA } from "@/data/gymData";

interface NavbarProps {
  onOpenJoinModal: () => void;
}

export default function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Check local hours
    const currentHour = new Date().getHours();
    setIsOpenNow(currentHour >= 6 && currentHour < 22);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "TRAINING", href: "#training" },
    { label: "EQUIPMENT", href: "#equipment" },
    { label: "GALLERY", href: "#gallery" },
    { label: "REVIEWS", href: "#reviews" },
    { label: "LOCATION", href: "#location" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-black/90 backdrop-blur-xl border-b border-[#5C4E4E]/30 shadow-2xl shadow-black/80"
            : "py-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Peter's Gym Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F1E24] to-[#0A0A0C] border border-[#5C4E4E]/50 flex items-center justify-center text-[#E50914] group-hover:border-[#E50914] transition-all shadow-lg">
              <Dumbbell className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-xl sm:text-2xl text-white font-serif uppercase">
                PETER&apos;S <span className="text-[#E50914]">GYM</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#988686] uppercase font-semibold">
                Purulia • 4.7★
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold tracking-widest uppercase text-[#D1D0D0] hover:text-[#E50914] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E50914] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions & Join Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Open / Closed Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#121115] border border-[#5C4E4E]/40 text-xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOpenNow ? "bg-[#25D366] animate-pulse" : "bg-[#988686]"
                }`}
              />
              <span className="text-[#D1D0D0] font-medium text-[11px]">
                {isOpenNow ? "OPEN NOW (Closes 10 PM)" : "OPENS 6 AM"}
              </span>
            </div>

            {/* Direct Call Quick Link */}
            <a
              href={`tel:${GYM_DATA.contact.primaryPhoneRaw}`}
              className="p-2.5 rounded-xl noir-outline-button text-xs font-semibold flex items-center gap-1.5"
              title="Call Peter's Gym"
            >
              <Phone className="w-4 h-4 text-[#E50914]" />
              <span className="hidden md:inline">{GYM_DATA.contact.primaryPhone}</span>
            </a>

            {/* Join CTA */}
            <button
              onClick={onOpenJoinModal}
              className="py-2.5 px-5 rounded-xl crimson-metallic-button text-xs font-extrabold tracking-wider uppercase text-white cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>JOIN NOW</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenJoinModal}
              className="py-1.5 px-3 rounded-lg crimson-metallic-button text-[11px] font-bold tracking-wider uppercase text-white cursor-pointer"
            >
              JOIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#121115] border border-[#5C4E4E]/40 text-[#D1D0D0] hover:text-white transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 backdrop-blur-2xl pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto max-h-screen animate-in fade-in slide-in-from-top-6 duration-200 lg:hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#5C4E4E]/30">
              <div className="flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isOpenNow ? "bg-[#25D366] animate-pulse" : "bg-[#988686]"
                  }`}
                />
                <span className="text-xs text-[#D1D0D0]">
                  {isOpenNow ? "Open Now • 6 AM – 10 PM" : "Opens Tomorrow 6 AM"}
                </span>
              </div>
              <span className="text-xs text-[#988686]">4.7★ (337+ Reviews)</span>
            </div>

            <nav className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold tracking-wider text-[#D1D0D0] hover:text-[#E50914] py-2 border-b border-[#2A2626]/40 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-[#5C4E4E]/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoinModal();
              }}
              className="w-full py-3.5 rounded-xl crimson-metallic-button font-bold text-white tracking-wider uppercase text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> JOIN PETER&apos;S GYM
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${GYM_DATA.contact.primaryPhoneRaw}`}
                className="py-3 rounded-xl noir-outline-button text-xs font-bold text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#E50914]" /> Call Gym
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${GYM_DATA.contact.address.mapsQuery}`}
                target="_blank"
                rel="noreferrer"
                className="py-3 rounded-xl noir-outline-button text-xs font-bold text-center flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#E50914]" /> Directions
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
