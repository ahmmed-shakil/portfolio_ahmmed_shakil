/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        third: "var(--third)",
        last: "var(--last)",
        final: "var(--final)",
      },
      gridTemplateColumns: {
        header: "1fr 1fr",
        sixtyForty: "2fr 1fr",
        admin: "1fr 4fr",
        background: "0.5fr 5fr",
        background_layout: "1fr 3fr",
        cart: "2.8fr 1fr",
        cartCard: "4fr 1fr 1fr",
        product: "1fr 1.3fr 1fr",
        cartSummary: "3fr 1fr",
        blogPage: "3fr 1fr",
      },
      gridRowColumns: {
        projectCard: "2fr 3fr 1fr",
      },
      backgroundImage: {
        heroBg: "url(/src/images/hero-bg.webp)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
