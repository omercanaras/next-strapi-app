// app/impressum/page.tsx
'use client';

import impressumData from '@/app/data/impressum.json';

type ImpressumData = {
  title: string;
  companyName: string;
  owner: string;
  address: {
    street: string;
    city: string;
    zip: string;
    country: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  vatId?: string;
  responsible: string;
  disclaimer?: string;
};

export default function ImpressumPage() {
  const data: ImpressumData = impressumData;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-800">{data.title}</h1>

      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold">Firma</h2>
          <p>{data.companyName}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Inhaber</h2>
          <p>{data.owner}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Adresse</h2>
          <address className="not-italic">
            {data.address.street}<br />
            {data.address.zip} {data.address.city}<br />
            {data.address.country}
          </address>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>
            E-Mail:{' '}
            <a href={`mailto:${data.contact.email}`} className="text-blue-600 hover:underline">
              {data.contact.email}
            </a>
            <br />
            Telefon:{' '}
            <a href={`tel:${data.contact.phone}`} className="text-blue-600 hover:underline">
              {data.contact.phone}
            </a>
          </p>
        </div>

        {data.vatId && (
          <div>
            <h2 className="text-xl font-semibold">Umsatzsteuer-ID</h2>
            <p>{data.vatId}</p>
          </div>
        )}

        <div>
          <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt</h2>
          <p>{data.responsible}</p>
        </div>

        {data.disclaimer && (
          <div>
            <h2 className="text-xl font-semibold">Haftungsausschluss</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {data.disclaimer}
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
