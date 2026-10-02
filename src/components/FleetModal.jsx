"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export default function FleetModal({ vehicle, onClose, onBook }) {
  if (!vehicle) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#141817] rounded-2xl overflow-hidden border border-[#C9A45C]/40 shadow-2xl max-h-[88vh] flex flex-col justify-between"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/70 text-[#F5F1E8] hover:text-[#C9A45C] hover:bg-black transition-colors border border-white/10 cursor-pointer"
            aria-label="Close vehicle specifications"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header Compact Image */}
          <div className="relative h-36 sm:h-44 w-full bg-[#0B0D0C] border-b border-white/10 shrink-0">
            <Image src={vehicle.image} alt={vehicle.name} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141817] via-[#141817]/40 to-transparent" />
            <div className="absolute bottom-3 left-4 right-4">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-[#C9A45C] text-[#0B0D0C] px-2.5 py-0.5 rounded-full inline-block mb-1">
                {vehicle.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8]">{vehicle.name}</h2>
              <p className="text-xs text-[#D8D3C8] font-normal">{vehicle.tagline}</p>
            </div>
          </div>

          {/* Scrollable Body Container */}
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-1">
            {/* Rates Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-[#0B0D0C] p-3 rounded-xl border border-white/10 text-center">
                <span className="text-[10px] uppercase tracking-wider text-[#D8D3C8] block font-bold">Hourly Rate</span>
                <span className="font-serif text-xl font-bold text-[#C9A45C]">£{vehicle.priceHr}</span>
                <span className="text-[10px] text-[#D8D3C8] block">Min 3 hours</span>
              </div>
              <div className="bg-[#0B0D0C] p-3 rounded-xl border border-white/10 text-center">
                <span className="text-[10px] uppercase tracking-wider text-[#D8D3C8] block font-bold">Airport Transfer</span>
                <span className="font-serif text-xl font-bold text-[#C9A45C]">£{vehicle.priceTransfer}</span>
                <span className="text-[10px] text-[#D8D3C8] block">Heathrow / Gatwick</span>
              </div>
              <div className="bg-[#0B0D0C] p-3 rounded-xl border border-white/10 text-center col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase tracking-wider text-[#D8D3C8] block font-bold">Capacity</span>
                <span className="font-serif text-base font-bold text-white block mt-1">
                  {vehicle.passengers} Pax • {vehicle.luggage} Bags
                </span>
              </div>
            </div>

            {/* Amenities Grid */}
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-[#C9A45C] mb-2">
                Onboard Amenities & Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {vehicle.fullFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#D8D3C8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-[#0B0D0C] p-3 rounded-xl border border-[#C9A45C]/20 flex items-center gap-3 text-xs">
              <ShieldCheck className="w-6 h-6 text-[#C9A45C] shrink-0" />
              <div className="text-[11px] text-[#D8D3C8]">
                <strong className="text-[#F5F1E8] block font-semibold">TfL Licensed & Insured Operator</strong>
                Includes PCO-licensed chauffeur, 60-min airport wait, and bottled Hildon mineral water.
              </div>
            </div>
          </div>

          {/* Compact Footer CTA */}
          <div className="p-4 bg-[#0B0D0C] border-t border-white/10 flex items-center justify-between gap-3 shrink-0">
            <a
              href="tel:+442079460912"
              className="flex items-center gap-2 text-xs font-semibold text-[#F5F1E8] hover:text-[#C9A45C] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span className="hidden sm:inline">+44 20 7946 0912</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBook(vehicle);
              }}
              className="btn-gold-primary py-2.5 px-5 text-xs"
            >
              <span>BOOK THIS VEHICLE</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#0B0D0C]" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
