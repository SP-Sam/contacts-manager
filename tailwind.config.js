module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-light": "#F1F3F5",
        "primary-dark": "#12295B",
        "neutral-dark": "#495057"
      },
      screens: {
        "mobile-g": "425px"
      }
    },
  },
  plugins: [],
};
