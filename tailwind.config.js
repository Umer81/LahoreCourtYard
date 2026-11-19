/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#EFE7D5",
          deep: "#2E5136",
          soft: "#F7F0E7",
          muted: "#5f564d",
          rose: "#c9183a",
          roseBright: "#e2284d",
        },
      },
      boxShadow: {
        brand: "0 10px 30px rgba(46,81,54,0.35)",
      },
    },
  },
  plugins: [],
};

