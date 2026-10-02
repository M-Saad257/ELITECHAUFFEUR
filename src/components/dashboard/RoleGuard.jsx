"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RoleGuard({ children }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-screen bg-[#0B0D0C] flex items-center justify-center text-[#C9A45C]">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-2 border-[#C9A45C] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="font-serif text-sm text-[#F5F1E8]">Authenticating Admin Console Access...</p>
        </div>
      </div>
    );
  }

  return children;
}
