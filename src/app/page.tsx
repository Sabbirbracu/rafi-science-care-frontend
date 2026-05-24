"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import EnrollModal from "@/components/auth/EnrollModal";

export default function Home() {
  const [enrollOpen, setEnrollOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero onEnroll={() => setEnrollOpen(true)} />
        <Problem />
        <Solution onEnroll={() => setEnrollOpen(true)} />
        <Features />
        <About />
        <Pricing onEnroll={() => setEnrollOpen(true)} />
        <Faq />
        <FinalCta onEnroll={() => setEnrollOpen(true)} />
      </main>
      <Footer />

      <EnrollModal
        isOpen={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        batchId={1}
      />
    </>
  );
}
