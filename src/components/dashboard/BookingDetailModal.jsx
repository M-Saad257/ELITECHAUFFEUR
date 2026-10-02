"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useDemoData } from "@/context/DemoDataContext";
import {
  X,
  Car,
  User,
  MapPin,
  Calendar,
  Clock,
  CreditCard,
  CheckCircle2,
  FileCheck,
  ShieldCheck,
  Phone,
  Mail,
  AlertCircle
} from "lucide-react";
import Image from "next/image";

export default function BookingDetailModal({ booking, isOpen, onClose }) {
  const { role } = useAuth();
  const { drivers, assignDriverToBooking, updateBookingStatus, approvePayment, rejectPayment } = useDemoData();
  const [selectedDriverId, setSelectedDriverId] = useState(booking?.driverId || "");

  if (!isOpen || !booking) return null;

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Driver En Route":
      case "Passenger Picked Up":
        return "bg-sky-500/10 text-sky-400 border-sky-500/30";
      case "Accepted":
      case "Confirmed":
        return "bg-[#C9A45C]/10 text-[#C9A45C] border-[#C9A45C]/40";
      case "Pending":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "Cancelled":
        return "bg-red-500/10 text-red-400 border-red-500/30";
      default:
        return "bg-white/10 text-white border-white/20";
    }
  };

  const handleAssignDriver = (e) => {
    e.preventDefault();
    if (selectedDriverId) {
      assignDriverToBooking(booking.id, selectedDriverId);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-[#141817] rounded-2xl border border-[#C9A45C]/40 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#0B0D0C] border-b border-white/10 flex items-center justify-between shrink-0">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-bold text-white">Booking {booking.id}</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase ${getStatusBadge(booking.status)}`}>
                  {booking.status}
                </span>
              </div>
              <p className="text-xs text-[#D8D3C8] mt-0.5">Created on {booking.createdAt}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-[#C9A45C] transition-colors border border-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
            {/* Customer & Journey Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0B0D0C] p-4 rounded-xl border border-white/10 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#C9A45C] block mb-1">Customer Profile</span>
                <strong className="text-white text-sm font-serif block">{booking.customerName}</strong>
                <div className="text-[#D8D3C8] space-y-0.5 mt-1">
                  <p className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-[#C9A45C]" /> {booking.customerEmail}</p>
                  <p className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-[#C9A45C]" /> {booking.customerPhone}</p>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-[#C9A45C] block mb-1">Chauffeur Vehicle</span>
                <strong className="text-white text-sm font-serif block">{booking.vehicleName}</strong>
                <p className="text-[#D8D3C8] mt-1">Assigned Driver: <strong className="text-white">{booking.driverName}</strong></p>
                <p className="text-[#D8D3C8]">Passengers: {booking.passengers}</p>
              </div>
            </div>

            {/* Route Details */}
            <div className="bg-[#0B0D0C] p-4 rounded-xl border border-white/10 space-y-2 text-xs">
              <span className="text-[10px] uppercase font-bold text-[#C9A45C] block">Journey Itinerary</span>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/60 text-[10px] block">Pickup Location</span>
                    <strong className="text-white text-xs">{booking.pickup}</strong>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white/60 text-[10px] block">Dropoff / Duration</span>
                    <strong className="text-white text-xs">{booking.dropoff}</strong>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-xs">
                <div className="flex items-center gap-1.5 text-[#D8D3C8]">
                  <Calendar className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Date: <strong className="text-white">{booking.date}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-[#D8D3C8]">
                  <Clock className="w-3.5 h-3.5 text-[#C9A45C]" />
                  <span>Time: <strong className="text-white">{booking.time}</strong></span>
                </div>
              </div>

              {booking.flightNumber && (
                <div className="text-[11px] text-[#C9A45C] pt-1">
                  Flight Tracking Ref: <strong>{booking.flightNumber}</strong>
                </div>
              )}
              {booking.specialInstructions && (
                <div className="text-[11px] text-[#D8D3C8] italic pt-1">
                  Instructions: &quot;{booking.specialInstructions}&quot;
                </div>
              )}
            </div>

            {/* Fare & Payment Screenshot Proof Area */}
            <div className="bg-[#0B0D0C] p-4 rounded-xl border border-[#C9A45C]/30 space-y-3 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#C9A45C] block">Payment Summary</span>
                  <span className="text-white font-medium">{booking.paymentMethod}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-white/60 block">Total Agreed Fare</span>
                  <span className="font-serif text-xl font-bold text-[#C9A45C]">£{booking.fare}</span>
                </div>
              </div>

              {/* Payment Proof Screenshot View */}
              <div>
                <span className="text-[10px] uppercase font-bold text-white/60 block mb-1.5">Attached Receipt Screenshot</span>
                {booking.receiptScreenshot ? (
                  <div className="bg-[#141817] p-3 rounded-xl border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <FileCheck className="w-5 h-5 text-emerald-400" />
                      <div>
                        <strong className="text-white block text-xs truncate max-w-[200px]">
                          {booking.receiptScreenshot.name}
                        </strong>
                        <span className="text-[10px] text-emerald-400 font-semibold">
                          Payment Proof Attached ({booking.paymentStatus})
                        </span>
                      </div>
                    </div>

                    {role === "admin" && booking.paymentStatus === "Verification Required" && (
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => approvePayment(booking.id)}
                          className="px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 rounded-lg text-[10px] font-bold cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => rejectPayment(booking.id)}
                          className="px-2.5 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/40 rounded-lg text-[10px] font-bold cursor-pointer"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-xs text-white/40 italic">No receipt screenshot attached yet.</p>
                )}
              </div>
            </div>

            {/* Admin Driver Assignment Control */}
            {role === "admin" && (
              <form onSubmit={handleAssignDriver} className="bg-[#0B0D0C] p-4 rounded-xl border border-white/10 space-y-2 text-xs">
                <label className="text-[10px] uppercase font-bold text-[#C9A45C] block">
                  Assign Executive Chauffeur:
                </label>
                <div className="flex gap-2">
                  <select
                    value={selectedDriverId}
                    onChange={(e) => setSelectedDriverId(e.target.value)}
                    className="flex-1 bg-[#141817] border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C9A45C]"
                  >
                    <option value="">-- Select Chauffeur --</option>
                    {drivers.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.vehicleName} - {d.status})
                      </option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#C9A45C] text-[#0B0D0C] font-bold rounded-xl text-xs hover:bg-[#d4b068] transition-colors cursor-pointer"
                  >
                    Assign
                  </button>
                </div>
              </form>
            )}

            {/* Quick Status Control Buttons */}
            <div className="pt-2 flex flex-wrap gap-2 justify-end">
              {role === "admin" && (
                <>
                  <button
                    onClick={() => updateBookingStatus(booking.id, "Confirmed")}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs border border-white/10 cursor-pointer"
                  >
                    Set Confirmed
                  </button>
                  <button
                    onClick={() => updateBookingStatus(booking.id, "Completed")}
                    className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-xl text-xs border border-emerald-500/30 cursor-pointer"
                  >
                    Mark Completed
                  </button>
                  <button
                    onClick={() => updateBookingStatus(booking.id, "Cancelled")}
                    className="px-3 py-1.5 bg-red-500/20 text-red-400 rounded-xl text-xs border border-red-500/30 cursor-pointer"
                  >
                    Cancel Booking
                  </button>
                </>
              )}

              {role === "driver" && (
                <>
                  {booking.status === "Confirmed" && (
                    <button
                      onClick={() => updateBookingStatus(booking.id, "Accepted")}
                      className="px-4 py-2 bg-[#C9A45C] text-[#0B0D0C] font-bold rounded-xl text-xs cursor-pointer"
                    >
                      Accept Trip
                    </button>
                  )}
                  {booking.status === "Accepted" && (
                    <button
                      onClick={() => updateBookingStatus(booking.id, "Driver En Route")}
                      className="px-4 py-2 bg-sky-500 text-white font-bold rounded-xl text-xs cursor-pointer"
                    >
                      Start Journey (En Route)
                    </button>
                  )}
                  {booking.status === "Driver En Route" && (
                    <button
                      onClick={() => updateBookingStatus(booking.id, "Passenger Picked Up")}
                      className="px-4 py-2 bg-amber-500 text-white font-bold rounded-xl text-xs cursor-pointer"
                    >
                      Passenger Picked Up
                    </button>
                  )}
                  {booking.status === "Passenger Picked Up" && (
                    <button
                      onClick={() => updateBookingStatus(booking.id, "Completed")}
                      className="px-4 py-2 bg-emerald-500 text-white font-bold rounded-xl text-xs cursor-pointer"
                    >
                      Complete Trip
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
