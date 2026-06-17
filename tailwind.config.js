/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fffaf2",
        peach: "#f6b8a2",
        tea: "#72836d",
        ink: "#2e2a27",
        mist: "#f3f0ea",
        linen: "#fbf4ea"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(83, 72, 60, 0.08)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
