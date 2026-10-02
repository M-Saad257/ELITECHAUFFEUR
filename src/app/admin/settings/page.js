"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Settings, Shield, Bell, Lock, Building2 } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <DashboardLayout allowedRoles={["admin"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">Platform Settings & Controls</h1>
        <p className="text-xs text-[#D8D3C8]">Manage company parameters, dispatch triggers, and system credentials</p>
      </div>

      <div className="bg-[#141817] p-6 rounded-2xl border border-white/10 space-y-4 max-w-2xl text-xs">
        <h3 className="font-serif text-base font-bold text-[#C9A45C] border-b border-white/10 pb-2">
          UK Dispatch Center Profile
        </h3>

        <div className="space-y-3">
          <div>
            <label className="text-[11px] uppercase font-bold text-white/60 block mb-1">Operating Company Name</label>
            <input
              type="text"
              defaultValue="Elite Chauffeur UK Ltd"
              className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] uppercase font-bold text-white/60 block mb-1">Dispatch Phone</label>
              <input
                type="text"
                defaultValue="+44 20 7946 0920"
                className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] uppercase font-bold text-white/60 block mb-1">Headquarters</label>
              <input
                type="text"
                defaultValue="Mayfair, London, W1J 8AJ"
                className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-white/10 flex justify-end">
          <button className="btn-gold-primary py-2.5 px-6 text-xs cursor-pointer">SAVE PLATFORM SETTINGS</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
