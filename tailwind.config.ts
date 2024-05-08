// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-blue": "#ecf1f1",
        "light-grey": "#ebebeb",
        grey: "#12121226",
        yellow: "#ffe7b500",
        "grey-text": "#555555",
        "light-background": "#f4f5f5",
        "grey-border": "rgb(229, 231, 235)",
        "background-grey": "#d7dcdd",
      },
      fontFamily: {
        lucida: ["lucida", "sans-serif"],
        ephesis: ["ephesis", "sans-serif"],
        MPlusRegular: ["MPlusRegular", "sans-serif"],
        MPlusMedium: ["MPlusMedium", "sans-serif"],
        MPlusBold: ["MPlusBold", "sans-serif"],
        MPlusExtraBold: ["MPlusExtraBold", "sans-serif"],
        MPlusLight: ["MPlusLight", "sans-serif"],
        MPlusThin: ["MPlusThin", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
