import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#08070D", deep: "#100D18", card: "#171222", accent: "#A855F7", violet2: "#7C3AED",
        glow: "#C084FC", ink: "#F5F3FF", mute: "#A8A1B8", line: "rgba(168, 85, 247, 0.18)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: { page: "1240px" },
    },
  },
  plugins: [],
};
export default config;
