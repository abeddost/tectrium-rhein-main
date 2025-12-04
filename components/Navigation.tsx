"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Über uns" },
  { href: "#services", label: "Leistungen" },
  { href: "#value", label: "Warum wir" },
  { href: "#gallery", label: "Showcase" },
  { href: "#testimonials", label: "Stimmen" },
  { href: "#contact", label: "Kontakt" }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-6 pt-4">
      <div
        className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "shadow-glow-soft" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-glow" />
          <div className="font-semibold tracking-tight">Tectrium Rhein-Main</div>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-accent-600 dark:text-slate-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-lg hover:shadow-accent-500/40"
          >
            Kontakt
          </a>
          <ThemeToggle />
        </div>
        <button
          onClick={() => setOpen((s) => !s)}
          className="relative h-10 w-10 rounded-2xl bg-white/70 text-ink backdrop-blur md:hidden dark:bg-white/10 dark:text-white"
          aria-label="Navigation öffnen"
        >
          <span
            className={`absolute left-2.5 top-3 h-0.5 w-5 rounded-full bg-current transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-2.5 top-4.5 h-0.5 w-5 rounded-full bg-current transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-2.5 top-6 h-0.5 w-5 rounded-full bg-current transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 flex max-w-6xl flex-col gap-2 rounded-3xl bg-white/80 p-4 text-ink shadow-xl backdrop-blur dark:bg-slate-900/90 dark:text-white md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-2 text-sm font-semibold transition hover:bg-slate-100 dark:hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between px-2">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-lg hover:shadow-accent-500/40"
              >
                Kontakt
              </a>
              <ThemeToggle />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
