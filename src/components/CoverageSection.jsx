"use client";

import { useState } from "react";
import { MapPin, Navigation, Compass, ArrowRight, Clock, Search } from "lucide-react";

export default function CoverageSection({ onSelectLocation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Heathrow");

  const locations = [
    {
      name: "Greater London & Mayfair",
      key: "London",
      region: "Central London Hub",
      distance: "15 miles (Central)",
      estTime: "Instant Pickup",
      rate: "From £75 Fixed",
      coordinates: { x: 65, y: 72 },
      desc: "Executive transfers across Mayfair, Belgravia, Knightsbridge, Canary Wharf, and London hotels.",
    },
    {
      name: "London Heathrow Airport (LHR)",
      key: "Heathrow",
      region: "Airport VIP Hub",
      distance: "16.8 miles from Central London",
      estTime: "40 mins Direct",
      rate: "Fixed Rate £90",
      coordinates: { x: 58, y: 68 },
      desc: "Direct transfers to LHR Terminals 2, 3, 4, 5 and Signature Private Jet FBO with flight radar monitoring.",
    },
    {
      name: "London Gatwick Airport (LGW)",
      key: "Gatwick",
      region: "Airport VIP Hub",
      distance: "29.4 miles South of London",
      estTime: "55 mins Direct",
      rate: "Fixed Rate £110",
      desc: "Fast executive transfers connecting London to Gatwick North & South Terminals.",
    },
    {
      name: "Manchester & North West",
      key: "Manchester",
      region: "Inter-City Executive",
      distance: "208 miles North",
      estTime: "3.5 hrs Direct",
      rate: "Fixed Rate £380",
      desc: "First-class road transit connecting London C-suite to Manchester Spinningfields & MediaCity.",
      coordinates: { x: 42, y: 44 },
    },
    {
      name: "Birmingham & West Midlands",
      key: "Birmingham",
      region: "Corporate Transit",
      distance: "126 miles North West",
      estTime: "2 hrs 15 mins",
      rate: "Fixed Rate £240",
      coordinates: { x: 48, y: 54 },
      desc: "Executive chauffeur coverage for Birmingham Colmore District and NEC Exhibition Centre.",
    },
    {
      name: "Edinburgh & Scotland",
      key: "Edinburgh",
      region: "UK Long Distance",
      distance: "402 miles North",
      estTime: "Bespoke Itinerary",
      rate: "Quote on Request",
      coordinates: { x: 32, y: 22 },
      desc: "Ultra-luxury chauffeur road trips connecting London to Edinburgh Castle and St Andrews golf resorts.",
    },
  ];

  // Filter or match location search
  const filtered = locations.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) || l.key.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeLoc = filtered.find((l) => l.key.toLowerCase() === selectedCity.toLowerCase()) || filtered[0] || locations[0];

  return (
    <section className="min-h-[100vh] flex items-center justify-center py-8 sm:py-12 bg-[#0B0D0C] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-[#C9A45C]/30 bg-[#141817]">
            <Compass className="w-3 h-3 text-[#C9A45C]" />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
              NATIONWIDE UK COVERAGE
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
            Wherever You Need to Go
          </h2>

          <p className="text-xs sm:text-sm text-[#D8D3C8] font-normal">
            Real-time UK destination mapping & fixed price route quotes.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Interactive Vector UK Map Locator */}
          <div className="lg:col-span-7 bg-[#141817] rounded-xl p-5 border border-[#C9A45C]/20 relative overflow-hidden flex flex-col justify-between shadow-2xl">
            {/* Top Search Input */}
            <div className="relative z-10 flex items-center justify-between gap-3 pb-3 border-b border-white/10">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 text-[#C9A45C] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter UK destination (e.g. Heathrow, Manchester, Mayfair)..."
                  className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none"
                />
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-[#C9A45C] bg-[#C9A45C]/10 px-2.5 py-1 rounded border border-[#C9A45C]/30">
                <Navigation className="w-3 h-3" />
                <span>GPS Telemetry Active</span>
              </div>
            </div>

            {/* SVG Interactive Map Area */}
            <div className="relative my-4 h-52 border border-white/5 rounded-lg bg-[#0B0D0C] p-3 overflow-hidden flex items-center justify-center">
              {/* Map SVG Canvas Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {activeLoc.coordinates && (
                  <line
                    x1="65"
                    y1="72"
                    x2={activeLoc.coordinates.x}
                    y2={activeLoc.coordinates.y}
                    stroke="#C9A45C"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                )}
              </svg>

              {/* Node Markers */}
              {locations.map((loc) => {
                if (!loc.coordinates) return null;
                const isSelected = activeLoc.key === loc.key;
                return (
                  <button
                    key={loc.key}
                    type="button"
                    onClick={() => setSelectedCity(loc.key)}
                    style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all cursor-pointer z-10 ${
                      isSelected ? "scale-110" : "hover:scale-105 opacity-70"
                    }`}
                  >
                    <div className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border transition-all ${
                      isSelected
                        ? "bg-[#C9A45C] text-[#0B0D0C] border-[#C9A45C] shadow-[0_0_12px_rgba(201,164,92,0.4)]"
                        : "bg-[#141817] text-white border-white/20"
                    }`}>
                      <MapPin className="w-3 h-3" />
                      <span>{loc.key}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Destination Chips */}
            <div className="relative z-10 flex flex-wrap gap-1.5 pt-1">
              {["London", "Heathrow", "Gatwick", "Manchester", "Birmingham", "Edinburgh"].map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setSelectedCity(city);
                    setSearchQuery("");
                  }}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCity.toLowerCase() === city.toLowerCase()
                      ? "bg-[#C9A45C] text-[#0B0D0C] font-bold"
                      : "bg-white/5 text-[#D8D3C8] hover:text-white border border-white/10"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Selected Destination Metrics Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#141817] p-5 rounded-xl border border-[#C9A45C]/30 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A45C] block">
                    {activeLoc.region}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#F5F1E8]">
                    {activeLoc.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="font-serif text-base sm:text-lg font-bold text-[#C9A45C] block">{activeLoc.rate}</span>
                  <span className="text-[9px] text-[#D8D3C8]/70 block">All inclusive</span>
                </div>
              </div>

              <p className="text-xs text-[#D8D3C8] leading-relaxed font-normal">
                {activeLoc.desc}
              </p>

              <div className="grid grid-cols-2 gap-2 bg-[#0B0D0C] p-3 rounded-lg border border-white/10 text-xs">
                <div>
                  <span className="text-[#D8D3C8] text-[9px] uppercase font-bold block">Distance from London</span>
                  <strong className="text-white text-xs font-medium">{activeLoc.distance}</strong>
                </div>
                <div>
                  <span className="text-[#D8D3C8] text-[9px] uppercase font-bold block">Est Driving Time</span>
                  <strong className="text-white text-xs font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C9A45C]" />
                    {activeLoc.estTime}
                  </strong>
                </div>
              </div>

              <button
                onClick={() => onSelectLocation(activeLoc.name)}
                className="w-full btn-gold-primary justify-center py-2.5 text-xs"
              >
                <span>BOOK RIDE TO {activeLoc.key.toUpperCase()}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#0B0D0C]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
