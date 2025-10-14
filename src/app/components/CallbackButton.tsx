"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function CallbackButton() {
  return (
    <Link href="/rufservice">
      <motion.div
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        className="group relative inline-flex items-center gap-3 bg-black text-white text-sm md:text-base px-8 py-3 rounded-full shadow-lg overflow-hidden transition-all duration-300"
      >
        {/* Parlayan geçiş efekti */}
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        {/* Telefon ikonu */}
        <motion.div
          whileHover={{ rotate: -20 }}
          whileTap={{ rotate: -20 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Phone className="w-5 h-5" />
        </motion.div>

        <span className="font-semibold tracking-wide relative z-10">
          Wir rufen Sie gerne zurück
        </span>
      </motion.div>
    </Link>
  );
}
