// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaClock, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* ÜST BİLGİ BAR */}
      <div className="bg-black text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left">
          {/* Sol taraf (Logo) */}
          <div className="flex flex-col items-center">
  <Link
    href="/"
    className="flex items-center justify-center gap-1 hover:opacity-80 transition-opacity duration-200 leading-none"
  >
    <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white leading-none">
      K
    </span>

    {/* Dikey çizgi — tam harf yüksekliğinde */}
    <span
      aria-hidden="true"
      className="w-px h-[1.2em] bg-gray-400"
    />

    <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white leading-none">
      D
    </span>
  </Link>

  <span className="text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.25em] uppercase font-light mt-1 text-center select-none text-white/90 drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]">
    Karahan Dienstleistungen
  </span>
</div>



          {/* Sağ taraf (Bilgiler) */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
            <span className="flex items-center gap-1">
              <FaClock className="text-[11px]" />
              <span>Mo–Fr. 9 – 17 Uhr</span>
            </span>

            <a
              href="tel:01737950933"
              className="flex items-center gap-1 hover:underline"
            >
              <FaPhone className="text-[11px]" />
              <span>0173 795 09 33</span>
            </a>

            <a
              href="mailto:info@ka-dl.de"
              className="flex items-center gap-1 hover:underline"
            >
              <FaEnvelope className="text-[11px]" />
              <span>info@ka-dl.de</span>
            </a>
          </div>
        </div>
      </div>

      {/* ALT MENÜ BAR */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between md:justify-center">
          {/* Mobil hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-black focus:outline-none"
              aria-label="Menüyü aç/kapat"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Masaüstü menü */}
          <nav className="hidden md:flex space-x-10 text-base font-medium">
            <Link href="/ueberuns" className="hover:underline hover:text-black">
              Über uns
            </Link>
            <Link href="/leistungen" className="hover:underline hover:text-black">
              Leistungen
            </Link>
            <Link
              href="/angebotsanfrage"
              className="hover:underline hover:text-black"
            >
              Angebotsanfrage
            </Link>
            <Link href="/rufservice" className="hover:underline hover:text-black">
              Rückrufservice
            </Link>
          </nav>
        </div>

        {/* Mobil menü */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col items-center space-y-2 text-base font-medium">
              <Link
                href="/ueberuns"
                className="hover:underline hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Über uns
              </Link>
              <Link
                href="/leistungen"
                className="hover:underline hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Leistungen
              </Link>
              <Link
                href="/angebotsanfrage"
                className="hover:underline hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Angebotsanfrage
              </Link>
              <Link
                href="/rufservice"
                className="hover:underline hover:text-black"
                onClick={() => setMenuOpen(false)}
              >
                Rückrufservice
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
