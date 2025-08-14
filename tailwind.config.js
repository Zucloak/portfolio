/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#121212',
        primary: '#C89B3C',
        'primary-hover': '#F0E6D2',
        'text-primary': '#F0E6D2',
        'text-secondary': '#A09480',
        border: '#3A3A3C',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
