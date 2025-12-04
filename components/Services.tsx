"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Hausreinigung",
    desc: "Gründliche Pflege für Wohn- und Gewerbeimmobilien, inklusive Treppenhäusern und Gemeinschaftsflächen."
  },
  {
    title: "Technischer Service",
    desc: "Regelmäßige Wartungen, Funktionskontrollen und kleinere Reparaturen durch erfahrene Fachkräfte."
  },
  {
    title: "Aussenanlagen",
    desc: "Gepflegte Grünflächen, Gehwege und Hofbereiche mit saisonaler Bepflanzung und Pflege."
  },
  {
    title: "Winterdienst",
    desc: "Räum- und Streudienste mit klaren Einsatzplänen für sichere Wege, Parkplätze und Zufahrten."
  },
  {
    title: "Tiefgaragenreinigung",
    desc: "Spezialreinigung für Tiefgaragen inklusive Bodenversiegelungen und Beleuchtungskontrollen."
  },
  {
    title: "Service für HV und ET",
    desc: "Unterstützung für Hausverwaltungen und Eigentümergemeinschaften mit klaren Reportings."
  },
  {
    title: "Renovierungen",
    desc: "Koordination und Umsetzung kleinerer Renovierungen mit zuverlässigen Partnern."
  }
];

export function Services() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Leistungen</h2>
            <p className="text-base text-slate-700">
              Ganzheitliche Facility Services für Rhein-Main – modular kombinierbar.
            </p>
          </div>
          <div className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-glow-soft">
            Premium Support 24/7
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="card relative overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 via-accent-500/5 to-accent-600/10 opacity-0 transition hover:opacity-100" />
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-600">
                  <span className="h-2 w-2 rounded-full bg-accent-600 shadow-glow" />
                  {service.title}
                </div>
                <p className="text-sm text-slate-700">{service.desc}</p>
                <div className="h-px bg-gradient-to-r from-slate-200 to-transparent" />
                <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>Onboarding 7 Tage</span>
                  <span className="text-accent-600">Service ready</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
