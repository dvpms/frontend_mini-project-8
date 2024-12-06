/** @type {import('tailwindcss').Config} */
exports.default = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

