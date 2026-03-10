import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
      },
      colors: {
        sage: {
          DEFAULT: "#7d9b78",
          light: "#a3b8a0",
          lighter: "#d4e0d2",
          lightest: "#f0f4ef",
          dark: "#5c7a57",
        },
        mint: {
          DEFAULT: "#b8d4c8",
          light: "#dceee6",
          dark: "#8fb8a8",
        },
        gold: {
          DEFAULT: "#c9a96e",
          light: "#e0cc9e",
          dark: "#b08c4a",
        },
        cream: {
          DEFAULT: "#faf8f5",
          dark: "#f0ece5",
        },
        charcoal: {
          DEFAULT: "#2d3436",
          light: "#636e72",
          lighter: "#b2bec3",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #7d9b78 0%, #b8d4c8 50%, #d4e0d2 100%)",
        "sage-gradient":
          "linear-gradient(135deg, #f0f4ef 0%, #dceee6 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #c9a96e 0%, #e0cc9e 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
