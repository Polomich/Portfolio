module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
        'white': '#FFF6F9',
        'pink': '#FFC8DD',
        'dark-pink': '#FFAFCC',
        'blue': '#BDE0FE',
        'dark-blue': '#A2D2FF'
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}