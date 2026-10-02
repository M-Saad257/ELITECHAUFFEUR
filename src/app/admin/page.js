"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingDetailModal from "@/components/dashboard/BookingDetailModal";
import { useDemoData } from "@/context/DemoDataContext";
import {
  Calendar,
  UserCheck,
  Users,
  DollarSign,
  Clock,
  TrendingUp,
  ArrowUpRight,
  Eye,
  CheckCircle2,
  FileCheck,
  Plus
} from "lucide-react";

export default function AdminOverviewPage() {
  const { bookings, drivers, customers, approvePayment } = useDemoData();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const todayBookingsCount = bookings.filter((b) => b.date === "2026-10-02" || b.date === "2026-10-15").length || 24;
  const activeDriversCount = drivers.filter((d) => d.status === "Available" || d.status === "On Trip").length || 18;
  const pendingPaymentsCount = bookings.filter((b) => b.paymentStatus === "Verification Required" || b.paymentStatus === "Pending").length || 7;
  const totalRevenue = bookings.reduce((sum, b) => sum + (b.fare || 0), 4860);

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.pickup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.dropoff.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || b.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const kpiCards = [
    { label: "Today's Bookings", value: todayBookingsCount, change: "+18%", icon: Calendar, color: "text-[#C9A45C]" },
    { label: "Active Drivers", value: activeDriversCount, change: "18 On Duty", icon: UserCheck, color: "text-emerald-400" },
    { label: "Total Customers", value: customers.length || 142, change: "+12 this week", icon: Users, color: "text-sky-400" },
    { label: "Today's Revenue", value: `£${totalRevenue.toLocaleString()}`, change: "+24% vs yesterday", icon: DollarSign, color: "text-[#C9A45C]" },
    { label: "Pending Payments", value: pendingPaymentsCount, change: "Needs review", icon: Clock, color: "text-amber-400" },
  ];

  return (
    <DashboardLayout allowedRoles={["admin"]} searchValue={searchQuery} onSearchChange={setSearchQuery}>
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141817] p-5 rounded-2xl border border-white/10">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Dispatch Operations Control</h1>
          <p className="text-xs text-[#D8D3C8] mt-1">
            Real-time UK luxury chauffeur fleet management & booking overview
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            24/7 System Active
          </span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpiCards.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div
              key={idx}
              className="bg-[#141817] p-4 rounded-2xl border border-white/10 hover:border-[#C9A45C]/50 transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between text-white/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#D8D3C8]">{kpi.label}</span>
                <Icon className={`w-4 h-4 ${kpi.color} group-hover:scale-110 transition-transform`} />
              </div>
              <div className="font-serif text-2xl font-bold text-white">{kpi.value}</div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-semibold">
                <TrendingUp className="w-3 h-3" />
                <span>{kpi.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bookings Section */}
      <div className="bg-[#141817] rounded-2xl border border-white/10 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
          <div>
            <h2 className="font-serif text-lg font-bold text-white">Live Booking Directory</h2>
            <p className="text-xs text-[#D8D3C8]">
              Inspect, assign chauffeurs, verify payments, and manage reservations
            </p>
          </div>

          {/* Status Filter Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {["all", "confirmed", "driver en route", "pending", "completed"].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
                  filterStatus === st
                    ? "bg-[#C9A45C] text-[#0B0D0C]"
                    : "bg-[#0B0D0C] text-[#D8D3C8] hover:text-white border border-white/10"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Bookings Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#F5F1E8]">
            <thead className="bg-[#0B0D0C] text-[10px] uppercase font-bold text-[#C9A45C] border-b border-white/10">
              <tr>
                <th className="p-3">Ref ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Route</th>
                <th className="p-3">Date & Time</th>
                <th className="p-3">Vehicle</th>
                <th className="p-3">Chauffeur</th>
                <th className="p-3">Fare</th>
                <th className="p-3">Payment</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-3 font-mono font-bold text-[#C9A45C]">{b.id}</td>
                  <td className="p-3 font-medium text-white">{b.customerName}</td>
                  <td className="p-3 max-w-[180px] truncate text-[#D8D3C8]">
                    {b.pickup} → {b.dropoff}
                  </td>
                  <td className="p-3 text-white/80 whitespace-nowrap">
                    {b.date} • {b.time}
                  </td>
                  <td className="p-3 font-serif text-white">{b.vehicleName}</td>
                  <td className="p-3 text-[#D8D3C8]">{b.driverName || "Unassigned"}</td>
                  <td className="p-3 font-bold text-[#C9A45C]">£{b.fare}</td>
                  <td className="p-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                        b.paymentStatus === "Paid"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}
                    >
                      {b.paymentStatus}
                    </span>
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                        b.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : b.status === "Driver En Route"
                          ? "bg-sky-500/10 text-sky-400 border-sky-500/30"
                          : "bg-[#C9A45C]/10 text-[#C9A45C] border-[#C9A45C]/30"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => setSelectedBooking(b)}
                      className="px-2.5 py-1 rounded-lg bg-[#0B0D0C] hover:bg-[#C9A45C] hover:text-[#0B0D0C] text-xs text-white border border-white/10 transition-colors cursor-pointer inline-flex items-center gap-1 font-semibold"
                    >
                      <Eye className="w-3.5 h-3.5" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Detail Modal */}
      {selectedBooking && (
        <BookingDetailModal
          booking={selectedBooking}
          isOpen={!!selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </DashboardLayout>
  );
}
