/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        uber: ["Uber", "sans-serif"],
      },
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
  plugins: [require("daisyui")],
  corePlugins: {
    preflight: false,
  },
};
