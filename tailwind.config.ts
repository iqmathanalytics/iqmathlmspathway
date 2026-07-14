import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: IQmath logo blue (#0F75BD)
        brand: {
          50: "#eef7fc",
          100: "#d5ebf7",
          200: "#aed7ef",
          300: "#7cbce0",
          400: "#469ccb",
          500: "#0F75BD",
          600: "#0d66a6",
          700: "#0b558a",
          800: "#0a4671",
          900: "#083a5c",
        },
        // Accent: IQmath logo lime (#8CC63E)
        accent: {
          50: "#f5fbeb",
          100: "#e8f6d0",
          200: "#d2eda7",
          300: "#b5e076",
          400: "#9fd14f",
          500: "#8CC63E",
          600: "#6fa32c",
          700: "#557d24",
          800: "#456420",
          900: "#3a541d",
        },
        python: {
          blue: "#3776ab",
          yellow: "#ffd343",
        },
      },
      fontFamily: {
        sans: ["system-ui", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["Consolas", "Monaco", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
