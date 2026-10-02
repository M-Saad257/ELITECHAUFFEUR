"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { ShieldCheck, Lock, Mail, ArrowRight, KeyRound, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const { loginWithCredentials, loginAsRole } = useAuth();
  const [email, setEmail] = useState("admin@elitechauffeur.co.uk");
  const [password, setPassword] = useState("admin123");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Forgot password state
  const [isForgotOpen, setIsForgotOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    setTimeout(() => {
      const res = loginWithCredentials(email, password);
      setIsLoading(false);
      if (!res.success) {
        setErrorMsg(res.error || "Invalid credentials.");
      }
    }, 400);
  };

  const handleQuickFill = () => {
    setEmail("admin@elitechauffeur.co.uk");
    setPassword("admin123");
    setErrorMsg("");
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    if (!resetEmail.trim()) return;
    setResetSuccess(true);
    setTimeout(() => {
      setResetSuccess(false);
      setIsForgotOpen(false);
      setResetEmail("");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0B0D0C] text-[#F5F1E8] flex flex-col justify-between selection:bg-[#C9A45C] selection:text-[#0B0D0C]">
      {/* Top Header Navigation */}
      <header className="py-6 px-6 sm:px-12 border-b border-white/10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-[#141817] border border-[#C9A45C] flex items-center justify-center text-[#C9A45C] font-serif font-bold text-sm group-hover:bg-[#C9A45C] group-hover:text-[#0B0D0C] transition-colors">
            E
          </div>
          <span className="font-serif text-base font-bold text-white tracking-widest uppercase">
            Elite Chauffeur <span className="text-[#C9A45C] text-xs font-sans tracking-normal font-normal">UK</span>
          </span>
        </Link>

        <Link
          href="/"
          className="text-xs text-white/60 hover:text-[#C9A45C] transition-colors flex items-center gap-1.5"
        >
          <span>Return to Site</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* Main Login Center Container */}
      <main className="flex-1 flex items-center justify-center p-6 my-8">
        <div className="w-full max-w-md bg-[#141817] border border-[#C9A45C]/30 rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle Decorative Ambient Lighting */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#C9A45C]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#C9A45C]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Form Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#0B0D0C] border border-[#C9A45C] flex items-center justify-center text-[#C9A45C] mx-auto shadow-lg">
              <ShieldCheck className="w-7 h-7 text-[#C9A45C]" />
            </div>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C9A45C] bg-[#C9A45C]/10 px-3 py-1 rounded-full border border-[#C9A45C]/30">
                Restricted Executive Access
              </span>
              <h1 className="font-serif text-2xl font-bold text-white mt-3">
                Admin Operations Console
              </h1>
              <p className="text-xs text-white/50 mt-1">
                Enter your credentials to manage fleet, dispatch & bookings.
              </p>
            </div>
          </div>

          {/* Error Notification Alert */}
          {errorMsg && (
            <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2.5 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-white/80 mb-2">
                Administrator Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@elitechauffeur.co.uk"
                  className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-white/80">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setIsForgotOpen(true)}
                  className="text-xs text-[#C9A45C] hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-white/30 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-[#C9A45C] to-[#B38F46] hover:from-[#d8b46b] hover:to-[#C9A45C] text-[#0B0D0C] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-[#0B0D0C] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <span>Sign In To Admin Console</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credentials Assistant */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <div className="bg-[#0B0D0C] p-3.5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#C9A45C] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Demo Admin Access</span>
              </div>
              <p className="text-[10.5px] text-white/50">
                Email: <span className="text-white font-mono">admin@elitechauffeur.co.uk</span>
                <br />
                Password: <span className="text-white font-mono">admin123</span>
              </p>
              <button
                type="button"
                onClick={handleQuickFill}
                className="mt-1 px-3 py-1 bg-[#141817] hover:bg-[#C9A45C]/20 border border-[#C9A45C]/40 text-[#C9A45C] text-[10px] font-bold rounded-lg transition-colors cursor-pointer"
              >
                Auto-Fill Credentials
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Forgot Password Modal */}
      {isForgotOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#141817] border border-[#C9A45C]/40 rounded-3xl p-6 sm:p-8 max-w-sm w-full space-y-5 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-[#C9A45C]">
                <KeyRound className="w-5 h-5" />
                <h3 className="font-serif text-sm font-bold text-white">Reset Admin Password</h3>
              </div>
              <button
                onClick={() => setIsForgotOpen(false)}
                className="text-white/40 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {resetSuccess ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-xs font-bold text-emerald-300">Reset Instructions Sent</h4>
                <p className="text-[11px] text-white/60">
                  Password reset link has been dispatched to <span className="text-white font-medium">{resetEmail}</span>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <p className="text-xs text-white/60">
                  Enter your registered administrator email address below to receive password recovery instructions.
                </p>
                <div>
                  <label className="block text-xs font-semibold text-white/80 mb-1.5">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    required
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="admin@elitechauffeur.co.uk"
                    className="w-full bg-[#0B0D0C] border border-white/15 focus:border-[#C9A45C] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none"
                  />
                </div>
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsForgotOpen(false)}
                    className="px-4 py-2 text-xs text-white/60 hover:text-white transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#C9A45C] hover:bg-[#d8b46b] text-[#0B0D0C] font-bold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-4 text-center text-[10px] text-white/30 border-t border-white/5">
        Elite Chauffeur UK © {new Date().getFullYear()} — Secure Dispatch Systems
      </footer>
    </div>
  );
}
