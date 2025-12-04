import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Tectrium Rhein-Main | Premium Facility Services",
  description:
    "Facility services in Rhein-Main with a cinematic, modern experience powered by Tectrium."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="bg-mist text-ink antialiased">{children}</body>
    </html>
  );
}
