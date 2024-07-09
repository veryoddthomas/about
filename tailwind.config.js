/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const MONOCHROME_MODE = false;

const palette = [colors.slate, colors.sky, colors.teal];  // default
// const palette = [colors.neutral, colors.sky, colors.teal];  // a little warmer
// const palette = [colors.slate, colors.orange, colors.yellow];  // halloween
// const palette = [colors.slate, colors.emerald, colors.rose];  // christmas
// const palette = [colors.slate, colors.blue, colors.red];  // 4th of july
// const palette = [colors.slate, colors.yellow, colors.sky];  // default


const primary_base_color = palette[0];
const secondary_base_color = MONOCHROME_MODE ? palette[0] : palette[1];  // sky, neutral, yellow, red
const tertiary_base_color = MONOCHROME_MODE ? palette[0] : palette[2];  // teal, neutral

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: {
          dark: primary_base_color['950'],
          DEFAULT: primary_base_color['400'],
          light: primary_base_color['300'],
        },
        secondary: {
          dark: secondary_base_color['950'],
          light: secondary_base_color['500'],
        },
        tertiary: {
          dark: tertiary_base_color['950'],
          light: tertiary_base_color['500'],
        },

        neutral: {
          dark: colors.neutral['950'],
          DEFAULT: colors.neutral['400'],
          light: colors.neutral['300']
        }
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/herobg2b.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
