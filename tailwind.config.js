/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c1d3ff',
          300: '#a2bdff',
          400: '#8ba7ff',
          500: '#6691ff',
          600: '#4d7bff',
          700: '#3461cc',  // --primary-dark equivalent
          800: '#003399',  // --primary-color
          900: '#002266',  // --primary-dark
        },
        accent: '#e63946',
        neutral: {
          light: '#f8f9fa',
          dark: '#2d3436',
          muted: '#636e72',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'input-focus': '0 0 0 3px rgba(0, 51, 153, 0.1)',
      },
      transitionTimingFunction: {
        'ease-custom': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
