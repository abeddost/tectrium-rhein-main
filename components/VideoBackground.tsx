"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type VideoBackgroundProps = {
  src: string;
  overlay?: boolean;
  className?: string;
};

export function VideoBackground({
  src,
  overlay = true,
  className
}: VideoBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={`relative overflow-hidden rounded-3xl shadow-2xl ${className ?? ""}`}
    >
      <video
        className="h-full w-full object-cover"
        src={src}
        playsInline
        autoPlay
        muted
        loop
        poster="/fallback.svg"
      />
      {overlay ? (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
      ) : null}
    </motion.div>
  );
}
