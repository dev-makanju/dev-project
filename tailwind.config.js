/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1024',
      xxl: '1440px',
    },
    colors: {
      'primary': '#414066',
      'solid-varaint': '#4C6640',
      'light-variant': '#525168',
    },
    fontFamily: {
      popins: ['Poppins', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        '2xl': '1rem',
        '4xl': '2rem',
      }
    },
  },
  plugins: [
    require('autoprefixer'),
  ]
}

