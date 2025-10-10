import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Karahan Dienstleistungen – Alltagsbegleiter & Haushaltshilfe in Winterlingen",
  description:
    "Karahan Dienstleistungen bietet Alltagsbegleitung und hauswirtschaftliche Tätigkeiten in Winterlingen. Zuverlässige Hilfe im Haushalt und Alltag mit Herz und Erfahrung.",
  openGraph: {
    type: "website",
    url: "https://ka-dl.de",
    title: "Karahan Dienstleistungen – Alltagsbegleiter & Haushaltshilfe in Winterlingen",
    description:
      "Professionelle Haushaltshilfe und Alltagsbegleitung in Winterlingen – zuverlässig, persönlich und engagiert.",
    images: [
      {
        url: "https://ka-dl.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karahan Dienstleistungen – Alltagsbegleiter & Haushaltshilfe in Winterlingen",
      },
    ],
  },
  alternates: {
    canonical: "https://ka-dl.de/",
  },
};

export default function HomePage() {
  return (
    <main className="px-4 py-10 max-w-6xl mx-auto">
      {/* Başlık */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Karahan Dienstleistungen – Ihr Alltagsbegleiter in Winterlingen
      </h1>

      <div className="mb-8 flex justify-center">
        <Image
          src="/images/alltag.jpeg"
          alt="Alltagsbegleitung und Haushaltshilfe in Winterlingen"
          width={800}
          height={400}
          className="w-full max-w-3xl h-auto object-contain object-center rounded-lg shadow-md"
        />
      </div>

      {/* CTA Buton */}
      <div className="text-center mb-10">
        <Link
          href="/angebotsanfrage"
          className="inline-block bg-gray-900 text-white text-sm md:text-base px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          In nur wenigen Schritten zum individuellen Angebot
        </Link>
      </div>

      {/* Açıklama */}
      <p className="text-center text-base md:text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
        Ein sauberes und gepflegtes Zuhause schafft Wohlbefinden. Wir
        unterstützen Sie mit individueller Alltagsbegleitung nach § 45a SGB XI –
        zuverlässig, empathisch und flexibel. Wir verwenden hochwertige
        Reinigungs- und Pflegeprodukte, gehen aber gern auf Ihre Materialwünsche
        ein. Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an!
      </p>

      {/* Hizmet kutuları */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-12 text-center">
        {/* PERSONEL */}
        <div>
          <Image
            src="/images/personal.jpeg"
            alt="Geschultes Personal für Haushalt und Betreuung"
            width={200}
            height={200}
            className="mx-auto w-32 sm:w-40 md:w-48 h-auto"
          />
          <h3 className="mt-4 font-semibold text-base sm:text-lg">
            Geschultes Personal
          </h3>
        </div>

        {/* RUNDUM SERVICE */}
        <div>
          <Image
            src="/images/rundum_service.jpeg"
            alt="Rundum-Service für Ihre Alltagsbegleitung"
            width={200}
            height={200}
            className="mx-auto w-32 sm:w-40 md:w-48 h-auto"
          />
          <h3 className="mt-4 font-semibold text-base sm:text-lg">
            Alles aus einer Hand
          </h3>
        </div>
      </div>

      {/* İkinci Buton */}
      <div className="text-center">
        <Link
          href="/leistungen"
          className="inline-block bg-gray-900 text-white text-sm md:text-base px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          Unsere Leistungen
        </Link>
      </div>
    </main>
  );
}
