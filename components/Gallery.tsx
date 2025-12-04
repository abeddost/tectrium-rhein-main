"use client";

import { motion } from "framer-motion";
import VideoBackground from "./VideoBackground";

const showcases = [
  {
    title: "Office Deep Clean",
    copy: "Glas, Metall und Naturstein mit glanzkonstanter Pflege. Perfekt für repräsentative Eingänge.",
    src: "/Royalty Stock Footage and Video Footage_14.mp4"
  },
  {
    title: "Außenanlagen & Wege",
    copy: "Sichere, gepflegte Außenflächen mit saisonalen Plänen – auch für hohe Besucherfrequenz.",
    src: "/Royalty Stock Footage and Video Footage_15.mp4"
  },
  {
    title: "Technik & Übergaben",
    copy: "Technischer Service mit Übergabeprotokollen, Checklisten und dokumentierten Instandhaltungen.",
    src: "/Royalty Stock Footage and Video Footage_13.mp4"
  }
];

export default function Gallery() {
  return (
    <section id="referenzen" className="mt-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="tag mb-2">Referenzen</p>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Filmische Einblicke</h2>
          <p className="max-w-2xl text-sm text-slate-200/80">
            Cinematic Videos zeigen echte Abläufe und Qualitätsstandards. Perfekt für Vertrieb,
            Recruiting und SEO.
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-100/80">
          4K / 60fps optimiert
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {showcases.map((item, index) => (
          <motion.div
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-soft"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.06 * index }}
          >
            <VideoBackground src={item.src} className="h-full min-h-[260px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition group-hover:opacity-75" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-sm uppercase tracking-[0.14em] text-slate-200/70">Case Study</p>
              <h3 className="text-xl font-semibold text-slate-50">{item.title}</h3>
              <p className="text-sm text-slate-200/85">{item.copy}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
