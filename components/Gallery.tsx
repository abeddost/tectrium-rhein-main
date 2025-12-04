"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { VideoBackground } from "./VideoBackground";

const galleryItems = [
  {
    title: "Präzise Objektpflege",
    src: "/Royalty Stock Footage and Video Footage_13.mp4"
  },
  {
    title: "Technik im Fokus",
    src: "/Royalty Stock Footage and Video Footage_14.mp4"
  },
  {
    title: "Cinematic Clean",
    src: "/Royalty Stock Footage and Video Footage_15.mp4"
  }
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink dark:text-white">
              Showcase
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-200">
              Videoszenen aus unserem täglichen Einsatz – ruhig, hochwertig, filmisch.
            </p>
          </div>
          <div className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-glow-soft dark:bg-white/10 dark:text-slate-200">
            4K ready
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <motion.button
              key={item.title}
              onClick={() => setActive(idx)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.08, duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-card backdrop-blur transition hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-slate-900/70"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
              <VideoBackground src={item.src} overlay={false} opacity={0.18} blur />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/12 to-accent-600/16 opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-sm font-semibold text-white drop-shadow-lg">
                {item.title}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl overflow-hidden rounded-3xl bg-black shadow-2xl"
            >
              <video
                src={galleryItems[active].src}
                controls
                autoPlay
                loop
                className="h-full w-full max-h-[80vh] object-cover"
                poster="/fallback.svg"
              />
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink shadow"
              >
                Schließen
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
