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
        'moderate-blue': '#40679E'

      },
      fontFamily: {
        'frank': ['"Frank Ruhl Libre"', 'serif'],
        'inter': ['"Inter"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

