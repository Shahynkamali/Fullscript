const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: { max: '539px' },
        sm: { min: '540px' },
        md: { min: '668px' },
        lg: { min: '924px' },
        xl: { min: '1180px' },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
}
