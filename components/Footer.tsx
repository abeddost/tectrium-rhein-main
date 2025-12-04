"use client";

export function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/70 px-6 py-8 backdrop-blur dark:border-white/10 dark:bg-slate-900/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600" />
          <div className="font-semibold text-ink dark:text-white">
            Tectrium Rhein-Main
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a href="#hero" className="hover:text-accent-600">
            Start
          </a>
          <a href="#services" className="hover:text-accent-600">
            Leistungen
          </a>
          <a href="#contact" className="hover:text-accent-600">
            Kontakt
          </a>
          <a href="#" className="hover:text-accent-600">
            Datenschutz
          </a>
          <a href="#" className="hover:text-accent-600">
            Impressum
          </a>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-300">
          © {new Date().getFullYear()} Tectrium Rhein-Main. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
