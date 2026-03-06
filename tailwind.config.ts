import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#2DB89A",
          hover: "#239E84",
          soft: "#D4F0E9",
        },
        mint: {
          DEFAULT: "#F0FAF8",
          dark: "#1A2A28",
        },
        brand: {
          primary: "#FAFFFE",
          lavender: "#F3F0FA",
          peach: "#FAF3F0",
        },
        text: {
          primary: "#1A1F1E",
          secondary: "#6B7B78",
          "on-dark": "#F0FAF8",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
