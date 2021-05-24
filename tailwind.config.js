const plugin = require('tailwindcss/plugin')

const checkedSiblingPlugin = plugin(function ({ addVariant, e }) {
  addVariant('checked-sibling', ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:checked + .checked-sibling\\:${rule.selector.slice(1)}`
    })
  })
})

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
        strikeLine: 'url(/img/strike-line.png)',
      },
      screens: {
        '3xl': '1750px',
      },
    },
  },
  variants: {
    extend: {
      display: ['checked-sibling'],
    },
  },
  plugins: [checkedSiblingPlugin],
}
