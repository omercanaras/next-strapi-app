// components/sections/travel/TravelSection.tsx

"use client";

import { useState, useEffect, useCallback } from "react";
import { destinations } from "@/data/destinations";

export function TravelSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  return (
    <section 
      className="h-screen relative overflow-hidden bg-black"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {destinations.map((destination, index) => (
        <div
          key={destination.num}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
            style={{ objectPosition: "50% 50%" }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-24 left-8 md:left-16 z-20 max-w-xl">
            <span
              className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-4 block"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              {destination.location} — {destination.year}
            </span>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight"
              style={{
                fontFamily: '"Archivo Black", sans-serif',
                fontWeight: 400,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              {destination.title}
            </h2>

            <p
              className="text-white/60 text-sm md:text-base max-w-md"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 300,
                lineHeight: "1.7",
              }}
            >
              {destination.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white/50 hover:bg-white/10 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bullet Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}