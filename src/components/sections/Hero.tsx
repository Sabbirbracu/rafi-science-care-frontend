import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white">
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-200/40 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-28 lg:pb-32">
        {/* Tag pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur sm:text-sm">
          <Sparkles size={14} />
          Trusted science partner since day one
        </div>

        {/* Heading */}
        <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Care backed by{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
            real science
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Rafi Science Care brings evidence-based products and personalized
          guidance together so you can feel confident about every choice you
          make for your health.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/signup"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg sm:w-auto"
          >
            Get Started
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/about"
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
          >
            Learn More
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-10 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-gray-100 pt-6 text-center sm:mt-14 sm:gap-8 sm:pt-8">
          <div>
            <p className="text-2xl font-bold text-gray-900 sm:text-3xl">10k+</p>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Happy customers
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 sm:text-3xl">99%</p>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Satisfaction rate
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900 sm:text-3xl">24/7</p>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Expert support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
