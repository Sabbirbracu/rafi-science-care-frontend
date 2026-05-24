import {
  UserPlus,
  CalendarCheck,
  PenTool,
  Trophy,
} from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    step: "01",
    title: "Enroll করো",
    desc: "SSLCommerz-এ নিরাপদে Payment করো। সাথে সাথে তোমার Student Dashboard activate হয়ে যাবে।",
    detail: "৳3,500 · Instant Access",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Live Class-এ Join করো",
    desc: "প্রতি সপ্তাহে নির্দিষ্ট সময়ে Dr. Rafi-র সাথে Live Class। Doubt থাকলে সাথে সাথে জিজ্ঞেস করো।",
    detail: "Weekly Schedule · Recording Available",
  },
  {
    icon: PenTool,
    step: "03",
    title: "OMR Exam দাও",
    desc: "Chapter শেষে Real HSC Pattern-এ OMR Exam হবে। তোমার OMR Sheet upload করো — automated result পাও।",
    detail: "HSC Pattern · Auto Grading",
  },
  {
    icon: Trophy,
    step: "04",
    title: "Result দেখো, Improve করো",
    desc: "প্রতিটি Exam-এর পর তোমার Performance Report পাবে — কোন Topic-এ weak, কোথায় improve দরকার।",
    detail: "Detailed Analytics · Weak Topic Alert",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#dc2626]">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]">
            Enroll থেকে Result —{" "}
            <span className="text-[#0d2240]">পুরো Journey</span>
          </h2>
          <p className="mt-5 text-base text-gray-600 sm:text-lg">
            মাত্র ৪টি Step-এ তোমার HSC Biology preparation শুরু হয়ে যাবে।
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-gray-200 via-gray-300 to-[#dc2626] lg:block"
          />

          <div className="space-y-6 lg:space-y-0">
            {STEPS.map(({ icon: Icon, step, title, desc, detail }, i) => (
              <div
                key={step}
                className={`relative lg:flex lg:items-center lg:gap-12 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } ${i > 0 ? "lg:mt-[-1px]" : ""}`}
              >
                {/* Timeline node (desktop) */}
                <div className="absolute left-1/2 top-8 z-10 hidden -translate-x-1/2 lg:flex">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-sans text-sm font-black shadow-md ${
                      i === STEPS.length - 1
                        ? "bg-[#dc2626] text-white ring-4 ring-red-100"
                        : "bg-[#0d2240] text-white ring-4 ring-gray-100"
                    }`}
                  >
                    {step}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`lg:w-[calc(50%-3rem)] ${
                    i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div
                    className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md ${
                      i % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    } lg:max-w-md`}
                  >
                    {/* Mobile step + icon */}
                    <div
                      className={`flex items-center gap-3 ${
                        i % 2 === 0 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl lg:hidden ${
                          i === STEPS.length - 1
                            ? "bg-[#dc2626] text-white"
                            : "bg-[#0d2240] text-white"
                        }`}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <div
                        className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl lg:flex ${
                          i === STEPS.length - 1
                            ? "bg-red-50 text-[#dc2626]"
                            : "bg-gray-100 text-[#0d2240]"
                        }`}
                      >
                        <Icon size={18} strokeWidth={2} />
                      </div>
                      <h3 className="font-sans text-lg font-bold text-gray-900">
                        {title}
                      </h3>
                    </div>

                    <p
                      className={`mt-3 text-sm leading-relaxed text-gray-600 ${
                        i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      {desc}
                    </p>

                    <p
                      className={`mt-3 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-[#dc2626] ${
                        i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      {detail}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
