"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";

const NAV_LINKS = [
  { label: "Course", href: "#solution" },
  { label: "Features", href: "#features" },
  { label: "Teacher", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-18 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a6b3c] to-[#114829] text-white shadow-md shadow-[#1a6b3c]/20">
            <GraduationCap size={22} strokeWidth={2.25} />
          </div>
          <div className="leading-tight">
            <p className="font-sans text-[15px] font-bold text-[#114829]">
              Rafi&apos;s Science Care
            </p>
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f97316]">
              Cadet HSC Batch 2026
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-gray-600 transition hover:text-[#1a6b3c]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action area */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="font-sans text-sm font-semibold text-[#114829] transition hover:text-[#1a6b3c]"
          >
            Login
          </Link>
          <Link
            href="#pricing"
            className="rounded-lg bg-[#f97316] px-4 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition hover:bg-[#ea580c] hover:shadow-md"
          >
            এখনই Enroll
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#114829] hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 font-sans text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1a6b3c]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-gray-200 px-4 py-2.5 text-center font-sans text-sm font-semibold text-[#114829] hover:bg-gray-50"
              >
                Login
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-[#f97316] px-4 py-2.5 text-center font-sans text-sm font-semibold text-white"
              >
                এখনই Enroll
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
