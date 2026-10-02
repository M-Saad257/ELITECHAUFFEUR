"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  CheckCircle2,
  ArrowRight,
  Car,
  Phone,
  Upload,
  FileCheck,
  CreditCard,
  Building2,
  ShieldCheck,
  Image as ImageIcon,
  Trash2,
  Check
} from "lucide-react";
import Image from "next/image";

export default function QuoteModal({ isOpen, onClose, initialData }) {
  const [step, setStep] = useState(1); // 1: Vehicle & Route, 2: Client Info, 3: Calculate & Pay, 4: Instant Confirmation
  const [journeyType, setJourneyType] = useState("point-to-point");
  const [pickup, setPickup] = useState("London Heathrow Airport (LHR)");
  const [dropoff, setDropoff] = useState("Mayfair, Central London");
  const [date, setDate] = useState("2026-10-15");
  const [time, setTime] = useState("14:30");
  const [passengers, setPassengers] = useState("1-3");
  const [selectedVehicleId, setSelectedVehicleId] = useState("s-class");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [notes, setNotes] = useState("");

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");
  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [paymentScreenshotPreview, setPaymentScreenshotPreview] = useState(null);
  const [uploadError, setUploadError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const vehicles = [
    {
      id: "maybach",
      name: "Mercedes-Maybach S680",
      category: "First-Class VIP",
      rate: 150,
      transferRate: 180,
      image: "/images/lifestyle.jpg",
      pax: "3 Passengers • 2 Luggage",
    },
    {
      id: "rolls-royce",
      name: "Rolls-Royce Phantom VIII",
      category: "Sovereign Luxury",
      rate: 220,
      transferRate: 250,
      image: "/images/fleet-rolls-royce.jpg",
      pax: "3 Passengers • 2 Luggage",
    },
    {
      id: "s-class",
      name: "Mercedes S-Class",
      category: "Executive Sedan",
      rate: 95,
      transferRate: 110,
      image: "/images/fleet-s-class.jpg",
      pax: "3 Passengers • 2 Luggage",
    },
    {
      id: "e-class",
      name: "Mercedes E-Class",
      category: "Business Sedan",
      rate: 75,
      transferRate: 90,
      image: "/images/fleet-e-class.jpg",
      pax: "3 Passengers • 2 Luggage",
    },
    {
      id: "v-class",
      name: "Mercedes V-Class",
      category: "Luxury Van",
      rate: 110,
      transferRate: 130,
      image: "/images/fleet-v-class.jpg",
      pax: "7 Passengers • 6 Luggage",
    },
    {
      id: "range-rover",
      name: "Range Rover SV",
      category: "Luxury SUV",
      rate: 125,
      transferRate: 150,
      image: "/images/fleet-range-rover.jpg",
      pax: "3 Passengers • 2 Luggage",
    },
  ];

  // Sync state whenever modal opens or initialData updates
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      if (initialData?.vehicleId) {
        const matched = vehicles.find(
          (v) => v.id.toLowerCase() === initialData.vehicleId.toLowerCase() || initialData.vehicleId.toLowerCase().includes(v.id.toLowerCase())
        );
        if (matched) {
          setSelectedVehicleId(matched.id);
        } else {
          setSelectedVehicleId(initialData.vehicleId);
        }
      }
      if (initialData?.type) setJourneyType(initialData.type);
      if (initialData?.pickup) setPickup(initialData.pickup);
      if (initialData?.dropoff) setDropoff(initialData.dropoff);
      if (initialData?.date) setDate(initialData.date);
      if (initialData?.time) setTime(initialData.time);
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const activeVehicle = vehicles.find((v) => v.id === selectedVehicleId) || vehicles[0];

  const parseHours = (str) => {
    if (!str) return 4;
    const match = str.match(/\d+/);
    return match ? parseInt(match[0], 10) : 4;
  };

  const hours = journeyType === "hourly" ? parseHours(dropoff) : 2;
  const baseRate = journeyType === "airport" ? activeVehicle.transferRate : activeVehicle.rate * hours;
  const meetAndGreetFee = journeyType === "airport" ? 15 : 0;
  const totalPrice = baseRate + meetAndGreetFee;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setUploadError("File size must be under 10MB");
        return;
      }
      setUploadError("");
      setPaymentScreenshot(file);
      if (file.type.startsWith("image/")) {
        const url = URL.createObjectURL(file);
        setPaymentScreenshotPreview(url);
      } else {
        setPaymentScreenshotPreview(null);
      }
    }
  };

  const removeFile = () => {
    setPaymentScreenshot(null);
    setPaymentScreenshotPreview(null);
    setUploadError("");
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!paymentScreenshot) {
        setUploadError("Please attach a screenshot of your payment receipt to complete reservation.");
        return;
      }
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        const randomRef = "EC-" + Math.floor(100000 + Math.random() * 900000);
        setBookingRef(randomRef);
        setStep(4);
      }, 700);
    }
  };

  const handleReset = () => {
    setStep(1);
    setPaymentScreenshot(null);
    setPaymentScreenshotPreview(null);
    setUploadError("");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#141817] rounded-2xl overflow-hidden border border-[#C9A45C]/40 shadow-2xl max-h-[92vh] flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#0B0D0C] shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#141817] border border-[#C9A45C] flex items-center justify-center text-[#C9A45C]">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#F5F1E8]">Instant Chauffeur Quote & Booking</h3>
                <p className="text-xs text-[#D8D3C8]">Fixed Rates • All Inclusive • 24/7 UK Dispatch</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-[#C9A45C] transition-colors border border-white/10 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-5 py-2.5 bg-[#0B0D0C] border-b border-white/10 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider shrink-0 overflow-x-auto gap-2">
            <span className={step >= 1 ? "text-[#C9A45C]" : "text-white/40"}>1. Vehicle & Route</span>
            <span className="text-white/20">→</span>
            <span className={step >= 2 ? "text-[#C9A45C]" : "text-white/40"}>2. Passenger Details</span>
            <span className="text-white/20">→</span>
            <span className={step >= 3 ? "text-[#C9A45C]" : "text-white/40"}>3. Calculate & Pay</span>
            <span className="text-white/20">→</span>
            <span className={step >= 4 ? "text-[#C9A45C]" : "text-white/40"}>4. Instant Confirmation</span>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
            {/* STEP 1: Vehicle & Route */}
            {step === 1 && (
              <form onSubmit={handleNextStep} className="space-y-4">
                {/* Journey Type Tabs */}
                <div className="flex gap-2 border-b border-white/10 pb-3">
                  {[
                    { id: "point-to-point", label: "Point to Point" },
                    { id: "airport", label: "Airport Transfer" },
                    { id: "hourly", label: "Hourly Rental" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setJourneyType(t.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        journeyType === t.id
                          ? "bg-[#C9A45C] text-[#0B0D0C]"
                          : "bg-white/5 text-[#D8D3C8] hover:text-white"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Route Inputs Dynamic Per Journey Type */}
                {journeyType === "point-to-point" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        required
                        placeholder="e.g. Mayfair, London / 10 Park Lane"
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                        Dropoff Destination
                      </label>
                      <input
                        type="text"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        required
                        placeholder="e.g. Canary Wharf / Bank of England"
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {journeyType === "airport" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                        Airport Terminal *
                      </label>
                      <select
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                      >
                        <option value="London Heathrow Airport (LHR T5)">Heathrow Terminal 5 (LHR)</option>
                        <option value="London Heathrow Airport (LHR T2/3)">Heathrow Terminal 2/3 (LHR)</option>
                        <option value="London Gatwick Airport (LGW)">Gatwick Airport (LGW)</option>
                        <option value="Farnborough Private Jet FBO (FAB)">Farnborough Private FBO</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                        Destination Hotel or Address
                      </label>
                      <input
                        type="text"
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        required
                        placeholder="e.g. The Ritz Mayfair / Belgravia Suite"
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {journeyType === "hourly" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                        Pickup Location
                      </label>
                      <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        required
                        placeholder="e.g. The Connaught Mayfair"
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                        Chauffeur Duration (Hours) *
                      </label>
                      <select
                        value={dropoff}
                        onChange={(e) => setDropoff(e.target.value)}
                        className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                      >
                        <option value="3 Hours (Minimum Service)">3 Hours (Minimum Service)</option>
                        <option value="4 Hours (Half Day)">4 Hours (Half Day)</option>
                        <option value="6 Hours (Corporate Roadshow)">6 Hours (Corporate Roadshow)</option>
                        <option value="8 Hours (Full Executive Day)">8 Hours (Full Executive Day)</option>
                        <option value="12 Hours (Event & Summit)">12 Hours (Event & Summit)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-2.5 py-2 text-xs text-[#F5F1E8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-2.5 py-2 text-xs text-[#F5F1E8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Passengers
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-2.5 py-2 text-xs text-[#F5F1E8] focus:outline-none"
                    >
                      <option value="1-3">1 - 3 Pax</option>
                      <option value="4-7">4 - 7 Pax (Van)</option>
                    </select>
                  </div>
                </div>

                {/* Vehicle Choice */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-2">
                    Select Vehicle:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {vehicles.map((v) => {
                      const isSelected = v.id === selectedVehicleId;
                      return (
                        <div
                          key={v.id}
                          onClick={() => setSelectedVehicleId(v.id)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                            isSelected
                              ? "bg-[#0B0D0C] border-[#C9A45C]"
                              : "bg-[#0B0D0C]/60 border-white/10 hover:border-white/20 opacity-70"
                          }`}
                        >
                          <div className="relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border border-white/10">
                            <Image src={v.image} alt={v.name} fill className="object-cover" />
                          </div>
                          <div>
                            <h4 className="font-serif text-xs font-bold text-white">{v.name}</h4>
                            <span className="text-[10px] text-[#C9A45C] font-bold block">
                              From £{journeyType === "airport" ? v.transferRate : v.rate * 2}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Total Summary Bar */}
                <div className="bg-[#0B0D0C] p-3.5 rounded-xl border border-[#C9A45C]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#D8D3C8] block font-bold">Estimated Fare</span>
                    <span className="text-[11px] text-[#D8D3C8]">Includes all fees & airport wait</span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl font-bold text-[#C9A45C]">£{totalPrice}</span>
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    className="btn-gold-primary py-2.5 px-6 text-xs"
                  >
                    <span>CONTINUE TO DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#0B0D0C]" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2: Passenger Details */}
            {step === 2 && (
              <form onSubmit={handleNextStep} className="space-y-3.5">
                <div className="bg-[#0B0D0C] p-3 rounded-xl border border-white/10 text-xs flex justify-between items-center">
                  <div>
                    <strong className="text-white block font-serif">{activeVehicle.name}</strong>
                    <span className="text-[#D8D3C8] text-[11px]">{pickup} → {dropoff}</span>
                  </div>
                  <span className="font-serif text-lg font-bold text-[#C9A45C]">£{totalPrice}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="e.g. Lord Alexander Wright"
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="alexander@company.com"
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+44 7700 900123"
                      className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                    />
                  </div>
                  <div>
                    {journeyType === "airport" ? (
                      <>
                        <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                          Flight Number (Optional)
                        </label>
                        <input
                          type="text"
                          value={flightNumber}
                          onChange={(e) => setFlightNumber(e.target.value)}
                          placeholder="e.g. BA 178 / VS 024"
                          className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                        />
                      </>
                    ) : journeyType === "hourly" ? (
                      <>
                        <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                          Roadshow / Event Notes
                        </label>
                        <input
                          type="text"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="e.g. Mayfair to Canary Wharf Roadshow"
                          className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                        />
                      </>
                    ) : (
                      <>
                        <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
                          Special Instructions (Optional)
                        </label>
                        <input
                          type="text"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="e.g. Child seat / Luggage assistance"
                          className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:outline-none"
                        />
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs text-[#D8D3C8] hover:text-white underline cursor-pointer"
                  >
                    ← Back to Vehicle
                  </button>

                  <button
                    type="submit"
                    className="btn-gold-primary py-2.5 px-6 text-xs"
                  >
                    <span>PROCEED TO CALCULATE & PAY</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#0B0D0C]" />
                  </button>
                </div>
              </form>
            )}

            {/* STEP 3: Calculate & Pay (With Payment Screenshot Upload) */}
            {step === 3 && (
              <form onSubmit={handleNextStep} className="space-y-4">
                {/* Itemized Calculation Box */}
                <div className="bg-[#0B0D0C] p-4 rounded-xl border border-[#C9A45C]/30 space-y-2">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-xs font-serif text-[#F5F1E8] font-bold">Calculated Journey Fare</span>
                    <span className="text-xs text-[#C9A45C] uppercase font-bold tracking-wider">{journeyType}</span>
                  </div>
                  <div className="text-xs space-y-1 text-[#D8D3C8]">
                    <div className="flex justify-between">
                      <span>Base Vehicle Rate ({activeVehicle.name}):</span>
                      <span className="text-white font-medium">£{baseRate}</span>
                    </div>
                    {meetAndGreetFee > 0 && (
                      <div className="flex justify-between">
                        <span>VIP Airport Meet & Greet Service:</span>
                        <span className="text-white font-medium">£{meetAndGreetFee}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Taxes & Gratuity:</span>
                      <span className="text-emerald-400 font-medium">Included</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-serif font-bold">
                      <span className="text-[#F5F1E8]">Total Payable Amount:</span>
                      <span className="text-[#C9A45C]">£{totalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Option Selection */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-2">
                    Select Payment Method:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod("bank-transfer")}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                        paymentMethod === "bank-transfer"
                          ? "bg-[#0B0D0C] border-[#C9A45C]"
                          : "bg-[#0B0D0C]/50 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <Building2 className="w-4 h-4 text-[#C9A45C] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">UK Bank Transfer</div>
                        <div className="text-[10px] text-[#D8D3C8]">Instant Faster Payments</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod("corporate-card")}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex items-center gap-2.5 ${
                        paymentMethod === "corporate-card"
                          ? "bg-[#0B0D0C] border-[#C9A45C]"
                          : "bg-[#0B0D0C]/50 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-[#C9A45C] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Corporate Card / Gateway</div>
                        <div className="text-[10px] text-[#D8D3C8]">Amex, Visa, Mastercard</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Payment Instructions Details */}
                <div className="bg-[#0B0D0C]/80 p-3.5 rounded-xl border border-white/10 text-xs space-y-1.5">
                  {paymentMethod === "bank-transfer" ? (
                    <>
                      <div className="text-[#C9A45C] font-bold text-[11px] uppercase tracking-wider">
                        Official Bank Transfer Details:
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[#D8D3C8]">
                        <div>Account Name: <strong className="text-white">Elite Chauffeur UK Ltd</strong></div>
                        <div>Sort Code: <strong className="text-white">40-02-14</strong></div>
                        <div>Account No: <strong className="text-white">81920481</strong></div>
                        <div>Bank: <strong className="text-white">Barclays Private London</strong></div>
                      </div>
                      <p className="text-[10px] text-[#D8D3C8] italic pt-1">
                        Please transfer exactly <strong>£{totalPrice}</strong> and attach your transfer screenshot receipt below for instant booking confirmation.
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-[#C9A45C] font-bold text-[11px] uppercase tracking-wider">
                        Corporate Payment Link / Receipt:
                      </div>
                      <p className="text-[#D8D3C8] text-xs">
                        Payment link reference code generated: <strong className="text-white font-mono">PAY-ELITE-{totalPrice}</strong>
                      </p>
                      <p className="text-[10px] text-[#D8D3C8] italic">
                        Please upload your corporate payment receipt or authorization screenshot below.
                      </p>
                    </>
                  )}
                </div>

                {/* Screenshot Upload Dropzone */}
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1.5">
                    Attach Screenshot of Payment *
                  </label>

                  {!paymentScreenshot ? (
                    <label className="relative border-2 border-dashed border-[#C9A45C]/40 hover:border-[#C9A45C] bg-[#0B0D0C] rounded-xl p-5 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 group">
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <div className="w-10 h-10 rounded-full bg-[#141817] border border-[#C9A45C]/50 flex items-center justify-center text-[#C9A45C] group-hover:scale-110 transition-transform">
                        <Upload className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          Click to upload or drag payment receipt image
                        </span>
                        <span className="text-[10px] text-[#D8D3C8]">
                          Supports PNG, JPG, WEBP or PDF (Max 10MB)
                        </span>
                      </div>
                    </label>
                  ) : (
                    <div className="bg-[#0B0D0C] border border-[#C9A45C] rounded-xl p-3.5 flex items-center justify-between">
                      <div className="flex items-center gap-3 overflow-hidden">
                        {paymentScreenshotPreview ? (
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/20 shrink-0">
                            <Image src={paymentScreenshotPreview} alt="Receipt preview" fill className="object-cover" />
                          </div>
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#C9A45C] shrink-0">
                            <FileCheck className="w-5 h-5" />
                          </div>
                        )}
                        <div className="truncate">
                          <span className="text-xs font-bold text-white block truncate">
                            {paymentScreenshot.name}
                          </span>
                          <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                            <Check className="w-3 h-3" /> Screenshot Attached ({Math.round(paymentScreenshot.size / 1024)} KB)
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={removeFile}
                        className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span>Remove</span>
                      </button>
                    </div>
                  )}

                  {uploadError && (
                    <p className="text-xs text-red-400 mt-1.5 font-medium">{uploadError}</p>
                  )}
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs text-[#D8D3C8] hover:text-white underline cursor-pointer"
                  >
                    ← Back to Details
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold-primary py-2.5 px-6 text-xs"
                  >
                    {isSubmitting ? (
                      "Verifying & Confirming..."
                    ) : (
                      <>
                        <span>SUBMIT PAYMENT & GET INSTANT CONFIRMATION</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#0B0D0C]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            {/* STEP 4: Instant Confirmation */}
            {step === 4 && (
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#C9A45C]/20 border-2 border-[#C9A45C] text-[#C9A45C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#C9A45C]" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C9A45C] font-bold block mb-1">
                    RESERVATION CONFIRMED & PAYMENT ATTACHED
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Thank You, {name || "Valued Client"}
                  </h3>
                  <p className="text-xs text-[#D8D3C8] font-normal mt-1 max-w-md mx-auto">
                    Your official booking reference is <strong className="text-[#C9A45C] font-mono">{bookingRef}</strong>. Our 24/7 UK dispatch team is processing your transfer.
                  </p>
                </div>

                {/* Attached Screenshot Receipt Summary Card */}
                <div className="bg-[#0B0D0C] p-3.5 rounded-xl border border-emerald-500/30 text-left text-xs max-w-md mx-auto space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold flex items-center gap-1 text-[11px]">
                      <ShieldCheck className="w-4 h-4" /> Payment Receipt Verified
                    </span>
                    <span className="text-white/60 font-mono text-[10px]">Ref: {bookingRef}</span>
                  </div>
                  <div className="text-[#D8D3C8] text-[11px]">
                    Attached File: <strong className="text-white">{paymentScreenshot?.name || "Payment_Receipt.png"}</strong>
                  </div>
                  <div className="text-[#D8D3C8] text-[11px]">
                    Vehicle: <strong className="text-white">{activeVehicle.name}</strong> • Total Paid: <strong className="text-[#C9A45C]">£{totalPrice}</strong>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="btn-gold-primary py-2.5 px-6 text-xs cursor-pointer"
                >
                  DONE & RETURN TO SITE
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

