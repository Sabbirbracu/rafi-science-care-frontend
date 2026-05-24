import { BarChart3, TrendingUp, AlertTriangle } from "lucide-react";

const RESULTS = [
  {
    id: 1,
    exam: "Chapter 1-3 — Cell Biology & Division",
    score: 32,
    total: 40,
    percentage: 80,
    date: "June 8, 2026",
    weakTopics: ["Meiosis Phase II", "Cytokinesis"],
  },
  {
    id: 2,
    exam: "Chapter 5 — Genetics MCQ",
    score: 24,
    total: 30,
    percentage: 80,
    date: "June 15, 2026",
    weakTopics: ["Dihybrid Cross"],
  },
  {
    id: 3,
    exam: "Mid-Course Assessment",
    score: 38,
    total: 50,
    percentage: 76,
    date: "June 20, 2026",
    weakTopics: ["Physiology — Nervous System", "Ecology — Food Web"],
  },
];

export default function ResultsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-sans text-2xl font-bold text-gray-900">
          Results & Performance
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          তোমার Exam Results এবং Weak Topics দেখো
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-700">
            <TrendingUp size={18} />
          </div>
          <p className="mt-3 font-sans text-3xl font-bold text-gray-900">
            79%
          </p>
          <p className="mt-0.5 font-sans text-sm text-gray-500">
            Average Score
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0d2240]">
            <BarChart3 size={18} />
          </div>
          <p className="mt-3 font-sans text-3xl font-bold text-gray-900">3</p>
          <p className="mt-0.5 font-sans text-sm text-gray-500">
            Exams Completed
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#dc2626]">
            <AlertTriangle size={18} />
          </div>
          <p className="mt-3 font-sans text-3xl font-bold text-gray-900">4</p>
          <p className="mt-0.5 font-sans text-sm text-gray-500">
            Weak Topics
          </p>
        </div>
      </div>

      {/* Results list */}
      <div className="space-y-4">
        {RESULTS.map((result) => (
          <div
            key={result.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-sans text-base font-bold text-gray-900">
                  {result.exam}
                </p>
                <p className="mt-1 font-sans text-xs text-gray-500">
                  {result.date}
                </p>
              </div>
              <div className="text-right">
                <p className="font-sans text-2xl font-bold text-[#0d2240]">
                  {result.score}/{result.total}
                </p>
                <p className="font-sans text-sm font-semibold text-green-600">
                  {result.percentage}%
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0d2240] to-[#1e5688]"
                style={{ width: `${result.percentage}%` }}
              />
            </div>

            {/* Weak topics */}
            {result.weakTopics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {result.weakTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-lg bg-red-50 px-2.5 py-1 font-sans text-[11px] font-semibold text-[#dc2626]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
