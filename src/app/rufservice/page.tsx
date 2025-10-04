"use client";

import { useState } from "react";

export default function RueckrufservicePage() {
  const [formData, setFormData] = useState({
    name: "",
    telefon: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Buraya API POST işlemi entegre edilebilir
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">Rückrufservice</h1>

      <div className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">Wir rufen Sie gerne zurück!</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ihr Name"
              className="input"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="telefon" className="block text-sm font-medium text-gray-600 mb-1">Telefonnummer</label>
            <input
              type="text"
              id="telefon"
              name="telefon"
              required
              placeholder="z. B. 030 12345678"
              className="input"
              onChange={handleChange}
            />
          </div>

          <div className="pt-2 text-center">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700 transition"
            >
              Rückruf anfordern
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.625rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          font-size: 0.95rem;
          outline: none;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 1px #4f46e5;
        }
      `}</style>
    </div>
  );
}
