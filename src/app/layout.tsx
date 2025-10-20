// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ka-dl.de';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || 'https://ka-dl.de'),
  title: {
    default: 'Karahan Dienstleistungen – Alltagsbegleiter & Haushaltshilfe in Winterlingen',
    template: '%s | Karahan Dienstleistungen',
  },
  description:
    'Karahan Dienstleistungen bietet Alltagsbegleitung und hauswirtschaftliche Tätigkeiten in Winterlingen. Zuverlässige Hilfe im Haushalt und Alltag mit Herz und Erfahrung.',
  alternates: {
    canonical: 'siteUrl',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Karahan Dienstleistungen – Haushaltshilfe in Winterlingen',
    description:
      'Professionelle Alltagsbegleitung und Haushaltshilfe in Winterlingen. Persönliche Betreuung und hauswirtschaftliche Unterstützung von Karahan Dienstleistungen.',
    siteName: 'Karahan Dienstleistungen',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Karahan Dienstleistungen – Alltagsbegleiter und Haushaltshilfe in Winterlingen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karahan Dienstleistungen – Haushaltshilfe in Winterlingen',
    description:
      'Haushaltshilfe und Alltagsbegleitung in Winterlingen – zuverlässig, persönlich, engagiert. Jetzt Kontakt aufnehmen!',
    creator: '@karahan_winterlingen', // X hesabın yoksa silebilirsin
    images: [`${siteUrl}/og-image.jpg`],
  },
  verification: {
    // Google Search Console kodu buraya gelecek (Adım 9)
     google: '27Bx7Frlptyj3gBd3_XNEDSLuRz-gqdOUOI9xJYAw0E',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}>
        <Navbar />
        
        {/* 👇 JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Karahan Dienstleistungen",
              "url": siteUrl,
              "logo": `${siteUrl}/logo.png`, // logo varsa public klasöründe olmalı
              "image": `${siteUrl}/og-image.jpg`,
              "description": "Karahan Dienstleistungen bietet Haushaltshilfe und Alltagsbegleitung in Winterlingen und Umgebung.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Heinrich-Böll-Weg 7", 
                "addressLocality": "Winterlingen",
                "postalCode": "72474",
                "addressCountry": "DE"
              },
              "telephone": "+49 173 795 09 33", 
              "areaServed": {
                "@type": "Place",
                "name": "Winterlingen"
              },
              "sameAs": [
                "https://www.instagram.com/karahan_dienstleistungen",
                "https://www.facebook.com/karahan_dienstleistungen"
              ]
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": siteUrl,
              "name": "Karahan Dienstleistungen",
              "potentialAction": {
                "@type": "SearchAction",
                "target": `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
