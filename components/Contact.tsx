"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./MagneticButton";

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-20">
      <div className="absolute inset-0 gradient-bg opacity-70" />
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-10 shadow-glow backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 dark:text-slate-200">
              Kontakt aufnehmen
            </div>
            <h3 className="text-3xl font-semibold text-ink dark:text-white">
              Lassen Sie uns über Ihr Objekt sprechen.
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Ihr Name
                </span>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-inner outline-none transition focus:border-accent-500 focus:shadow-glow-soft dark:border-white/10 dark:bg-white/10 dark:text-white"
                  placeholder="Vor- und Nachname"
                  type="text"
                  name="name"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  E-Mail
                </span>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-inner outline-none transition focus:border-accent-500 focus:shadow-glow-soft dark:border-white/10 dark:bg-white/10 dark:text-white"
                  placeholder="Ihre E-Mail"
                  type="email"
                  name="email"
                />
              </label>
            </div>
            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Anliegen
              </span>
              <textarea
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-inner outline-none transition focus:border-accent-500 focus:shadow-glow-soft dark:border-white/10 dark:bg-white/10 dark:text-white"
                placeholder="Wobei dürfen wir unterstützen?"
                rows={4}
                name="message"
              />
            </label>
            <MagneticButton className="w-full justify-center" variant="primary">
              Nachricht senden
            </MagneticButton>
          </motion.form>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="card space-y-3">
              <div className="text-sm font-semibold text-ink dark:text-white">
                Harald Ganick
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-200">
                Tel. +49 (0) 177 343 00 15
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-200">
                info@tectrium.de
              </div>
              <div className="text-sm text-slate-700 dark:text-slate-200">
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
