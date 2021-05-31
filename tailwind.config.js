const plugin = require('tailwindcss/plugin')

const IMAGES_PATH = process.env.NEXT_PUBLIC_IMAGES_URL

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
    backgroundSize: {
      cover: 'cover',
      contain: 'contain',
      bigger: 'auto 120%',
    },
    colors: {
      primary: '#231f20',
      secondary: '#fae161',
      white: '#fff',
      dark: '#ddd',
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
      '4xl': 100,
    },
    extend: {
      backgroundImage: {
        frameWhite: `url(${IMAGES_PATH}frame_white.png)`,
        frameWhiteBig: `url(${IMAGES_PATH}frame_white_big.png)`,
        frameYellow: `url(${IMAGES_PATH}frame_yellow.png)`,
        hero: `url(${IMAGES_PATH}cover.jpg)`,
        strikeLine: `url(${IMAGES_PATH}strike_line.png)`,
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
