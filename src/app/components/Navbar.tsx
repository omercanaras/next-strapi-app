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
        <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="font-semibold text-lg">
  <Link href="/" className="hover:underline">KA-DL</Link>
</div>
          <div className="hidden md:flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <FaClock className="text-xs" />
              <span>Mo–Fr. 9 – 17 Uhr</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaPhone className="text-xs" />
              <span>01737950933</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaEnvelope className="text-xs" />
              <span>info@ka-dl.de</span>
            </span>
          </div>
        </div>
      </div>

     {/* ALT MENÜ BAR */}
<div className="border-b">
  <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between md:justify-center">
    {/* Mobilde hamburger menü solda */}
    <div className="md:hidden">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-2xl text-black focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>

    {/* Masaüstü menü ortalanmış */}
    <nav className="hidden md:flex space-x-10 text-base font-medium">
      <Link href="/ueberuns" className="hover:underline hover:text-black">
        Über uns
      </Link>
      <Link href="/leistungen" className="hover:underline hover:text-black">
        Leistungen
      </Link>
      <Link href="/stellenangebote" className="hover:underline hover:text-black">
        Stellenangebote
      </Link>
      {/* <Link href="/angebotsanfrage" className="hover:underline hover:text-black">
        Angebotsanfrage
      </Link> */}
      <Link href="/rufservice" className="hover:underline hover:text-black">
        Rückrufservice
      </Link>
    </nav>
  </div>

  {/* MOBİL MENÜ - Ortalanmış */}
  {menuOpen && (
    <div className="md:hidden px-4 pb-4">
      <nav className="flex flex-col items-center space-y-2 text-base font-medium">
        <Link href="/ueberuns" className="hover:underline hover:text-black" onClick={() => setMenuOpen(false)}>
          Über uns
        </Link>
        <Link href="/leistungen" className="hover:underline hover:text-black" onClick={() => setMenuOpen(false)}>
          Leistungen
        </Link>
        <Link href="/stellenangebote" className="hover:underline hover:text-black" onClick={() => setMenuOpen(false)}>
          Stellenangebote
        </Link>
        <Link href="/angebotsanfrage" className="hover:underline hover:text-black" onClick={() => setMenuOpen(false)}>
          Angebotsanfrage
        </Link>
        <Link href="/rufservice" className="hover:underline hover:text-black" onClick={() => setMenuOpen(false)}>
          Rückrufservice
        </Link>
      </nav>
    </div>
  )}
</div>

    </header>
  );
}
