"use client";

import { motion } from "framer-motion";

const contactData = [
  { label: "Ansprechpartner", value: "Harald Ganick" },
  { label: "Telefon", value: "+49 (0) 177 343 00 15", href: "tel:+491773430015" },
  { label: "E-Mail", value: "info@tectrium.de", href: "mailto:info@tectrium.de" },
  { label: "Adresse", value: "An der Brunnenstube 27-31, 55120 Mainz" }
];

export default function Contact() {
  return (
    <section id="kontakt" className="mt-14">
      <div className="section-shell grid grid-cols-1 gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-6">
          <div>
            <p className="tag mb-3">Kontakt</p>
            <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">Direkt anfragen</h2>
            <p className="max-w-xl text-sm text-slate-200/80">
              Schnelle Angebote, klare SLAs und verbindliche Ansprechpartner. Wir antworten innerhalb
              eines Werktags.
            </p>
          </div>

          <div className="space-y-3">
            {contactData.map((item) => (
              <div key={item.label} className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-slate-300/70">{item.label}</p>
                {item.href ? (
                  <a className="text-lg font-semibold text-slate-50" href={item.href}>
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-slate-50">{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-300/70">Erreichbarkeit</p>
            <p className="text-sm text-slate-200/85">Mo–Fr 08:00–18:00 Uhr • Rhein-Main Region</p>
          </div>
        </div>

        <motion.form
          className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft"
          action="mailto:info@tectrium.de"
          method="post"
          encType="text/plain"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs text-slate-300/70">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300/70">E-Mail</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300/70">Telefon</label>
              <input
                type="tel"
                name="phone"
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
              />
            </div>
            <div>
              <label className="text-xs text-slate-300/70">Service</label>
              <select
                name="service"
                className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
              >
                <option>Hausreinigung</option>
                <option>Technischer Service</option>
                <option>Außenanlagen</option>
                <option>Winterdienst</option>
                <option>Tiefgaragenreinigung</option>
                <option>Service für HV und ET</option>
                <option>Renovierungen</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-300/70">Nachricht</label>
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400/70 focus:ring-2 focus:ring-cyan-400/30"
            />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-300/70">
              DSGVO-konform • Keine Weitergabe an Dritte
            </p>
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.01]"
            >
              Nachricht senden
            </button>
          </div>
        </motion.form>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 shadow-soft">
        <div className="h-72 w-full overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Tectrium Standort"
            src="https://www.google.com/maps?q=An+der+Brunnenstube+27-31,+55120+Mainz&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
