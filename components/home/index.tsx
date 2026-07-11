"use client";

import MascotCanvas from "./MascotCanvas";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const OPPORTUNITIES = [
  {
    title: "competitions",
    bgColor: "bg-[#7aa2f7]", // Blue
    textColor: "text-[#0a1e3f]",
    lineColor: "border-[#0a1e3f]/25",
    badge: (
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#ffc3a0] rounded-full flex items-center justify-center rotate-12 shadow-md border border-white/20 text-xl">
        🚀
      </div>
    ),
    items: [
      "Hackathons",
      "Coding Sprints",
      "CTF Challenges",
      "Design Battles"
    ],
    transformClasses: "rotate-[-4deg] -translate-x-[10px] -translate-y-[8px] z-10 lg:group-hover:-translate-x-[380px] lg:group-hover:-translate-y-[180px] lg:group-hover:rotate-[-6deg] md:group-hover:-translate-x-[180px] md:group-hover:-translate-y-[260px] md:group-hover:rotate-[-4deg] group-hover:-translate-y-[450px] group-hover:rotate-[-2deg]"
  },
  {
    title: "networking",
    bgColor: "bg-[#ff7b54]", // Orange
    textColor: "text-[#1c0f0a]",
    lineColor: "border-[#1c0f0a]/25",
    badge: (
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#c3bef7] rounded-full flex items-center justify-center -rotate-12 shadow-md border border-white/20">
        <svg className="w-6 h-6 text-[#1c0f0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    items: [
      "Industry Leaders",
      "Mentors & Judges",
      "Tech Recruiters",
      "Global Peers"
    ],
    transformClasses: "rotate-[3deg] translate-x-[8px] -translate-y-[4px] z-20 lg:group-hover:translate-x-0 lg:group-hover:-translate-y-[180px] lg:group-hover:rotate-[2deg] md:group-hover:translate-x-[180px] md:group-hover:-translate-y-[260px] md:group-hover:rotate-[3deg] group-hover:-translate-y-[270px] group-hover:rotate-[2deg]"
  },
  {
    title: "video & media",
    bgColor: "bg-[#881337]", // Maroon/Rose
    textColor: "text-white",
    lineColor: "border-white/25",
    badge: (
      <div className="absolute -top-4 -right-4 w-14 h-10 bg-[#fef08a] rounded-xl flex items-center justify-center rotate-6 shadow-md border border-white/20 text-[#881337] font-bold text-xs uppercase tracking-wider">
        live
      </div>
    ),
    items: [
      "Campaign Video",
      "Branded Content",
      "Social Highlights",
      "Marketing Materials"
    ],
    transformClasses: "rotate-[-1deg] -translate-x-[4px] translate-y-[6px] z-30 lg:group-hover:translate-x-[380px] lg:group-hover:-translate-y-[180px] lg:group-hover:rotate-[4deg] md:group-hover:-translate-x-[180px] md:group-hover:translate-y-0 md:group-hover:rotate-[-1deg] group-hover:-translate-y-[90px] group-hover:rotate-[-3deg]"
  },
  {
    title: "workshops",
    bgColor: "bg-[#2dd4bf]", // Teal
    textColor: "text-[#022c22]",
    lineColor: "border-[#022c22]/25",
    badge: (
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#ffedd5] rounded-full flex items-center justify-center rotate-12 shadow-md border border-white/20 text-xl">
        💡
      </div>
    ),
    items: [
      "Hands-on AI Labs",
      "Web3 & Solidity",
      "UI/UX Masterclass",
      "Cloud Computing"
    ],
    transformClasses: "rotate-[5deg] translate-x-[12px] translate-y-[2px] z-40 lg:group-hover:-translate-x-[380px] lg:group-hover:translate-y-[180px] lg:group-hover:rotate-[3deg] md:group-hover:translate-x-[180px] md:group-hover:translate-y-0 md:group-hover:rotate-[4deg] group-hover:translate-y-[90px] group-hover:rotate-[1deg]"
  },
  {
    title: "rewards",
    bgColor: "bg-[#fbbf24]", // Yellow
    textColor: "text-[#451a03]",
    lineColor: "border-[#451a03]/25",
    badge: (
      <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#86efac] rounded-full flex items-center justify-center -rotate-6 shadow-md border border-white/20 text-xl">
        🏆
      </div>
    ),
    items: [
      "Huge Cash Prizes",
      "Exclusive Merch",
      "Official Credentials",
      "Sponsor Goodies"
    ],
    transformClasses: "rotate-[-3deg] -translate-x-[6px] translate-y-[10px] z-50 lg:group-hover:translate-x-0 lg:group-hover:translate-y-[180px] lg:group-hover:rotate-[-2deg] md:group-hover:-translate-x-[180px] md:group-hover:translate-y-[260px] md:group-hover:rotate-[-2deg] group-hover:translate-y-[270px] group-hover:rotate-[3deg]"
  },
  {
    title: "career growth",
    bgColor: "bg-[#a78bfa]", // Purple
    textColor: "text-[#1e1b4b]",
    lineColor: "border-[#1e1b4b]/25",
    badge: (
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#bfdbfe] rounded-full flex items-center justify-center rotate-45 shadow-md border border-white/20 text-xl">
        💼
      </div>
    ),
    items: [
      "Internship Leads",
      "Resume Reviews",
      "Job Matchmaking",
      "Recruiter Connect"
    ],
    transformClasses: "rotate-[1deg] translate-x-[2px] -translate-y-[12px] z-60 lg:group-hover:translate-x-[380px] lg:group-hover:translate-y-[180px] lg:group-hover:rotate-[6deg] md:group-hover:translate-x-[180px] md:group-hover:translate-y-[260px] md:group-hover:rotate-[5deg] group-hover:translate-y-[450px] group-hover:rotate-[-1deg]"
  }
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasParentRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Entrance animation for the mascot canvas
    gsap.fromTo(
      canvasParentRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    // Entrance animation for the background giant text
    gsap.fromTo(
      bgTextRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power3.out", delay: 0.2 }
    );
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef}
      className="relative w-full flex flex-col items-center overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg, #07162c 0%, #0e2954 35%, #1f5194 70%, #60a5fa 100%)",
      }}
    >
      {/* Hero Section with Mascot */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Giant Text */}
        <div 
          ref={bgTextRef}
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0"
        >
          <h1 className="text-[16vw] md:text-[20vw] font-black tracking-widest font-mirava-sans bg-gradient-to-b from-white/90 to-white/10 bg-clip-text text-transparent uppercase text-center leading-none">
            GENESIS 6.0
          </h1>
        </div>

        {/* Center 3D Mascot Canvas Wrapper */}
        <div 
          ref={canvasParentRef}
          className="w-full max-w-[800px] aspect-square flex items-center justify-center relative z-10"
        >
          <MascotCanvas />
        </div>
      </div>

      {/* Opportunities Section */}
      <section className="opportunities-section w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 flex flex-col items-center text-white">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16 md:mb-24">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest text-blue-400 mb-3">
            Opportunities for Participants
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-mirava-sans bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent mb-6">
            Why participate in Genesis 5.0?
          </h2>
          <p className="text-lg md:text-xl text-blue-100/80 font-light leading-relaxed">
            Genesis 5.0 promises a wonderful experience to the participants.
          </p>
        </div>

        {/* Opportunities Stack Container (Stash) */}
        <div className="relative w-full min-h-[1100px] md:min-h-[820px] lg:min-h-[660px] flex items-center justify-center mt-12 group select-none">
          {/* Hover helper text */}
          <div className="absolute top-0 text-blue-300/40 text-sm font-semibold tracking-wider uppercase animate-pulse group-hover:opacity-0 transition-opacity duration-500 pointer-events-none">
            ✦ Hover to reveal opportunities ✦
          </div>

          {/* Cards Wrapper */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {OPPORTUNITIES.map((opp, idx) => (
              <div
                key={idx}
                className={`opportunity-card w-[340px] h-[280px] p-6 md:p-8 rounded-[32px] ${opp.bgColor} ${opp.textColor} transition-all duration-700 flex flex-col shadow-2xl pointer-events-auto absolute ${opp.transformClasses}`}
                style={{
                  transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
                }}
              >
                {/* Sticker Badge */}
                {opp.badge}
                
                {/* Card Title (lowercase) */}
                <h3 className="text-3xl md:text-4xl font-black font-sans tracking-tight mb-2 lowercase leading-none">
                  {opp.title}
                </h3>
                
                {/* Divider Line */}
                <div className={`w-full border-t-2 ${opp.lineColor} my-5`} />
                
                {/* Bullet points with diamonds */}
                <ul className="space-y-4 font-sans font-bold text-base md:text-lg flex flex-col items-start leading-snug">
                  {opp.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <span className="text-xl leading-none">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
