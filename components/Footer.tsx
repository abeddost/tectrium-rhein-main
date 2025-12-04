export default function Footer() {
  return (
    <footer className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300/80">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-200/70">Tectrium Rhein-Main</p>
          <p className="text-slate-200">Premium Gebäudereinigung & Facility Services</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#about" className="hover:text-cyan-200">Über uns</a>
          <a href="#leistungen" className="hover:text-cyan-200">Leistungen</a>
          <a href="#referenzen" className="hover:text-cyan-200">Referenzen</a>
          <a href="#kontakt" className="hover:text-cyan-200">Kontakt</a>
          <a href="#" className="hover:text-cyan-200">Datenschutz</a>
          <a href="#" className="hover:text-cyan-200">Impressum</a>
        </div>
      </div>
    </footer>
  );
}
