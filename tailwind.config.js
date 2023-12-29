/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.vue',
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#6F00FF',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray-1': '#F8F8F8',
      'gray-2': '#FAFAFA',
      'gray-3': '#F6F6F6',
      'gray-4': '#B5B5B5',
      'gray-5': '#D2D2D2',
      'gray-6': '#2C2C2C',
      'gray-7': '#242424',
      'gray-8': '#1A1A1A',
    },
    fontFamily: {
      'mohave': ['Mohave', 'ui-sans-serif'],
      'raleway': ['Raleway', 'ui-sans-serif'],
    }
  },
  plugins: [],
}

