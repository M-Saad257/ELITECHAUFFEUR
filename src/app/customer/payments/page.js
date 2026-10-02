"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useDemoData } from "@/context/DemoDataContext";
import { CreditCard, FileCheck, ShieldCheck } from "lucide-react";

export default function CustomerPaymentsPage() {
  const { bookings } = useDemoData();
  const customerBookings = bookings.filter(
    (b) => b.customerEmail === "customer@example.com" || b.customerName.includes("Wright")
  );

  return (
    <DashboardLayout allowedRoles={["customer"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">Payment Statements & Proofs</h1>
        <p className="text-xs text-[#D8D3C8]">Manage attached receipts, transfer confirmations, and invoice statements</p>
      </div>

      <div className="bg-[#141817] rounded-2xl border border-white/10 p-5 overflow-x-auto">
        <table className="w-full text-left text-xs text-[#F5F1E8]">
          <thead className="bg-[#0B0D0C] text-[10px] uppercase font-bold text-[#C9A45C] border-b border-white/10">
            <tr>
              <th className="p-3">Booking Ref</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Method</th>
              <th className="p-3">Attached Receipt</th>
              <th className="p-3">Verification Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {customerBookings.map((b) => (
              <tr key={b.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3 font-mono font-bold text-[#C9A45C]">{b.id}</td>
                <td className="p-3 font-bold text-white">£{b.fare}</td>
                <td className="p-3 text-[#D8D3C8]">{b.paymentMethod}</td>
                <td className="p-3">
                  {b.receiptScreenshot ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5" /> {b.receiptScreenshot.name}
                    </span>
                  ) : (
                    <span className="text-white/40 italic">Pending upload</span>
                  )}
                </td>
                <td className="p-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                    b.paymentStatus === "Paid" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                  }`}>
                    {b.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
