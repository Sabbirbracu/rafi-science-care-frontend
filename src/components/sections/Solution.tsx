import {
  Sparkles,
  Radio,
  Video,
  FileCheck2,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const PILLARS = [
  {
    icon: Radio,
    label: "Live Classes",
    desc: "প্রতি সপ্তাহে Dr. Rafi-র সাথে সরাসরি class — doubt সাথে সাথে clear হবে।",
    highlight: "Weekly Interactive",
  },
  {
    icon: Video,
    label: "Recorded Lectures",
    desc: "প্রতিটি class recorded থাকবে — যখন খুশি, যতবার খুশি দেখো।",
    highlight: "Unlimited Access",
  },
  {
    icon: FileCheck2,
    label: "Real OMR Exams",
    desc: "HSC pattern-এ OMR-based exam — তোমার OMR sheet upload করো, result পাও।",
    highlight: "HSC Pattern",
  },
  {
    icon: BarChart3,
    label: "Performance Tracking",
    desc: "প্রতিটি exam-এর পর তোমার weak topics identify হবে — targeted preparation।",
    highlight: "Data-Driven",
  },
];

export default function Solution({ onEnroll }: { onEnroll?: () => void }) {
  return (
    <section
      id="solution"
      className="relative isolate overflow-hidden bg-[#050d1c] py-20 sm:py-24 lg:py-28"
    >
      {/* Background — deep navy with subtle depth */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2240] via-[#050d1c] to-[#050d1c]" />
        <div className="absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-[#1e5688]/15 blur-[140px]" />
        <div className="absolute -bottom-32 left-1/4 h-[400px] w-[400px] rounded-full bg-[#dc2626]/8 blur-[120px]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#dc2626]" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wide text-white/80">
              তোমার সমাধান
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[44px] md:leading-[1.15]">
            Cadet HSC Biology{" "}
            <span className="bg-gradient-to-r from-[#fca5a5] to-[#dc2626] bg-clip-text text-transparent">Crash Course 2026</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
            <span className="font-semibold text-white">Dr. Rafi</span> তোমার
            জন্য তৈরি করেছেন একটি Complete Online Program — যেখানে HSC Biology-র
            প্রতিটি গুরুত্বপূর্ণ Topic systematically cover হবে।
          </p>
        </div>

        {/* 4 Pillars — premium cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, label, desc, highlight }) => (
            <div
              key={label}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.4)] transition hover:border-white/[0.12] hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.5)]"
            >
              {/* Subtle top shine */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d2240] text-white ring-1 ring-white/10">
                <Icon size={22} strokeWidth={1.8} />
              </div>

              {/* Content */}
              <h3 className="mt-5 font-sans text-base font-bold text-white sm:text-lg">
                {label}
              </h3>
              <p className="mt-2.5 mb-5 text-[13px] leading-relaxed text-white/50 sm:text-sm">
                {desc}
              </p>

              {/* Tag — pinned to bottom */}
              <div className="mt-auto border-t border-white/[0.06] pt-4">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-[#dc2626]">
                  {highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onEnroll}
            className="group inline-flex items-center gap-2 rounded-full bg-[#dc2626] px-7 py-3.5 font-sans text-sm font-bold text-white shadow-lg shadow-[#dc2626]/30 transition hover:bg-[#b91c1c] hover:shadow-xl hover:shadow-[#dc2626]/40"
          >
            এখনই Enroll করো
            <ArrowRight
              size={16}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
