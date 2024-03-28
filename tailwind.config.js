/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern-iceland":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(29,35,42, 0.8)), url('/bgwide7.png')",
        "hero-pattern-japan":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(29,35,42, 0.8)), url('/japwide3.png')",
        "hero-pattern-home":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(29,35,42, 0.8)), url('/homewide1.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};
