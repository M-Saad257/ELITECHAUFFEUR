"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingDetailModal from "@/components/dashboard/BookingDetailModal";
import { useDemoData } from "@/context/DemoDataContext";
import { Eye, Calendar, PlusCircle } from "lucide-react";
import Link from "next/link";

export default function CustomerBookingsPage() {
  const { bookings } = useDemoData();
  const [selectedBooking, setSelectedBooking] = useState(null);

  const customerBookings = bookings.filter(
    (b) => b.customerEmail === "customer@example.com" || b.customerName.includes("Wright")
  );

  return (
    <DashboardLayout allowedRoles={["customer"]}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141817] p-5 rounded-2xl border border-white/10">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">My Booking History</h1>
          <p className="text-xs text-[#D8D3C8] mt-1">
            Complete list of your past transfers, active itineraries, and payment receipts
          </p>
        </div>

        <Link
          href="/customer/book"
          className="btn-gold-primary py-2 px-4 text-xs inline-flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4 text-[#0B0D0C]" />
          <span>New Reservation</span>
        </Link>
      </div>

      <div className="bg-[#141817] rounded-2xl border border-white/10 p-5 overflow-x-auto">
        <table className="w-full text-left text-xs text-[#F5F1E8]">
          <thead className="bg-[#0B0D0C] text-[10px] uppercase font-bold text-[#C9A45C] border-b border-white/10">
            <tr>
              <th className="p-3">Reference ID</th>
              <th className="p-3">Pickup Address</th>
              <th className="p-3">Destination / Duration</th>
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
            {customerBookings.map((b) => (
              <tr key={b.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3 font-mono font-bold text-[#C9A45C]">{b.id}</td>
                <td className="p-3 max-w-[160px] truncate text-white">{b.pickup}</td>
                <td className="p-3 max-w-[160px] truncate text-[#D8D3C8]">{b.dropoff}</td>
                <td className="p-3 whitespace-nowrap text-[#D8D3C8]">{b.date} • {b.time}</td>
                <td className="p-3 font-serif text-white">{b.vehicleName}</td>
                <td className="p-3 text-[#D8D3C8]">{b.driverName || "Assigning..."}</td>
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
                    className="px-2.5 py-1 bg-[#0B0D0C] hover:bg-[#C9A45C] hover:text-[#0B0D0C] border border-white/10 text-white rounded-lg text-xs font-semibold cursor-pointer inline-flex items-center gap-1"
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
