"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="snap-center min-w-[60vw] md:min-w-[50vw] lg:min-w-[45vw] h-[65vh] relative group cursor-pointer"
      >
        {/* Card background with gradient border effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/[0.08] to-transparent p-[1px]">
          <div className="w-full h-full rounded-lg bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-black p-10 md:p-12 flex flex-col justify-between">
            
            {/* Top section */}
            <div>
              {/* Header row */}
              <div className="flex items-start justify-between mb-8">
                <span 
                  className="text-[11px] uppercase tracking-[0.3em] text-white/30"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  0{article.num} — {article.year}
                </span>
                
                {/* Arrow icon */}
                <svg 
                  className="w-5 h-5 text-white/0 group-hover:text-white/60 transition-all duration-500 -translate-x-2 group-hover:translate-x-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>

              {/* Title */}
              <h2 
                className="text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight"
                style={{
                  fontFamily: '"Archivo Black", sans-serif',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase'
                }}
              >
                {article.title}
              </h2>

              {/* Description */}
              <p 
                className="text-gray-500 text-sm md:text-base leading-relaxed max-w-lg"
                style={{
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 300,
                  lineHeight: '1.7'
                }}
              >
                {article.desc}
              </p>
            </div>

            {/* Bottom section */}
            <div className="flex items-end justify-between">
              {/* CTA */}
              <span 
                className="text-[11px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white/80 transition-colors duration-500 flex items-center gap-2"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                Read Article
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap justify-end">
                {article.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-[10px] px-3 py-1.5 border border-white/10 text-white/40 uppercase tracking-wider rounded-full"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle glow on hover */}
        <div className="absolute -inset-4 bg-white/[0.02] rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </motion.div>
    </Link>
  );
}