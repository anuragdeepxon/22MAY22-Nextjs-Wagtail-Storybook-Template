const colors = require('tailwindcss/colors');

module.exports = {
  content:[
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors["indigo"]["500"],
          DEFAULT: colors["indigo"]["600"],
          dark: colors["indigo"]["700"]
        },
        secondary: {
          light: colors["blue"]["500"],
          DEFAULT: colors["blue"]["600"],
          dark: colors["blue"]["700"]
        }
      }
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
      require('tailwindcss'),
      require('autoprefixer'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
  ],
}
