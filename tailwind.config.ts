import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        primary: "#0f172a",
        accent: "#22d3ee",
        cream: "#f8fafc",
        graphite: "#0b1224",
        muted: "#94a3b8"
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
        "soft-radial":
          "radial-gradient(circle at 20% 20%, rgba(56,189,248,0.18), transparent 25%), radial-gradient(circle at 80% 30%, rgba(14,165,233,0.12), transparent 30%), radial-gradient(circle at 50% 80%, rgba(59,130,246,0.12), transparent 25%)"
      },
      boxShadow: {
        glow: "0 10px 60px rgba(45, 212, 191, 0.28)",
        card: "0 25px 50px -12px rgba(15, 23, 42, 0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(34, 211, 238, 0.4)" },
          "50%": { boxShadow: "0 0 0 14px rgba(34, 211, 238, 0)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
