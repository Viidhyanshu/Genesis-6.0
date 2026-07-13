"use client";

import React from "react";
import { usePathname } from "next/navigation";

// ─── Font helper ──────────────────────────────────────────────────────────────
const FONT: React.CSSProperties = {
  fontFamily: "var(--font-mirava-sans)",
};

const LOOP_LOGOS = [
  // 1. Clerk
  (
    <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current opacity-60 hover:opacity-100 transition-opacity duration-300">
      <path d="M50 15 L20 75 L50 75 Z" fill="currentColor" />
      <path d="M50 15 L80 75 L50 75" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // 2. Supabase
  (
    <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current opacity-60 hover:opacity-100 transition-opacity duration-300">
      <path d="M50 10L20 50h25L35 90l45-50H55L65 10z" />
    </svg>
  ),
  // 3. Storybook S
  (
    <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-60 hover:opacity-100 transition-opacity duration-300">
      <text x="50" y="80" fill="currentColor" fontSize="84" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" transform="skewX(-10)">S</text>
    </svg>
  ),
  // 4. React
  (
    <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-60 hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" strokeWidth="6">
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(0 50 50)" />
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(60 50 50)" />
      <ellipse cx="50" cy="50" rx="40" ry="15" transform="rotate(120 50 50)" />
      <circle cx="50" cy="50" r="7" fill="currentColor" stroke="none" />
    </svg>
  ),
  // 5. Next.js
  (
    <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current opacity-60 hover:opacity-100 transition-opacity duration-300">
      <defs>
        <mask id="nextjs-mask-loop-comp">
          <rect x="0" y="0" width="100" height="100" fill="white" />
          <path d="M35 70V30l28 35V30" stroke="black" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M60 30L38 64" stroke="black" strokeWidth="8" strokeLinecap="round" fill="none" />
        </mask>
      </defs>
      <circle cx="50" cy="50" r="46" fill="currentColor" mask="url(#nextjs-mask-loop-comp)" />
    </svg>
  ),
  // 6. TypeScript
  (
    <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-60 hover:opacity-100 transition-opacity duration-300">
      <rect x="5" y="5" width="90" height="90" rx="10" fill="currentColor" />
      <text x="48" y="78" fill="#07162c" fontSize="42" fontWeight="bold" fontFamily="sans-serif">TS</text>
    </svg>
  )
];

const LogoRow = () => (
  <div className="flex items-center gap-20 sm:gap-28 shrink-0">
    {LOOP_LOGOS.map((logo, index) => (
      <div key={index} className="flex items-center justify-center">
        {logo}
      </div>
    ))}
  </div>
);

export default function LogoMarquee() {
  const pathname = usePathname();

  // Hide on gallery view to match footer consistency
  if (pathname === "/gallery") return null;

  return (
    <div className="w-full bg-transparent py-6 mb-16 relative overflow-hidden select-none border-t border-b border-white/5 z-10">
      <style>{`
        @keyframes marquee-comp {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-container-comp {
          display: flex;
          animation: marquee-comp 25s linear infinite;
        }
        .animate-marquee-container-comp:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Fade overlays on edges */}
      <div 
        className="w-full overflow-hidden relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, white 15%, white 85%, transparent)"
        }}
      >
        <div className="flex w-max gap-20 sm:gap-28 animate-marquee-container-comp">
          <LogoRow />
          <LogoRow />
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </div>
  );
}
