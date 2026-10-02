"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Clock, MapPin, Car, CheckCircle2 } from "lucide-react";

export default function DriverSchedulePage() {
  const scheduleItems = [
    {
      time: "08:30 AM",
      ref: "EC-948123",
      passenger: "Lord Alexander Wright",
      route: "Heathrow Terminal 5 (LHR T5) → The Ritz Hotel, Mayfair",
      vehicle: "Mercedes-Maybach S680 (LUX 01 MAY)",
      status: "Driver En Route",
    },
    {
      time: "11:00 AM",
      ref: "EC-819204",
      passenger: "Lady Eleanor Kensington",
      route: "Mayfair → Canary Wharf Financial Center",
      vehicle: "Mercedes-Maybach S680 (LUX 01 MAY)",
      status: "Scheduled",
    },
    {
      time: "03:30 PM",
      ref: "EC-705912",
      passenger: "Marcus Vance",
      route: "Canary Wharf → London City Airport (LCY)",
      vehicle: "Mercedes-Maybach S680 (LUX 01 MAY)",
      status: "Scheduled",
    },
  ];

  return (
    <DashboardLayout allowedRoles={["driver"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">Daily Duty Schedule</h1>
        <p className="text-xs text-[#D8D3C8]">Today&apos;s itinerary timeline for James Sterling</p>
      </div>

      <div className="bg-[#141817] p-6 rounded-2xl border border-white/10 space-y-6">
        <div className="relative border-l-2 border-[#C9A45C]/40 pl-6 space-y-6 ml-3">
          {scheduleItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0B0D0C] border-2 border-[#C9A45C] group-hover:scale-125 transition-transform" />

              <div className="bg-[#0B0D0C] p-4 rounded-xl border border-white/10 space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C9A45C]" />
                    <strong className="font-serif text-sm font-bold text-white">{item.time}</strong>
                    <span className="text-xs text-white/50 font-mono">Ref: {item.ref}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#C9A45C]/10 text-[#C9A45C] border border-[#C9A45C]/30 uppercase">
                    {item.status}
                  </span>
                </div>

                <div className="text-xs space-y-1 text-[#D8D3C8]">
                  <p>Passenger: <strong className="text-white font-serif">{item.passenger}</strong></p>
                  <p className="flex items-center gap-1.5 text-white">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {item.route}
                  </p>
                  <p className="flex items-center gap-1.5 text-white/60">
                    <Car className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                    {item.vehicle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
