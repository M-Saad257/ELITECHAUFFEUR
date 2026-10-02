"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation, Plane, Clock, ArrowRight, ShieldCheck, Award, UserCheck, Tag } from "lucide-react";
import Image from "next/image";

export default function Hero({ onOpenQuote, onExploreFleet }) {
  const [activeTab, setActiveTab] = useState("point-to-point");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [flightNo, setFlightNo] = useState("");
  const [durationHours, setDurationHours] = useState("4 Hours");
  const [dutyType, setDutyType] = useState("Executive Standby & Roadshow");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onOpenQuote({
      type: activeTab,
      pickup: pickup || (activeTab === "airport" ? "London Heathrow Airport (LHR T5)" : "Mayfair, Central London"),
      dropoff: activeTab === "hourly" ? `Duration: ${durationHours} (${dutyType})` : dropoff || "Canary Wharf, London",
      flightNo: flightNo,
      durationHours: durationHours,
      dutyType: dutyType,
      date: date || "2026-10-15",
      time: time || "14:00",
    });
  };

  const proofHighlights = [
    { title: "15-Min Early", tagline: "Punctual Guaranteed", icon: Clock },
    { title: "Fixed Rates", tagline: "No Surge Fees", icon: Tag },
    { title: "DBS Vetted", tagline: "Licensed Chauffeurs", icon: UserCheck },
  ];

  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center pt-24 sm:pt-28 pb-10 sm:pb-16 bg-[#0B0D0C] overflow-hidden">
      {/* Background Photography - Highly Visible Luxury Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero2.jpeg"
          alt="Elite UK Chauffeur Service London"
          fill
          priority
          className="object-cover object-center brightness-[0.7] sm:brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0D0C]/60 via-[#0B0D0C]/40 to-[#0B0D0C]/90 sm:bg-gradient-to-r sm:from-[#0B0D0C]/85 sm:via-[#0B0D0C]/60 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C]/80 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Side: Headline & Warm Ivory Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-3.5 sm:space-y-4 text-left"
          >
            {/* Top Gold Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A45C]/40 bg-[#141817]/90 backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
              <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-[#C9A45C]">
                PREMIUM CHAUFFEUR SERVICES • UNITED KINGDOM
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F5F1E8] leading-[1.2]">
              Arrive With Confidence. <br className="hidden sm:inline" />
              <span className="text-[#C9A45C] font-serif italic block sm:inline mt-0.5 sm:mt-0">
                Travel Without Compromise.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xs sm:text-sm text-[#D8D3C8] font-normal leading-relaxed max-w-lg">
              Executive chauffeur services for airport transfers, corporate journeys, private roadshows, and VIP experiences across London & the UK.
            </p>

            {/* CTAs on Desktop & Mobile - Small/Compact on Mobile */}
            <div className="flex items-center gap-2 pt-0.5">
              <button
                onClick={onOpenQuote}
                className="btn-gold-primary !py-2 !px-3.5 !text-[10px] sm:!py-3 sm:!px-6 sm:!text-xs flex-1 sm:flex-initial text-center justify-center font-bold tracking-wider"
              >
                GET INSTANT QUOTE
              </button>
              <button
                onClick={onExploreFleet}
                className="btn-gold-secondary !py-2 !px-3 !text-[10px] sm:!py-3 sm:!px-6 sm:!text-xs flex-1 sm:flex-initial text-center justify-center font-bold tracking-wider"
              >
                EXPLORE FLEET
              </button>
            </div>

            {/* Proof Badges - Desktop Grid & Mobile Auto-Scrolling Marquee with Hover Pause */}
            <div className="pt-3 border-t border-white/15 max-w-lg overflow-hidden">
              {/* Desktop View */}
              <div className="hidden sm:grid sm:grid-cols-3 gap-3">
                {proofHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-[#141817]/85 backdrop-blur-md p-2.5 rounded-xl border border-[#C9A45C]/30 flex flex-row items-center text-left gap-2.5 shadow-lg"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#0B0D0C] border border-[#C9A45C]/40 flex items-center justify-center shrink-0 text-[#C9A45C]">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-[11px] font-bold text-[#F5F1E8] leading-tight truncate">{item.title}</h4>
                        <p className="text-[9px] text-[#C9A45C] font-semibold truncate">{item.tagline}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile View: Infinite Auto-Scrolling Marquee (Pauses on Hover) */}
              <div className="sm:hidden overflow-hidden w-full py-1">
                <div className="animate-marquee flex items-center gap-3">
                  {[...proofHighlights, ...proofHighlights, ...proofHighlights].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-[#141817]/85 backdrop-blur-md p-2.5 rounded-xl border border-[#C9A45C]/30 flex flex-row items-center text-left gap-2.5 shadow-lg shrink-0 min-w-[145px]"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#0B0D0C] border border-[#C9A45C]/40 flex items-center justify-center shrink-0 text-[#C9A45C]">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-[11px] font-bold text-[#F5F1E8] leading-tight truncate">{item.title}</h4>
                          <p className="text-[9px] text-[#C9A45C] font-semibold truncate">{item.tagline}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Deep Charcoal Booking Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6 mt-2 lg:mt-0"
          >
            <div className="bg-[#141817]/95 backdrop-blur-2xl p-4 sm:p-5 rounded-2xl border border-[#C9A45C]/35 shadow-2xl space-y-3.5">
              {/* Header Tabs */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 gap-2 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-1.5 shrink-0">
                  {[
                    { id: "point-to-point", label: "Point to Point", icon: Navigation },
                    { id: "airport", label: "Airport", icon: Plane },
                    { id: "hourly", label: "Hourly", icon: Clock },
                  ].map((t) => {
                    const Icon = t.icon;
                    const isActive = activeTab === t.id;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setActiveTab(t.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase transition-all cursor-pointer whitespace-nowrap ${
                          isActive
                            ? "bg-[#C9A45C] text-[#0B0D0C] shadow-md"
                            : "bg-[#0B0D0C] text-[#D8D3C8] hover:text-white border border-white/10"
                        }`}
                      >
                        <Icon className="w-3 h-3" />
                        <span>{t.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="hidden sm:flex items-center gap-1 text-[10px] text-[#C9A45C] font-semibold bg-[#0B0D0C] px-2 py-0.5 rounded-md border border-[#C9A45C]/20">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Fixed Rates</span>
                </div>
              </div>

              {/* Dynamic Form Inputs tailored per tab */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* 1. Point to Point Tab Inputs */}
                {activeTab === "point-to-point" && (
                  <>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                        Pick-up Location
                      </label>
                      <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="e.g. Mayfair, London / 10 Park Lane"
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2.5 text-xs text-[#F5F1E8] placeholder-white/40 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                        Drop-off Location
                      </label>
                      <input
                        type="text"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        placeholder="e.g. Canary Wharf / Bank of England"
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2.5 text-xs text-[#F5F1E8] placeholder-white/40 focus:outline-none"
                      />
                    </div>
                  </>
                )}

                {/* 2. Airport Transfer Tab Inputs */}
                {activeTab === "airport" && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                          Airport Terminal *
                        </label>
                        <select
                          value={pickup}
                          onChange={(e) => setPickup(e.target.value)}
                          className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                        >
                          <option value="London Heathrow Airport (LHR T5)">Heathrow Terminal 5 (LHR)</option>
                          <option value="London Heathrow Airport (LHR T2/3)">Heathrow Terminal 2/3 (LHR)</option>
                          <option value="London Gatwick Airport (LGW)">Gatwick Airport (LGW)</option>
                          <option value="London City Airport (LCY)">London City Airport (LCY)</option>
                          <option value="Farnborough Private Jet FBO (FAB)">Farnborough Private FBO</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                          Flight Number (Optional)
                        </label>
                        <input
                          type="text"
                          value={flightNo}
                          onChange={(e) => setFlightNo(e.target.value)}
                          placeholder="e.g. BA 286 / VS 024"
                          className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2.5 text-xs text-[#F5F1E8] placeholder-white/40 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                        Destination Hotel or Address
                      </label>
                      <input
                        type="text"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        placeholder="e.g. The Ritz Mayfair / Belgravia Suite"
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2.5 text-xs text-[#F5F1E8] placeholder-white/40 focus:outline-none"
                      />
                    </div>
                  </>
                )}

                {/* 3. Hourly Chauffeur Rental Tab Inputs */}
                {activeTab === "hourly" && (
                  <>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                        Initial Pick-up Address
                      </label>
                      <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="e.g. The Connaught Mayfair / Executive Office"
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2.5 text-xs text-[#F5F1E8] placeholder-white/40 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                          Chauffeur Duration (Hours) *
                        </label>
                        <select
                          value={durationHours}
                          onChange={(e) => setDurationHours(e.target.value)}
                          className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                        >
                          <option value="3 Hours">3 Hours (Minimum Service)</option>
                          <option value="4 Hours">4 Hours (Half Day)</option>
                          <option value="6 Hours">6 Hours (Corporate Roadshow)</option>
                          <option value="8 Hours">8 Hours (Full Executive Day)</option>
                          <option value="12 Hours">12 Hours (Event & Summit)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                          Chauffeur Service Type
                        </label>
                        <select
                          value={dutyType}
                          onChange={(e) => setDutyType(e.target.value)}
                          className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                        >
                          <option value="Executive Standby & Roadshow">Executive Standby & Roadshow</option>
                          <option value="VIP Shopping & Private Event">VIP Shopping & Private Event</option>
                          <option value="Inter-City Chauffeur On-Call">Inter-City Chauffeur On-Call</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2 text-xs text-[#F5F1E8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-bold block mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3 py-2 text-xs text-[#F5F1E8] focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold-primary justify-center py-3 text-xs tracking-wider font-bold rounded-xl mt-1 shadow-[0_4px_20px_rgba(201,164,92,0.35)] cursor-pointer"
                >
                  <span>GET INSTANT FARE & VOUCHER</span>
                  <ArrowRight className="w-4 h-4 ml-2 text-[#0B0D0C]" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

