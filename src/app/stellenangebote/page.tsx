import Image from "next/image";
import jobsData from "@/app/data/stellenangebote.json";

export default function StellenangebotePage() {
  const jobs = jobsData;

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Aktuelle Stellenangebote
      </h1>

      <div className="space-y-20">
        {jobs.map((job) => {
          const {
            id,
            Titel,
            Standorte,
            Beschreibung,
            bewerbungText,
            bild,
            aufgaben,
            anforderungen,
            wirBieten,
            Date
          } = job;

          return (
            <div
              key={id}
              className="border border-gray-200 rounded-lg shadow-md p-6 bg-white"
            >
              {/* Başlık ve Konum */}
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-900">{Titel}</h2>
                <p className="text-sm text-gray-600 mt-1">{Standorte}</p>
              </div>

              {/* Görsel */}
              {bild && (
                <div className="w-full h-auto mb-6">
                  <Image
                    src={bild}
                    alt={Titel}
                    width={800}
                    height={400}
                    className="rounded-md object-cover w-full"
                    priority
                  />
                </div>
              )}

              {/* Açıklama */}
              {Beschreibung?.length > 0 && (
                <div className="mb-4 space-y-2 text-gray-800 text-sm">
                  {Beschreibung.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Görevler */}
              {aufgaben?.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-1">Ihre Aufgaben:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                    {aufgaben.map((a) => (
                      <li key={a.id}>{a.Text}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gereklilikler */}
              {anforderungen?.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-1">Unsere Anforderungen:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                    {anforderungen.map((a) => (
                      <li key={a.id}>{a.Text}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sunduğumuz İmkanlar */}
              {wirBieten?.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-1">Wir bieten:</h3>
                  <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                    {wirBieten.map((w) => (
                      <li key={w.id}>{w.Text}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Başvuru Bilgileri */}
              {bewerbungText?.length > 0 && (
                <div className="mt-4 text-sm text-gray-700 space-y-2">
                  {bewerbungText.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Yayın tarihi */}
              <div className="text-xs text-gray-500 mt-4">
                Veröffentlicht am: {Date}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
