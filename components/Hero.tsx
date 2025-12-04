"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";
import { VideoBackground } from "./VideoBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen overflow-hidden px-6 pb-16 pt-28 sm:pt-32"
    >
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0">
        <VideoBackground
          src="/Diy, Apartment, Roller, Drill by Stockbusters - Stock Footage.mp4"
          opacity={0.14}
          blur
          overlay={false}
          className="h-full"
        />
      </div>
      <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl dark:bg-slate-900/60" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-glow-soft backdrop-blur dark:bg-white/10 dark:text-white"
          >
            Facility Services • Rhein-Main
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl dark:text-white"
          >
            Apple-inspirierte Premium Services für Immobilien, die glänzen.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl text-lg text-slate-700 dark:text-slate-200"
          >
            Tectrium Rhein-Main verbindet meisterhafte Reinigung, technische
            Präzision und warmherzige Betreuung zu einem nahtlosen, emotional
            starken Erlebnis – für Wohn- und Gewerbeimmobilien.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">Termin vereinbaren</MagneticButton>
            <MagneticButton variant="ghost" href="#services">
              Leistungen entdecken
            </MagneticButton>
          </motion.div>
          <motion.div
            className="grid grid-cols-3 gap-4 pt-6 text-sm text-slate-600 dark:text-slate-200"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            {[
              "Haus- & Gewerbereinigung",
              "Technischer Service",
              "Winter- & Außenanlagen"
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/70 px-4 py-3 shadow-glow-soft backdrop-blur dark:bg-white/10"
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
          className="relative"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/60 to-white/20 blur-3xl dark:from-accent-600/30 dark:to-slate-900/40" />
          <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-white/60 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/15 via-transparent to-slate-900/10" />
            <div className="relative p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:text-slate-200">
                Cinematic Service
              </div>
              <div className="text-2xl font-semibold text-ink dark:text-white">
                24/7 Einsatzbereitschaft, klare Reports, präzise Abläufe.
              </div>
              <div className="mt-6 h-60 overflow-hidden rounded-2xl">
                <VideoBackground
                  src="/Royalty Stock Footage and Video Footage_14.mp4"
                  opacity={0.22}
                  blur
                  overlay
                  className="h-60"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
