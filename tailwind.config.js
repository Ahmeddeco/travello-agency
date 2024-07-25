import { nextui } from "@nextui-org/react"


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        mob: '420px',
        tab: '960px',
        desk: '1280px',
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        volkhov: "var(--font-volkhov)",
      },
      boxShadow: {
        sm: '0px 2px 4px 0px rgba(11,10, 55, 0.15)',
        lg: '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',

      },
    },
    fontSize: {
      xs: ['14px', { lineHeight: '24px', letterSpacing: '0.03em' }],
      sm: ['16px', { lineHeight: '28px', letterSpacing: '0.03em' }],
      lg: ['18px', { lineHeight: '28px', letterSpacing: '0.03em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '0.03em' }],
      '2xl': ['36px', { lineHeight: '48px', letterSpacing: '0.032em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '0.032em' }],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '0.032em' }],
      '5xl': ['80px', { lineHeight: '80px', letterSpacing: '0.032em' }],
    },
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        light: {
          colors: {
            primary: '#DF6951',
            secondary: '#f2994a',
            // default: '#5E6282',
            background: '#F6ECE8',
            foreground: '#131313'

          },
        },
        dark: {
          colors: {
            primary: '#DF6951',
            secondary: '#f2994a',
            // default: '#5E6282',
            background: '#131313',
            foreground: '#F6ECE8'

          },
        },
      }
    }
  )]
}
