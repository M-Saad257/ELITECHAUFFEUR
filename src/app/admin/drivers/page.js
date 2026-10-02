"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useDemoData } from "@/context/DemoDataContext";
import {
  UserCheck,
  Plus,
  ShieldCheck,
  Star,
  Phone,
  Mail,
  Car,
  CheckCircle2,
  X
} from "lucide-react";
import Image from "next/image";

export default function AdminDriversPage() {
  const { drivers, vehicles, addDriver, updateDriverStatus } = useDemoData();
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newVehicleId, setNewVehicleId] = useState("maybach");
  const [newRegistration, setNewRegistration] = useState("LUX 999");

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const vehicle = vehicles.find((v) => v.id === newVehicleId);
    addDriver({
      name: newName,
      email: newEmail,
      phone: newPhone,
      vehicleId: newVehicleId,
      vehicleName: vehicle ? vehicle.name : "Mercedes S-Class",
      registration: newRegistration,
    });
    setNewName("");
    setNewEmail("");
    setNewPhone("");
    setShowAddModal(false);
  };

  return (
    <DashboardLayout allowedRoles={["admin"]}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141817] p-5 rounded-2xl border border-white/10">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Chauffeur Fleet Directory</h1>
          <p className="text-xs text-[#D8D3C8] mt-1">
            Manage executive drivers, DBS verification credentials, duty status, and vehicle assignments
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="btn-gold-primary py-2.5 px-5 text-xs cursor-pointer inline-flex items-center gap-2"
        >
          <Plus className="w-4 h-4 text-[#0B0D0C]" />
          <span>ADD NEW CHAUFFEUR</span>
        </button>
      </div>

      {/* Drivers Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {drivers.map((drv) => (
          <div
            key={drv.id}
            className="bg-[#141817] p-5 rounded-2xl border border-white/10 hover:border-[#C9A45C]/50 transition-all space-y-4 relative overflow-hidden"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#C9A45C]/50 shrink-0">
                  <Image src={drv.photo || "/images/lifestyle.jpg"} alt={drv.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-white">{drv.name}</h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#C9A45C]">
                    <Star className="w-3 h-3 fill-[#C9A45C]" />
                    <span className="font-bold">{drv.rating}</span>
                    <span className="text-white/40">({drv.tripsCount} trips)</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <select
                value={drv.status}
                onChange={(e) => updateDriverStatus(drv.id, e.target.value)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-bold border cursor-pointer focus:outline-none bg-[#0B0D0C] ${
                  drv.status === "Available"
                    ? "text-emerald-400 border-emerald-500/40"
                    : drv.status === "On Trip"
                    ? "text-sky-400 border-sky-500/40"
                    : "text-amber-400 border-amber-500/40"
                }`}
              >
                <option value="Available">Available</option>
                <option value="On Trip">On Trip</option>
                <option value="Offline">Offline</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>

            {/* Vehicle Specs */}
            <div className="bg-[#0B0D0C] p-3 rounded-xl border border-white/5 space-y-1 text-xs">
              <div className="flex justify-between items-center text-[#D8D3C8]">
                <span>Assigned Vehicle:</span>
                <strong className="text-white font-serif">{drv.vehicleName}</strong>
              </div>
              <div className="flex justify-between items-center text-[#D8D3C8]">
                <span>Plate Registration:</span>
                <span className="font-mono text-[#C9A45C] font-bold">{drv.registration}</span>
              </div>
            </div>

            {/* Verification Badges */}
            <div className="flex items-center justify-between text-[10px] pt-1 border-t border-white/5 text-[#D8D3C8]">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" /> DBS Verified
              </span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Licence Verified
              </span>
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Car className="w-3.5 h-3.5" /> Vehicle Verified
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Driver Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
          <div className="w-full max-w-lg bg-[#141817] rounded-2xl border border-[#C9A45C]/40 p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <h3 className="font-serif text-lg font-bold text-white">Add Executive Chauffeur</h3>
              <button onClick={() => setShowAddModal(false)} className="text-white/60 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-3 text-xs">
              <div>
                <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Full Name *</label>
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  required
                  placeholder="e.g. William Ashford"
                  className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Email Address *</label>
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                    placeholder="william@elitechauffeur.co.uk"
                    className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    required
                    placeholder="+44 7700 900555"
                    className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Assign Vehicle</label>
                  <select
                    value={newVehicleId}
                    onChange={(e) => setNewVehicleId(e.target.value)}
                    className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                  >
                    {vehicles.map((v) => (
                      <option key={v.id} value={v.id}>{v.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Registration Plate</label>
                  <input
                    type="text"
                    value={newRegistration}
                    onChange={(e) => setNewRegistration(e.target.value)}
                    required
                    placeholder="LUX 999"
                    className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-gold-primary py-2 px-5 text-xs"
                >
                  Save Chauffeur
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
