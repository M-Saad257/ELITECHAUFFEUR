"use client";

import { Sparkles, ArrowRight, Wifi, VolumeX, Coffee } from "lucide-react";
import Image from "next/image";

export default function ExperienceSection({ onExperienceClick }) {
  const cabinAmenities = [
    { title: "Acoustic Privacy Glass", desc: "Acoustic cabin dampening for quiet phone calls & focus.", icon: VolumeX },
    { title: "5G Wi-Fi & Power Outlets", desc: "High-speed mobile workspace for laptops & devices.", icon: Wifi },
    { title: "Chilled Mineral Water", desc: "Complimentary Hildon bottled water & refreshments.", icon: Coffee },
    { title: "Massaging Leather Seats", desc: "Reclining heated & ventilated rear captain seats.", icon: Sparkles },
  ];

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center py-12 sm:py-16 overflow-hidden border-y border-slate-200 bg-[#FAF9F5]">
      {/* Background Photography with Soft Light Tint */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/lifestyle.jpg"
          alt="Maybach Luxury Chauffeur Interior London Tower Bridge"
          fill
          className="object-cover object-center opacity-15 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 to-[#FAF9F5]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C9A45C]/40 bg-white shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8860B]">
            UNRIVALLED CABIN LUXURY
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F172A] leading-tight">
          First-Class Comfort. <br />
          <span className="text-[#B8860B] italic">Every Single Mile.</span>
        </h2>

        <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed max-w-xl mx-auto">
          From airport arrivals to high-stakes C-suite roadshows, every journey is handled with absolute precision, discretion, and quiet elegance.
        </p>

        {/* 4 Centered Luxury Amenity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left max-w-4xl mx-auto pt-2">
          {cabinAmenities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-[#C9A45C]/30 shadow-md space-y-2 hover:border-[#C9A45C] transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#C9A45C]/40 flex items-center justify-center text-[#B8860B]">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#0F172A]">{item.title}</h4>
                <p className="text-[11px] text-[#475569] leading-relaxed font-normal">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div>
          <button
            onClick={onExperienceClick}
            className="btn-gold-primary py-3 px-7 text-xs"
          >
            <span>RESERVE CABIN EXPERIENCE</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#0B0D0C]" />
          </button>
        </div>
      </div>
    </section>
  );
}
