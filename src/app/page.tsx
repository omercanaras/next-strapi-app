import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="px-4 py-10 max-w-6xl mx-auto">
      {/* Başlık */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Karahan Dienstleistungen
      </h1>

      <div className="mb-8 flex justify-center">
  <Image
    src="/images/alltag.jpeg"
    alt="Alltag"
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
      Ein sauberes und gepflegtes Zuhause schafft Wohlbefinden. Wir unterstützen Sie mit individueller Alltagsbegleitung nach § 45a SGB XI – zuverlässig, empathisch und flexibel. Wir verwenden hochwertige Reinigungs- und Pflegeprodukte, gehen aber gern auf Ihre Materialwünsche ein. Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an!
      </p>
{/* Hizmet kutuları */}
<div className="flex flex-col sm:flex-row justify-center items-center gap-10 mb-12 text-center">
  {/* PERSONEL */}
  <div>
    <Image
      src="/images/personal.jpeg"
      alt="Geschultes Personal"
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
      alt="Alles aus einer Hand"
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
