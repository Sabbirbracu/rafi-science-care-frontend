import {
  Radio,
  Video,
  FileCheck2,
  BarChart3,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const QUICK_STATS = [
  {
    label: "Live Classes",
    value: "12",
    sub: "Total Sessions",
    icon: Radio,
    color: "bg-blue-50 text-[#0d2240]",
  },
  {
    label: "Recordings",
    value: "8",
    sub: "Available",
    icon: Video,
    color: "bg-red-50 text-[#dc2626]",
  },
  {
    label: "Exams Taken",
    value: "3",
    sub: "Out of 6",
    icon: FileCheck2,
    color: "bg-green-50 text-green-700",
  },
  {
    label: "Avg. Score",
    value: "78%",
    sub: "Last 3 Exams",
    icon: BarChart3,
    color: "bg-amber-50 text-amber-700",
  },
];

const UPCOMING_CLASSES = [
  {
    title: "Cell Division — Mitosis & Meiosis",
    date: "June 2, 2026",
    time: "8:00 PM",
    status: "upcoming",
  },
  {
    title: "Genetics — Mendel's Law",
    date: "June 5, 2026",
    time: "8:00 PM",
    status: "upcoming",
  },
  {
    title: "Physiology — Circulatory System",
    date: "June 9, 2026",
    time: "8:00 PM",
    status: "upcoming",
  },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#050d1c] via-[#0d2240] to-[#15355a] p-6 text-white sm:p-8">
        <div
          aria-hidden
          className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#dc2626]/15 blur-[80px]"
        />
        <div
          aria-hidden
          className="absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-[#1e5688]/30 blur-[60px]"
        />
        <div className="relative">
          <h1 className="font-sans text-2xl font-bold sm:text-3xl">
            স্বাগতম! 👋
          </h1>
          <p className="mt-2 max-w-lg text-sm text-white/70 sm:text-base">
            তোমার Cadet HSC Biology Crash Course চলছে। আজকের class-এ join করো
            এবং নিয়মিত practice চালিয়ে যাও।
          </p>
          <Link
            href="/dashboard/live"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#dc2626] px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-md shadow-[#dc2626]/25 transition hover:bg-[#b91c1c]"
          >
            Next Live Class
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {QUICK_STATS.map(({ label, value, sub, icon: Icon, color }) => (
          <div
            key={label}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div
              className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${color}`}
            >
              <Icon size={18} strokeWidth={2} />
            </div>
            <p className="mt-3 font-sans text-2xl font-bold text-gray-900">
              {value}
            </p>
            <p className="mt-0.5 font-sans text-sm font-medium text-gray-900">
              {label}
            </p>
            <p className="font-sans text-xs text-gray-500">{sub}</p>
          </div>
        ))}
      </div>

      {/* Upcoming classes */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
          <h2 className="font-sans text-base font-bold text-gray-900">
            Upcoming Classes
          </h2>
          <Link
            href="/dashboard/live"
            className="font-sans text-xs font-semibold text-[#dc2626] transition hover:text-[#b91c1c]"
          >
            View All →
          </Link>
        </div>
        <div className="divide-y divide-gray-100">
          {UPCOMING_CLASSES.map((cls) => (
            <div
              key={cls.title}
              className="flex items-center gap-4 px-6 py-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0d2240]/[0.06] text-[#0d2240]">
                <Radio size={18} strokeWidth={2} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate font-sans text-sm font-semibold text-gray-900">
                  {cls.title}
                </p>
                <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
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
              <span className="shrink-0 rounded-full bg-green-50 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-green-700">
                {cls.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
