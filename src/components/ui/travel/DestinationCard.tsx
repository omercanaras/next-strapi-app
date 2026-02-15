// components/ui/travel/DestinationCard.tsx

"use client";

import { motion } from "framer-motion";
import { Destination } from "@/data/destinations";

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="snap-center min-w-[60vw] md:min-w-[50vw] lg:min-w-[45vw] h-[65vh] relative group"
    >
      {/* Card with full background image */}
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        
        {/* Background Image */}
        <img 
          src={destination.image}
          alt={destination.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 p-10 md:p-12 flex flex-col justify-between">
          
          {/* Top section */}
          <div className="flex items-start justify-between">
            <span 
              className="text-[11px] uppercase tracking-[0.3em] text-white/50"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              0{destination.num} — {destination.location}
            </span>
            
            {/* Arrow icon */}
            <svg 
              className="w-5 h-5 text-white/0 group-hover:text-white/80 transition-all duration-500 -translate-x-2 group-hover:translate-x-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>

          {/* Bottom section */}
          <div>
            {/* Year */}
            <span 
              className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-3 block"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              {destination.year}
            </span>

            {/* Title */}
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl text-white mb-4 leading-tight"
              style={{
                fontFamily: '"Archivo Black", sans-serif',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}
            >
              {destination.title}
            </h2>

            {/* Description */}
            <p 
              className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mb-6"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 300,
                lineHeight: '1.7'
              }}
            >
              {destination.desc}
            </p>

            {/* CTA */}
            <span 
              className="text-[11px] uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors duration-500 cursor-pointer flex items-center gap-2"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              View Gallery
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle glow on hover */}
      <div className="absolute -inset-4 bg-black/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
}