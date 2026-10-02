"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useDemoData } from "@/context/DemoDataContext";
import { Users, Mail, Phone, Building2, MapPin, Eye, Star } from "lucide-react";

export default function AdminCustomersPage() {
  const { customers, bookings } = useDemoData();
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <DashboardLayout allowedRoles={["admin"]}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141817] p-5 rounded-2xl border border-white/10">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Executive Client Directory</h1>
          <p className="text-xs text-[#D8D3C8] mt-1">
            Manage corporate accounts, VIP clients, travel preferences, and spending history
          </p>
        </div>
      </div>

      <div className="bg-[#141817] rounded-2xl border border-white/10 p-5 overflow-x-auto">
        <table className="w-full text-left text-xs text-[#F5F1E8]">
          <thead className="bg-[#0B0D0C] text-[10px] uppercase font-bold text-[#C9A45C] border-b border-white/10">
            <tr>
              <th className="p-3">Client Name</th>
              <th className="p-3">Contact Email</th>
              <th className="p-3">Phone Number</th>
              <th className="p-3">Company / Account</th>
              <th className="p-3">Total Rides</th>
              <th className="p-3">Total Lifetime Spend</th>
              <th className="p-3">Favorite Vehicle</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3 font-serif font-bold text-white">{c.name}</td>
                <td className="p-3 text-[#D8D3C8]">{c.email}</td>
                <td className="p-3 text-[#D8D3C8]">{c.phone}</td>
                <td className="p-3 text-white/80">{c.company}</td>
                <td className="p-3 font-mono font-bold text-[#C9A45C]">{c.totalBookings}</td>
                <td className="p-3 font-bold text-emerald-400">£{c.totalSpend.toLocaleString()}</td>
                <td className="p-3 font-serif text-white">{c.favoriteVehicle}</td>
                <td className="p-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    {c.accountStatus}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => setSelectedCustomer(c)}
                    className="px-2.5 py-1 rounded-lg bg-[#0B0D0C] hover:bg-[#C9A45C] hover:text-[#0B0D0C] text-xs text-white border border-white/10 transition-colors cursor-pointer inline-flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" /> Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Customer Detail Drawer */}
      {selectedCustomer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#141817] rounded-2xl border border-[#C9A45C]/40 p-6 space-y-4">
            <div className="flex justify-between items-start border-b border-white/10 pb-3">
              <div>
                <h3 className="font-serif text-xl font-bold text-white">{selectedCustomer.name}</h3>
                <span className="text-xs text-[#C9A45C] font-semibold">{selectedCustomer.company}</span>
              </div>
              <button onClick={() => setSelectedCustomer(null)} className="text-white/60 hover:text-white">✕</button>
            </div>

            <div className="space-y-3 text-xs text-[#D8D3C8]">
              <div className="bg-[#0B0D0C] p-3 rounded-xl border border-white/10 space-y-1">
                <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#C9A45C]" /> {selectedCustomer.email}</p>
                <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-[#C9A45C]" /> {selectedCustomer.phone}</p>
              </div>

              <div className="bg-[#0B0D0C] p-3 rounded-xl border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#C9A45C] block mb-1">Saved Frequent Locations</span>
                {selectedCustomer.savedLocations.map((loc, i) => (
                  <p key={i} className="flex items-center gap-2 text-white"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> {loc}</p>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button onClick={() => setSelectedCustomer(null)} className="btn-gold-primary py-2 px-5 text-xs">Close</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
