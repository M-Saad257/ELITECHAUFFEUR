"use client";

import { useState } from "react";
import { Plane, Radio, CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AirportSection({ onBookAirport }) {
  const [selectedTerminal, setSelectedTerminal] = useState("LHR");

  const flightMockData = {
    LHR: { flight: "BA 286", origin: "JFK (New York)", dest: "Heathrow (LHR T5)", status: "On Time", chauffeur: "David M. (S-Class)" },
    LGW: { flight: "VS 024", origin: "MCO (Orlando)", dest: "Gatwick (LGW North)", status: "Landed", chauffeur: "James R. (V-Class)" },
    FAB: { flight: "G650-VIP", origin: "TEB (New Jersey)", dest: "Farnborough FBO", status: "On Approach", chauffeur: "Arthur K. (Maybach)" },
  };

  const currentFlight = flightMockData[selectedTerminal];

  const valueProps = [
    "Automated flight radar tracking for delay protection",
    "Inside-terminal meet & greet with iPad name board",
    "60 minutes complimentary waiting time included",
    "Direct WhatsApp chauffeur contact 2 hrs prior",
  ];

  return (
    <section id="airports" className="min-h-[100vh] flex items-center justify-center py-8 sm:py-12 bg-[#0B0D0C] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#C9A45C]/30 bg-[#141817]">
              <Plane className="w-3 h-3 text-[#C9A45C]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
                AIRPORT TRANSFERS
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
              Your Flight. <span className="text-[#C9A45C]">Our Timing.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#D8D3C8] font-normal leading-relaxed">
              Arrive at London Heathrow, Gatwick, or private FBOs with guaranteed flight radar tracking and luggage meet & greet.
            </p>

            <div className="space-y-2 pt-0.5">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#F5F1E8] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                  <span>{prop}</span>
                </div>
              ))}
            </div>

            <div className="pt-1">
              <button
                onClick={onBookAirport}
                className="btn-gold-primary py-2.5 px-5 text-xs"
              >
                <span>BOOK AIRPORT CHAUFFEUR</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#0B0D0C]" />
              </button>
            </div>
          </div>

          {/* Right Radar Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-[#C9A45C]/30 shadow-2xl bg-[#141817]">
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src="/images/airport.jpg"
                  alt="London Heathrow Airport Chauffeur Meet and Greet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-[#141817]/40 to-transparent" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-full border border-white/15">
                    {["LHR", "LGW", "FAB"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTerminal(t)}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase cursor-pointer ${
                          selectedTerminal === t ? "bg-[#C9A45C] text-[#0B0D0C]" : "text-white/80"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 bg-emerald-950/90 border border-emerald-500/40 text-emerald-400 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full">
                    <Radio className="w-3 h-3 animate-pulse text-emerald-400" />
                    <span>Flight Tracking</span>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-2.5">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#D8D3C8] block font-bold">Monitored Arrival</span>
                    <h4 className="font-serif text-lg font-bold text-[#F5F1E8] flex items-center gap-1.5">
                      <Plane className="w-3.5 h-3.5 text-[#C9A45C]" />
                      <span>{currentFlight.flight}</span>
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase">
                      {currentFlight.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[#D8D3C8] text-[9px] uppercase font-bold block">Route</span>
                    <strong className="text-white text-xs font-medium">{currentFlight.origin} → {currentFlight.dest}</strong>
                  </div>
                  <div>
                    <span className="text-[#D8D3C8] text-[9px] uppercase font-bold block">Chauffeur</span>
                    <strong className="text-[#C9A45C] text-xs font-medium">{currentFlight.chauffeur}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
