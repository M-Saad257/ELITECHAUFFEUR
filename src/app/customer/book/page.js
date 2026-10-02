"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useDemoData } from "@/context/DemoDataContext";
import { initialVehicles } from "@/data/demoData";
import { useRouter } from "next/navigation";
import {
  Car,
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Upload,
  FileCheck,
  CheckCircle2,
  Check,
  Trash2
} from "lucide-react";
import Image from "next/image";

export default function CustomerBookPage() {
  const { vehicles: demoVehicles, addBooking } = useDemoData();
  const vehiclesList = demoVehicles && demoVehicles.length > 0 ? demoVehicles : initialVehicles;
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [journeyType, setJourneyType] = useState("point-to-point");
  const [pickup, setPickup] = useState("London Heathrow Airport (LHR T5)");
  const [dropoff, setDropoff] = useState("The Connaught Hotel, Mayfair, London");
  const [date, setDate] = useState("2026-10-15");
  const [time, setTime] = useState("14:30");
  const [passengers, setPassengers] = useState("1-3");
  const [selectedVehicleId, setSelectedVehicleId] = useState("maybach");
  const [specialInstructions, setSpecialInstructions] = useState("");

  const [paymentScreenshot, setPaymentScreenshot] = useState(null);
  const [paymentScreenshotPreview, setPaymentScreenshotPreview] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdRef, setCreatedRef] = useState("");

  const activeVehicle = vehiclesList.find((v) => v.id === selectedVehicleId) || vehiclesList[0];
  const hours = 2;
  const baseRate = activeVehicle ? (journeyType === "airport" ? activeVehicle.transferRate : activeVehicle.rate * hours) : 180;
  const meetAndGreetFee = journeyType === "airport" ? 15 : 0;
  const totalPrice = baseRate + meetAndGreetFee;


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPaymentScreenshot(file);
      if (file.type.startsWith("image/")) {
        setPaymentScreenshotPreview(URL.createObjectURL(file));
      } else {
        setPaymentScreenshotPreview(null);
      }
      setUploadError("");
    }
  };

  const handleSubmitBooking = (e) => {
    e.preventDefault();
    if (!paymentScreenshot) {
      setUploadError("Please attach a screenshot of your payment receipt.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const newRef = addBooking({
        customerName: "Lord Alexander Wright",
        customerEmail: "customer@example.com",
        customerPhone: "+44 7700 900123",
        journeyType,
        pickup,
        dropoff,
        date,
        time,
        passengers,
        vehicleId: selectedVehicleId,
        vehicleName: activeVehicle.name,
        fare: totalPrice,
        paymentMethod: "UK Bank Transfer",
        receiptScreenshot: {
          name: paymentScreenshot.name,
          uploadedAt: new Date().toISOString().substring(0, 16),
          previewUrl: paymentScreenshotPreview,
        },
        specialInstructions,
      });

      setCreatedRef(newRef);
      setStep(3);
    }, 700);
  };

  return (
    <DashboardLayout allowedRoles={["customer"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">Reserve Luxury Chauffeur</h1>
        <p className="text-xs text-[#D8D3C8]">
          Select route, choose vehicle, view calculated fare, and upload payment receipt screenshot
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-[#141817] rounded-2xl border border-[#C9A45C]/40 overflow-hidden shadow-2xl">
        {/* Progress header */}
        <div className="px-5 py-3 bg-[#0B0D0C] border-b border-white/10 flex items-center justify-between text-xs font-semibold uppercase text-[#D8D3C8]">
          <span className={step >= 1 ? "text-[#C9A45C]" : ""}>1. Journey & Vehicle</span>
          <span>→</span>
          <span className={step >= 2 ? "text-[#C9A45C]" : ""}>2. Calculate & Payment Proof</span>
          <span>→</span>
          <span className={step >= 3 ? "text-[#C9A45C]" : ""}>3. Instant Confirmation</span>
        </div>

        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              {/* Journey Type Tabs */}
              <div className="flex gap-2 border-b border-white/10 pb-3">
                {[
                  { id: "point-to-point", label: "Point to Point" },
                  { id: "airport", label: "Airport Transfer" },
                  { id: "hourly", label: "Hourly Charter" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setJourneyType(t.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold cursor-pointer ${
                      journeyType === t.id ? "bg-[#C9A45C] text-[#0B0D0C]" : "bg-white/5 text-[#D8D3C8]"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Pickup Address</label>
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Destination Address</label>
                  <input
                    type="text"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Time</label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Passengers</label>
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                  >
                    <option value="1-3">1 - 3 Pax</option>
                    <option value="4-7">4 - 7 Pax (Van)</option>
                  </select>
                </div>
              </div>

              {/* Vehicle Select */}
              <div>
                <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-2">Select Vehicle</label>
                <div className="grid grid-cols-2 gap-3">
                  {vehiclesList.map((v) => (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVehicleId(v.id)}
                      className={`p-3 rounded-xl border cursor-pointer flex items-center gap-3 transition-all ${
                        v.id === selectedVehicleId
                          ? "bg-[#0B0D0C] border-[#C9A45C]"
                          : "bg-[#0B0D0C]/50 border-white/10 hover:border-white/20 opacity-70"
                      }`}
                    >
                      <div className="relative w-14 h-10 rounded-lg overflow-hidden shrink-0 border border-white/10">
                        <Image src={v.image} alt={v.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xs font-bold text-white">{v.name}</h4>
                        <span className="text-[10px] text-[#C9A45C] font-bold block">£{v.transferRate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setStep(2)}
                  className="btn-gold-primary py-2.5 px-6 text-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>PROCEED TO PAYMENT PROOF</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B0D0C]" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmitBooking} className="space-y-4">
              {/* Fare Calculation Summary */}
              <div className="bg-[#0B0D0C] p-4 rounded-xl border border-[#C9A45C]/30 space-y-2 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-white/10">
                  <span className="font-serif font-bold text-white">Calculated Fare Breakdown</span>
                  <span className="text-[#C9A45C] font-bold uppercase">{journeyType}</span>
                </div>
                <div className="flex justify-between text-[#D8D3C8]">
                  <span>Vehicle Fare ({activeVehicle.name}):</span>
                  <strong className="text-white">£{baseRate}</strong>
                </div>
                {meetAndGreetFee > 0 && (
                  <div className="flex justify-between text-[#D8D3C8]">
                    <span>Airport Meet & Greet Service:</span>
                    <strong className="text-white">£{meetAndGreetFee}</strong>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-serif font-bold">
                  <span className="text-white">Total Payable Amount:</span>
                  <span className="text-[#C9A45C]">£{totalPrice}</span>
                </div>
              </div>

              {/* Bank Details */}
              <div className="bg-[#0B0D0C] p-3.5 rounded-xl border border-white/10 text-xs space-y-1">
                <span className="text-[#C9A45C] font-bold text-[10px] uppercase">Bank Transfer Instructions:</span>
                <div className="grid grid-cols-2 gap-2 text-[#D8D3C8]">
                  <div>Account: <strong className="text-white">Elite Chauffeur UK Ltd</strong></div>
                  <div>Sort Code: <strong className="text-white">40-02-14</strong></div>
                  <div>Account No: <strong className="text-white">81920481</strong></div>
                  <div>Bank: <strong className="text-white">Barclays Private London</strong></div>
                </div>
              </div>

              {/* Screenshot Upload Dropzone */}
              <div>
                <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">
                  Attach Screenshot of Payment Receipt *
                </label>
                {!paymentScreenshot ? (
                  <label className="border-2 border-dashed border-[#C9A45C]/40 hover:border-[#C9A45C] bg-[#0B0D0C] rounded-xl p-5 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2">
                    <input type="file" accept="image/*,application/pdf" onChange={handleFileChange} className="hidden" />
                    <Upload className="w-6 h-6 text-[#C9A45C]" />
                    <span className="text-xs font-bold text-white">Click to upload payment receipt screenshot</span>
                  </label>
                ) : (
                  <div className="bg-[#0B0D0C] border border-[#C9A45C] p-3.5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileCheck className="w-5 h-5 text-emerald-400" />
                      <div>
                        <strong className="text-white text-xs block">{paymentScreenshot.name}</strong>
                        <span className="text-[10px] text-emerald-400 font-semibold">Receipt Attached</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => { setPaymentScreenshot(null); setPaymentScreenshotPreview(null); }}
                      className="text-xs text-red-400 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                )}
                {uploadError && <p className="text-xs text-red-400 mt-1 font-medium">{uploadError}</p>}
              </div>

              <div className="flex justify-between pt-2">
                <button type="button" onClick={() => setStep(1)} className="text-xs text-[#D8D3C8] underline">
                  ← Back to Journey
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold-primary py-2.5 px-6 text-xs cursor-pointer"
                >
                  {isSubmitting ? "Processing Reservation..." : "SUBMIT & GET INSTANT CONFIRMATION"}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#C9A45C]/20 border-2 border-[#C9A45C] text-[#C9A45C] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-[#C9A45C]" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">Reservation Confirmed!</h2>
              <p className="text-xs text-[#D8D3C8]">
                Your booking reference is <strong className="text-[#C9A45C] font-mono text-sm">{createdRef}</strong>.
                Our dispatch desk is reviewing your payment receipt.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => router.push("/customer/bookings")}
                  className="btn-gold-primary py-2.5 px-6 text-xs cursor-pointer"
                >
                  VIEW MY BOOKINGS
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
