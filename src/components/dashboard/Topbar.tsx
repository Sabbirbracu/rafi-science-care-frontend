"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Menu, X } from "lucide-react";
import {
  LayoutDashboard,
  Radio,
  Video,
  FileCheck2,
  BarChart3,
  User,
  LogOut,
} from "lucide-react";
import Logo from "@/components/brand/Logo";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Live Classes", href: "/dashboard/live", icon: Radio },
  { label: "Recordings", href: "/dashboard/recordings", icon: Video },
  { label: "Exams", href: "/dashboard/exams", icon: FileCheck2 },
  { label: "Results", href: "/dashboard/results", icon: BarChart3 },
  { label: "Profile", href: "/dashboard/profile", icon: User },
];

export default function DashboardTopbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm sm:px-6 lg:px-8">
        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        {/* Page title */}
        <div className="hidden lg:block">
          <p className="font-sans text-sm text-gray-500">
            Welcome back,{" "}
            <span className="font-semibold text-gray-900">Student</span>
          </p>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#dc2626]" />
          </button>

          {/* Avatar */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d2240] font-sans text-sm font-bold text-white">
            S
          </div>
        </div>
      </header>

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col bg-gradient-to-b from-[#050d1c] to-[#0d2240]">
            {/* Header */}
            <div className="flex h-20 items-center justify-between px-6">
              <Logo />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/60 hover:bg-white/10"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 space-y-1 px-3 py-4">
              {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
                const isActive =
                  href === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 font-sans text-sm font-medium transition ${
                      isActive
                        ? "bg-white/10 text-white shadow-sm"
                        : "text-white/60 hover:bg-white/[0.05] hover:text-white/90"
                    }`}
                  >
                    <Icon
                      size={18}
                      strokeWidth={isActive ? 2.25 : 1.75}
                      className={isActive ? "text-[#dc2626]" : ""}
                    />
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="border-t border-white/[0.06] p-3">
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 font-sans text-sm font-medium text-white/50 transition hover:bg-white/[0.05] hover:text-white/80"
              >
                <LogOut size={18} strokeWidth={1.75} />
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
