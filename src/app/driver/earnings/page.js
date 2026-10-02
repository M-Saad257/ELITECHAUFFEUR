"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DollarSign, TrendingUp, Calendar, CreditCard } from "lucide-react";

export default function DriverEarningsPage() {
  return (
    <DashboardLayout allowedRoles={["driver"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">Chauffeur Payouts & Earnings</h1>
        <p className="text-xs text-[#D8D3C8]">Weekly earnings, completed job gratuities, and payout logs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-[10px] uppercase font-bold text-[#C9A45C]">Today&apos;s Earnings</span>
          <div className="font-serif text-3xl font-bold text-white">£420.00</div>
          <p className="text-xs text-emerald-400 font-semibold">+£85 gratuities included</p>
        </div>

        <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-[10px] uppercase font-bold text-[#C9A45C]">This Week Total</span>
          <div className="font-serif text-3xl font-bold text-[#C9A45C]">£2,150.00</div>
          <p className="text-xs text-emerald-400 font-semibold">18 completed trips</p>
        </div>

        <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-[10px] uppercase font-bold text-[#C9A45C]">Next Payout Date</span>
          <div className="font-serif text-3xl font-bold text-white">Friday, Oct 5</div>
          <p className="text-xs text-white/50">Direct UK Bank Deposit</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
