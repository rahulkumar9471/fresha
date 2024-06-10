/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#D6D6D6',
        tertiary: '#FFFFFF',
        'dark-subtle': '#FFF',
        'light-subtle': '#418160',
      }
    },
  },
  plugins: [],
}

