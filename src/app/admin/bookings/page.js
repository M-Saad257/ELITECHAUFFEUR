"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingDetailModal from "@/components/dashboard/BookingDetailModal";
import { useDemoData } from "@/context/DemoDataContext";
import { Eye, Calendar, Filter, Plus } from "lucide-react";

export default function AdminBookingsPage() {
  const { bookings } = useDemoData();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.pickup.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || b.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <DashboardLayout allowedRoles={["admin"]} searchValue={searchQuery} onSearchChange={setSearchQuery}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141817] p-5 rounded-2xl border border-white/10">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Chauffeur Bookings Management</h1>
          <p className="text-xs text-[#D8D3C8] mt-1">
            Complete database of executive reservations, driver assignments, and trip statuses
          </p>
        </div>

        <div className="flex items-center gap-2">
          {["all", "confirmed", "driver en route", "pending", "completed", "cancelled"].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all cursor-pointer ${
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

      <div className="bg-[#141817] rounded-2xl border border-white/10 p-5 overflow-x-auto">
        <table className="w-full text-left text-xs text-[#F5F1E8]">
          <thead className="bg-[#0B0D0C] text-[10px] uppercase font-bold text-[#C9A45C] border-b border-white/10">
            <tr>
              <th className="p-3">Booking ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Pickup Location</th>
              <th className="p-3">Dropoff Destination</th>
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
                <td className="p-3 max-w-[150px] truncate text-[#D8D3C8]">{b.pickup}</td>
                <td className="p-3 max-w-[150px] truncate text-[#D8D3C8]">{b.dropoff}</td>
                <td className="p-3 whitespace-nowrap">{b.date} • {b.time}</td>
                <td className="p-3 font-serif text-white">{b.vehicleName}</td>
                <td className="p-3 text-[#D8D3C8]">{b.driverName || "Unassigned"}</td>
                <td className="p-3 font-bold text-[#C9A45C]">£{b.fare}</td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                    b.paymentStatus === "Paid" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                  }`}>
                    {b.paymentStatus}
                  </span>
                </td>
                <td className="p-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${
                    b.status === "Completed" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-[#C9A45C]/10 text-[#C9A45C] border-[#C9A45C]/30"
                  }`}>
                    {b.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => setSelectedBooking(b)}
                    className="px-2.5 py-1 rounded-lg bg-[#0B0D0C] hover:bg-[#C9A45C] hover:text-[#0B0D0C] text-xs text-white border border-white/10 transition-colors cursor-pointer inline-flex items-center gap-1 font-semibold"
                  >
                    <Eye className="w-3.5 h-3.5" /> Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
