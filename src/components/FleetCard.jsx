"use client";

import { Users, Briefcase, Check } from "lucide-react";
import Image from "next/image";

export default function FleetCard({ vehicle, onViewDetails, onBookVehicle }) {
  return (
    <div className="card-charcoal rounded-xl overflow-hidden shadow-xl flex flex-col justify-between group">
      {/* Shorter Height Vehicle Image Container */}
      <div className="relative h-40 sm:h-44 w-full bg-[#0B0D0C] overflow-hidden border-b border-white/10">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 left-3">
          <span className="text-[10px] uppercase font-bold tracking-widest bg-[#141817]/90 text-[#C9A45C] px-2.5 py-1 rounded-full border border-[#C9A45C]/30">
            {vehicle.category}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 bg-black/85 px-3 py-1 rounded-full text-xs text-[#F5F1E8] font-mono border border-white/15">
          From <span className="text-[#C9A45C] font-bold text-sm">£{vehicle.priceHr}</span> / hr
        </div>
      </div>

      {/* Compact Content Body */}
      <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-1">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors">
              {vehicle.name}
            </h3>
            <p className="text-xs text-[#D8D3C8] font-normal line-clamp-2 mt-0.5">{vehicle.description}</p>
          </div>

          {/* Compact Specs Bar */}
          <div className="flex justify-around gap-2 py-2 border-y border-white/10 my-2.5 text-xs font-semibold text-[#F5F1E8]">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>{vehicle.passengers} Passengers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#C9A45C]" />
              <span>{vehicle.luggage} Luggage</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-1 mb-1">
            {vehicle.features.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#D8D3C8]">
                <Check className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Action Buttons */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <button
            onClick={() => onViewDetails(vehicle)}
            className="btn-gold-secondary justify-center py-2 px-2 text-[11px]"
          >
            VIEW SPECS
          </button>
          <button
            onClick={() => onBookVehicle(vehicle)}
            className="btn-gold-primary justify-center py-2 px-2 text-[11px]"
          >
            <span>BOOK NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
}
