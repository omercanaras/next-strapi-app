import Image from "next/image";
import leistungenData from "@/app/data/leistungen.json";

export default function LeistungenPage() {
  // JSON'dan veriyi al
  const sorted = [...leistungenData].sort((a, b) => {
    const rA = a.Reihenfolge ?? 999;
    const rB = b.Reihenfolge ?? 999;
    return rA - rB;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">Unsere Leistungen</h1>

      <div className="space-y-16">
        {sorted.map((item, index) => {
          const { id, Titel, Beschreibung, Bild } = item;
          const isEven = index % 2 === 0;

          return (
            <div
              key={id}
              className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* METİN BLOĞU */}
              <div className="flex-1">
            

                <h2 className="text-2xl font-semibold text-gray-900 mb-3">{Titel}</h2>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">{Beschreibung}</p>
              </div>

              {/* GÖRSEL BLOĞU */}
              {Bild && (
                <div className="flex-1 w-full">
                  <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
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
    </div>
  );
}
