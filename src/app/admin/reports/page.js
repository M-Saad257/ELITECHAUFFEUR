"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { BarChart3, TrendingUp, DollarSign, Calendar, Car, ShieldCheck } from "lucide-react";

export default function AdminReportsPage() {
  const monthlyRevenue = [
    { month: "May", revenue: 42000, trips: 210 },
    { month: "Jun", revenue: 58000, trips: 285 },
    { month: "Jul", revenue: 64000, trips: 310 },
    { month: "Aug", revenue: 72000, trips: 350 },
    { month: "Sep", revenue: 81000, trips: 390 },
    { month: "Oct (Forecast)", revenue: 94000, trips: 440 },
  ];

  const maxRev = 100000;

  return (
    <DashboardLayout allowedRoles={["admin"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">Executive Analytics & Revenue Intelligence</h1>
        <p className="text-xs text-[#D8D3C8]">
          Quarterly growth performance, fleet utilization rates, and financial reports
        </p>
      </div>

      {/* Analytics Chart */}
      <div className="bg-[#141817] p-6 rounded-2xl border border-white/10 space-y-6">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div>
            <h2 className="font-serif text-lg font-bold text-white">Monthly Revenue Growth (£)</h2>
            <p className="text-xs text-[#D8D3C8]">Gross UK Chauffeur bookings revenue</p>
          </div>
          <span className="text-xs font-mono font-bold text-[#C9A45C] bg-[#C9A45C]/10 border border-[#C9A45C]/30 px-3 py-1 rounded-full">
            Total Q3: £411,000
          </span>
        </div>

        {/* Clean CSS SVG Bar Graph */}
        <div className="h-64 flex items-end justify-between gap-4 pt-4 px-2">
          {monthlyRevenue.map((item, idx) => {
            const heightPercent = (item.revenue / maxRev) * 100;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                <span className="text-[10px] font-bold text-[#C9A45C] opacity-0 group-hover:opacity-100 transition-opacity">
                  £{(item.revenue / 1000).toFixed(0)}k
                </span>
                <div
                  style={{ height: `${heightPercent}%` }}
                  className="w-full bg-gradient-to-t from-[#C9A45C]/40 to-[#C9A45C] rounded-t-xl group-hover:brightness-125 transition-all relative overflow-hidden"
                />
                <span className="text-xs text-[#D8D3C8] font-bold">{item.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fleet Utilization Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-[10px] font-bold uppercase text-[#C9A45C]">Fleet Utilization Rate</span>
          <div className="font-serif text-3xl font-bold text-white">92.4%</div>
          <p className="text-xs text-emerald-400 font-semibold">+4.2% optimized road time</p>
        </div>

        <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-[10px] font-bold uppercase text-[#C9A45C]">On-Time Punctuality</span>
          <div className="font-serif text-3xl font-bold text-white">99.8%</div>
          <p className="text-xs text-emerald-400 font-semibold">15-min early arrival standard</p>
        </div>

        <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-2">
          <span className="text-[10px] font-bold uppercase text-[#C9A45C]">Cancellation Rate</span>
          <div className="font-serif text-3xl font-bold text-white">0.4%</div>
          <p className="text-xs text-emerald-400 font-semibold">Industry lowest cancellation rate</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
