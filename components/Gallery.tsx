"use client";

import { motion } from "framer-motion";
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
  return (
    <section id="gallery" className="px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Showcase</h2>
            <p className="text-base text-slate-700">
              Videoszenen aus unserem täglichen Einsatz – ruhig, hochwertig, filmisch.
            </p>
          </div>
          <div className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-glow-soft">
            4K ready
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.08, duration: 0.7 }}
              className="space-y-3"
            >
              <VideoBackground src={item.src} />
              <div className="text-sm font-semibold text-slate-700">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
