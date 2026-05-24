import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#15355a] via-[#1e5688] to-[#0d2240] py-20 text-white sm:py-24 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(252,165,165,0.15),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur">
          <Zap size={14} className="text-[#fca5a5]" />
          <span className="font-sans text-xs font-semibold uppercase tracking-wide text-[#fca5a5]">
            Last Call
          </span>
        </div>

        <h2 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          আর দেরি না করে
          <br />
          <span className="bg-gradient-to-r from-[#fca5a5] to-[#dc2626] bg-clip-text text-transparent">
            এখনই শুরু করো।
          </span>
        </h2>

        <p className="mt-6 text-lg text-white/80 sm:text-xl">
          June 1 থেকে Batch শুরু হচ্ছে। Limited Seat।
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/enroll"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#dc2626] px-8 py-5 font-sans text-lg font-bold text-white shadow-2xl shadow-[#dc2626]/40 transition hover:bg-[#b91c1c] hover:shadow-[#dc2626]/60 sm:w-auto"
          >
            <span>৳3,500 — এখনই Enroll করো</span>
            <ArrowRight
              size={20}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70 sm:flex-row">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-[#fca5a5]" />
            <span className="font-sans">Secure Payment by SSLCommerz</span>
          </div>
          <span
            aria-hidden
            className="hidden h-1 w-1 rounded-full bg-white/40 sm:block"
          />
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-[#fca5a5]" />
            <span className="font-sans">Instant Access after Payment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
