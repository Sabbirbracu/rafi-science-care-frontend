"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Calendar,
  Microscope,
  Play,
  Sparkles,
} from "lucide-react";

const TARGET_DATE = new Date("2026-06-01T09:00:00+06:00");

function useCountdown(target: Date) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return { d: "00", h: "00", m: "00", s: "00" };
  }

  const diff = Math.max(0, target.getTime() - now.getTime());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  const pad = (n: number) => String(n).padStart(2, "0");
  return { d: pad(d), h: pad(h), m: pad(m), s: pad(s) };
}

export default function Hero() {
  const { d, h, m, s } = useCountdown(TARGET_DATE);

  return (
    <section className="relative isolate overflow-hidden bg-[#0d2240]">
      {/* Layered background: gradient base + low-opacity cadet overlay */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient (the one that looked great) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050d1c] via-[#0d2240] to-[#15355a]" />

        {/* Soft color blooms */}
        <div className="absolute -top-24 -left-24 h-[480px] w-[480px] rounded-full bg-[#1e5688]/30 blur-[120px]" />
        <div className="absolute -bottom-24 right-0 h-[420px] w-[420px] rounded-full bg-[#dc2626]/15 blur-[120px]" />

        {/* Cadet students photo overlay — very subtle, blended into the gradient */}
        <div className="absolute inset-0 mix-blend-overlay opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Strong left-to-right gradient mask so left side stays text-readable, right keeps the photo feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d1c] via-[#0d2240]/85 to-[#0d2240]/40" />
        {/* Bottom fade into the feature strip */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1c] via-transparent to-transparent" />

        {/* Subtle dot grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-28 lg:pb-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            {/* LIVE badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dc2626] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#dc2626]" />
              </span>
              <span className="font-sans text-xs font-semibold text-white/90 sm:text-[13px]">
                <span className="font-bold text-white">LIVE</span>
                <span className="mx-2 text-white/30">·</span>
                <span className="font-bengali normal-case tracking-normal">
                  June 1 থেকে শুরু · আসন সীমিত
                </span>
              </span>
            </div>

            {/* Headline — 2 lines max on desktop */}
            <h1 className="mt-6 text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.12]">
              HSC Biology-তে{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#fbbf24]">A+</span>
                <svg
                  aria-hidden
                  viewBox="0 0 120 14"
                  className="absolute -bottom-2 left-0 h-3 w-full text-[#dc2626]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 30 1, 60 6 T 118 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              চাও? Cadet-দের জন্য সেরা সুযোগ।
            </h1>

            {/* Subheadline — pain-focused */}
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              Cadet College-এর চাপে Biology পিছিয়ে পড়েছে?{" "}
              <span className="font-semibold text-white">Dr. Rafi</span>-র সাথে
              ৩০ দিনে সব Chapter Clear করো — Live Class, Recording, আর Real OMR
              Exam — সব এক জায়গায়।
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#dc2626] px-7 py-4 font-sans text-base font-bold text-white shadow-2xl shadow-[#dc2626]/40 transition hover:bg-[#b91c1c] hover:shadow-[#dc2626]/60 sm:text-lg"
              >
                এখনই Enroll করো — ৳3,500
                <ArrowRight
                  size={20}
                  strokeWidth={2.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#sample"
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-sans text-sm font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
              >
                <Play
                  size={14}
                  strokeWidth={2.5}
                  className="text-white/70"
                  fill="currentColor"
                />
                Sample Class দেখো
              </Link>
            </div>

            {/* Trust strip — honest, specific */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-x-8">
              <div className="flex items-center gap-2.5">
                <Calendar size={18} className="text-white/60" />
                <span className="font-sans text-sm text-white/80">
                  <span className="font-bengali font-bold text-white">
                    ৫+ বছরের
                  </span>{" "}
                  <span className="font-bengali">শিক্ষকতা</span>
                </span>
              </div>
              <span aria-hidden className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2.5">
                <Microscope size={18} className="text-white/60" />
                <span className="font-sans text-sm font-semibold text-white/80">
                  HSC Biology Specialist
                </span>
              </div>
              <span
                aria-hidden
                className="hidden h-4 w-px bg-white/20 sm:block"
              />
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-white/60" />
                <span className="font-sans text-sm text-white/80">
                  SSLCommerz Secure Payment
                </span>
              </div>
            </div>
          </div>

          {/* Right: premium countdown card */}
          <div className="lg:col-span-5">
            <CountdownCard d={d} h={h} m={m} s={s} />
          </div>
        </div>
      </div>

      {/* Bottom feature strip */}
      <div className="relative border-t border-white/10 bg-[#050d1c]/70 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
          {[
            { label: "Live Classes", desc: "Weekly with Dr. Rafi" },
            { label: "Recorded Lectures", desc: "Anytime, Unlimited" },
            { label: "Real OMR Exams", desc: "HSC Pattern" },
            { label: "Performance Tracking", desc: "Know your weak spots" },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className={`px-5 py-5 sm:px-6 sm:py-6 ${
                i < arr.length - 1
                  ? "border-b border-r border-white/5 last:border-r-0"
                  : ""
              }`}
            >
              <p className="font-sans text-sm font-bold text-white sm:text-base">
                {item.label}
              </p>
              <p className="mt-1 font-sans text-xs text-white/65 sm:text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                        Premium countdown card                       */
/* ------------------------------------------------------------------ */

function CountdownCard({
  d,
  h,
  m,
  s,
}: {
  d: string;
  h: string;
  m: string;
  s: string;
}) {
  return (
    <div className="relative">
      {/* outer glow — warm yellow */}
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#fbbf24]/30 via-[#fbbf24]/10 to-transparent blur-2xl"
      />

      <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-20px_rgba(5,13,28,0.5),0_8px_20px_-8px_rgba(5,13,28,0.3)] ring-1 ring-black/5">
        {/* Decorative top header strip */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#050d1c] via-[#0d2240] to-[#15355a] px-6 py-4">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-white/70" />
              <p className="font-sans text-[10px] font-extrabold uppercase tracking-[0.28em] text-white/90">
                Batch Starts In
              </p>
            </div>
            <span className="rounded-full bg-[#fbbf24] px-3 py-1 font-sans text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#0d2240] shadow-md shadow-[#fbbf24]/30">
              June 1, 2026
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="relative px-6 pb-6 pt-7 sm:px-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 100% 0%, rgba(13,34,64,0.04), transparent 50%)",
            }}
          />

          {/* Countdown tiles */}
          <div className="relative grid grid-cols-4 gap-2 sm:gap-2.5">
            {[
              { value: d, label: "Days" },
              { value: h, label: "Hrs" },
              { value: m, label: "Min" },
              { value: s, label: "Sec" },
            ].map((unit) => (
              <div
                key={unit.label}
                className="relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gray-200/70"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50"
                />
                <div className="relative px-1 pt-3 pb-2.5 text-center">
                  <p
                    suppressHydrationWarning
                    className="font-sans text-3xl font-black tabular-nums leading-none text-[#0d2240] sm:text-[34px]"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {unit.value}
                  </p>
                  <p className="mt-2 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500">
                    {unit.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Urgency note */}
          <div className="relative mt-5 flex items-start gap-2.5 rounded-xl border border-red-200/70 bg-red-50 p-3.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#dc2626] text-[10px] font-black text-white">
              !
            </span>
            <p className="font-bengali text-[13px] leading-relaxed text-gray-800">
              <span className="font-bold">Bogura-র Vacation</span> শেষ হওয়ার
              আগেই শুরু করো। June 4-এর পর এই সুযোগ নাও-ও নাও থাকতে পারে।
            </p>
          </div>

          {/* Removed duplicate CTA — the left-side primary CTA is enough */}
        </div>
      </div>
    </div>
  );
}
