"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { Crown, ArrowRight, ShieldCheck, UserCheck, User, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const { loginAsRole, loginWithCredentials } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      loginWithCredentials(email, password);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D0C] text-[#F5F1E8] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-[#141817] rounded-2xl border border-[#C9A45C]/40 p-6 sm:p-8 shadow-2xl space-y-6 relative z-10 backdrop-blur-xl">
        {/* Branding */}
        <div className="text-center space-y-2">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-xl bg-[#0B0D0C] border border-[#C9A45C] flex items-center justify-center text-[#C9A45C]">
              <Crown className="w-6 h-6" />
            </div>
          </Link>
          <h1 className="font-serif text-2xl font-bold text-white">Welcome Back</h1>
          <p className="text-xs text-[#D8D3C8]">
            Access your Elite Chauffeur executive account
          </p>
        </div>

        {/* Demo Fast Access Buttons */}
        <div className="bg-[#0B0D0C] p-4 rounded-xl border border-white/10 space-y-2.5">
          <span className="text-[10px] uppercase font-bold text-[#C9A45C] block text-center tracking-wider">
            ⚡ Quick Demo Access Options
          </span>
          <div className="grid grid-cols-1 gap-2">
            <button
              onClick={() => loginAsRole("admin")}
              className="w-full py-2.5 px-4 bg-[#141817] hover:bg-[#C9A45C] hover:text-[#0B0D0C] border border-[#C9A45C]/40 rounded-xl text-xs font-bold text-white transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A45C] group-hover:text-[#0B0D0C]" />
                <span>Continue as Admin</span>
              </div>
              <span className="text-[10px] text-white/50 group-hover:text-[#0B0D0C]/70 font-mono">
                /admin
              </span>
            </button>

            <button
              onClick={() => loginAsRole("driver")}
              className="w-full py-2.5 px-4 bg-[#141817] hover:bg-[#C9A45C] hover:text-[#0B0D0C] border border-[#C9A45C]/40 rounded-xl text-xs font-bold text-white transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400 group-hover:text-[#0B0D0C]" />
                <span>Continue as Driver</span>
              </div>
              <span className="text-[10px] text-white/50 group-hover:text-[#0B0D0C]/70 font-mono">
                /driver
              </span>
            </button>

            <button
              onClick={() => loginAsRole("customer")}
              className="w-full py-2.5 px-4 bg-[#141817] hover:bg-[#C9A45C] hover:text-[#0B0D0C] border border-[#C9A45C]/40 rounded-xl text-xs font-bold text-white transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-sky-400 group-hover:text-[#0B0D0C]" />
                <span>Continue as Customer</span>
              </div>
              <span className="text-[10px] text-white/50 group-hover:text-[#0B0D0C]/70 font-mono">
                /customer
              </span>
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-white/10 w-full" />
          <span className="bg-[#141817] px-3 text-[10px] text-white/40 uppercase tracking-widest font-bold absolute">
            Or Sign In
          </span>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@elitechauffeur.co.uk"
                className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-[11px] uppercase tracking-wider text-[#C9A45C] block font-bold mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-gold-primary py-3 px-6 text-xs justify-center cursor-pointer"
          >
            <span>SIGN IN TO EXECUTIVE CONSOLE</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#0B0D0C]" />
          </button>
        </form>

        <div className="text-center pt-2">
          <Link
            href="/"
            className="text-xs text-[#D8D3C8] hover:text-[#C9A45C] underline transition-colors"
          >
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
