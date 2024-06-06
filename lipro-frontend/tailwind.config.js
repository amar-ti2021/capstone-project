/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'frank': ['"Frank Ruhl Libre"', 'serif'],
        'inter': ['"Inter"', 'sans-serif']
      },
    },
  },
  plugins: [],
}

