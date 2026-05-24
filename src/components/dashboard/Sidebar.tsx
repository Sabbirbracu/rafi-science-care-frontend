"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Radio,
  Video,
  FileCheck2,
  BarChart3,
  User,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Logo from "@/components/brand/Logo";
import { useAppDispatch } from "@/lib/hooks";
import { logout } from "@/lib/features/auth/authSlice";
import { useLogoutMutation } from "@/lib/features/auth/authApi";
import toast from "react-hot-toast";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Live Classes", href: "/dashboard/live", icon: Radio },
  { label: "Recordings", href: "/dashboard/recordings", icon: Video },
  { label: "Exams", href: "/dashboard/exams", icon: FileCheck2 },
  { label: "Results", href: "/dashboard/results", icon: BarChart3 },
  { label: "Profile", href: "/dashboard/profile", icon: User },
];

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
}

export default function DashboardSidebar({
  collapsed,
  setCollapsed,
}: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [logoutApi] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      toast.success("Logged out successfully");
      router.push("/");
    } catch {
      dispatch(logout());
      router.push("/");
    }
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 hidden flex-col border-r border-white/[0.06] bg-gradient-to-b from-[#050d1c] to-[#0d2240] transition-all duration-300 lg:flex ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo + collapse toggle */}
      <div className="flex h-20 items-center justify-between px-4">
        {!collapsed && (
          <Link href="/">
            <Logo />
          </Link>
        )}
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className={`flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition hover:bg-white/10 hover:text-white ${
            collapsed ? "mx-auto" : ""
          }`}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronsRight size={16} />
          ) : (
            <ChevronsLeft size={16} />
          )}
        </button>
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
              title={collapsed ? label : undefined}
              className={`flex items-center gap-3 rounded-xl py-3 font-sans text-sm font-medium transition ${
                isActive
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-white/60 hover:bg-white/[0.05] hover:text-white/90"
              } ${collapsed ? "justify-center px-3" : "px-4"}`}
            >
              <Icon
                size={18}
                strokeWidth={isActive ? 2.25 : 1.75}
                className={`shrink-0 ${isActive ? "text-[#dc2626]" : ""}`}
              />
              {!collapsed && <span>{label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-white/[0.06] p-3">
        <button
          type="button"
          onClick={handleLogout}
          title={collapsed ? "Logout" : undefined}
          className={`flex w-full items-center gap-3 rounded-xl py-3 font-sans text-sm font-medium text-white/50 transition hover:bg-[#dc2626]/10 hover:text-[#dc2626] ${
            collapsed ? "justify-center px-3" : "px-4"
          }`}
        >
          <LogOut size={18} strokeWidth={1.75} className="shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
