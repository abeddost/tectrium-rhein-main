"use client";

import Script from "next/script";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Value } from "@/components/Value";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tectrium Rhein-Main",
  url: "https://www.tectrium-rhein-main.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "An der Brunnenstube 27-31",
    addressLocality: "Mainz",
    postalCode: "55120",
    addressCountry: "DE"
  },
  telephone: "+49-177-343-0015",
  email: "info@tectrium.de",
  description:
    "Premium Facility Services für Rhein-Main: Hausreinigung, technischer Service, Außenanlagen, Winterdienst, Tiefgaragenreinigung, Renovierungen."
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-60" />
      <div className="relative">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Value />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
