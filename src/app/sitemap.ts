// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ka-dl.de";
  const staticPages = [
    "",
    "/ueber-uns",
    "/leistungen",
    "/angebotsanfrage",
    "/rueckrufservice",
  ];

  return staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}