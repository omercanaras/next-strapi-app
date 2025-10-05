import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import footerData from "@/app/data/footer.json";
import { JSX } from "react";

// Ikon adlarını React bileşenlerine eşle
const ICONS: Record<string, JSX.Element> = {
  FaFacebookF: <FaFacebookF />,
  FaInstagram: <FaInstagram />,
  FaEnvelope: <FaEnvelope />,
};

export default function Footer() {
  const { companyAddress, pageLinks, socialLinks, logo } = footerData;

  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Şirket Bilgisi */}
        <div className="text-sm text-gray-300">
          {companyAddress}
        </div>

        {/* Sayfa Linkleri */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-sm">
          {pageLinks
            .filter((link) => link.enabled)
            .map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:underline">
                {link.label}
              </Link>
            ))}
        </div>

        {/* Sosyal Medya */}
        <div className="flex space-x-5 text-xl mt-2">
          {socialLinks
            .filter((link) => link.enabled)
            .map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="hover:text-gray-400 transition"
              >
                {ICONS[link.icon]}
              </a>
            ))}
        </div>

        {/* Logo */}
        <div className="text-5xl font-bold tracking-widest flex items-center justify-center mt-4">
          <span>{logo.left}</span>
          <span className="mx-2 text-4xl">{logo.separator}</span>
          <span>{logo.right}</span>
        </div>
        <div className="text-sm font-semibold tracking-wider">
          {logo.title}
        </div>
      </div>
    </footer>
  );
}
