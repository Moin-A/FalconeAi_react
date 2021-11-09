module.exports = {
  purge: [],
  purge: ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/background.svg')",
        "fancy-hero-pattern": "url('/fancybg.svg')",
      }),
      height: {
        fit: "fit-content",
        "fit-screen": "79%",
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      animation: {
        "spin-slow": "ping 1s cubic-bezier(0, 0, 0.2, 1) 1;",
      },
      keyframes: {
        "spin-slow": {
          "0%": { opacity: 1 },
          "50%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "active"],
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
