"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingDetailModal from "@/components/dashboard/BookingDetailModal";
import { useDemoData } from "@/context/DemoDataContext";
import Link from "next/link";
import {
  Car,
  Calendar,
  Clock,
  MapPin,
  PlusCircle,
  ShieldCheck,
  Eye,
  ArrowRight,
  UserCheck
} from "lucide-react";
import Image from "next/image";

export default function CustomerOverviewPage() {
  const { bookings, updateBookingStatus } = useDemoData();
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Customer Lord Alexander Wright's bookings
  const customerBookings = bookings.filter(
    (b) => b.customerEmail === "customer@example.com" || b.customerName.includes("Wright")
  );

  const upcomingBooking = customerBookings.find((b) => b.status !== "Completed" && b.status !== "Cancelled") || customerBookings[0];
  const totalTripsCount = customerBookings.length || 14;
  const completedTripsCount = customerBookings.filter((b) => b.status === "Completed").length || 13;
  const totalSpend = customerBookings.reduce((sum, b) => sum + (b.fare || 0), 3420);

  return (
    <DashboardLayout allowedRoles={["customer"]}>
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141817] p-5 rounded-2xl border border-white/10">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A45C]">VIP CLIENT CONSOLE</span>
          <h1 className="font-serif text-2xl font-bold text-white">Welcome, Lord Alexander Wright</h1>
          <p className="text-xs text-[#D8D3C8] mt-0.5">Account ID: EC-VIP-9942 • Wright Capital Holdings</p>
        </div>

        <Link
          href="/customer/book"
          className="btn-gold-primary py-2.5 px-5 text-xs inline-flex items-center gap-2"
        >
          <PlusCircle className="w-4 h-4 text-[#0B0D0C]" />
          <span>BOOK A CHAUFFEUR</span>
        </Link>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#141817] p-4 rounded-2xl border border-white/10 space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#D8D3C8]">Total Chauffeur Rides</span>
          <div className="font-serif text-2xl font-bold text-white">{totalTripsCount}</div>
        </div>
        <div className="bg-[#141817] p-4 rounded-2xl border border-white/10 space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#D8D3C8]">Completed Journeys</span>
          <div className="font-serif text-2xl font-bold text-emerald-400">{completedTripsCount}</div>
        </div>
        <div className="bg-[#141817] p-4 rounded-2xl border border-white/10 space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#D8D3C8]">Total Lifetime Spend</span>
          <div className="font-serif text-2xl font-bold text-[#C9A45C]">£{totalSpend.toLocaleString()}</div>
        </div>
      </div>

      {/* Featured Upcoming Ride Card */}
      {upcomingBooking && (
        <div className="bg-[#141817] rounded-2xl border border-[#C9A45C]/40 p-5 sm:p-6 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#C9A45C] tracking-wider block">Upcoming VIP Transfer</span>
              <h2 className="font-serif text-xl font-bold text-white">Booking Ref: {upcomingBooking.id}</h2>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold border uppercase ${
                upcomingBooking.status === "Driver En Route"
                  ? "bg-sky-500/10 text-sky-400 border-sky-500/30 animate-pulse"
                  : "bg-[#C9A45C]/10 text-[#C9A45C] border-[#C9A45C]/30"
              }`}
            >
              {upcomingBooking.status}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-[#0B0D0C] p-4 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/40 text-[10px] block">Pickup Location</span>
                  <strong className="text-white text-xs">{upcomingBooking.pickup}</strong>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/40 text-[10px] block">Destination / Duration</span>
                  <strong className="text-white text-xs">{upcomingBooking.dropoff}</strong>
                </div>
              </div>

              <div className="flex justify-between pt-2 border-t border-white/5 text-[11px] text-[#D8D3C8]">
                <span>Date: <strong className="text-white">{upcomingBooking.date}</strong></span>
                <span>Time: <strong className="text-white">{upcomingBooking.time}</strong></span>
              </div>
            </div>

            <div className="bg-[#0B0D0C] p-4 rounded-xl border border-white/5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#C9A45C] block">Reserved Chauffeur Vehicle</span>
                <h3 className="font-serif text-base font-bold text-white">{upcomingBooking.vehicleName}</h3>
                <p className="text-xs text-[#D8D3C8] flex items-center gap-1.5 pt-1">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  Driver Assigned: <strong className="text-white font-serif">{upcomingBooking.driverName}</strong>
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="font-serif text-lg font-bold text-[#C9A45C]">£{upcomingBooking.fare}</span>
                <button
                  onClick={() => setSelectedBooking(upcomingBooking)}
                  className="px-3.5 py-1.5 bg-[#141817] hover:bg-[#C9A45C] hover:text-[#0B0D0C] text-xs font-semibold text-white rounded-xl border border-white/10 transition-colors cursor-pointer inline-flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" /> View Ride Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
