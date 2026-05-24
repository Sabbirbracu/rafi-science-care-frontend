import { Stethoscope, GraduationCap, Heart } from "lucide-react";

const CREDENTIALS = [
  {
    icon: Stethoscope,
    title: "Medical Background",
    text: "MBBS Doctor — Biology বোঝেন ভেতর থেকে",
  },
  {
    icon: GraduationCap,
    title: "Exam-Focused",
    text: "HSC Pattern-এ পড়ান ও Exam নেন",
  },
  {
    icon: Heart,
    title: "Student-First",
    text: "সহজ ভাষায়, ধৈর্য নিয়ে পড়ান",
  },
];

const STATS = [
  { value: "৫+", label: "বছরের শিক্ষকতা" },
  { value: "MBBS", label: "Doctor & Educator" },
  { value: "HSC", label: "Biology Specialist" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#030a14] py-20 sm:py-24 lg:py-28"
    >
      {/* Background — deeper/darker than other sections */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020810] via-[#030a14] to-[#050d1c]" />
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-[#1e5688]/10 blur-[140px]" />
        <div className="absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-[#dc2626]/5 blur-[120px]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: premium portrait card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Glow behind card */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#fbbf24]/20 via-white/5 to-transparent blur-2xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-8 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] backdrop-blur-sm">
                {/* Top shine */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
                />

                {/* Avatar */}
                <div className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#fbbf24]/30 to-[#dc2626]/20 blur-xl" />
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#0d2240] to-[#050d1c] text-7xl font-black text-white ring-4 ring-white/10 sm:text-8xl">
                    R
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="font-sans text-2xl font-black text-white">
                    Dr. Rafi
                  </h3>
                  <p className="mt-1.5 font-sans text-sm font-semibold text-[#dc2626]">
                    MBBS · Biology Educator
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-6">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-sans text-lg font-bold text-white sm:text-xl">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 font-sans text-[10px] font-medium uppercase tracking-wider text-white/40 sm:text-xs">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="lg:col-span-7">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
              Meet Your Teacher
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[44px] md:leading-[1.15]">
              কে পড়াবেন <span className="text-white/70">তোমাকে?</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70 sm:text-lg">
              <p>
                <span className="font-bold text-white">Dr. Rafi</span> — MBBS
                Doctor এবং অভিজ্ঞ Biology শিক্ষক। ৫ বছরেরও বেশি সময় ধরে
                Class 9-12 এর Students-দের Biology পড়াচ্ছেন। তাঁর পড়ানোর
                Style সহজ, Concept-focused, এবং Exam-oriented।
              </p>
              <p>
                <span className="font-semibold text-white">
                  Rafi&apos;s Science Care
                </span>{" "}
                — Dr. Rafi-র নিজস্ব Education Platform, যেখানে Biology-কে ভয় নয়
                — সহজ করে বুঝে ভয়কে জয় করতে শেখানো হয়।
              </p>
            </div>

            {/* Credential cards */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {CREDENTIALS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Icon size={18} strokeWidth={2.25} />
                  </div>
                  <p className="mt-3 font-sans text-sm font-bold text-white">
                    {title}
                  </p>
                  <p className="mt-0.5 font-sans text-xs text-white/50">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
