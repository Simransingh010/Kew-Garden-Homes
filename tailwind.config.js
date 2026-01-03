/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary brand colors (premium deep green + muted gold)
        primary: {
          DEFAULT: "#0D5C3D",
          dark: "#053A1F",
          light: "#E8F5E9",
        },
        accent: {
          DEFAULT: "#C4965B",
          light: "#E5D5B8",
        },
        // Neutral scale for typography and backgrounds
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#4A4A4A",
          800: "#262626",
          900: "#1A1A1A",
        },
        // Legacy color support (for gradual migration)
        customGreen: "#0D5C3D",
        customWhite: "#F0EDE6",
        customAccent: "#C4965B",
        customGreenLight: "#1A5A3F",
        customGreenDark: "#053A1F",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        // 8px grid system
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "48px",
        xl: "96px",
      },
      boxShadow: {
        custom: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        premium: "0 10px 30px rgba(13, 92, 61, 0.15)",
      },
      transitionProperty: {
        spacing: "margin, padding",
      },
    },
  },
  plugins: [forms],
};
