module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors:{
        green:{
          DEFAULT:'#00f260',
        }
      }
    },
    fontFamily: {
      kushan: [
        "Kaushan Script",
        "Arial",
        "Helvetica",
        "sans-serif",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
