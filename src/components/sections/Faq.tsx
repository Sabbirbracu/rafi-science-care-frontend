"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "আমি কি Cadet না হলেও Join করতে পারবো?",
    a: "এই Batch মূলত Cadet HSC Students-দের জন্য Design করা। তবে যেকোনো HSC Student Join করতে পারবে।",
  },
  {
    q: "Class Miss হলে কী হবে?",
    a: "প্রতিটি Live Class-এর Recording Platform-এ Upload হবে। যেকোনো সময় দেখতে পারবে।",
  },
  {
    q: "Payment কীভাবে করবো?",
    a: "SSLCommerz-এর মাধ্যমে Debit/Credit Card, Mobile Banking সব Option আছে।",
  },
  {
    q: "Platform কীভাবে Access করবো?",
    a: "Payment Complete হলে তোমার Account Activate হয়ে যাবে। Phone Number দিয়ে Login করো।",
  },
  {
    q: "Exam কি Compulsory?",
    a: "না। তবে Exam দিলে নিজের Preparation কোথায় আছে বুঝতে পারবে।",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1a6b3c]/20 bg-[#ecf7f0] px-3.5 py-1.5">
            <HelpCircle size={14} className="text-[#1a6b3c]" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wide text-[#114829]">
              FAQ
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            যেসব প্রশ্ন মাথায়{" "}
            <span className="text-[#1a6b3c]">আসতে পারে</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition ${
                  isOpen
                    ? "border-[#1a6b3c]/30 bg-[#ecf7f0]/40 shadow-md"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-bold text-gray-900 sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#1a6b3c] transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-relaxed text-gray-700 sm:px-6 sm:pb-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
