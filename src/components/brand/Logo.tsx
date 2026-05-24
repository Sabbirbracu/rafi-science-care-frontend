import Image from "next/image";

interface LogoProps {
  /** Mark image as priority (use only above-the-fold) */
  priority?: boolean;
  className?: string;
}

export default function Logo({
  priority = false,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo mark */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white p-1.5 ring-2 ring-white/25 shadow-md sm:h-14 sm:w-14">
        <div className="relative h-full w-full">
          <Image
            src="/logo.png"
            alt="Rafi's Science Care"
            fill
            sizes="56px"
            priority={priority}
            className="object-contain"
          />
        </div>
      </div>

      {/* Wordmark */}
      <div className="leading-none">
        <p
          className="font-sans text-lg tracking-tight text-white sm:text-xl"
          style={{ fontWeight: 900 }}
        >
          Dr. Rafi
          <sup
            className="ml-1 font-sans text-[10px] uppercase tracking-wider text-[#fbbf24] sm:text-[11px]"
            style={{ fontWeight: 900 }}
          >
            MBBS
          </sup>
        </p>
        <p
          className="mt-1.5 font-sans text-[11px] uppercase tracking-[0.22em] text-white/60 sm:text-xs"
          style={{ fontWeight: 800 }}
        >
          Rafi&apos;s Science Care
        </p>
      </div>
    </div>
  );
}
