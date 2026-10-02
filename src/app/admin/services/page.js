"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Sliders, Shield, Plane, Building2, Crown, Sparkles } from "lucide-react";

export default function AdminServicesPage() {
  const services = [
    { title: "Airport Transfers (LHR, LGW, STN, FAB)", icon: Plane, status: "Active", baseFee: "£90 min" },
    { title: "Corporate Financial Roadshows", icon: Building2, status: "Active", baseFee: "£110/hr" },
    { title: "Diplomatic & Sovereign VIP Escort", icon: Crown, status: "Active", baseFee: "£220/hr" },
    { title: "Private Jet FBO Tarmac Transfer", icon: Sparkles, status: "Active", baseFee: "£180 min" },
  ];

  return (
    <DashboardLayout allowedRoles={["admin"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">Chauffeur Service Catalog</h1>
        <p className="text-xs text-[#D8D3C8]">Manage executive service offerings and baseline pricing rules</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-[#141817] p-5 rounded-2xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0B0D0C] border border-[#C9A45C] flex items-center justify-center text-[#C9A45C]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-bold text-white">{s.title}</h3>
                  <span className="text-xs text-[#C9A45C] font-mono font-bold">{s.baseFee}</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {s.status}
              </span>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}
