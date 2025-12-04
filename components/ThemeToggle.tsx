"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("theme") as "light" | "dark" | null)
        : null;
    if (stored) {
      setTheme(stored);
      document.documentElement.dataset.theme = stored;
    }
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof window !== "undefined") {
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/40 bg-white/60 text-ink shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:shadow-glow-soft dark:border-white/10 dark:bg-white/10 dark:text-white"
      aria-label="Darstellung wechseln"
    >
      {theme === "light" ? (
        <span className="text-sm">☾</span>
      ) : (
        <span className="text-sm">☀︎</span>
      )}
    </button>
  );
}
