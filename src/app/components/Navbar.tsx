"use client";

import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import navbarData from "@/app/data/navbar.json"; // JSON verisi buradan alınır

const ICONS = {
  FaPhone: <FaPhone className="text-[11px]" />,
  FaEnvelope: <FaEnvelope className="text-[11px]" />,
  FaClock: <FaClock className="text-[11px]" />,
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { logo, contactInfo, menuItems } = navbarData;

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* ÜST BAR */}
      <div className="bg-black text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left">
          {/* Logo */}
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="flex items-center justify-center gap-1 hover:opacity-80 transition-opacity duration-200 leading-none"
            >
              <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white">
                {logo.titleLeft}
              </span>
              <span aria-hidden="true" className="w-px h-[1.2em] bg-gray-400" />
              <span className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white">
                {logo.titleRight}
              </span>
            </Link>
            <span className="text-[7px] sm:text-[8px] md:text-[9px] tracking-[0.25em] uppercase font-light mt-1 text-white/90">
              {logo.subtitle}
            </span>
          </div>

          {/* Bilgiler */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
            {contactInfo
              .filter((item) => item.enabled)
              .map((item, index) => (
                item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-1 hover:underline"
                  >
                    {ICONS[item.icon as keyof typeof ICONS]}
                    <span>{item.text}</span>
                  </a>
                ) : (
                  <span key={index} className="flex items-center gap-1">
                    {ICONS[item.icon as keyof typeof ICONS]}
                    <span>{item.text}</span>
                  </span>
                )
              ))}
          </div>
        </div>
      </div>

      {/* ALT MENÜ */}
      <div className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between md:justify-center">
          {/* Mobil menü butonu */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-black"
              aria-label="Menüyü aç/kapat"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Masaüstü menü */}
          <nav className="hidden md:flex space-x-10 text-base font-medium">
            {menuItems
              .filter((item) => item.enabled)
              .map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="hover:underline hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
          </nav>
        </div>

        {/* Mobil menü */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col items-center space-y-2 text-base font-medium">
              {menuItems
                .filter((item) => item.enabled)
                .map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="hover:underline hover:text-black"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
