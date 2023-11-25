/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    textColor:{
      'primary': '#37323e',
      'secondary': '#deb841',
      'warning':'#de9e36',
      'dummy':'#e5e5e5',
      'white': '#FFFFFF',
      'black':'#000000',
    },
    extend: {
      screens:{
        'widescreen':{ 'raw' : '(min-aspect-raio: 3/2)'},
        'tailscreen':{'raw' : '(min-aspect-ratio : 1/2)'},
      }
    },
  },
  plugins: [],
}

