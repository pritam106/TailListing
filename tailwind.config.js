const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary' : '#343434',
      },
      fontFamily: {
        'comf': ['Comfortaa', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'nun': ['Nunito', 'sans-serif'],
        'libre': ['Libre Baskerville', 'serif'],
        'monte': ["Montserrat", "sans-serif"],
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
