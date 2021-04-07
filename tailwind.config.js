const { screens } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      xs: '420px',
      ...screens
    }
  }
}
