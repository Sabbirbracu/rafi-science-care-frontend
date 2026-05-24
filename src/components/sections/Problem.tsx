import { AlertTriangle, TrendingDown, MoveRight } from "lucide-react";

const PAIN_STEPS = [
  {
    step: "01",
    title: "Chapter শেষ হয় না",
    desc: "Cadet College-এর routine-এ Biology-র ১২টা Chapter-এর মধ্যে ৪-৫টা ঠিকমতো পড়াই হয় না।",
    topic: "Cell Division · Genetics · Ecology",
  },
  {
    step: "02",
    title: "বুঝে পড়া হয় না",
    desc: "সময়ের অভাবে মুখস্থ করো — কিন্তু Exam Hall-এ গিয়ে সব গুলিয়ে যায়।",
    topic: "Physiology · Biochemistry",
  },
  {
    step: "03",
    title: "MCQ-তে marks কাটা যায়",
    desc: "একটু confusion থাকলেই ভুল option-এ tick পড়ে। Negative marking-এ grade নামে।",
    topic: "OMR-based Exam Pattern",
  },
  {
    step: "04",
    title: "A+ হাতছাড়া হয়",
    desc: "Biology-তে ভালো না করলে HSC-র overall result-এ impact পড়ে — Medical admission দূরে সরে যায়।",
    topic: "HSC Final · Medical Admission",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5">
            <AlertTriangle size={14} className="text-[#dc2626]" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wide text-red-700">
              সমস্যাটা কোথায়?
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-[44px] md:leading-[1.15]">
            Cadet College-এ পড়ো, তবু HSC Biology নিয়ে{" "}
            <span className="text-[#dc2626]">ভয় লাগে?</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            তুমি একা না। Cadet-দের routine এতটাই packed যে Biology-র গুরুত্বপূর্ণ
            Chapter গুলো properly cover হয় না। আর এই gap টা HSC-তে গিয়ে বড়
            সমস্যা হয়ে দাঁড়ায়।
          </p>
        </div>

        {/* Pain cards — 4 columns on desktop, 1 on mobile, with flow arrows */}
        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-0">
          {PAIN_STEPS.map((point, i) => (
            <div key={point.step} className="contents">
              {/* Card */}
              <div
                className={`flex flex-col rounded-2xl border p-5 sm:p-6 ${
                  i === PAIN_STEPS.length - 1
                    ? "border-red-200 bg-red-50/60"
                    : "border-gray-200 bg-gray-50/50"
                }`}
              >
                {/* Step badge */}
                <div
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-xl font-sans text-xs font-black ${
                    i === PAIN_STEPS.length - 1
                      ? "bg-[#dc2626] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {point.step}
                </div>

                <h3 className="mt-4 font-sans text-base font-bold text-gray-900 sm:text-lg">
                  {point.title}
                </h3>

                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-600 sm:text-sm">
                  {point.desc}
                </p>

                <p
                  className={`mt-4 border-t pt-3 font-sans text-[10px] font-bold uppercase tracking-[0.12em] ${
                    i === PAIN_STEPS.length - 1
                      ? "border-red-200 text-[#dc2626]"
                      : "border-gray-200 text-gray-400"
                  }`}
                >
                  {point.topic}
                </p>
              </div>

              {/* Flow arrow between cards (desktop only) */}
              {i < PAIN_STEPS.length - 1 && (
                <div className="hidden items-center justify-center px-3 lg:flex">
                  <MoveRight size={20} className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Consequence + Bridge */}
        <div className="mx-auto mt-14 max-w-2xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-red-100 bg-red-50 px-5 py-3">
            <TrendingDown size={16} className="text-[#dc2626]" />
            <p className="font-bengali text-sm text-gray-700">
              প্রতি বছর এই gap-এর কারণে অনেক talented Cadet-এর Biology-তে{" "}
              <span className="font-bold text-[#dc2626]">A+ miss</span> হয়।
            </p>
          </div>

          <p className="mt-8 text-base text-gray-500 sm:text-lg">
            কিন্তু যদি কেউ তোমাকে{" "}
            <span className="font-semibold text-gray-900">
              ঠিক যেভাবে দরকার সেভাবে
            </span>{" "}
            Biology শেখায়?
          </p>
        </div>
      </div>
    </section>
  );
}
