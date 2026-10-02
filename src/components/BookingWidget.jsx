"use client";

import { useState } from "react";
import { MapPin, Calendar, Clock, ArrowRight, Plane, Navigation, ShieldCheck } from "lucide-react";

export default function BookingWidget({ onCalculateQuote }) {
  const [activeTab, setActiveTab] = useState("point-to-point");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("1-3");
  const [hours, setHours] = useState("3");

  const popularLocations = [
    "London Heathrow Airport (LHR)",
    "London Gatwick Airport (LGW)",
    "Mayfair & West End, London",
    "The Ritz Hotel, Piccadilly",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculateQuote({
      type: activeTab,
      pickup: pickup || "London Heathrow Airport (LHR)",
      dropoff: activeTab === "hourly" ? `${hours} Hours Rental` : (dropoff || "Mayfair, Central London"),
      date: date || "2026-10-15",
      time: time || "14:00",
      passengers,
      hours: activeTab === "hourly" ? hours : undefined,
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#101218] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 shadow-2xl relative z-20">
      {/* Header Tabs */}
      <div className="flex flex-wrap items-center gap-3 border-b border-white/10 pb-5 mb-6">
        {[
          { id: "point-to-point", label: "Point to Point", icon: Navigation },
          { id: "airport", label: "Airport Transfer", icon: Plane },
          { id: "hourly", label: "Hourly Chauffeur", icon: Clock },
        ].map((tab) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                isActive
                  ? "bg-[#D4AF37] text-black shadow-lg font-extrabold"
                  : "bg-white/5 text-[#E5E7EB] hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <IconComponent className={`w-4 h-4 ${isActive ? "text-black" : "text-[#D4AF37]"}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}

        <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-[#D4AF37] uppercase tracking-widest font-semibold bg-[#D4AF37]/10 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30">
          <ShieldCheck className="w-4 h-4" />
          <span>Fixed Pricing Guaranteed</span>
        </div>
      </div>

      {/* Form Fields Grid */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-end">
        {/* Pickup Location */}
        <div className={`lg:col-span-${activeTab === "hourly" ? "4" : "3"} space-y-2`}>
          <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            Pick-up Location
          </label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            placeholder="e.g. Heathrow Terminal 5"
            className="w-full bg-[#161922] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-base text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
          />
        </div>

        {/* Dropoff Location or Hourly Select */}
        {activeTab !== "hourly" ? (
          <div className="lg:col-span-3 space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              Drop-off Location
            </label>
            <input
              type="text"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="e.g. Mayfair, London"
              className="w-full bg-[#161922] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-base text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
            />
          </div>
        ) : (
          <div className="lg:col-span-3 space-y-2">
            <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              Duration (Hours)
            </label>
            <select
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full bg-[#161922] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-3.5 text-base text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
            >
              <option value="3" className="bg-[#161922] text-white">3 Hours (£285)</option>
              <option value="4" className="bg-[#161922] text-white">4 Hours (£380)</option>
              <option value="6" className="bg-[#161922] text-white">6 Hours (£570)</option>
              <option value="8" className="bg-[#161922] text-white">8 Hours (Full Day £720)</option>
            </select>
          </div>
        )}

        {/* Date */}
        <div className="lg:col-span-2 space-y-2">
          <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-[#161922] border border-white/15 focus:border-[#D4AF37] rounded-xl px-3 py-3.5 text-base text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
          />
        </div>

        {/* Time */}
        <div className="lg:col-span-2 space-y-2">
          <label className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#D4AF37]" />
            Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full bg-[#161922] border border-white/15 focus:border-[#D4AF37] rounded-xl px-3 py-3.5 text-base text-white focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
          />
        </div>

        {/* CTA Button */}
        <div className="lg:col-span-2 flex flex-col justify-end">
          <button
            type="submit"
            className="w-full py-3.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#e2bb3e] text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 transition-all cursor-pointer"
          >
            <span>GET INSTANT QUOTE</span>
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </form>

      {/* Quick Pickups Bar */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 flex-wrap text-xs text-[#D1D5DB]">
        <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-bold">Popular:</span>
        {popularLocations.map((loc) => (
          <button
            key={loc}
            type="button"
            onClick={() => setPickup(loc)}
            className="bg-white/5 hover:bg-[#D4AF37]/15 hover:text-[#D4AF37] px-3 py-1 rounded-md text-xs border border-white/10 transition-colors cursor-pointer"
          >
            + {loc}
          </button>
        ))}
      </div>
    </div>
  );
}
