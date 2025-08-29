/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: '#4FB3FF',        // Neon Blue (for buttons, accents)
        secondary: '#A288E3',      // Soft Purple (for gradients/details)
        background: '#0F0F0F',     // Charcoal Black (main background)
        textPrimary: '#EAEAEA',    // Light Gray (main text)
        textSecondary: '#A0A0A0',  // Cool Gray (subtext)
        hoverAccent: '#7F5AF0',    // Electric Violet (button hovers)
        border: '#1C1C1E',         // Dark Slate (dividers, borders)
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
