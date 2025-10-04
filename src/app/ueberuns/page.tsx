import Image from "next/image";
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
                alt={`${titel} Bild`}
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