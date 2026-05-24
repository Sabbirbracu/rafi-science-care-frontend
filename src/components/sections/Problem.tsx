import { AlertTriangle } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: "🧬",
    title: "Cell Division",
    desc: "Mitosis, Meiosis — phase গুলো গুলিয়ে যায়।",
  },
  {
    icon: "🧪",
    title: "Genetics",
    desc: "Cross, Probability problem ঠিকমতো solve হয় না।",
  },
  {
    icon: "🫀",
    title: "Physiology",
    desc: "System গুলো মুখস্থ থাকলেও বুঝে পড়া হয় না।",
  },
  {
    icon: "📝",
    title: "MCQ Mistakes",
    desc: "একটু ভুলেই Grade নেমে যায়।",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1.5">
            <AlertTriangle size={14} className="text-red-600" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wide text-red-700">
              The Problem
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Cadet-এ পড়ো, তবু Biology নিয়ে{" "}
            <span className="text-red-600">টেনশন?</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
            Cadet College-এর পড়ার চাপে Biology-র অনেক Chapter ঠিকমতো শেষ হয় না।
            HSC-তে গিয়ে দেখা যায় — Cell Division, Genetics, Physiology — সব
            গুলিয়ে গেছে। আর MCQ-তে একটু ভুল হলেই Grade নেমে যায়।
          </p>
          <p className="mt-4 text-base font-semibold text-gray-900 sm:text-lg">
            তুমি একা না। প্রতি বছর শত শত Cadet Student এই সমস্যায় পড়ে।
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {PAIN_POINTS.map((point) => (
            <div
              key={point.title}
              className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-5 transition hover:border-red-200 hover:shadow-lg sm:p-6"
            >
              <div className="text-3xl sm:text-4xl">{point.icon}</div>
              <h3 className="mt-4 font-sans text-base font-bold text-gray-900 sm:text-lg">
                {point.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
