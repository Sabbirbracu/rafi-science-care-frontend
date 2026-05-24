import { Radio, Calendar, Clock, ExternalLink } from "lucide-react";

const CLASSES = [
  {
    id: 1,
    title: "Cell Division — Mitosis & Meiosis",
    date: "June 2, 2026",
    time: "8:00 PM - 9:30 PM",
    status: "upcoming" as const,
    chapter: "Chapter 3",
  },
  {
    id: 2,
    title: "Genetics — Mendel's Law & Probability",
    date: "June 5, 2026",
    time: "8:00 PM - 9:30 PM",
    status: "upcoming" as const,
    chapter: "Chapter 5",
  },
  {
    id: 3,
    title: "Physiology — Circulatory System",
    date: "June 9, 2026",
    time: "8:00 PM - 9:30 PM",
    status: "upcoming" as const,
    chapter: "Chapter 7",
  },
  {
    id: 4,
    title: "Ecology — Ecosystem & Biodiversity",
    date: "June 12, 2026",
    time: "8:00 PM - 9:30 PM",
    status: "upcoming" as const,
    chapter: "Chapter 10",
  },
];

export default function LiveClassesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-sans text-2xl font-bold text-gray-900">
          Live Classes
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Dr. Rafi-র সাথে Weekly Live Class Schedule
        </p>
      </div>

      {/* Class list */}
      <div className="space-y-4">
        {CLASSES.map((cls) => (
          <div
            key={cls.id}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0d2240] text-white">
                <Radio size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="font-sans text-base font-bold text-gray-900">
                  {cls.title}
                </p>
                <p className="mt-0.5 font-sans text-xs font-semibold text-[#dc2626]">
                  {cls.chapter}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {cls.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {cls.time}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0d2240] px-5 py-2.5 font-sans text-sm font-semibold text-white transition hover:bg-[#15355a]"
            >
              Join Class
              <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
