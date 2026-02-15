import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "KD Dienstleistungen – Alltagsbegleiter & Haushaltshilfe in Winterlingen",
  description:
    "KD Dienstleistungen bietet Alltagsbegleitung und hauswirtschaftliche Tätigkeiten in Winterlingen. Zuverlässige Hilfe im Haushalt und Alltag mit Herz und Erfahrung.",
  openGraph: {
    type: "website",
    url: "https://ka-dl.de",
    title: "KD Dienstleistungen – Alltagsbegleiter & Haushaltshilfe in Winterlingen",
    description:
      "Professionelle Haushaltshilfe und Alltagsbegleitung in Winterlingen – zuverlässig, persönlich und engagiert.",
    images: [
      {
        url: "https://ka-dl.de/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KD Dienstleistungen – Alltagsbegleiter & Haushaltshilfe in Winterlingen",
      },
    ],
  },
  alternates: {
    canonical: "https://ka-dl.de/",
  },
};

export default function HomePage() {
  const images = [
    "/images/room1.jpg",
    "/images/room2.jpg",
    "/images/room3.jpg",
    "/images/room4.jpg",
    "/images/room5.jpg",
    "/images/room6.jpg",
    "/images/room7.jpg",
    "/images/room8.jpg",
  ];

  return (
    <main className="pb-20">
      {/* Hero Bölümü */}
      {/* <section className="bg-gray-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Melek Pansiyon
        </h1>
        <p className="text-lg opacity-90">
          Konforlu odalar, huzurlu bir atmosfer ve sıcak bir karşılama.
        </p>
      </section> */}

      {/* Galeri Bölümü */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-center text-3xl font-semibold mb-10">
          Galeri – Odalarımızdan ve Pansiyonumuzdan Kareler
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={src}
                alt={`Galeri Görseli ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-64 object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Daha Fazla Yükle */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition">
            Daha Fazla Görsel Yükle
          </button>
        </div>
      </section>

      {/* CTA / İletişim Bölümü */}
      <section className="max-w-5xl mx-auto mt-20 px-4">
        <div className="bg-[#0D0D0D] text-white p-10 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">
            Rezervasyon veya Bilgi İçin Bize Ulaşın
          </h3>

          <p className="mb-6 text-gray-200">
            Melek Pansiyon’da kendinizi evinizde hissedeceksiniz.  
            Uygun fiyatlar ve konforlu bir konaklama için hemen iletişime geçin.
          </p>

          <Link
            href="/iletisim"
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded font-semibold hover:opacity-90 transition"
          >
            İletişim
          </Link>
        </div>
      </section>
    </main>
  );
}
