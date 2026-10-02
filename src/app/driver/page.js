"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import BookingDetailModal from "@/components/dashboard/BookingDetailModal";
import { useDemoData } from "@/context/DemoDataContext";
import {
  Car,
  Calendar,
  Clock,
  DollarSign,
  MapPin,
  CheckCircle2,
  Navigation,
  User,
  ArrowRight,
  ShieldCheck,
  Eye
} from "lucide-react";

export default function DriverOverviewPage() {
  const { bookings, updateBookingStatus } = useDemoData();
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Driver James Sterling assigned trips
  const driverTrips = bookings.filter((b) => b.driverName === "James Sterling" || b.driverId === "drv-1");

  const todayTripsCount = driverTrips.length || 5;
  const upcomingCount = driverTrips.filter((b) => b.status === "Confirmed" || b.status === "Accepted").length;
  const completedCount = driverTrips.filter((b) => b.status === "Completed").length;
  const todaysEarnings = 420;

  return (
    <DashboardLayout allowedRoles={["driver"]}>
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141817] p-5 rounded-2xl border border-white/10">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A45C]">CHAUFFEUR DRIVER CONSOLE</span>
          <h1 className="font-serif text-2xl font-bold text-white">Welcome, James Sterling</h1>
          <p className="text-xs text-[#D8D3C8] mt-0.5">Assigned Vehicle: Mercedes-Maybach S680 • Registration: LUX 01 MAY</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Duty Status: On Duty
          </span>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#141817] p-4 rounded-2xl border border-white/10 space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#D8D3C8]">Today&apos;s Assigned Trips</span>
          <div className="font-serif text-2xl font-bold text-white">{todayTripsCount}</div>
        </div>
        <div className="bg-[#141817] p-4 rounded-2xl border border-white/10 space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#D8D3C8]">Upcoming Journeys</span>
          <div className="font-serif text-2xl font-bold text-[#C9A45C]">{upcomingCount}</div>
        </div>
        <div className="bg-[#141817] p-4 rounded-2xl border border-white/10 space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#D8D3C8]">Completed Today</span>
          <div className="font-serif text-2xl font-bold text-emerald-400">{completedCount}</div>
        </div>
        <div className="bg-[#141817] p-4 rounded-2xl border border-white/10 space-y-1">
          <span className="text-[10px] uppercase font-bold text-[#D8D3C8]">Today&apos;s Earnings</span>
          <div className="font-serif text-2xl font-bold text-white">£{todaysEarnings}</div>
        </div>
      </div>

      {/* Active Trip Status Control Flow Cards */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-serif text-lg font-bold text-white">Assigned Journeys & State Flow</h2>
          <span className="text-xs text-[#D8D3C8]">Step-by-step trip progression</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {driverTrips.map((b) => (
            <div
              key={b.id}
              className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-4 relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono text-xs font-bold text-[#C9A45C]">{b.id}</span>
                  <h3 className="font-serif text-base font-bold text-white mt-0.5">{b.customerName}</h3>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase ${
                    b.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : b.status === "Driver En Route" || b.status === "Passenger Picked Up"
                      ? "bg-sky-500/10 text-sky-400 border-sky-500/30"
                      : "bg-[#C9A45C]/10 text-[#C9A45C] border-[#C9A45C]/30"
                  }`}
                >
                  {b.status}
                </span>
              </div>

              {/* Route Details */}
              <div className="bg-[#0B0D0C] p-3.5 rounded-xl border border-white/5 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 text-[10px] block">Pickup Address</span>
                    <strong className="text-white text-xs">{b.pickup}</strong>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/40 text-[10px] block">Destination / Duration</span>
                    <strong className="text-white text-xs">{b.dropoff}</strong>
                  </div>
                </div>

                <div className="flex justify-between pt-1 border-t border-white/5 text-[11px] text-[#D8D3C8]">
                  <span>Date: <strong className="text-white">{b.date}</strong></span>
                  <span>Time: <strong className="text-white">{b.time}</strong></span>
                </div>
              </div>

              {/* Step-by-Step Action Control Buttons */}
              <div className="pt-1 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedBooking(b)}
                  className="px-3 py-1.5 bg-[#0B0D0C] hover:bg-white/10 text-xs font-semibold text-white rounded-xl border border-white/10 cursor-pointer inline-flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" /> Details
                </button>

                <div>
                  {b.status === "Confirmed font-bold" && (
                    <button
                      onClick={() => updateBookingStatus(b.id, "Accepted")}
                      className="px-4 py-2 bg-[#C9A45C] text-[#0B0D0C] font-bold rounded-xl text-xs hover:bg-[#d4b068] transition-colors cursor-pointer"
                    >
                      ACCEPT TRIP
                    </button>
                  )}

                  {(b.status === "Confirmed" || b.status === "Accepted") && (
                    <button
                      onClick={() => updateBookingStatus(b.id, "Driver En Route")}
                      className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      START JOURNEY (EN ROUTE)
                    </button>
                  )}

                  {b.status === "Driver En Route" && (
                    <button
                      onClick={() => updateBookingStatus(b.id, "Passenger Picked Up")}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      PASSENGER PICKED UP
                    </button>
                  )}

                  {b.status === "Passenger Picked Up" && (
                    <button
                      onClick={() => updateBookingStatus(b.id, "Completed")}
                      className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      COMPLETE JOURNEY
                    </button>
                  )}

                  {b.status === "Completed" && (
                    <span className="text-emerald-400 text-xs font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Trip Completed
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
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
