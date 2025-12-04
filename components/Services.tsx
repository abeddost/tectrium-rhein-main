"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Hausreinigung",
    description:
      "Tägliche und periodische Reinigung mit klaren Checklisten, Hygienestandards und dokumentierten Rundgängen.",
    tags: ["Treppenhäuser", "Gemeinschaftsflächen", "Desinfektion"]
  },
  {
    title: "Technischer Service",
    description:
      "Prüfungen, Wartung und schnelle Instandhaltung – Beleuchtung, Brandschutz-Basics und Kleinreparaturen aus einer Hand.",
    tags: ["Wartung", "24/7-Bereitschaft", "Dokumentation"]
  },
  {
    title: "Außenanlagen",
    description:
      "Pflege von Grünflächen, Wegen und Plätzen. Saubere, sichere Außenbereiche mit saisonalen Pflegeplänen.",
    tags: ["Grünpflege", "Wegepflege", "Saisonpläne"]
  },
  {
    title: "Winterdienst",
    description:
      "Verlässliche Räum- und Streudienste nach kommunalen Vorgaben. Live-Updates und proaktive Routenplanung.",
    tags: ["Räumen", "Streuen", "24/7 Monitoring"]
  },
  {
    title: "Tiefgaragenreinigung",
    description:
      "Spezialisierte Reinigung für Tiefgaragen, Parkhäuser und Stellplätze inkl. Absaugung, Hochdruckreinigung und Markierungsreinigung.",
    tags: ["Ölbindemittel", "Hochdruck", "Markierungen"]
  },
  {
    title: "Service für HV und ET",
    description:
      "Partnerschaftliche Unterstützung für Hausverwaltungen und Eigentümergemeinschaften mit klaren KPIs und Reporting.",
    tags: ["Reporting", "SLA-basiert", "Fixe Ansprechpartner"]
  },
  {
    title: "Renovierungen",
    description:
      "Sanfte Renovierungen und Refresh-Arbeiten für Eingangsbereiche, Treppenhäuser und Mietflächen – inklusive Koordination.",
    tags: ["Koordination", "Malerarbeiten", "Bodenpflege"]
  }
];

export default function Services() {
  return (
    <section id="leistungen" className="mt-14">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="tag mb-2">Leistungen</p>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Alle Services im Überblick</h2>
          <p className="max-w-2xl text-sm text-slate-200/80">
            Jede Leistung ist modular buchbar. Wir kombinieren Reinigung, Technik und Außenanlagen so,
            dass Immobilien wertstabil, sicher und repräsentativ bleiben.
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-100/80">
          Transparent & skalierbar
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            className="border-glow card-gradient relative overflow-hidden rounded-2xl border border-white/10 p-5 shadow-soft"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.05 * index }}
          >
            <div className="floating-dots absolute -right-8 -top-10 h-24 w-24 opacity-50" />
            <div className="absolute right-4 top-4 rounded-full bg-cyan-400/15 px-3 py-1 text-[11px] font-semibold text-slate-950 shadow-glow">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </div>
            <h3 className="text-xl font-semibold text-slate-50">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-200/80">{service.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="pill text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
