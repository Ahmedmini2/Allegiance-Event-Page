/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montsRegular:['Regular'],
        montsMedium:['Medium'],
        montsBold:['Bold'],
        montsLight:['Light']
      },
      colors: {
        'main-green':'#06342c',
        'main-green-500':'#03251E',
        'main-gold':'#d8c59d',
      },
    },
  },
  plugins: [],
}

