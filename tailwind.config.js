/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('./src/assets/bg.jpg')",
      },
      fontFamily: {
        roboto: "Roboto",
      },
      colors: {
        deeporange: "#F3952B",
        floral: "#FFF8F0",
      },
    },
  },
  plugins: [],
};
