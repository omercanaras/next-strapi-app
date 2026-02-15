// components/sections/travel/TravelSection.tsx

"use client";

import { useRef } from "react";
import { destinations } from "@/data/destinations";
import { DestinationCard } from "@/components/ui/travel/DestinationCard";



export function TravelSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="h-screen flex items-center relative overflow-hidden bg-white">
      
      {/* Top line accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      {/* Section label */}
      <div className="absolute top-8 left-8 z-20">
        <span 
          className="text-[10px] uppercase tracking-[0.5em] text-black/30 flex items-center gap-3"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          <span className="w-8 h-[1px] bg-black/30" />
          Journeys
        </span>
      </div>

      {/* Left Button */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/60 to-transparent z-10 flex items-center justify-start pl-6">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-black/30 hover:bg-black/5 transition-all duration-300"
        >
          <svg className="w-4 h-4 text-black/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Right Button */}
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/60 to-transparent z-10 flex items-center justify-end pr-6">
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 border border-black/10 flex items-center justify-center hover:border-black/30 hover:bg-black/5 transition-all duration-300"
        >
          <svg className="w-4 h-4 text-black/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {destinations.map((_, index) => (
          <span 
            key={index}
            className={`w-8 h-[2px] rounded-full transition-all duration-300 ${
              index === 0 ? 'bg-black/60' : 'bg-black/20'
            }`}
          />
        ))}
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory w-full h-full items-center"
        style={{ paddingLeft: "8vw", paddingRight: "8vw" }}
      >
        {destinations.map((destination) => (
          <DestinationCard key={destination.num} destination={destination} />
        ))}
      </div>

      {/* Bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
    </section>
  );
}