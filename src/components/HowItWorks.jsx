"use client";

import { Sparkles, MapPin, Car, UserCheck, ShieldCheck, ArrowRight } from "lucide-react";

export default function HowItWorks({ onStartBooking }) {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Journey",
      desc: "Enter your pickup location, dropoff destination, and preferred date and time.",
      icon: MapPin,
    },
    {
      num: "02",
      title: "Select Your Vehicle",
      desc: "Choose from Mercedes S-Class, V-Class, or Range Rover for your travel requirements.",
      icon: Car,
    },
    {
      num: "03",
      title: "Meet Your Chauffeur",
      desc: "Your uniformed driver arrives 15 mins early with luggage assistance.",
      icon: UserCheck,
    },
    {
      num: "04",
      title: "Travel Without Stress",
      desc: "Sit back in climate-controlled comfort and arrive relaxed at your destination.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="min-h-[100vh] flex items-center justify-center py-8 sm:py-12 bg-[#F4F3EF] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A45C]/40 bg-white shadow-sm">
            <Sparkles className="w-3 h-3 text-[#B8860B]" />
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#B8860B]">
              HOW IT WORKS
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
            Simple 4-Step Process
          </h2>

          <p className="text-xs sm:text-sm text-[#475569] font-normal">
            Your journey booked and managed in under two minutes.
          </p>
        </div>

        {/* Connected Pipe Flow Container */}
        <div className="relative">
          {/* SVG Animated Connected Conduit Pipe Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 -translate-y-8 h-1 z-0 pointer-events-none">
            <svg className="w-full h-full" overflow="visible">
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="rgba(201, 164, 92, 0.35)"
                strokeWidth="3"
              />
              <line
                x1="0"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#B8860B"
                strokeWidth="2.5"
                className="animate-pipe"
              />
            </svg>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white p-5 rounded-xl border border-[#C9A45C]/30 hover:border-[#C9A45C] transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    {/* Pipe Node Top Indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#0F172A] border-2 border-[#C9A45C] flex items-center justify-center text-[#C9A45C] font-serif font-bold text-base shadow-md group-hover:scale-110 transition-transform">
                        {step.num}
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#C9A45C]/30 flex items-center justify-center text-[#B8860B]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-serif text-base font-bold text-[#0F172A] mb-1 group-hover:text-[#B8860B] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#475569] leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                    <span>Step {idx + 1} of 4</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <button
            onClick={onStartBooking}
            className="btn-gold-primary py-2.5 px-6 text-xs"
          >
            <span>BOOK YOUR CHAUFFEUR NOW</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 text-[#0B0D0C]" />
          </button>
        </div>
      </div>
    </section>
  );
}
