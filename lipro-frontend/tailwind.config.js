/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': '#40A2E3',
        'pale-blue': '#DEF1FF',
        'moderate-blue': '#40679E',
        'soft-blue': '#4AA7E5',
        'pure-blue': '#008DDA',
        'soft-blue2': '#8CC8F0',
        'soft-blue3': '#9DD0F3'

      },
      fontFamily: {
        'frank': ['"Frank Ruhl Libre"', 'serif'],
        'inter': ['"Inter"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

