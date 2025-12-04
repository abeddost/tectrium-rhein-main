"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type MagneticButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition shadow-lg shadow-accent-500/25";
  const variants =
    variant === "primary"
      ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white"
      : "border border-white/50 bg-white/70 text-ink hover:border-accent-500 dark:border-white/10 dark:bg-white/10 dark:text-white";

  const Component = href ? "a" : "button";

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Component
        ref={ref as never}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={`${baseClasses} ${variants} ${className ?? ""}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
