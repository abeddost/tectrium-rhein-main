import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const baseUrl = "https://www.tectrium-rhein-main.de";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Tectrium Rhein-Main | Premium Facility Services",
    template: "%s | Tectrium Rhein-Main"
  },
  description:
    "Premium Facility Services für Rhein-Main: Hausreinigung, technischer Service, Außenanlagen, Winterdienst, Tiefgaragenreinigung, Renovierungen.",
  openGraph: {
    title: "Tectrium Rhein-Main",
    description:
      "Premium Facility Services mit Apple-inspirierter Qualität und nahtlosen Abläufen.",
    url: baseUrl,
    siteName: "Tectrium Rhein-Main",
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tectrium Rhein-Main",
    description:
      "Premium Facility Services mit Apple-inspirierter Qualität und nahtlosen Abläufen."
  },
  alternates: {
    canonical: baseUrl
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="bg-mist text-ink antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
