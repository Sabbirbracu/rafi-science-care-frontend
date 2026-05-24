import type { Metadata } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-bengali",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafi's Science Care — Cadet HSC Biology Crash Course 2026",
  description:
    "Dr. Rafi-র সাথে HSC Biology-তে A+ এর সবচেয়ে সেরা সুযোগ। Live Class, Recorded Lecture, OMR Exam — সব এক জায়গায়।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${inter.variable} ${hindSiliguri.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-bengali bg-white text-gray-900">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
