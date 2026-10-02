"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useDemoData } from "@/context/DemoDataContext";
import {
  Menu,
  Bell,
  Search,
  LogOut,
  User,
  Shield,
  Car,
  CheckCircle2,
  X,
  RotateCcw
} from "lucide-react";
import Image from "next/image";

export default function DashboardHeader({ onMenuClick, onSearchChange, searchValue = "" }) {
  const { user, role, loginAsRole, logout } = useAuth();
  const { notifications, markNotificationsRead, resetDemoData } = useDemoData();
  const [showNotifications, setShowNotifications] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="sticky top-0 z-30 bg-[#0B0D0C]/90 backdrop-blur-xl border-b border-white/10 px-4 py-3 sm:px-6 flex items-center justify-between gap-4">
      {/* Left: Mobile Menu Toggle & Search Bar */}
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-[#C9A45C]"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Global Search */}
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            placeholder="Search bookings, drivers, customers, references..."
            className="w-full bg-[#141817] border border-white/10 focus:border-[#C9A45C] rounded-xl pl-9 pr-3.5 py-1.5 text-xs text-[#F5F1E8] focus:outline-none placeholder:text-white/40"
          />
        </div>
      </div>

      {/* Right: Quick Demo Role Switcher + Notifications + Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Demo Role Switcher Pill */}
        <div className="hidden lg:flex items-center gap-1 bg-[#141817] p-1 rounded-xl border border-white/10">
          <span className="text-[10px] uppercase font-bold text-white/40 px-2">Demo Role:</span>
          <button
            onClick={() => loginAsRole("admin")}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              role === "admin"
                ? "bg-[#C9A45C] text-[#0B0D0C]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => loginAsRole("driver")}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              role === "driver"
                ? "bg-[#C9A45C] text-[#0B0D0C]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Driver
          </button>
          <button
            onClick={() => loginAsRole("customer")}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
              role === "customer"
                ? "bg-[#C9A45C] text-[#0B0D0C]"
                : "text-white/60 hover:text-white"
            }`}
          >
            Customer
          </button>
        </div>

        {/* Reset Demo Data Button */}
        <button
          onClick={() => {
            if (confirm("Reset demo data back to default initial state?")) {
              resetDemoData();
            }
          }}
          title="Reset Demo Data"
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-[#C9A45C] hover:bg-white/10 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              if (!showNotifications) markNotificationsRead();
            }}
            className="relative p-2 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:text-[#C9A45C] transition-colors cursor-pointer"
            aria-label="View notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9A45C] text-[#0B0D0C] text-[9px] font-bold flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notifications Modal Overlay */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-[#141817] rounded-2xl border border-[#C9A45C]/40 shadow-2xl overflow-hidden z-50">
              <div className="p-3.5 bg-[#0B0D0C] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-[#C9A45C]" />
                  <span className="text-xs font-serif font-bold text-white">Console Notifications</span>
                </div>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-white/40 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-white/5">
                {notifications.length === 0 ? (
                  <p className="p-4 text-center text-xs text-white/40">No notifications.</p>
                ) : (
                  notifications.map((notif) => (
                    <div key={notif.id} className="p-3 hover:bg-white/5 transition-colors">
                      <div className="flex items-start justify-between gap-2">
                        <strong className="text-xs text-[#F5F1E8] font-semibold block">
                          {notif.title}
                        </strong>
                        <span className="text-[10px] text-white/40 shrink-0">{notif.time}</span>
                      </div>
                      <p className="text-[11px] text-[#D8D3C8] mt-0.5">{notif.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Profile & Logout */}
        <div className="flex items-center gap-2 pl-2 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <span className="text-xs font-bold text-white block truncate max-w-[120px]">
              {user?.name || "Executive User"}
            </span>
            <span className="text-[10px] text-[#C9A45C] uppercase font-mono block">
              {role}
            </span>
          </div>

          <button
            onClick={logout}
            title="Log Out"
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
