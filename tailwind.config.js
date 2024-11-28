/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      darker: ["Darker Grotesque", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
      paytone: ["Paytone One", "sans-serif"],
      patrick: ["Patrick Hand", "sans-serif"],
      sriracha: ["Sriracha", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
