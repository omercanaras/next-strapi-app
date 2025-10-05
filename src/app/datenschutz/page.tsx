'use client';

import datenschutzData from '@/app/data/datenschutz.json';

type Section = {
  heading: string;
  content: string;
};

type DatenschutzData = {
  title: string;
  intro: string;
  sections: Section[];
  lastUpdated?: string;
};

export default function DatenschutzPage() {
  const data: DatenschutzData = datenschutzData;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-4 text-gray-800">{data.title}</h1>
      <p className="text-gray-700 mb-8 leading-relaxed">{data.intro}</p>

      <div className="space-y-8">
        {data.sections.map((section, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {section.heading}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      {data.lastUpdated && (
        <p className="text-sm text-gray-500 mt-10">
          Letzte Aktualisierung: {data.lastUpdated}
        </p>
      )}
    </main>
  );
}
