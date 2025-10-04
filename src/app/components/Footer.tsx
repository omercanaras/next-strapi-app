import Link from "next/link";
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Şirket Bilgisi */}
        <div className="text-sm text-gray-300">
          Karahan Dienstleistungen GbR, Heinrich-Böll-Weg 7, 72474 Winterlingen
        </div>

        {/* Sayfa Linkleri */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-sm">
          <Link href="/" className="hover:underline">
            Startseite
          </Link>
          <Link href="/impressum" className="hover:underline">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:underline">
            Datenschutz
          </Link>
        </div>

        {/* Sosyal Medya */}
        <div className="flex space-x-5 text-xl mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:info@ka-dl.de"
            aria-label="E-Mail senden"
            className="hover:text-gray-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Logo */}
        <div className="text-5xl font-bold tracking-widest flex items-center justify-center mt-4">
          <span>K</span>
          <span className="mx-2 text-4xl">|</span>
          <span>D</span>
        </div>
        <div className="text-sm font-semibold tracking-wider">
          KARAHAN DIENSTLEISTUNGEN
        </div>
      </div>
    </footer>
  );
}
