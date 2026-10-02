"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plane, Briefcase, Building2, Compass, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function ServicesSection({ onSelectService }) {
  const [activeId, setActiveId] = useState("airport");

  const services = [
    {
      id: "airport",
      title: "Airport Transfers",
      subtitle: "Heathrow (LHR), Gatwick (LGW) & FBO Private Jets",
      icon: Plane,
      image: "/images/airport.jpg",
      description:
        "Door-to-door transfers across all London airports with automatic flight tracking and terminal meet & greet.",
      highlights: [
        "Flight telemetry tracking for delay protection",
        "Inside-terminal meet & greet with iPad name board",
      ],
      rate: "From £90 Fixed",
    },
    {
      id: "executive",
      title: "Executive Travel",
      subtitle: "C-Suite Corporate Mobility & Roadshows",
      icon: Briefcase,
      image: "/images/lifestyle.jpg",
      description:
        "Quiet, climate-controlled mobile workspace for CEOs, directors, and investors across London financial hubs.",
      highlights: [
        "Onboard 5G Wi-Fi & AC power laptop stations",
        "Privacy acoustic glass and rear window sunshades",
      ],
      rate: "From £75 / hr",
    },
    {
      id: "corporate",
      title: "Corporate Accounts",
      subtitle: "Central Billing & Priority Dispatch",
      icon: Building2,
      image: "/images/hero.jpg",
      description:
        "Dedicated business account management with 30-day itemized invoicing and priority vehicle dispatch.",
      highlights: [
        "30-day itemized corporate billing & VAT reporting",
        "Dedicated account manager & 24/7 priority desk",
      ],
      rate: "Corporate Tariff Sheets",
    },
    {
      id: "long-distance",
      title: "Long Distance",
      subtitle: "Inter-City Luxury Road Transit",
      icon: Compass,
      image: "/images/fleet-s-class.jpg",
      description:
        "Direct inter-city chauffeur transit connecting London to Manchester, Birmingham, and Edinburgh.",
      highlights: [
        "Door-to-door inter-city UK chauffeur transit",
        "No train station crowds or luggage hassle",
      ],
      rate: "Flat Inter-City Tariff",
    },
  ];

  const currentService = services.find((s) => s.id === activeId) || services[0];

  return (
    <section id="services" className="min-h-[100vh] flex items-center justify-center py-12 bg-[#141817] relative border-t border-[#C9A45C]/20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-lg mx-auto mb-6 space-y-1.5"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border border-[#C9A45C]/30 bg-[#0B0D0C]">
            <Sparkles className="w-3 h-3 text-[#C9A45C]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C9A45C]">
              EXECUTIVE SERVICES
            </span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">
            Tailored To Your Journey
          </h2>
        </motion.div>

        {/* Compact Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#C9A45C] text-[#0B0D0C] shadow-md"
                    : "bg-[#0B0D0C] text-[#D8D3C8] hover:text-[#F5F1E8] border border-white/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#0B0D0C]" : "text-[#C9A45C]"}`} />
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Short & Compact Split Showcase Card */}
        <motion.div
          key={currentService.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-[#0B0D0C] rounded-xl border border-[#C9A45C]/30 overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Image Container */}
            <div className="lg:col-span-5 relative h-44 sm:h-52 lg:h-64 w-full bg-[#0B0D0C]">
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                className="object-cover rounded-xl p-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-transparent to-transparent opacity-70" />
            </div>

            {/* Compact Content */}
            <div className="lg:col-span-7 p-4 sm:p-5 space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A45C] block mb-0.5">
                  {currentService.rate}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1E8]">
                  {currentService.title}
                </h3>
                <p className="text-xs font-semibold text-[#D8D3C8]">
                  {currentService.subtitle}
                </p>
              </div>

              <p className="text-xs text-[#D8D3C8] leading-relaxed font-normal">
                {currentService.description}
              </p>

              <div className="space-y-1.5 pt-0.5">
                {currentService.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#F5F1E8] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <button
                  onClick={() => onSelectService({ type: currentService.id })}
                  className="btn-gold-primary py-2 px-4 text-xs"
                >
                  <span>BOOK THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#0B0D0C]" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
