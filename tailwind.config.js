/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Uber", "sans-serif"],
      },
      colors: {
        lightOrange: "#FEEFE7",
        softOrange: "#FBCDB4",
        textMain: "#333",
        textLight: "#666",
        textDark: "#333",
        textBody: "#333",
        textContrast: "#eee",
      },
      opacity: ["disabled"],
    },
    daisyui: {
      themes: [
        {
          winter: {
            ...require("daisyui/src/colors/themes")["[data-theme=winter]"],
            primary: "#e34",
            "primary-focus": "white",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
  corePlugins: {
    preflight: false,
  },
};
