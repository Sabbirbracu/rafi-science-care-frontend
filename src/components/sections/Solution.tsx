import { Sparkles, Radio, Video, FileCheck2 } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Radio,
    label: "Live Classes",
    note: "সরাসরি Doubt clear",
  },
  {
    icon: Video,
    label: "Recorded Lectures",
    note: "যখন খুশি দেখো",
  },
  {
    icon: FileCheck2,
    label: "OMR Exams",
    note: "Real HSC Pattern",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden bg-[#082817] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Decorative */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.18),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(26,107,60,0.5),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.2))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur">
            <Sparkles size={14} className="text-[#fdba74]" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wide text-[#fdba74]">
              The Solution
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Cadet HSC Biology
            <br />
            <span className="bg-gradient-to-r from-[#fdba74] to-[#f97316] bg-clip-text text-transparent">
              Crash Course 2026
            </span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            <span className="font-semibold text-white">Dr. Rafi</span> তোমার
            জন্য তৈরি করেছেন একটি Complete Online Program — যেখানে HSC
            Biology-র প্রতিটি গুরুত্বপূর্ণ Topic Live Class-এ পড়ানো হবে,
            Recorded Lecture থাকবে যেকোনো সময় দেখার জন্য, আর Real OMR-based
            Exam দিয়ে নিজেকে যাচাই করতে পারবে।
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, label, note }) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-[#f97316]/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white shadow-lg">
                <Icon size={22} strokeWidth={2.25} />
              </div>
              <h3 className="mt-4 font-sans text-lg font-bold text-white">
                {label}
              </h3>
              <p className="mt-1 text-sm text-white/70">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
