import { LOGO_SRC } from "@/lib/site";

export function LogoMark({ className = "h-7 w-10" }: { className?: string }) {
  return (
    <span className={`flex items-center justify-center overflow-hidden rounded-lg bg-white ${className}`}>
      {/* Plain <img>: next/image optimisation is unavailable in static export. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={LOGO_SRC} alt="Virtudant AI logo" width={1800} height={1200} className="h-full w-full object-cover" />
    </span>
  );
}
