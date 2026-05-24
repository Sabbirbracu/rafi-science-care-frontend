"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/[0.06] bg-gradient-to-b from-[#050d1c] to-[#0d2240] lg:flex">
      {/* Logo */}
      <div className="flex h-20 items-center px-6">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Navigation */}
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
  );
}
