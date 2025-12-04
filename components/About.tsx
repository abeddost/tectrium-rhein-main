"use client";

import { motion } from "framer-motion";
import { VideoBackground } from "./VideoBackground";

const cards = [
  { title: "Persönlich", desc: "Direkter Ansprechpartner & transparente Kommunikation." },
  { title: "Schnell", desc: "Reaktionszeiten in Stunden, nicht Tagen." },
  { title: "Nachhaltig", desc: "Ressourcenschonende Prozesse und moderne Technik." },
  { title: "Detailverliebt", desc: "Premium-Finish auf jeder Fläche." }
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-20">
      <div className="absolute inset-0 bg-aurora opacity-60 blur-3xl" />
      <div className="relative mx-auto max-w-6xl rounded-[32px] border border-white/60 bg-white/70 p-10 shadow-glow backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <motion.h2
              className="text-3xl font-semibold text-ink dark:text-white"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7 }}
            >
              Mission & Haltung
            </motion.h2>
            <motion.p
              className="text-lg text-slate-700 dark:text-slate-200"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Wir schaffen Räume, die Vertrauen, Komfort und Effizienz ausstrahlen.
              Tectrium Rhein-Main steht für präzise Abläufe, hochwertige Materialien
              und menschliche Nähe – alles orchestriert zu einem Premium-Service.
            </motion.p>
            <motion.div
              className="grid gap-4 sm:grid-cols-2"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, delay: 0.2, staggerChildren: 0.05 }}
            >
              {cards.map((card) => (
                <div key={card.title} className="card shimmer relative overflow-hidden">
                  <div className="relative z-10 space-y-2">
                    <div className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                      {card.title}
                    </div>
                    <div className="text-sm text-slate-700 dark:text-slate-200">
                      {card.desc}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-200"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {[
                "Gegründet 2005",
                "24/7 erreichbar",
                "Rhein-Main Fokus",
                "Eigenes Qualitätsmanagement"
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/60 bg-white/60 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/10"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative space-y-4"
          >
            <div className="absolute -left-6 -right-6 -top-6 -bottom-6 rounded-[32px] bg-aurora opacity-60 blur-3xl" />
            <div className="card relative overflow-hidden">
              <div className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                Ihr Ansprechpartner
              </div>
              <div className="mt-2 text-lg font-semibold text-ink dark:text-white">
                Harald Ganick
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-200">
                Geschäftsführer, Tectrium Rhein-Main
              </div>
              <div className="mt-4 h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,164,255,0.28),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(125,255,214,0.22),transparent_20%)]" />
              </div>
            </div>
            <VideoBackground
              src="/Royalty Stock Footage and Video Footage_13.mp4"
              overlay
              opacity={0.18}
              blur
              className="h-56"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
