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
    <div className="w-full bg-[#141817] border-y border-[#C9A45C]/20 py-3.5 relative z-10 overflow-hidden">
      <div className="w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 sm:gap-10 py-1">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 group shrink-0 min-w-[170px]">
                <div className="w-8 h-8 rounded-lg bg-[#0B0D0C] border border-[#C9A45C]/30 flex items-center justify-center shrink-0 group-hover:border-[#C9A45C] transition-all">
                  <Icon className="w-4 h-4 text-[#C9A45C]" />
                </div>
                <div>
                  <h4 className="text-[11px] uppercase font-bold tracking-wider text-[#F5F1E8] group-hover:text-[#C9A45C] transition-colors leading-tight">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-[#D8D3C8] hidden sm:block font-normal">
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

