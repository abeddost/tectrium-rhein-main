import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "SF Pro Text",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      colors: {
        ink: "#0f172a",
        mist: "#f8fbff",
        accent: {
          500: "#5aa4ff",
          600: "#2f7dff"
        }
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.65), rgba(255,255,255,0.35))",
        "soft-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
        "aurora":
          "radial-gradient(circle at 20% 20%, rgba(90,164,255,0.2), transparent 20%), radial-gradient(circle at 80% 0%, rgba(125,255,214,0.2), transparent 18%), radial-gradient(circle at 50% 80%, rgba(255,220,150,0.25), transparent 25%)"
      },
      boxShadow: {
        glow: "0 20px 60px rgba(90,164,255,0.35)",
        "glow-soft": "0 10px 40px rgba(90,164,255,0.2)"
      },
      animation: {
        "float-slow": "float 12s ease-in-out infinite",
        "gradient-move": "gradient 12s ease infinite",
        "shimmer-soft": "shimmer 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
