import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d2240] py-20 text-white sm:py-24 lg:py-28">
      {/* Background — matching hero */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050d1c] via-[#0d2240] to-[#15355a]" />
        <div className="absolute -top-24 left-1/3 h-[450px] w-[450px] rounded-full bg-[#1e5688]/20 blur-[120px]" />
        <div className="absolute -bottom-24 right-1/4 h-[400px] w-[400px] rounded-full bg-[#dc2626]/12 blur-[120px]" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
          <Zap size={14} className="text-[#dc2626]" />
          <span className="font-sans text-xs font-semibold uppercase tracking-wide text-white/80">
            শেষ সুযোগ
          </span>
        </div>

        <h2 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1]">
          আর দেরি করো না —{" "}
          <span className="bg-gradient-to-r from-[#fca5a5] to-[#dc2626] bg-clip-text text-transparent">এখনই শুরু করো।</span>
        </h2>

        <p className="mt-6 text-base text-white/70 sm:text-lg">
          June 1 থেকে Batch শুরু। একবার শুরু হলে নতুন করে Enroll-এর সুযোগ
          নাও থাকতে পারে। তোমার Seat এখনই confirm করো।
        </p>

        <div className="mt-10">
          <Link
            href="/enroll"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#dc2626] px-8 py-4 font-sans text-base font-bold text-white shadow-lg shadow-[#dc2626]/30 transition hover:bg-[#b91c1c] hover:shadow-xl hover:shadow-[#dc2626]/40 sm:text-lg"
          >
            <span>৳3,500 — এখনই Enroll করো</span>
            <ArrowRight
              size={20}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60 sm:flex-row">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-white/40" />
            <span className="font-sans">Secure Payment by SSLCommerz</span>
          </div>
          <span
            aria-hidden
            className="hidden h-1 w-1 rounded-full bg-white/30 sm:block"
          />
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-white/40" />
            <span className="font-sans">Instant Access after Payment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
