import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F4F1EA",
        surface: "#EFEBE1",
        card: "#FFFFFF",
        ink: "#15191C",
        muted: "#454D4D",
        "muted-2": "#5C6660",
        faint: "#8A938F",
        "green-deep": "#103D34",
        green: "#1FA971",
        "green-soft-bg": "#E7F0EA",
        "green-soft-ink": "#0F5238",
        "green-soft-ink-2": "#7FD3AE",
        "on-dark": "#EAF1EC",
        "on-dark-muted": "#B7C8C0",
        "on-dark-faint": "#D6E3DC",
        danger: "#C0392B",
      },
      fontFamily: {
        display: ["var(--font-newsreader)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.02em",
      },
      borderColor: {
        hairline: "rgba(20,25,28,0.10)",
        "hairline-soft": "rgba(20,25,28,0.08)",
      },
      boxShadow: {
        card: "0 30px 70px -30px rgba(16,61,52,0.35)",
        "card-sm": "0 12px 30px -18px rgba(16,61,52,0.30)",
      },
      transitionTimingFunction: {
        crisp: "cubic-bezier(0.16,1,0.3,1)",
      },
      keyframes: {
        pulseDot: {
          "0%": { boxShadow: "0 0 0 0 rgba(31,169,113,0.55)" },
          "70%": { boxShadow: "0 0 0 10px rgba(31,169,113,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(31,169,113,0)" },
        },
        bar: {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseDot: "pulseDot 1.8s ease-out infinite",
        bar: "bar 1.1s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
