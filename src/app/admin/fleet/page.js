"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useDemoData } from "@/context/DemoDataContext";
import { Car, Edit3, DollarSign, Users, CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function AdminFleetPage() {
  const { vehicles, updateVehicle } = useDemoData();
  const [editingVehicle, setEditingVehicle] = useState(null);
  const [newRate, setNewRate] = useState("");
  const [newTransferRate, setNewTransferRate] = useState("");

  const handleRateSave = (e) => {
    e.preventDefault();
    if (editingVehicle) {
      updateVehicle(editingVehicle.id, {
        rate: parseInt(newRate, 10) || editingVehicle.rate,
        transferRate: parseInt(newTransferRate, 10) || editingVehicle.transferRate,
      });
      setEditingVehicle(null);
    }
  };

  return (
    <DashboardLayout allowedRoles={["admin"]}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141817] p-5 rounded-2xl border border-white/10">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Executive Fleet Management</h1>
          <p className="text-xs text-[#D8D3C8] mt-1">
            Configure hourly rates, transfer pricing, vehicle availability, and default driver assignments
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {vehicles.map((v) => (
          <div
            key={v.id}
            className="bg-[#141817] rounded-2xl border border-white/10 overflow-hidden hover:border-[#C9A45C]/50 transition-all flex flex-col justify-between"
          >
            <div className="relative h-44 w-full border-b border-white/10">
              <Image src={v.image} alt={v.name} fill className="object-cover" />
              <div className="absolute top-3 right-3">
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                    v.status === "Available"
                      ? "bg-emerald-500/80 text-white border-emerald-400"
                      : "bg-amber-500/80 text-white border-amber-400"
                  }`}
                >
                  {v.status}
                </span>
              </div>
            </div>

            <div className="p-5 space-y-3 flex-1">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#C9A45C] tracking-wider block">{v.category}</span>
                <h3 className="font-serif text-lg font-bold text-white">{v.name}</h3>
                <p className="text-xs text-[#D8D3C8]">{v.pax}</p>
              </div>

              <div className="bg-[#0B0D0C] p-3 rounded-xl border border-white/5 space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-[#D8D3C8]">
                  <span>Hourly Charter Rate:</span>
                  <strong className="text-[#C9A45C] text-sm">£{v.rate} / hr</strong>
                </div>
                <div className="flex justify-between items-center text-[#D8D3C8]">
                  <span>Airport Transfer Rate:</span>
                  <strong className="text-[#C9A45C] text-sm">£{v.transferRate}</strong>
                </div>
                <div className="flex justify-between items-center text-[#D8D3C8]">
                  <span>Default Chauffeur:</span>
                  <span className="text-white font-serif">{v.assignedDriverName}</span>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center">
                <button
                  onClick={() => {
                    updateVehicle(v.id, {
                      status: v.status === "Available" ? "In Maintenance" : "Available",
                    });
                  }}
                  className="text-xs text-[#D8D3C8] hover:text-white underline cursor-pointer"
                >
                  Toggle Availability
                </button>

                <button
                  onClick={() => {
                    setEditingVehicle(v);
                    setNewRate(v.rate);
                    setNewTransferRate(v.transferRate);
                  }}
                  className="px-3 py-1.5 bg-[#0B0D0C] hover:bg-[#C9A45C] hover:text-[#0B0D0C] text-xs font-bold text-white border border-white/10 rounded-xl transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <Edit3 className="w-3.5 h-3.5" /> Edit Rates
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Rates Modal */}
      {editingVehicle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-[#141817] rounded-2xl border border-[#C9A45C]/40 p-6 space-y-4">
            <h3 className="font-serif text-lg font-bold text-white">Edit Rates: {editingVehicle.name}</h3>

            <form onSubmit={handleRateSave} className="space-y-3 text-xs">
              <div>
                <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Hourly Rate (£)</label>
                <input
                  type="number"
                  value={newRate}
                  onChange={(e) => setNewRate(e.target.value)}
                  className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                />
              </div>

              <div>
                <label className="text-[11px] uppercase font-bold text-[#C9A45C] block mb-1">Transfer Rate (£)</label>
                <input
                  type="number"
                  value={newTransferRate}
                  onChange={(e) => setNewTransferRate(e.target.value)}
                  className="w-full bg-[#0B0D0C] border border-white/15 rounded-xl p-2.5 text-white focus:outline-none focus:border-[#C9A45C]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingVehicle(null)}
                  className="px-4 py-2 bg-white/5 text-white rounded-xl text-xs"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-gold-primary py-2 px-5 text-xs">Save Rates</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
