"use client";

import { Award, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const highlights = [
    "Punctual meet & greet service with baggage assistance",
    "Complimentary onboard high-speed Wi-Fi & chilled mineral water",
    "Tailored climate control, privacy glass & executive acoustics",
    "Discreet, licensed, and highly experienced UK chauffeurs",
  ];

  return (
    <section id="about" className="min-h-[100vh] flex items-center justify-center py-8 sm:py-12 bg-[#0B0D0C] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Image Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A45C]/25 shadow-2xl group">
              <div className="aspect-[16/10] relative">
                <Image
                  src="/images/airport.jpg"
                  alt="Elite Chauffeur Experience London"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-transparent to-transparent opacity-60" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#141817]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#C9A45C]/30 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#C9A45C] flex items-center justify-center shrink-0 text-[#0B0D0C] font-bold">
                  <Award className="w-5 h-5 text-[#0B0D0C]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F5F1E8] font-serif">Licensed & Accredited Operator</h4>
                  <p className="text-[11px] text-[#D8D3C8]">TfL Licensed • PCO Approved • Full Commercial Liability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#C9A45C]/30 bg-[#141817]">
              <Sparkles className="w-3 h-3 text-[#C9A45C]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
                THE EXECUTIVE EXPERIENCE
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8] leading-tight">
              More Than a Journey. <br />
              <span className="text-[#C9A45C]">A Better Way to Travel.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#D8D3C8] leading-relaxed font-normal">
              At Elite Chauffeur, we redefine private luxury transit across the United Kingdom. Every journey is meticulously planned around absolute punctuality, refined comfort, utmost discretion, and effortless elegance.
            </p>

            <div className="space-y-2 pt-1">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F1E8] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="card-charcoal p-3 rounded-xl text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#C9A45C]">13K+</span>
                <span className="text-[10px] uppercase tracking-wider text-[#D8D3C8] mt-0.5 block font-semibold">
                  Journeys Completed
                </span>
              </div>
              <div className="card-charcoal p-3 rounded-xl text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#C9A45C]">24/7</span>
                <span className="text-[10px] uppercase tracking-wider text-[#D8D3C8] mt-0.5 block font-semibold">
                  Availability
                </span>
              </div>
              <div className="card-charcoal p-3 rounded-xl text-center">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#C9A45C]">UK-WIDE</span>
                <span className="text-[10px] uppercase tracking-wider text-[#D8D3C8] mt-0.5 block font-semibold">
                  Coverage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
