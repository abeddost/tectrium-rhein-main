"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  { title: "Planbare Qualität", text: "Strenge QA-Prozesse, dokumentierte Abläufe und Live-Feedback für jede Immobilie." },
  { title: "Nachhaltig denken", text: "Ressourcenschonende Reinigungsmittel, effiziente Routen, transparente Reports." },
  { title: "Vor Ort präsent", text: "Teams in Rhein-Main mit kurzer Reaktionszeit und klaren Verantwortlichkeiten." }
];

export default function About() {
  return (
    <section id="about" className="section-shell mt-14 p-8 sm:p-12">
      <div className="relative">
        <div className="blur-blob left-0 top-0 h-28 w-28 bg-cyan-400/40" />
        <div className="blur-blob right-0 top-10 h-24 w-24 bg-blue-500/35" />
      </div>

      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="tag mb-4">Über Tectrium</p>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            Präzision, Verlässlichkeit und ein Auge fürs Detail.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-200/85">
            Tectrium Rhein-Main verbindet Premium-Gebäudereinigung mit technischem Service. Wir
            betreuen Wohnanlagen, Offices und Gewerbeimmobilien mit klaren Prozessen, lückenloser
            Dokumentation und filmischen Referenzen, die Vertrauen schaffen.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                className="card-gradient rounded-2xl border border-white/10 p-4 shadow-soft"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
              >
                <p className="text-sm font-semibold text-sky-100">{item.title}</p>
                <p className="mt-2 text-sm text-slate-200/80">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-[260px] overflow-hidden rounded-3xl shadow-soft">
          <Image
            src="/stock-about.jpg"
            alt="Team von Tectrium bei der Arbeit in einem Gebäude"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent" />
          <div className="absolute -left-6 -top-6 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-xs uppercase tracking-[0.18em] text-slate-50/80">
            Rhein-Main Team
          </div>
          <div className="absolute -bottom-5 right-4 rounded-full bg-cyan-400/20 px-3 py-1 text-[11px] font-semibold text-slate-900 shadow-glow">
            ISO Clean
          </div>
        </div>
      </div>
    </section>
  );
}
