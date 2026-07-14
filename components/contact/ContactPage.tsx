"use client";

import React from "react";
import dynamic from "next/dynamic";

// Sleek fallback component that matches MascotCanvas aspect ratios and UI to prevent layout shifts (CLS)
function MascotFallback() {
  return (
    <div className="relative w-full h-full min-h-[350px] sm:min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center select-none">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-t-white border-r-neutral-600 border-b-neutral-800 border-l-transparent animate-spin duration-700" />
        <div className="absolute w-12 h-12 rounded-full border border-white/5 animate-ping duration-1000" />
        <div className="absolute w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
      </div>
      <span className="mt-6 font-sans font-medium text-neutral-400 tracking-widest text-[10px] uppercase animate-pulse">
        Initializing 3D Space...
      </span>
    </div>
  );
}

// Lazy load the heavy 3D canvas so it does not block the initial page load
const MascotCanvas = dynamic(() => import("../home/MascotCanvas"), {
  ssr: false,
  loading: () => <MascotFallback />,
});

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full bg-transparent overflow-x-hidden pt-28 pb-20 px-6 md:px-12 flex flex-col items-center">
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="w-full max-w-7xl flex flex-col gap-16 md:gap-24 relative z-10">
        
        {/* Section 1: Hero Header */}
        <div className="w-full text-center md:text-left max-w-4xl mx-auto md:mx-0">
          <h1 className="text-[40px] sm:text-[54px] md:text-[76px] font-black tracking-tight font-mirava-sans bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent leading-[1.1] mb-6">
            How can we help you?
          </h1>
          <p className="text-lg sm:text-xl md:text-[22px] text-blue-100/80 font-light leading-relaxed font-sans max-w-3xl">
            At IEEE Genesis, we prioritize the experience! Whether you have questions, need assistance, or simply want to connect, don't hesitate to reach out. Join us at IEEE's biggest technical fest at Manipal University Jaipur, featuring a variety of events from fun activities to coding challenges.
          </p>
        </div>

        {/* Section 2: Quick Contacts & Mascot Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Quick Contacts and Address info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-extrabold font-mirava-sans text-white tracking-tight">
                Get In Touch
              </h2>
              <p className="text-blue-100/70 text-base leading-relaxed font-sans">
                Have questions about registration, event timelines, sponsorships, or general inquiries? Our team is here to assist you at every step.
              </p>

              {/* Quick info list */}
              <div className="flex flex-col gap-5 mt-4">
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-blue-400 font-absans">Email Us</h4>
                    <a href="mailto:support@ieeemuj.com" className="text-white hover:text-blue-300 transition-colors text-base font-semibold font-sans mt-0.5 block">
                      support@ieeemuj.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-blue-400 font-absans">Location</h4>
                    <p className="text-white text-base font-semibold font-sans mt-0.5 leading-snug">
                      Manipal University Jaipur,<br />
                      Dahmi Kalan, Jaipur-Ajmer Express Highway,<br />
                      Rajasthan, 303007
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: 3D Mascot Canvas */}
          <div className="lg:col-span-7 flex items-center justify-center relative w-full aspect-square max-w-[500px] sm:max-w-[650px] mx-auto z-10">
            {/* Soft decorative glow behind the mascot */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
            <MascotCanvas />
          </div>

        </div>

        {/* Section 3: Reaching MUJ Map Section */}
        <div className="w-full flex flex-col gap-6 md:gap-8">
          <h2 className="text-2xl md:text-[34px] font-extrabold tracking-tight font-mirava-sans text-white text-center md:text-left">
            Reaching Manipal University Jaipur
          </h2>
          
          {/* Map Frame Card Container */}
          <div className="w-full p-2 rounded-[24px] bg-[#07162c]/50 border border-white/10 shadow-2xl overflow-hidden hover:border-white/15 transition-all duration-300 group">
            <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px] rounded-[18px] overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1060679493976!2d75.56126607567709!3d26.83660507669408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05b7b9f%3A0x63fd9831c1940d5b!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1710500000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-85 transition-all duration-300"
              />
              {/* Corner map detail badge */}
              <div className="absolute top-8 left-8 p-6 rounded-2xl bg-[#0b1320] border border-white/10 shadow-2xl flex flex-col max-w-[280px] pointer-events-none select-none">
                <span className="text-[11px] uppercase font-bold text-sky-400 tracking-wider">Venue Location</span>
                <span className="text-lg font-bold text-white mt-1 mb-2">Manipal University Jaipur</span>
                <span className="text-[13px] text-slate-300 leading-relaxed font-sans">
                  Dahmi Kalan, Jaipur-Ajmer Expressway,<br />
                  Rajasthan 303007
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Transportation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full mt-2">
          
          {/* Card 1: By Train */}
          <div className="relative group p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:border-white/15 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between" style={{ minHeight: "260px" }}>
            <div className="absolute -top-6 left-6 w-14 h-14 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/20">
              <svg className="w-7 h-7 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c3.08 0 5.5 1.64 5.5 4v10.5c0 1.38-1.12 2.5-2.5 2.5H9c-1.38 0-2.5-1.12-2.5-2.5V6C6.5 3.64 8.92 2 12 2zm3.5 4h-7v4h7V6zm-7 8c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm5 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zM9 16.5h6v1H9v-1z" />
              </svg>
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-bold font-mirava-sans text-white tracking-tight mb-3">
                By Train
              </h3>
              <p className="text-[15px] leading-relaxed font-sans text-blue-100/70">
                Book tickets from <span className="text-amber-400 font-semibold">IRCTC</span>: The campus is <span className="text-white font-semibold">25kms from Jaipur Railway Terminal</span> and auto fare is usually around <span className="text-white font-semibold">₹500-₹600</span>.
              </p>
            </div>
            {/* Subtle glow border effect */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-amber-400/20 transition-all duration-500 pointer-events-none" />
          </div>

          {/* Card 2: By Air */}
          <div className="relative group p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:border-white/15 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between" style={{ minHeight: "260px" }}>
            <div className="absolute -top-6 left-6 w-14 h-14 bg-gradient-to-tr from-pink-500 to-rose-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/20">
              <svg className="w-7 h-7 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L14 19v-5.5L21 16z" />
              </svg>
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-bold font-mirava-sans text-white tracking-tight mb-3">
                By Air
              </h3>
              <p className="text-[15px] leading-relaxed font-sans text-blue-100/70">
                Daily flights from <span className="text-rose-400 font-semibold">Delhi, Mumbai, Hyderabad, and Bangalore</span>. The campus is approximately <span className="text-white font-semibold">35kms from Jaipur International Airport</span>.
              </p>
            </div>
            {/* Subtle glow border effect */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-rose-400/20 transition-all duration-500 pointer-events-none" />
          </div>

          {/* Card 3: By Bus */}
          <div className="relative group p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl hover:-translate-y-2 hover:border-white/15 hover:bg-white/10 transition-all duration-500 flex flex-col justify-between" style={{ minHeight: "260px" }}>
            <div className="absolute -top-6 left-6 w-14 h-14 bg-gradient-to-tr from-orange-600 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/20">
              <svg className="w-7 h-7 text-slate-950" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 16c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h1c.55 0 1-.45 1-1V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm4-6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-9 4h10v2H7v-2z" />
              </svg>
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-bold font-mirava-sans text-white tracking-tight mb-3">
                By Bus
              </h3>
              <p className="text-[15px] leading-relaxed font-sans text-blue-100/70">
                Only suggested if you live around <span className="text-orange-400 font-semibold">8-10hrs</span> from Jaipur. <span className="text-white font-semibold">Sindhi Camp Bus Stand</span> is around 30km from the venue, auto fare is usually around <span className="text-white font-semibold">₹400-₹450</span>.
              </p>
            </div>
            {/* Subtle glow border effect */}
            <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-orange-500/20 transition-all duration-500 pointer-events-none" />
          </div>

        </div>

      </div>
    </div>
  );
}
