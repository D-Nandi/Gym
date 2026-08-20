"use client";

import React, { useState } from "react";
import { X, Phone, MessageSquare, CheckCircle, Sparkles, MapPin } from "lucide-react";
import confetti from "canvas-confetti";
import { GYM_DATA } from "@/data/gymData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  initialService = "General Membership",
}: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: initialService,
    preferredTime: "Evening (5 PM - 9 PM)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Fire athletic celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#E50914", "#D1D0D0", "#988686", "#FF2D3B"],
      });
    } catch {
      // Fallback if canvas is unavailable
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Peter's Gym, I am interested in ${formData.service || initialService}. My name is ${formData.name || "a prospective member"}. Could you please share details on membership and timings?`
    );
    window.open(`https://wa.me/${GYM_DATA.contact.whatsappPhoneRaw}?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg gothic-card rounded-2xl p-5 sm:p-7 md:p-8 border border-[#5C4E4E]/50 shadow-2xl text-left max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1A181C] text-[#988686] hover:text-white hover:bg-[#5C4E4E]/40 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/40 text-[#FF2D3B] text-xs font-semibold tracking-wider uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Start Training Today
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                JOIN <span className="text-[#E50914]">PETER&apos;S GYM</span>
              </h3>
              <p className="text-sm text-[#988686] mt-1">
                S Lake Road, Purulia • 4.7★ Rating (337+ Reviews)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1D0D0] mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Mukherjee"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#0E0E12] border border-[#5C4E4E]/40 text-white placeholder-[#988686]/60 focus:outline-none focus:border-[#E50914] transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1D0D0] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#0E0E12] border border-[#5C4E4E]/40 text-white placeholder-[#988686]/60 focus:outline-none focus:border-[#E50914] transition text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1D0D0] mb-1.5">
                    Program / Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3 py-3 rounded-lg bg-[#0E0E12] border border-[#5C4E4E]/40 text-[#D1D0D0] focus:outline-none focus:border-[#E50914] transition text-sm"
                  >
                    <option value="General Membership">General Gym Membership</option>
                    <option value="Strength Training">Strength & Weightlifting</option>
                    <option value="Personal Training">Personal Coaching</option>
                    <option value="Cardio & Conditioning">Cardio & Conditioning</option>
                    <option value="Cross Training">Cross Training</option>
                    <option value="Aerobics">Aerobics</option>
                    <option value="Yoga">Yoga & Mobility</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D1D0D0] mb-1.5">
                    Preferred Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="w-full px-3 py-3 rounded-lg bg-[#0E0E12] border border-[#5C4E4E]/40 text-[#D1D0D0] focus:outline-none focus:border-[#E50914] transition text-sm"
                  >
                    <option value="Morning (6 AM - 10 AM)">Morning (6 AM – 10 AM)</option>
                    <option value="Afternoon (10 AM - 4 PM)">Afternoon (10 AM – 4 PM)</option>
                    <option value="Evening (5 PM - 9 PM)">Evening (5 PM – 9 PM)</option>
                    <option value="Night (9 PM - 10 PM)">Late Night (9 PM – 10 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 rounded-xl crimson-metallic-button font-bold text-white tracking-wide uppercase text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  Submit Inquiry
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="py-3.5 px-5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] font-semibold hover:bg-[#25D366]/30 transition text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp
                </button>
              </div>
            </form>

            <div className="mt-5 pt-4 border-t border-[#5C4E4E]/30 flex items-center justify-between text-xs text-[#988686]">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#E50914]" /> {GYM_DATA.contact.primaryPhone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#E50914]" /> S Lake Road, Purulia
              </span>
            </div>
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E50914]/20 border border-[#E50914] flex items-center justify-center mx-auto text-[#FF2D3B]">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
            <p className="text-sm text-[#988686] max-w-sm mx-auto">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. You can visit us directly at <span className="text-[#D1D0D0]">S Lake Road, Purulia</span> or connect instantly via WhatsApp or Call.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppRedirect}
                className="py-3 px-6 rounded-xl bg-[#25D366] text-black font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" /> Message on WhatsApp
              </button>
              <a
                href={`tel:${GYM_DATA.contact.primaryPhoneRaw}`}
                className="py-3 px-6 rounded-xl noir-outline-button text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E50914]" /> Call {GYM_DATA.contact.primaryPhone}
              </a>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs text-[#988686] hover:text-white pt-3 underline block mx-auto cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
