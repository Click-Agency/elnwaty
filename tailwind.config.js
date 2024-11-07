/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
        },
      },
      screens: {
        xs: "320px",
        "3xl": "1700px",
        "4xl": "1920px",
        ...defaultTheme.screens,
      },
      colors: {
        primary: "#334D9D",
        secondary: "#60B239",
        "body-primary": "#615957",
        "body-secondary": "#ACACAC",
      },
      fontSize: {
        "responsive-cover": "clamp(2.5rem, 7vw, 5rem)",
        "responsive-subCover": "clamp(1.7rem, 3vw, 3rem)",
        "responsive-2xl": "clamp(1rem, 3.8vw, 3rem)",
        "responsive-xl": "clamp(1.9rem, 3.5vw, 2.2rem)",
        "responsive-2lg": "clamp(1.6rem, 3vw, 1.9rem)",
        "responsive-lg": "clamp(1.5rem, 2.7vw, 1.6rem)",
        "responsive-md": "clamp(1.3rem, 2.5vw, 1.4rem)",
        "responsive-2md": "clamp(1.1rem, 2.0vw, 1.2rem)",
        "responsive-sm": "clamp(1.1rem, 1.75vw, 1.3rem)",
        "responsive-2sm": "clamp(0.95rem, 1.5vw, 1.1rem)",
        "responsive-xs": "clamp(0.9rem, 1.4vw, 1rem)",
        "responsive-2xs": "clamp(0.85rem, 1vw, 0.9rem)",
        "responsive-3xs": "clamp(0.75rem, 0.75vw, 0.8rem)",
      },
      backgroundImage: {
        "gradient-90deg": "linear-gradient(90deg, #68BB3D, #50A133)",

        "hero-pattern": "url('assets/imgs/bg-hero.png')",

        "wave-pattern": "url('assets/imgs/bg-wave.png')",

        "water-pattern": "url('assets/imgs/bg-water-2x.png')",

        "cyan-pattern": "url('assets/imgs/bg-gradient-cyan.png')",

        "move-slim-pattern": "url('assets/imgs/bg-moving-water-slim.png')",

        "moving-wave-pattern": "url('assets/imgs/bg-moving-wave.png')",

        "gradient-cyan": "linear-gradient(90deg, #e2f5fe 0%, #cae4ef 100%)",

        "mug-pattern": "url('assets/imgs/bg-mug.png')",

        "cup-water-pattern": "url('assets/imgs/bg-cup-water.png')",

        "tanks-pattern": "url('assets/imgs/bg-tanks-factory.png')",
        "drops-pattern": "url('assets/imgs/bg-drops.png')",

        "mask-chemical-pattern": "url('assets/imgs/masked-chemical.png')",

        "mask-factory-pattern": "url('assets/imgs/masked-factory.png')",

        "mask-maintenance-pattern": "url('assets/imgs/masker-maintenance.png')",
      },
      boxShadow: {
        "custom-glow":
          "0px -10px 20px 5px rgba(255,255,255,0.5), 0px -10px 20px 5px rgba(255,255,255,0.3), 0px -1px 10px 5px rgba(255,255,255,0.3), 0px -3px 5px 5px rgba(255,255,255,0.3)",
        bottom:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      decorationThickness: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
      },
      transitionProperty: {
        border: "border",
        height: "height",
      },

      keyframes: {
        appear: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
      animation: {
        appear: "appear 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
