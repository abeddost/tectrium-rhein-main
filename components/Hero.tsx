"use client";

import { motion } from "framer-motion";
import { VideoBackground } from "./VideoBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden px-6 pb-20 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 bg-aurora bg-[length:140%_140%] opacity-70 blur-3xl" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-glow-soft backdrop-blur"
          >
            Facility Services • Rhein-Main
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Cinematic Premium Services für Ihre Immobilienwelt.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-2xl text-lg text-slate-700"
          >
            Tectrium Rhein-Main verbindet meisterhafte Reinigung, technische
            Expertise und zuverlässigen Service zu einem nahtlosen Erlebnis für
            Wohn- und Gewerbeimmobilien.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-2px]"
            >
              Termin vereinbaren
            </a>
            <a
              href="#services"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent-500 hover:text-accent-600"
            >
              Leistungen entdecken
            </a>
          </motion.div>
          <motion.div
            className="grid grid-cols-3 gap-4 pt-6 text-sm text-slate-600"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            {[
              "Haus- & Gewerbereinigung",
              "Technischer Service",
              "Winter- & Aussenanlagen"
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/70 px-4 py-3 shadow-glow-soft backdrop-blur"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 to-white/20 blur-3xl" />
          <VideoBackground src="/Diy, Apartment, Roller, Drill by Stockbusters - Stock Footage.mp4" />
        </motion.div>
      </div>
    </section>
  );
}
