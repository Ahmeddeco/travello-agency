import {nextui} from "@nextui-org/react";


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
 ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        orangy: "#DF6951",
        yellowy: "#f2994a",
        blueblack: "#181E4B",
        greyy: "#5E6282",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        volkhov: "var(--font-volkhov)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
