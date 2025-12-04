"use client";

import { motion } from "framer-motion";
import { VideoBackground } from "./VideoBackground";

const points = [
  "Transparente Reports & klare KPIs",
  "Fixe Reaktionszeiten und feste Ansprechpartner",
  "Nachhaltige Materialien & präzise Abläufe",
  "Eingespielte Teams mit Qualitätskontrolle"
];

export function Value() {
  return (
    <section id="value" className="px-6 py-20">
      <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          className="card space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-200">
            Warum Tectrium
          </div>
          <h3 className="text-3xl font-semibold text-ink dark:text-white">
            Wir denken wie ein Tech-Unternehmen – nur für Facility Services.
          </h3>
          <p className="text-base text-slate-700 dark:text-slate-200">
            Präzise Planung, durchdachte Prozesse, modernste Tools und ein Team,
            das Qualität sichtbar macht. Damit Ihre Objekte jeden Tag Premium
            ausstrahlen.
          </p>
          <div className="space-y-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-500/15 text-accent-600 ring-1 ring-accent-500/30 dark:bg-accent-500/20 dark:text-accent-300">
                  ✓
                </span>
                <span className="text-slate-700 dark:text-slate-200">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[32px] bg-aurora opacity-70 blur-3xl" />
          <VideoBackground
            src="/Royalty Stock Footage and Video Footage_15.mp4"
            overlay
            opacity={0.2}
            blur
            className="h-full min-h-[320px]"
          />
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/50 ring-1 ring-white/30 dark:border-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
