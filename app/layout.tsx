import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap"
});

const siteUrl = "https://www.tectrium.de";
const siteName = "Tectrium Rhein-Main";
const description =
  "Premium Gebäudereinigung, Technischer Service und Facility Management in Rhein-Main. Tectrium liefert präzise, nachhaltige Lösungen für Immobilien, Außenanlagen und Tiefgaragen.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Premium Gebäudereinigung & Facility Management`,
    template: `%s | ${siteName}`
  },
  description,
  applicationName: siteName,
  generator: "Next.js 14",
  keywords: [
    "Gebäudereinigung",
    "Facility Management",
    "Hausmeisterservice",
    "Rhein-Main",
    "Tectrium",
    "Winterdienst",
    "Technischer Service",
    "Außenanlagen",
    "Tiefgaragenreinigung"
  ],
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: `${siteName} | Premium Gebäudereinigung & Facility Management`,
    description,
    locale: "de_DE",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Tectrium Rhein-Main – Premium Facility Services"
      }
    ]
  },
  themeColor: "#030712",
  colorScheme: "dark",
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Gebäudereinigung & Facility Management`,
    description,
    images: ["/og-cover.svg"]
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }]
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  category: "Facility Management"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#organization`,
  name: siteName,
  url: siteUrl,
  description,
  image: `${siteUrl}/og-cover.svg`,
  telephone: "+49 (0)177 343 00 15",
  email: "info@tectrium.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "An der Brunnenstube 27-31",
    addressLocality: "Mainz",
    postalCode: "55120",
    addressCountry: "DE"
  },
  areaServed: "Rhein-Main",
  makesOffer: [
    "Hausreinigung",
    "Technischer Service",
    "Außenanlagenpflege",
    "Winterdienst",
    "Tiefgaragenreinigung",
    "Service für HV und ET",
    "Renovierungen"
  ].map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service
    },
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "EUR"
    }
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Startseite",
      item: siteUrl
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Leistungen",
      item: `${siteUrl}#leistungen`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kontakt",
      item: `${siteUrl}#kontakt`
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">
        <div className="grid-overlay" aria-hidden />
        {children}
        <Script id="schema-organization" type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </Script>
        <Script id="schema-breadcrumb" type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </Script>
      </body>
    </html>
  );
}
