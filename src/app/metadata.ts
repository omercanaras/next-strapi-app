import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://omercanaras.com";

  export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Ömercan Aras – Fullstack Engineer",
      template: "%s | Ömercan Aras",
    },
    description:
      "Fullstack Engineer specialized in Spring Boot, Angular, BPM and distributed systems.",
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      type: "website",
      url: siteUrl,
      title: "Ömercan Aras – Fullstack Engineer",
      description:
        "Enterprise systems, BPM architectures and modern web applications.",
      images: [
        {
          url: `${siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Ömercan Aras Portfolio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Ömercan Aras – Fullstack Engineer",
      description:
        "Enterprise systems, BPM architectures and modern web applications.",
      images: [`${siteUrl}/og-image.jpg`],
    },
  };
