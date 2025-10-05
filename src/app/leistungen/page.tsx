import Image from "next/image";
import leistungenData from "@/app/data/leistungen.json";

export default function LeistungenPage() {
  const sorted = [...leistungenData].sort((a, b) => {
    const rA = a.Reihenfolge ?? 999;
    const rB = b.Reihenfolge ?? 999;
    return rA - rB;
  });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900">
        Unsere Leistungen
      </h1>

      <div className="space-y-20">
        {sorted.map((item, index) => {
          const { id, Titel, Beschreibung, Bild } = item;
          const isEven = index % 2 === 0;

          return (
            <div
              key={id}
              className={`flex flex-col-reverse md:flex-row items-center gap-8 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* TEXT BLOCK */}
              <div className="flex-1 w-full">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  {Titel}
                </h2>
                <div
                  className="text-gray-700 text-sm md:text-base leading-relaxed space-y-2"
                  dangerouslySetInnerHTML={{ __html: Beschreibung }}
                />
              </div>

              {/* IMAGE BLOCK */}
              {Bild && (
                <div className="flex-1 w-full">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
                    <Image
                      src={Bild}
                      alt={`${Titel} Bild`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
