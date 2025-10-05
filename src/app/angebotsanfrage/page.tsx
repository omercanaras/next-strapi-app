"use client";

import { useState } from "react";
import formConfig from "@/app/data/angebotsanfrage.json";

export default function AngebotsanfragePage() {
  const defaultTyp = formConfig.anfrageTyp.default || "";
  const initialState: Record<string, string> = {
    [formConfig.anfrageTyp.name]: defaultTyp,
  };
  formConfig.fields.forEach((field) => {
    initialState[field.name] = "";
  });

  const [formData, setFormData] = useState<Record<string, string>>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // API'ye gönderilebilir
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        {formConfig.pageTitle}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-6 border border-gray-200"
      >
        {/* Anfrage Typ (radio) */}
        <div>
          <label className="block font-semibold mb-1">
            {formConfig.formTitle}
          </label>
          <div className="flex gap-6">
            {formConfig.anfrageTyp.options.map((option, idx) => (
              <label key={idx} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={formConfig.anfrageTyp.name}
                  value={option.value}
                  checked={formData[formConfig.anfrageTyp.name] === option.value}
                  onChange={handleChange}
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        {/* Dinamik Alanlar */}
        <div className="grid md:grid-cols-2 gap-4">
          {formConfig.fields.map((field, idx) => {
            if (field.type === "select") {
              return (
                <select
                  key={idx}
                  name={field.name}
                  className="input"
                  onChange={handleChange}
                  value={formData[field.name]}
                >
                  <option value="">{field.placeholder}</option>
                  {field.options?.map((opt, i) => (
                    <option key={i} value={opt.toLowerCase()}>
                      {opt}
                    </option>
                  ))}
                </select>
              );
            }

            if (field.type === "textarea") {
              return (
                <div key={idx} className="md:col-span-2">
                  <label
                    htmlFor={field.name}
                    className="block font-semibold mb-1"
                  >
                    {field.label}
                  </label>
                  <textarea
                    name={field.name}
                    rows={field.rows || 4}
                    placeholder={field.placeholder}
                    className="input w-full"
                    onChange={handleChange}
                    value={formData[field.name]}
                  ></textarea>
                </div>
              );
            }

            return (
              <input
                key={idx}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required || false}
                className="input"
                onChange={handleChange}
                value={formData[field.name]}
              />
            );
          })}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            {formConfig.submitText}
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
