/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
}
