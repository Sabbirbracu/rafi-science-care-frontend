import { Radio, Video, ClipboardList, MonitorSmartphone } from "lucide-react";

const FEATURES = [
  {
    emoji: "📡",
    icon: Radio,
    title: "Live Class",
    subtitle: "Weekly Live Classes",
    desc: "Dr. Rafi সরাসরি পড়াবেন। প্রশ্ন করতে পারবে, Doubt Clear করতে পারবে। Class Miss হলে? Recording দেখে নাও।",
    accent: "from-[#1a6b3c] to-[#114829]",
  },
  {
    emoji: "🎥",
    icon: Video,
    title: "Recorded Lectures",
    subtitle: "সব Class-এর Recording",
    desc: "Live Class-এর পর সব Recording Platform-এ Upload হয়ে যাবে। যখন খুশি, যতবার খুশি দেখো।",
    accent: "from-[#f97316] to-[#ea580c]",
  },
  {
    emoji: "📝",
    icon: ClipboardList,
    title: "OMR Exam",
    subtitle: "Real HSC Style OMR Exam",
    desc: "Actual HSC-র মতো OMR Sheet-এ Exam দাও। Submit করো। Result পাও। নিজের Weak Point বের করো।",
    accent: "from-[#1a6b3c] to-[#114829]",
  },
  {
    emoji: "💻",
    icon: MonitorSmartphone,
    title: "Dedicated Platform",
    subtitle: "নিজস্ব Online Platform",
    desc: "সব কিছু এক জায়গায় — Class, Recording, Exam, Result। আলাদা কোনো App লাগবে না।",
    accent: "from-[#f97316] to-[#ea580c]",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#f97316]">
            What&apos;s Inside
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            এই Course-এ কী কী{" "}
            <span className="text-[#1a6b3c]">পাচ্ছো?</span>
          </h2>
          <p className="mt-5 text-base text-gray-600 sm:text-lg">
            Live থেকে Recorded, Exam থেকে Result — সম্পূর্ণ Package।
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {FEATURES.map(({ emoji, icon: Icon, title, subtitle, desc, accent }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              {/* corner glow */}
              <div
                aria-hidden
                className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${accent} opacity-10 blur-2xl transition group-hover:opacity-20`}
              />

              <div className="flex items-start gap-4">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-md`}
                >
                  <Icon size={26} strokeWidth={2.25} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{emoji}</span>
                    <h3 className="font-sans text-xl font-bold text-gray-900 sm:text-2xl">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-1 font-sans text-sm font-semibold text-[#1a6b3c]">
                    {subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-gray-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
