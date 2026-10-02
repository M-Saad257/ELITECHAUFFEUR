"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useDemoData } from "@/context/DemoDataContext";
import { CreditCard, FileCheck, CheckCircle2, XCircle, Eye, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AdminPaymentsPage() {
  const { bookings, approvePayment, rejectPayment } = useDemoData();
  const [previewReceipt, setPreviewReceipt] = useState(null);

  return (
    <DashboardLayout allowedRoles={["admin"]}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141817] p-5 rounded-2xl border border-white/10">
        <div>
          <h1 className="font-serif text-2xl font-bold text-white">Payment Proof Verification Desk</h1>
          <p className="text-xs text-[#D8D3C8] mt-1">
            Review uploaded bank transfer screenshots, corporate receipts, and approve booking transactions
          </p>
        </div>
      </div>

      <div className="bg-[#141817] rounded-2xl border border-white/10 p-5 overflow-x-auto">
        <table className="w-full text-left text-xs text-[#F5F1E8]">
          <thead className="bg-[#0B0D0C] text-[10px] uppercase font-bold text-[#C9A45C] border-b border-white/10">
            <tr>
              <th className="p-3">Booking ID</th>
              <th className="p-3">Client</th>
              <th className="p-3">Amount (£)</th>
              <th className="p-3">Method</th>
              <th className="p-3">Receipt Proof</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Verification Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {bookings.map((b) => (
              <tr key={b.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3 font-mono font-bold text-[#C9A45C]">{b.id}</td>
                <td className="p-3 font-medium text-white">{b.customerName}</td>
                <td className="p-3 font-bold text-[#C9A45C]">£{b.fare}</td>
                <td className="p-3 text-[#D8D3C8]">{b.paymentMethod}</td>
                <td className="p-3">
                  {b.receiptScreenshot ? (
                    <button
                      onClick={() => setPreviewReceipt(b.receiptScreenshot)}
                      className="px-2.5 py-1 bg-[#0B0D0C] hover:bg-white/10 border border-white/10 text-[#C9A45C] rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>{b.receiptScreenshot.name}</span>
                    </button>
                  ) : (
                    <span className="text-white/40 italic">No receipt file</span>
                  )}
                </td>
                <td className="p-3">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                      b.paymentStatus === "Paid"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : b.paymentStatus === "Verification Required"
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/30 font-bold"
                        : "bg-red-500/10 text-red-400 border-red-500/30"
                    }`}
                  >
                    {b.paymentStatus}
                  </span>
                </td>
                <td className="p-3 text-right">
                  {b.paymentStatus !== "Paid" ? (
                    <div className="flex justify-end gap-1.5">
                      <button
                        onClick={() => approvePayment(b.id)}
                        className="px-3 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 rounded-lg text-xs font-bold cursor-pointer inline-flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                      </button>
                      <button
                        onClick={() => rejectPayment(b.id)}
                        className="px-3 py-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/40 rounded-lg text-xs font-bold cursor-pointer inline-flex items-center gap-1"
                      >
                        <XCircle className="w-3.5 h-3.5" /> Reject
                      </button>
                    </div>
                  ) : (
                    <span className="text-emerald-400 font-semibold flex items-center justify-end gap-1 text-[11px]">
                      <ShieldCheck className="w-4 h-4" /> Approved & Verified
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Receipt Image Preview Modal */}
      {previewReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="w-full max-w-lg bg-[#141817] rounded-2xl border border-[#C9A45C]/40 p-5 space-y-4">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <div>
                <h3 className="font-serif text-base font-bold text-white">Payment Screenshot Preview</h3>
                <span className="text-xs text-[#C9A45C] font-mono">{previewReceipt.name}</span>
              </div>
              <button onClick={() => setPreviewReceipt(null)} className="text-white/60 hover:text-white">✕</button>
            </div>

            <div className="relative w-full h-64 rounded-xl overflow-hidden border border-white/10 bg-[#0B0D0C] flex items-center justify-center">
              {previewReceipt.previewUrl ? (
                <Image src={previewReceipt.previewUrl} alt="Receipt preview" fill className="object-contain" />
              ) : (
                <div className="text-center p-4 space-y-2 text-[#D8D3C8]">
                  <FileCheck className="w-10 h-10 text-[#C9A45C] mx-auto" />
                  <p className="text-xs font-bold">{previewReceipt.name}</p>
                  <p className="text-[10px] text-white/50">Uploaded on {previewReceipt.uploadedAt || "Today"}</p>
                </div>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button onClick={() => setPreviewReceipt(null)} className="btn-gold-primary py-2 px-5 text-xs">Close Preview</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
