/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a2e",
        accent:  "#c9a84c",
        light:   "#f8f5f0",
        gold:    "#e8c96a",
        dark:    "#0d0d1a",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body:    ["Inter", "sans-serif"],
      },
      boxShadow: {
        gold:   "0 4px 24px rgba(201,168,76,0.25)",
        card:   "0 8px 32px rgba(0,0,0,0.10)",
        "card-hover": "0 24px 48px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
}
