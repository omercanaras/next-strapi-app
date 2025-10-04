"use client";

import { useState } from "react";

export default function AngebotsanfragePage() {
  const [formData, setFormData] = useState({
    typ: "gewerblich",
    name: "",
    email: "",
    telefon: "",
    adresse: "",
    leistung: "",
    flaeche: "",
    intervall: "",
    zeit: "",
    beginn: "",
    nachricht: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Burada POST işlemi yapılabilir
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Angebotsanfrage</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-6 border border-gray-200">

        {/* Anfrage Typ */}
        <div>
          <label className="block font-semibold mb-1">Unverbindliche Angebotsanfrage</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="typ"
                value="gewerblich"
                checked={formData.typ === "gewerblich"}
                onChange={handleChange}
              />
              Gewerbliche Anfrage
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="typ"
                value="privat"
                checked={formData.typ === "privat"}
                onChange={handleChange}
              />
              Private Anfrage
            </label>
          </div>
        </div>

        {/* Kişisel Bilgiler */}
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name *" required className="input" onChange={handleChange} />
          <input type="text" name="adresse" placeholder="Adresse * (mind. PLZ Ort)" required className="input" onChange={handleChange} />
          <input type="email" name="email" placeholder="E-Mail *" required className="input" onChange={handleChange} />
          <input type="text" name="telefon" placeholder="Telefon" className="input" onChange={handleChange} />
        </div>

        {/* Talep Bilgileri */}
        <div className="grid md:grid-cols-2 gap-4">
          <select name="leistung" className="input" onChange={handleChange}>
            <option value="">Leistung wählen</option>
            <option value="reinigung">Reinigung</option>
            <option value="gartenarbeit">Gartenarbeit</option>
            <option value="pflege">Pflege</option>
          </select>

          <input type="text" name="flaeche" placeholder="Fläche in m²" className="input" onChange={handleChange} />

          <select name="intervall" className="input" onChange={handleChange}>
            <option value="">Intervall wählen</option>
            <option value="einmalig">Einmalig</option>
            <option value="woechentlich">Wöchentlich</option>
            <option value="monatlich">Monatlich</option>
          </select>

          <input type="text" name="zeit" placeholder="Zeit (wie viele Stunden)" className="input" onChange={handleChange} />

          <input type="text" name="beginn" placeholder="Beginn (ab wann)" className="input md:col-span-2" onChange={handleChange} />
        </div>

        {/* Nachricht */}
        <div>
          <label htmlFor="nachricht" className="block font-semibold mb-1">Ihre Nachricht</label>
          <textarea
            name="nachricht"
            rows={5}
            placeholder="Ihre Nachricht an uns"
            className="input w-full"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            Anfrage senden
          </button>
        </div>
      </form>

      <style jsx>{`
        .input {
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          width: 100%;
        }
        .input:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 1px #4f46e5;
        }
      `}</style>
    </div>
  );
}
