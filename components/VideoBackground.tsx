"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type VideoBackgroundProps = {
  src: string;
  className?: string;
  overlay?: boolean;
  opacity?: number;
  blur?: boolean;
};

export function VideoBackground({
  src,
  className,
  overlay = true,
  opacity = 0.12,
  blur = true
}: VideoBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.01, 1.06]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={`relative overflow-hidden rounded-3xl ${className ?? ""}`}
    >
      <video
        className={`h-full w-full object-cover ${blur ? "blur-sm" : ""}`}
        src={src}
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
        style={{ opacity }}
        poster="/fallback.svg"
      />
      {overlay ? (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent dark:from-black/60" />
      ) : null}
    </motion.div>
  );
}
