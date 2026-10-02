"use client";

import { useState } from "react";
import RoleGuard from "./RoleGuard";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

export default function DashboardLayout({ allowedRoles, children, onSearchChange, searchValue = "" }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <RoleGuard allowedRoles={allowedRoles}>
      <div className="min-h-screen bg-[#0B0D0C] text-[#F5F1E8] flex flex-col font-sans">
        <DashboardSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content Area Offset for Fixed Desktop Sidebar */}
        <div className="md:pl-64 flex-1 flex flex-col min-w-0">
          <DashboardHeader
            onMenuClick={() => setIsSidebarOpen(true)}
            onSearchChange={onSearchChange}
            searchValue={searchValue}
          />

          <main className="p-4 sm:p-6 flex-1 space-y-6 max-w-7xl w-full mx-auto">
            {children}
          </main>
        </div>
      </div>
    </RoleGuard>
  );
}
