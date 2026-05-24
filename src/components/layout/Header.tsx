"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";

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
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-br from-[#050d1c] via-[#0d2240] to-[#15355a] shadow-lg shadow-black/30">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:h-24 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Logo priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 font-sans text-sm font-semibold text-white/95 transition hover:bg-white/10 hover:text-[#dc2626]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action area */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-lg border border-white/30 px-4 py-2.5 font-sans text-sm font-semibold text-white transition hover:border-white/60 hover:text-white"
          >
            Login
          </Link>
          <Link
            href="#pricing"
            className="rounded-lg bg-[#dc2626] px-4 py-2.5 font-sans text-sm font-semibold text-white shadow-sm transition hover:bg-[#b91c1c] hover:shadow-md"
          >
            Enroll now
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-gradient-to-br from-[#050d1c] to-[#15355a] md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 font-sans text-base font-medium text-white/85 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-3">
              <Link
                href="/login"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-white/20 px-4 py-2.5 text-center font-sans text-sm font-semibold text-white hover:bg-white/5"
              >
                Login
              </Link>
              <Link
                href="#pricing"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-[#dc2626] px-4 py-2.5 text-center font-sans text-sm font-semibold text-white"
              >
               Enroll Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
