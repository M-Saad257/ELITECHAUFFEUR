"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingDetailModal from "@/components/dashboard/BookingDetailModal";
import { useDemoData } from "@/context/DemoDataContext";
import { Eye, Calendar, CheckCircle2 } from "lucide-react";

export default function DriverBookingsPage() {
  const { bookings } = useDemoData();
  const [selectedBooking, setSelectedBooking] = useState(null);

  const driverTrips = bookings.filter((b) => b.driverName === "James Sterling" || b.driverId === "drv-1");

  return (
    <DashboardLayout allowedRoles={["driver"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">My Driver Trips & History</h1>
        <p className="text-xs text-[#D8D3C8]">Assigned transfers and completed chauffeur jobs</p>
      </div>

      <div className="bg-[#141817] rounded-2xl border border-white/10 p-5 overflow-x-auto">
        <table className="w-full text-left text-xs text-[#F5F1E8]">
          <thead className="bg-[#0B0D0C] text-[10px] uppercase font-bold text-[#C9A45C] border-b border-white/10">
            <tr>
              <th className="p-3">Ref ID</th>
              <th className="p-3">Passenger</th>
              <th className="p-3">Pickup Address</th>
              <th className="p-3">Dropoff Destination</th>
              <th className="p-3">Date & Time</th>
              <th className="p-3">Payout Fare</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {driverTrips.map((b) => (
              <tr key={b.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3 font-mono font-bold text-[#C9A45C]">{b.id}</td>
                <td className="p-3 font-serif font-bold text-white">{b.customerName}</td>
                <td className="p-3 max-w-[160px] truncate text-[#D8D3C8]">{b.pickup}</td>
                <td className="p-3 max-w-[160px] truncate text-[#D8D3C8]">{b.dropoff}</td>
                <td className="p-3 whitespace-nowrap">{b.date} • {b.time}</td>
                <td className="p-3 font-bold text-[#C9A45C]">£{b.fare}</td>
                <td className="p-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                    b.status === "Completed" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-[#C9A45C]/10 text-[#C9A45C] border-[#C9A45C]/30"
                  }`}>
                    {b.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => setSelectedBooking(b)}
                    className="px-2.5 py-1 bg-[#0B0D0C] hover:bg-[#C9A45C] hover:text-[#0B0D0C] border border-white/10 text-white rounded-lg text-xs font-semibold cursor-pointer inline-flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" /> View
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
