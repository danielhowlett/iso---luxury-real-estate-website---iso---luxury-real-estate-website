/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "colors-miscellaneous-keyboards-glyphs-primary":
          "var(--colors-miscellaneous-keyboards-glyphs-primary)",
      },
    },
  },
  plugins: [],
};
