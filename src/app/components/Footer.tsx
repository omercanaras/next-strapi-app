import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">

        {/* Şirket Bilgisi */}
        <div className="text-sm">
          Karahan Dienstleistungen Gbr, Heinrich-Böll-Weg 7 , 72474 Winterlingen
        </div>

        {/* Linkler */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 text-sm">
          <a href="/" className="hover:underline">
            Startseite
          </a>
          <a href="/impressum" className="hover:underline">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:underline">
            Datenschutz
          </a>
        </div>

        {/* Sosyal Medya */}
        <div className="flex space-x-4 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:info@ka-dl.de">
            <FaEnvelope />
          </a>
        </div>

        {/* Logo */}
        <div className="text-5xl font-bold tracking-widest flex items-center justify-center">
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
