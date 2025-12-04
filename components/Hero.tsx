"use client";

import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";

const stats = [
  { label: "Reaktionszeit", value: "< 4 Std." },
  { label: "Kundenzufriedenheit", value: "98%" },
  { label: "Einsätze pro Jahr", value: "4k+" }
];

export default function Hero() {
  return (
    <section id="hero" className="relative mt-10 overflow-hidden rounded-[32px] border border-white/10">
      <div className="absolute inset-0 -z-10 bg-soft-radial opacity-70" />
      <div className="grid grid-cols-1 gap-8 overflow-hidden lg:grid-cols-[1.1fr_0.9fr]">
        <div className="p-8 sm:p-12">
          <div className="tag mb-6">Premium Facility Services</div>
          <motion.h1
            className="text-balance text-4xl font-bold leading-tight text-gradient sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Tectrium Rhein-Main:
            <br />
            Präzise Gebäudereinigung & Technischer Service.
          </motion.h1>
          <motion.p
            className="mt-5 max-w-2xl text-lg text-slate-200/90"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Klare Facility-Services mit nachweisbarer Qualität: Gebäudereinigung, technischer Service
            und Außenanlagenpflege mit kurzen Reaktionszeiten.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#kontakt"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Angebot anfordern
            </motion.a>
            <motion.a
              href="#leistungen"
              className="pill"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
            >
              Alle Leistungen entdecken
            </motion.a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-soft"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <p className="text-sm uppercase tracking-[0.15em] text-slate-300/70">{stat.label}</p>
                <p className="mt-2 text-2xl font-semibold text-sky-100">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-l-3xl">
          <div className="blur-blob left-10 top-10 h-32 w-32 bg-cyan-400/40" />
          <div className="blur-blob right-10 top-16 h-32 w-32 bg-blue-500/35" />
          <VideoBackground
            src="/Diy, Apartment, Roller, Drill by Stockbusters - Stock Footage.mp4"
            className="h-full min-h-[360px]"
          />
          <div className="absolute left-6 top-6 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-100/80">
            Real Footage
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/30 p-4 backdrop-blur-xl">
            <p className="text-sm font-semibold text-slate-50">Saubere Ergebnisse</p>
            <p className="text-xs text-slate-200/80">
              Reinigungs- und Serviceteams für Wohnanlagen, Offices und Gewerbe in Rhein-Main.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
