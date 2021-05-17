module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#231f20',
      secondary: '#fae161',
      white: '#fff',
    },
    fontFamily: {
      primary: ['Gunnar', 'system-ui', 'sans-serif'],
      secondary: ['Santaray', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      base: 18,
      lg: 24,
      xl: 30,
      '2xl': 45,
      '3xl': 60,
    },
    extend: {
      backgroundImage: {
        hero: 'url(/img/cover.jpg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
