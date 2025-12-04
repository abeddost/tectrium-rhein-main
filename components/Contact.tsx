"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Kontakt</h2>
            <p className="text-base text-slate-700">
              Direkt, klar und persönlich. Wir freuen uns auf Ihre Anfrage.
            </p>
          </div>
          <div className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-glow-soft">
            Reaktionszeit &lt; 24h
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.form
            className="card space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  Ihr Name
                </span>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-inner outline-none transition focus:border-accent-500 focus:shadow-glow-soft"
                  placeholder="Vor- und Nachname"
                  type="text"
                  name="name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  E-Mail
                </span>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-inner outline-none transition focus:border-accent-500 focus:shadow-glow-soft"
                  placeholder="Ihre E-Mail"
                  type="email"
                  name="email"
                />
              </label>
            </div>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">
                Anliegen
              </span>
              <textarea
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-inner outline-none transition focus:border-accent-500 focus:shadow-glow-soft"
                placeholder="Wobei dürfen wir unterstützen?"
                rows={4}
                name="message"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:translate-y-[-2px]"
            >
              Nachricht senden
            </button>
          </motion.form>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="card space-y-3">
              <div className="text-sm font-semibold text-ink">
                Harald Ganick
              </div>
              <div className="text-sm text-slate-700">
                Tel. +49 (0) 177 343 00 15
              </div>
              <div className="text-sm text-slate-700">info@tectrium.de</div>
              <div className="text-sm text-slate-700">
                An der Brunnenstube 27-31
                <br />
                55120 Mainz
              </div>
            </div>
            <div className="card overflow-hidden p-0">
              <iframe
                title="Tectrium Map"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.3754541746173!2d8.2227!3d50.0272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd956d1fa7b36b%3A0xb14ef35b5ac6e3b5!2sMainz!5e0!3m2!1sen!2sde!4v1700000000000"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
