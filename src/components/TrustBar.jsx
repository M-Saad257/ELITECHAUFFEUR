"use client";

import { Clock, UserCheck, Plane, Tag, Sparkles } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    { label: "24/7 Availability", icon: Clock, desc: "Round-the-clock UK dispatch" },
    { label: "Professional Chauffeurs", icon: UserCheck, desc: "DBS checked & executive trained" },
    { label: "Flight Monitoring", icon: Plane, desc: "Automatic tracking & meet & greet" },
    { label: "Fixed Pricing", icon: Tag, desc: "No hidden surge rates or fees" },
    { label: "Luxury Fleet", icon: Sparkles, desc: "Late model flagship vehicles" },
  ];

  const marqueeItems = [...trustItems, ...trustItems, ...trustItems];

  return (
    <div className="w-full bg-[#FAF9F5] border-y border-[#C9A45C]/30 py-3.5 relative z-10 overflow-hidden shadow-sm">
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 py-1">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 group shrink-0 min-w-[170px] bg-white px-3 py-1.5 rounded-xl border border-[#C9A45C]/25 shadow-sm">
                <div className="w-7 h-7 rounded-lg bg-[#FAF9F5] border border-[#C9A45C]/40 flex items-center justify-center shrink-0 group-hover:bg-[#C9A45C] group-hover:text-[#0B0D0C] transition-all">
                  <Icon className="w-3.5 h-3.5 text-[#B8860B] group-hover:text-[#0B0D0C]" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#0F172A] group-hover:text-[#B8860B] transition-colors leading-tight">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-[#475569] hidden sm:block font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

