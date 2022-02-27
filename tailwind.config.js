module.exports = {
  mode:'jit',
  purge: [
    './*html',
  ],
  darkMode: 'media', // or 'false' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    ///require('tailwindcss'),
    ///require('autoprefixer'),
  ],
}
