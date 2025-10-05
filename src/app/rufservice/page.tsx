"use client";

import { useState } from "react";
import rueckrufData from "@/app/data/rueckrufservice.json";

export default function RueckrufservicePage() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setMessage(null);

    try {
      const res = await fetch("/api/rueckruf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setMessage("✅ Ihre Rückrufanfrage wurde erfolgreich gesendet.");
        setFormData({});
      } else {
        setMessage("❌ Es gab ein Problem beim Senden Ihrer Anfrage.");
      }
    } catch (error) {
      console.error("Fehler beim Senden:", error);
      setMessage("❌ Ein unerwarteter Fehler ist aufgetreten.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        {rueckrufData.pageTitle}
      </h1>

      <div className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
          {rueckrufData.formTitle}
        </h2>

        {message && (
          <div
            className={`mb-4 text-sm text-center font-medium ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {rueckrufData.fields.map((field, idx) => (
            <div key={idx}>
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                {field.label}
              </label>
              <input
                type="text"
                id={field.name}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
                className="input"
                onChange={handleChange}
                value={formData[field.name] || ""}
              />
            </div>
          ))}

          <div className="pt-2 text-center">
            <button
              type="submit"
              disabled={isSending}
              className={`w-full font-semibold py-2 px-4 rounded transition ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {isSending ? "Senden..." : rueckrufData.buttonText}
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
