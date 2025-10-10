// src/app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ka-dl.de</loc>
    <lastmod>2025-10-10T17:29:59.254Z</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>
  <!-- Diğer sayfalar burada -->
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
