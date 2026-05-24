import { Check, ArrowRight, AlertOctagon } from "lucide-react";

const INCLUSIONS = [
  "Weekly Live Classes",
  "All Class Recordings",
  "OMR-based Exams",
  "Result & Performance Tracking",
  "Dedicated Online Platform Access",
];

export default function Pricing({ onEnroll }: { onEnroll?: () => void }) {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
            Limited Time Offer
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            এখনই Join করো —{" "}
            <span className="text-[#1e5688]">June 1 থেকে শুরু</span>
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#1e5688]/15 bg-white shadow-2xl shadow-[#1e5688]/10">
            {/* Top ribbon */}
            <div className="bg-gradient-to-r from-[#1e5688] via-[#15355a] to-[#0d2240] px-6 py-4 text-center">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#fca5a5]">
                Cadet Exclusive Batch 2026
              </p>
              <h3 className="mt-1 font-sans text-2xl font-bold text-white sm:text-3xl">
                Cadet HSC Biology Crash Course
              </h3>
            </div>

            <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-5 lg:gap-10">
              <div className="lg:col-span-3">
                <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Course Includes
                </p>
                <ul className="mt-4 space-y-3.5">
                  {INCLUSIONS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e5688]/10 text-[#1e5688]">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="font-sans text-[15px] font-medium text-gray-800">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-[#eff6fc] to-[#fef2f2] p-6">
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gray-500">
                      মাত্র
                    </p>
                    <p className="mt-1 font-sans text-5xl font-bold text-[#15355a] sm:text-6xl">
                      ৳3,500
                    </p>
                    <p className="mt-2 font-sans text-sm text-gray-600">
                      One-time payment · Full Course Access
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onEnroll}
                    className="group mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#dc2626] px-6 py-4 font-sans text-base font-bold text-white shadow-lg shadow-[#dc2626]/25 transition hover:bg-[#b91c1c] hover:shadow-xl"
                  >
                    এখনই Enroll করো
                    <ArrowRight
                      size={18}
                      strokeWidth={2.5}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="mt-3 text-center font-sans text-xs text-gray-500">
                    Secure payment via SSLCommerz
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <AlertOctagon
              size={22}
              className="mt-0.5 shrink-0 text-amber-600"
              strokeWidth={2.25}
            />
            <p className="text-[15px] leading-relaxed text-amber-900">
              <span className="font-bold">⚠️ Bogura-র Cadet Students</span> এখন
              Vacation-এ আছো — June 4-এর পর College ফিরে গেলে আর সময় পাবে না।
              এখনই সিদ্ধান্ত নাও।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
