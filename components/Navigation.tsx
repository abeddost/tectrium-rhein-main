"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Start", href: "#hero" },
  { label: "Über uns", href: "#about" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Referenzen", href: "#referenzen" },
  { label: "Kontakt", href: "#kontakt" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-5 z-40 transition-all ${isScrolled ? "scale-[0.995]" : ""}`}
      aria-label="Hauptnavigation"
    >
      <div className="glass border-glow flex items-center justify-between rounded-2xl px-4 py-3 shadow-soft">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/40 to-blue-500/30 shadow-glow" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sky-200/70">Tectrium</p>
            <p className="text-sm font-semibold text-slate-100">Rhein-Main</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-200 transition hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02]"
          >
            Angebot anfragen
          </a>
        </nav>

        <button
          className="md:hidden"
          aria-label="Menü öffnen"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span className="sr-only">Menü</span>
          <div className="h-10 w-10 rounded-xl border border-white/15 bg-white/5 p-2">
            <motion.span
              className="block h-[2px] w-full bg-white"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            />
            <motion.span
              className="my-1 block h-[2px] w-full bg-white"
              animate={{ opacity: isOpen ? 0 : 1 }}
            />
            <motion.span
              className="block h-[2px] w-full bg-white"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col divide-y divide-white/5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm text-slate-100 transition hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm font-semibold text-cyan-200"
              >
                Angebot anfragen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
