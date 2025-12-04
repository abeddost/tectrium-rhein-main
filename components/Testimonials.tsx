"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Laura Stein",
    role: "Hausverwaltung, Wiesbaden",
    quote:
      "Tectrium liefert konstant Premium-Ergebnisse. Kommunikation, Reports und Umsetzung wirken wie aus einem Guss."
  },
  {
    name: "Markus Thiel",
    role: "Eigentümer, Frankfurt",
    quote:
      "Reaktionszeit, Gründlichkeit und Freundlichkeit sind herausragend. Man spürt den Qualitätsanspruch sofort."
  },
  {
    name: "Selin Kaya",
    role: "Office Managerin, Mainz",
    quote:
      "Die Teams sind pünktlich, diskret und arbeiten extrem sauber. Unser Büro fühlt sich jeden Tag wie neu an."
  }
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink dark:text-white">
              Stimmen
            </h2>
            <p className="text-base text-slate-700 dark:text-slate-200">
              Vertrauensvolle Partnerschaften im Rhein-Main-Gebiet.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-8 shadow-glow backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="text-xl font-semibold text-ink dark:text-white">
                “{testimonials[index].quote}”
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent-500 to-accent-600" />
                <div>
                  <div className="text-sm font-semibold text-ink dark:text-white">
                    {testimonials[index].name}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-200">
                    {testimonials[index].role}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-8 rounded-full transition ${
                      i === index
                        ? "bg-accent-600"
                        : "bg-slate-200 dark:bg-white/20"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
