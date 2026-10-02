"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  Users,
  UserCheck,
  Car,
  CreditCard,
  Star,
  Sliders,
  BarChart3,
  Settings,
  ArrowLeft,
  X,
  Crown
} from "lucide-react";

export default function DashboardSidebar({ isOpen, onClose }) {
  const pathname = usePathname();

  const navItems = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Live Bookings", href: "/admin/bookings", icon: Calendar },
    { label: "Chauffeur Drivers", href: "/admin/drivers", icon: UserCheck },
    { label: "VIP Customers", href: "/admin/customers", icon: Users },
    { label: "Fleet Vehicles", href: "/admin/fleet", icon: Car },
    { label: "Payments & Accounts", href: "/admin/payments", icon: CreditCard },
    { label: "Customer Reviews", href: "/admin/reviews", icon: Star },
    { label: "Service Tariffs", href: "/admin/services", icon: Sliders },
    { label: "Analytics & Reports", href: "/admin/reports", icon: BarChart3 },
    { label: "System Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Sidebar Navigation Container */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-[#101311] border-r border-white/10 flex flex-col justify-between transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Header Branding */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0B0D0C] border border-[#C9A45C] flex items-center justify-center text-[#C9A45C]">
                <Crown className="w-4 h-4" />
              </div>
              <div>
                <span className="font-serif text-sm font-bold text-white tracking-wide block">
                  ELITE CHAUFFEUR
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C9A45C] font-semibold block">
                  Admin Console
                </span>
              </div>
            </Link>

            <button
              onClick={onClose}
              className="md:hidden text-white/60 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Active Role Badge */}
          <div className="px-5 py-3 border-b border-white/5">
            <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border text-[#C9A45C] border-[#C9A45C]/40 bg-[#C9A45C]/10">
              DISPATCH & ADMIN CONTROL
            </span>
          </div>

          {/* Menu Items */}
          <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-220px)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-[#C9A45C] text-[#0B0D0C] font-bold shadow-[0_0_15px_rgba(201,164,92,0.3)]"
                      : "text-[#D8D3C8] hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#0B0D0C]" : "text-[#C9A45C]"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 space-y-2 bg-[#0B0D0C]/50">
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-[#D8D3C8] hover:text-[#C9A45C] hover:bg-white/5 transition-colors border border-white/5"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Return to Public Site</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
