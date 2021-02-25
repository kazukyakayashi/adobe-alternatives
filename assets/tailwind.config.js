module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: 'medias', // or 'media' or 'class'
  },

  variants: {
    extend: {
      textOpacity: ['dark']
    },
  },
  plugins: [],
}
