"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EventsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text = "EVENTS";

  useGSAP(
    () => {
      // Wave animation on scroll
      gsap.fromTo(
        ".event-char",
        {
          x: (i) => 250 + i * 60, // Start shifted to the right, staggered
          y: (i) => Math.sin(i * 1.2) * 120, // Wave offset in vertical axis
          opacity: 0,
          scale: 0.6,
          rotate: (i) => 35 + i * 10,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2, // Smooth follow-through
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full text-white"
      style={{
        background: "linear-gradient(135deg, #07162c 0%, #0e2954 35%, #1f5194 70%, #60a5fa 100%)",
        height: "220vh", // Height to enable scrolling interaction
      }}
    >
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Sticky Screen View */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Main Header with Split Characters */}
        <h1 className="event-title text-[70px] md:text-[106px] font-bold tracking-tight font-absans flex gap-2 md:gap-4 select-none justify-center">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="event-char inline-block transform-gpu text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Dynamic Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 text-[10px] tracking-[0.2em] text-blue-200">
          <span>SCROLL DOWN TO REVEAL</span>
          <div className="w-[2px] h-10 rounded-full bg-white/10 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full h-1/2 bg-blue-400 rounded-full"
              style={{
                animation: "scrollAnim 2s infinite ease-in-out"
              }}
            />
          </div>
        </div>
      </div>

      {/* Embedded CSS for smooth keyframes helper */}
      <style jsx global>{`
        @keyframes scrollAnim {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </div>
  );
}
