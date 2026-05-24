import Link from "next/link";
import { GraduationCap, Mail, Phone } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.58A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.12c1.9.58 9.4.58 9.4.58s7.5 0 9.4-.58a3 3 0 0 0 2.1-2.12C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.6 15.6V8.4l6.27 3.6L9.6 15.6z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#082817] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#fdba74]">
                <GraduationCap size={22} strokeWidth={2.25} />
              </div>
              <div className="leading-tight">
                <p className="font-sans text-base font-bold">
                  Rafi&apos;s Science Care
                </p>
                <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#fdba74]">
                  Cadet HSC Batch 2026
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Dr. Rafi-র নিজস্ব Education Platform — যেখানে Science-কে ভয় নয়,
              ভালোবাসতে শেখানো হয়।
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 transition hover:bg-[#f97316] hover:text-white"
              >
                <FacebookIcon size={18} />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/80 transition hover:bg-[#f97316] hover:text-white"
              >
                <YoutubeIcon size={18} />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-[#fdba74]">
              Course
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="#solution" className="hover:text-white">
                  About Course
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-[#fdba74]">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#fdba74]" />
                <span className="font-sans">+880 1XXX XXXXXX</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#fdba74]" />
                <span className="font-sans">support@rafisciencecare.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="font-sans text-xs text-white/50">
            © {new Date().getFullYear()} Rafi&apos;s Science Care. All rights
            reserved.
          </p>
          <p className="font-sans text-xs text-white/50">
            Secure payments by SSLCommerz
          </p>
        </div>
      </div>
    </footer>
  );
}
