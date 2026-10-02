"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Star, ThumbsUp, ShieldCheck } from "lucide-react";

export default function AdminReviewsPage() {
  const reviews = [
    {
      id: 1,
      client: "Lord Alexander Wright",
      rating: 5,
      date: "2026-10-01",
      comment: "Outstanding service for Heathrow Terminal 5 transfer. Driver James Sterling arrived 15 minutes early in pristine Maybach S680.",
      vehicle: "Mercedes-Maybach S680",
    },
    {
      id: 2,
      client: "Lady Eleanor Kensington",
      rating: 5,
      date: "2026-09-28",
      comment: "The Rolls-Royce Phantom VIII was immaculate. Highly recommend Elite Chauffeur for luxury West End gallery roadshows.",
      vehicle: "Rolls-Royce Phantom VIII",
    },
    {
      id: 3,
      client: "Marcus Vance",
      rating: 5,
      date: "2026-09-25",
      comment: "Seamless corporate roadshow for our tech summit. Onboard Wi-Fi and refreshments were top quality.",
      vehicle: "Mercedes S-Class",
    },
  ];

  return (
    <DashboardLayout allowedRoles={["admin"]}>
      <div className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-1">
        <h1 className="font-serif text-2xl font-bold text-white">Client Experience Reviews</h1>
        <p className="text-xs text-[#D8D3C8]">Verified 5-star ratings and executive client feedback</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((rev) => (
          <div key={rev.id} className="bg-[#141817] p-5 rounded-2xl border border-white/10 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-serif font-bold text-white text-sm">{rev.client}</span>
              <div className="flex text-[#C9A45C]">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A45C]" />
                ))}
              </div>
            </div>
            <p className="text-xs text-[#D8D3C8] italic">&quot;{rev.comment}&quot;</p>
            <div className="flex justify-between items-center pt-2 border-t border-white/5 text-[10px] text-white/50">
              <span>{rev.vehicle}</span>
              <span>{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
