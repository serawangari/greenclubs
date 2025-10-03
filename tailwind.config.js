module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        crafty: ["'Crafty Girls'", "cursive"], // for headings
        fredoka: ["'Fredoka'", "sans-serif"],  // for body text
      },
    },
  },
  plugins: [],
};
