import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#ecf7f0] via-white to-white">
      {/* Decorative grid + blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(26,107,60,0.08),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.08),transparent_50%)]" />
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#1a6b3c]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#f97316]/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-12 pb-20 sm:px-6 sm:pt-16 sm:pb-24 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-28">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1a6b3c]/20 bg-white px-3.5 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f97316] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f97316]" />
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-wide text-[#114829]">
              Cadet HSC Batch 2026 • Live June 1
            </span>
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-3xl font-bold leading-[1.25] text-gray-900 sm:text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.15]">
            HSC-এ Biology-তে{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#1a6b3c]">A+</span>
              <span
                aria-hidden
                className="absolute bottom-1 left-0 z-0 h-3 w-full bg-[#f97316]/30 sm:h-4"
              />
            </span>{" "}
            পেতে চাও?
            <br />
            <span className="text-gray-900">
              Cadet-দের জন্য সবচেয়ে সেরা সুযোগ এসে গেছে।
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
            <span className="font-semibold text-gray-900">Dr. Rafi</span>-র
            সাথে পড়ো — Live Class, Recorded Lecture, আর Real Exam Practice — সব
            এক জায়গায়।
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#f97316] px-7 py-4 text-base font-bold text-white shadow-lg shadow-[#f97316]/30 transition hover:bg-[#ea580c] hover:shadow-xl hover:shadow-[#f97316]/40"
            >
              এখনই Enroll করো — মাত্র{" "}
              <span className="font-sans">৳3,500</span>
              <ArrowRight
                size={18}
                strokeWidth={2.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="#solution"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-4 text-base font-semibold text-[#114829] transition hover:border-[#1a6b3c] hover:bg-[#ecf7f0]"
            >
              Course দেখো
            </Link>
          </div>

          {/* Urgency line */}
          <div className="mt-6 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
            <span className="text-base">🔴</span>
            <p className="font-sans text-sm font-semibold text-red-700 sm:text-[15px]">
              <span className="font-bengali">June 1 থেকে Batch শুরু। আসন সীমিত।</span>
            </p>
          </div>
        </div>

        {/* Right: visual card */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Floating badges */}
            <div className="absolute -left-4 top-8 z-20 hidden rounded-xl bg-white p-3 shadow-xl sm:block">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1a6b3c]/10 text-[#1a6b3c]">
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                </div>
                <div className="leading-tight">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-wider text-gray-500">
                    HSC Style
                  </p>
                  <p className="font-sans text-sm font-bold text-gray-900">
                    OMR Exam
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-12 z-20 hidden rounded-xl bg-white p-3 shadow-xl sm:block">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#f97316]/10 text-[#f97316]">
                  <span className="text-lg">📡</span>
                </div>
                <div className="leading-tight">
                  <p className="font-sans text-[10px] font-medium uppercase tracking-wider text-gray-500">
                    Weekly
                  </p>
                  <p className="font-sans text-sm font-bold text-gray-900">
                    Live Classes
                  </p>
                </div>
              </div>
            </div>

            {/* Main card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a6b3c] via-[#155a32] to-[#082817] p-8 text-white shadow-2xl">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.25),transparent_50%)]"
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#fdba74]">
                    Crash Course
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                  Cadet HSC
                  <br />
                  Biology 2026
                </h3>
                <p className="mt-3 text-sm text-white/80">
                  Dr. Rafi-র সরাসরি তত্ত্বাবধানে।
                </p>

                <div className="mt-6 space-y-2.5">
                  {[
                    "Weekly Live Classes",
                    "All Class Recordings",
                    "OMR-based Mock Exams",
                    "Performance Tracking",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-[#fdba74]"
                      />
                      <span className="font-sans text-sm text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex items-end justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-wider text-white/60">
                      Course Fee
                    </p>
                    <p className="mt-0.5 font-sans text-3xl font-bold">৳3,500</p>
                  </div>
                  <div className="text-right">
                    <p className="font-sans text-[11px] uppercase tracking-wider text-white/60">
                      Starts
                    </p>
                    <p className="mt-0.5 font-sans text-base font-bold">
                      June 1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
