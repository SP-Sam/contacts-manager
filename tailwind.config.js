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
        "neutral-dark": "#495057",
        "primary-bg": "#F7F8FC"
      },
      screens: {
        "mobile-g": "425px"
      }
    },
  },
  plugins: [],
};
