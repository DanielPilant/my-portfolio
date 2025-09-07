/**
 * CHANGELOG:
 * - Extended vibrant color palette and sharp corner defaults.
 * - Set default transition duration.
 */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If there are no pages – doesn't hurt
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1220",
        foreground: "#e6ebf5",
        primary: { 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2" },
        accent: { 400: "#f472b6", 500: "#ec4899", 600: "#db2777" },
        info: { 500: "#60a5fa" },
        success: { 500: "#34d399" },
        warning: { 500: "#f59e0b" },
        muted: { 500: "#64748b" },
      },
      borderRadius: {
        DEFAULT: "0",
        lg: "0",
        md: "0",
        sm: "0",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;
