const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "350px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue"],
        mont: ["Montserrat"],
      },
    },
  },
};
