// src/app/components/Navbar.tsx

import Link from "next/link";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      {/* ÜST BİLGİ BAR */}
      <div className="bg-black text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-semibold text-lg">KA-DL</div>
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <FaClock className="text-xs" />
              <span>Mo–Fr. 9 – 16 Uhr</span>
            </span>
            <span className="flex items-center space-x-1">
              <FaPhone className="text-xs" />
              <span>030 - 64089128</span>
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
        <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-center space-x-10 text-base font-medium">
          <Link href="/" className="hover:underline hover:text-black">
            Über uns
          </Link>
          <Link href="/leistungen" className="hover:underline hover:text-black">
            Leistungen
          </Link>
          <Link href="/stellenangebote" className="hover:underline hover:text-black">
            Stellenangebote
          </Link>
          <Link href="/angebotsanfrage" className="hover:underline hover:text-black">
            Angebotsanfrage
          </Link>
          <Link href="/rufservice" className="hover:underline hover:text-black">
            Rückrufservice
          </Link>
        </nav>
      </div>
    </header>
  );
}
