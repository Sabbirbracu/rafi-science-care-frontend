import { Video, Play, Clock } from "lucide-react";

const RECORDINGS = [
  {
    id: 1,
    title: "Introduction to Biology — Course Overview",
    duration: "1h 15m",
    date: "May 28, 2026",
    chapter: "Orientation",
  },
  {
    id: 2,
    title: "Cell Biology — Structure & Function",
    duration: "1h 30m",
    date: "May 30, 2026",
    chapter: "Chapter 1",
  },
  {
    id: 3,
    title: "Cell Division — Mitosis Basics",
    duration: "1h 20m",
    date: "June 1, 2026",
    chapter: "Chapter 3",
  },
];

export default function RecordingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-sans text-2xl font-bold text-gray-900">
          Recorded Lectures
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          সব Live Class-এর Recording — যখন খুশি দেখো
        </p>
      </div>

      {/* Recordings grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RECORDINGS.map((rec) => (
          <div
            key={rec.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            {/* Thumbnail placeholder */}
            <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-[#0d2240] to-[#15355a]">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition group-hover:bg-white/30 group-hover:scale-110">
                <Play size={24} fill="currentColor" />
              </div>
              <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-0.5 font-sans text-[11px] font-semibold text-white">
                {rec.duration}
              </span>
            </div>

            {/* Info */}
            <div className="p-4">
              <p className="font-sans text-xs font-semibold text-[#dc2626]">
                {rec.chapter}
              </p>
              <h3 className="mt-1 font-sans text-sm font-bold text-gray-900 line-clamp-2">
                {rec.title}
              </h3>
              <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                <Clock size={12} />
                <span>{rec.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
