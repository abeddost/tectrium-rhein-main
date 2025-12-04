import { motion } from "framer-motion";

type VideoBackgroundProps = {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  poster?: string;
  overlay?: boolean;
};

export default function VideoBackground({
  src,
  className,
  autoPlay = true,
  muted = true,
  loop = true,
  poster,
  overlay = true
}: VideoBackgroundProps) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className ?? ""}`}>
      <motion.video
        className="h-full w-full object-cover"
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        poster={poster}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <source src={src} type="video/mp4" />
      </motion.video>
      {overlay && <div className="absolute inset-0 hero-overlay pointer-events-none" />}
    </div>
  );
}
