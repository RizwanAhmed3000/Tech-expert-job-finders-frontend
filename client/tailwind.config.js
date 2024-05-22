/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobileSm: "320px",
        mobileRg: "376px",
        tabletSm: "480px",
        tabletRg: "640px",
        tabletLg: "768px",
        laptopSm: "901px",
        laptopRg: "1024px",
        desktopSm: "1200px",
        desktopRg: "1350px",
        desktopLg: "1536px",
      },
      colors: {
        "theme-red": "#ec4843",
        "theme-black": "#000000",
        "theme-yellow": "#ffa910",
        "coral-light": "#FEF6F5",
      },
      backgroundImage: {
        "solution-bg-image": "url('/src/assets/solution-bg.jpg')",
      },
    },
  },
  plugins: [],
};
