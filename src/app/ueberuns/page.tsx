import Image from "next/image";
import type { Metadata } from "next";
import aboutData from "../data/aboutme.json";

function toParagraphs(text?: string) {
  if (!text) return null;
  return text.split(/\n\n+/).map((p, i) => (
    <p
      key={i}
      className="text-gray-700 leading-relaxed text-sm md:text-base mb-4 whitespace-pre-line"
    >
      {p}
    </p>
  ));
}

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Über uns – KD Dienstleistungen in Winterlingen",
  description:
    "Erfahren Sie mehr über KD Dienstleistungen – Ihr zuverlässiger Partner für Alltagsbegleitung und Haushaltshilfe in Winterlingen und Umgebung.",
  alternates: {
    canonical: "https://ka-dl.de/ueber-uns",
  },
  openGraph: {
    type: "article",
    url: "https://ka-dl.de/ueber-uns",
    title: "Über uns – KD Dienstleistungen",
    description:
      "Lernen Sie das Team und die Philosophie von KD Dienstleistungen kennen. Persönlich. Engagiert. Regional.",
    images: [
      {
        url: "https://ka-dl.de/og-image.jpg", // veya imageUrl dinamik alınabilir
        width: 1200,
        height: 630,
        alt: "KD Dienstleistungen – Über uns",
      },
    ],
  },
};

export default function AboutMePage() {
  const titel = aboutData.Titel || "Über uns";
  const content = aboutData.Content || "";
  const imageUrl = aboutData.Bild;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">
        {titel}
      </h1>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
        {/* METİN BLOĞU */}
        <div className="flex-1">{toParagraphs(content)}</div>

        {/* GÖRSEL BLOĞU */}
        {imageUrl && (
          <div className="flex-1 w-full">
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Image
                src={imageUrl}
                alt={`${titel} – KD Dienstleistungen in Winterlingen`}
                width={750}
                height={420}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
