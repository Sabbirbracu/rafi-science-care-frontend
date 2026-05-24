import { FileCheck2, Upload, Clock, CheckCircle2 } from "lucide-react";

const EXAMS = [
  {
    id: 1,
    title: "Chapter 1-3 — Cell Biology & Division",
    date: "June 8, 2026",
    duration: "45 min",
    questions: 40,
    status: "completed" as const,
    score: "32/40",
  },
  {
    id: 2,
    title: "Chapter 5 — Genetics MCQ",
    date: "June 15, 2026",
    duration: "30 min",
    questions: 30,
    status: "available" as const,
    score: null,
  },
  {
    id: 3,
    title: "Chapter 7 — Physiology Full Test",
    date: "June 22, 2026",
    duration: "60 min",
    questions: 50,
    status: "locked" as const,
    score: null,
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-green-700">
        <CheckCircle2 size={10} />
        Completed
      </span>
    );
  }
  if (status === "available") {
    return (
      <span className="rounded-full bg-[#dc2626]/10 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-[#dc2626]">
        Available Now
      </span>
    );
  }
  return (
    <span className="rounded-full bg-gray-100 px-2.5 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-gray-500">
      Locked
    </span>
  );
}

export default function ExamsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-sans text-2xl font-bold text-gray-900">Exams</h1>
        <p className="mt-1 text-sm text-gray-500">
          Real HSC Pattern-এ OMR Exam দাও — তোমার OMR Sheet Upload করো
        </p>
      </div>

      {/* Exam list */}
      <div className="space-y-4">
        {EXAMS.map((exam) => (
          <div
            key={exam.id}
            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  exam.status === "completed"
                    ? "bg-green-50 text-green-700"
                    : "bg-[#0d2240]/[0.06] text-[#0d2240]"
                }`}
              >
                <FileCheck2 size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="font-sans text-base font-bold text-gray-900">
                  {exam.title}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {exam.duration}
                  </span>
                  <span>{exam.questions} Questions</span>
                  <span>{exam.date}</span>
                </div>
                {exam.score && (
                  <p className="mt-1 font-sans text-sm font-semibold text-green-700">
                    Score: {exam.score}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <StatusBadge status={exam.status} />
              {exam.status === "available" && (
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#dc2626] px-4 py-2.5 font-sans text-sm font-semibold text-white transition hover:bg-[#b91c1c]"
                >
                  <Upload size={14} />
                  Upload OMR
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
