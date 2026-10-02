"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { User, MapPin, Building2, Crown, Mail, Phone } from "lucide-react";

export default function CustomerProfilePage() {
  return (
    <DashboardLayout allowedRoles={["customer"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">VIP Client Profile & Preferences</h1>
        <p className="text-xs text-[#D8D3C8]">Saved executive locations, preferred vehicle choices, and company details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
        <div className="bg-[#141817] p-6 rounded-2xl border border-white/10 space-y-4">
          <h3 className="font-serif text-base font-bold text-[#C9A45C] border-b border-white/10 pb-2">Account Profile</h3>
          <div className="space-y-2 text-[#D8D3C8]">
            <p>Full Name: <strong className="text-white font-serif">Lord Alexander Wright</strong></p>
            <p>Account Type: <strong className="text-[#C9A45C]">Corporate Executive VIP</strong></p>
            <p>Company: <strong className="text-white">Wright Capital Holdings UK</strong></p>
            <p>Preferred Vehicle: <strong className="text-white font-serif">Mercedes-Maybach S680</strong></p>
          </div>
        </div>

        <div className="bg-[#141817] p-6 rounded-2xl border border-white/10 space-y-4">
          <h3 className="font-serif text-base font-bold text-[#C9A45C] border-b border-white/10 pb-2">Saved Frequent Locations</h3>
          <div className="space-y-2 text-[#D8D3C8]">
            <p className="flex items-center gap-2 text-white bg-[#0B0D0C] p-2.5 rounded-xl border border-white/5">
              <MapPin className="w-4 h-4 text-emerald-400" /> 10 Park Lane, Mayfair, London
            </p>
            <p className="flex items-center gap-2 text-white bg-[#0B0D0C] p-2.5 rounded-xl border border-white/5">
              <MapPin className="w-4 h-4 text-emerald-400" /> Heathrow Terminal 5 VIP FBO Lounge
            </p>
            <p className="flex items-center gap-2 text-white bg-[#0B0D0C] p-2.5 rounded-xl border border-white/5">
              <MapPin className="w-4 h-4 text-emerald-400" /> The Connaught Hotel, Mayfair
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
