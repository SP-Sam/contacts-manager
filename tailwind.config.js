module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-light": "#F1F3F5",
        "primary-medium": "#244677",
        "primary-dark": "#12295B",
        "neutral-dark": "#495057",
        "primary-bg": "#F7F8FC",
        "feedback-focus-medium": '#5C7CFA',
        "feedback-focus-dark": "#4263EB",
        "feedback-error-dark": "#DB3030"
      },
      screens: {
        "mobile-g": "425px",
        "laptop-g": "1440px"
      }
    },
  },
  plugins: [],
};
