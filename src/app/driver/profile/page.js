"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { User, ShieldCheck, Car, Star, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function DriverProfilePage() {
  return (
    <DashboardLayout allowedRoles={["driver"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">Chauffeur Profile & Credentials</h1>
        <p className="text-xs text-[#D8D3C8]">Official UK driver verification badges and assigned vehicle details</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#141817] p-6 rounded-2xl border border-white/10 text-center space-y-3">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#C9A45C] mx-auto">
            <Image src="/images/lifestyle.jpg" alt="James Sterling" fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-white">James Sterling</h3>
            <p className="text-xs text-[#C9A45C] font-semibold">Senior Executive Chauffeur</p>
          </div>
          <div className="flex items-center justify-center gap-1 text-xs text-[#C9A45C] font-bold pt-1">
            <Star className="w-4 h-4 fill-[#C9A45C]" />
            <span>4.98 Rating</span>
            <span className="text-white/40">(482 Trips)</span>
          </div>
        </div>

        <div className="md:col-span-2 bg-[#141817] p-6 rounded-2xl border border-white/10 space-y-4 text-xs">
          <h4 className="font-serif text-sm font-bold text-[#C9A45C] border-b border-white/10 pb-2">
            Verification Credentials
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-[#0B0D0C] p-3 rounded-xl border border-emerald-500/30 space-y-1">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <strong className="text-white block text-xs">DBS Enhanced Check</strong>
              <span className="text-[10px] text-emerald-400 font-semibold">Verified & Clear</span>
            </div>

            <div className="bg-[#0B0D0C] p-3 rounded-xl border border-emerald-500/30 space-y-1">
              <User className="w-5 h-5 text-emerald-400" />
              <strong className="text-white block text-xs">UK Chauffeur Licence</strong>
              <span className="text-[10px] text-emerald-400 font-semibold">TfL Licensed</span>
            </div>

            <div className="bg-[#0B0D0C] p-3 rounded-xl border border-emerald-500/30 space-y-1">
              <Car className="w-5 h-5 text-emerald-400" />
              <strong className="text-white block text-xs">Vehicle Inspection</strong>
              <span className="text-[10px] text-emerald-400 font-semibold">MOT & VIP Insured</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
