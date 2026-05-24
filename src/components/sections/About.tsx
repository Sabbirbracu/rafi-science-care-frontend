import { Stethoscope, GraduationCap, Heart } from "lucide-react";

const STATS = [
  { value: "1000+", label: "Students Taught" },
  { value: "MBBS", label: "Doctor & Educator" },
  { value: "10+ yrs", label: "Teaching Experience" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: portrait card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#1e5688]/10 via-[#dc2626]/10 to-transparent blur-2xl"
              />

              <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-[#eff6fc] via-white to-[#fef2f2] p-8 shadow-xl">
                {/* Avatar placeholder */}
                <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-[#1e5688] to-[#0d2240] text-7xl font-bold text-white shadow-2xl shadow-[#1e5688]/30 sm:h-48 sm:w-48">
                  R
                </div>

                <div className="mt-6 text-center">
                  <h3 className="font-sans text-2xl font-bold text-gray-900">
                    Dr. Rafi
                  </h3>
                  <p className="mt-1 font-sans text-sm font-semibold text-[#dc2626]">
                    MBBS · Biology Educator
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-gray-100 pt-6">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="font-sans text-lg font-bold text-[#15355a] sm:text-xl">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 font-sans text-[10px] font-medium uppercase tracking-wider text-gray-500 sm:text-xs">
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
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              কে পড়াবেন <span className="text-[#1e5688]">তোমাকে?</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              <p>
                <span className="font-bold text-gray-900">Dr. Rafi</span> — MBBS
                Doctor এবং অভিজ্ঞ Biology শিক্ষক। SSC থেকে HSC পর্যন্ত বছরের পর
                বছর ধরে হাজার হাজার Student-কে Biology-তে A+ পেতে সাহায্য
                করেছেন। তাঁর পড়ানোর Style সহজ, মজাদার, এবং Exam-focused।
              </p>
              <p>
                <span className="font-semibold text-[#1e5688]">
                  Rafi&apos;s Science Care
                </span>{" "}
                — Dr. Rafi-র নিজস্ব Education Platform, যেখানে Science-কে ভয় নয়
                — ভালোবাসতে শেখানো হয়।
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Stethoscope,
                  title: "Medical Background",
                  text: "MBBS Doctor",
                },
                {
                  icon: GraduationCap,
                  title: "Exam-Focused",
                  text: "HSC Pattern",
                },
                {
                  icon: Heart,
                  title: "Student-First",
                  text: "Friendly Teaching",
                },
              ].map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-xl border border-gray-100 bg-gray-50/50 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1e5688]/10 text-[#1e5688]">
                    <Icon size={18} strokeWidth={2.25} />
                  </div>
                  <p className="mt-3 font-sans text-sm font-bold text-gray-900">
                    {title}
                  </p>
                  <p className="mt-0.5 font-sans text-xs text-gray-600">
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
