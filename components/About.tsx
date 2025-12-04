"use client";

import { motion } from "framer-motion";
import { VideoBackground } from "./VideoBackground";

const textVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7 }
  })
};

export function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-6">
          <motion.h2
            className="text-3xl font-semibold text-ink"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            custom={0}
            variants={textVariants}
          >
            Über Tectrium Rhein-Main
          </motion.h2>
          <motion.p
            className="text-lg text-slate-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            custom={1}
            variants={textVariants}
          >
            Wir stehen für exzellente Dienstleistungen rund um Ihre Immobilien.
            Von der regelmäßigen Hausreinigung über technische Services bis hin
            zu Außenanlagen und Winterdiensten – wir denken in ganzheitlichen
            Lösungen und setzen auf Premium-Qualität.
          </motion.p>
          <motion.p
            className="text-base text-slate-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            custom={2}
            variants={textVariants}
          >
            Unsere Teams kombinieren jahrelange Erfahrung mit modernster
            Technik. Wir arbeiten effizient, nachhaltig und mit einem Blick für
            Details, damit Ihre Objekte jederzeit im besten Licht erscheinen.
          </motion.p>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            custom={3}
            variants={textVariants}
          >
            {[
              { title: "Persönlich", desc: "Direkter Ansprechpartner" },
              { title: "Flexibel", desc: "Maßgeschneiderte Servicepakete" },
              { title: "Schnell", desc: "Reaktionszeiten in Stunden" },
              { title: "Transparent", desc: "Klare Absprachen & Reports" }
            ].map((item) => (
              <div
                key={item.title}
                className="card shimmer relative overflow-hidden"
              >
                <div className="relative z-10 space-y-2">
                  <div className="text-sm font-semibold text-accent-600">
                    {item.title}
                  </div>
                  <div className="text-sm text-slate-700">{item.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative space-y-4"
        >
          <div className="absolute -left-4 -right-4 -top-6 -bottom-6 rounded-[32px] bg-aurora opacity-60 blur-3xl" />
          <div className="card relative overflow-hidden">
            <div className="h-64 w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(90,164,255,0.28),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(125,255,214,0.22),transparent_20%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.1),transparent)]" />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-ink">
                  Harald Ganick
                </div>
                <div className="text-xs text-slate-600">
                  Geschäftsführer, Tectrium Rhein-Main
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-3 py-1 text-xs font-semibold text-white">
                Seit 2005
              </div>
            </div>
          </div>
          <VideoBackground
            src="/Royalty Stock Footage and Video Footage_14.mp4"
            overlay={false}
            className="h-56"
          />
        </motion.div>
      </div>
    </section>
  );
}
