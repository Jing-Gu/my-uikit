module.exports = {
  purge: {
    // enabled: true,
    // content: ['./src/**/*.{html,ts}']
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'Roboto', 'sans-serif'],
      montserrat: ['Montserrat', 'Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        carblue: {
          100: 'var(--blue-100)',
          300: 'var(--blue-300)',
          500: 'var(--blue-500)',
          700: 'var(--blue-700)',
          900: 'var(--blue-900)'
        },
        caryellow: {
          100: 'var(--yellow-100)',
          300: 'var(--yellow-300)',
          500: 'var(--yellow-500)',
          700: 'var(--yellow-700)',
          900: 'var(--yellow-900)'
        },
        success: {
          100: 'var(--green-100)',
          300: 'var(--green-300)',
          500: 'var(--green-500)',
          700: 'var(--green-700)',
          900: 'var(--green-900)'
        },
        error: {
          100: 'var(--red-100)',
          300: 'var(--red-300)',
          500: 'var(--red-500)',
          700: 'var(--red-700)',
          900: 'var(--red-900)'
        },
        coolgrey: {
          50: 'var(--coolgrey-50)',
          100: 'var(--coolgrey-100)',
          300: 'var(--coolgrey-300)',
          500: 'var(--coolgrey-500)',
          700: 'var(--coolgrey-700)',
          900: 'var(--coolgrey-900)',
        },
        warmgrey: {
          50: 'var(--warmgrey-50)',
          100: 'var(--warmgrey-100)',
          300: 'var(--warmgrey-300)',
          500: 'var(--warmgrey-500)',
          700: 'var(--warmgrey-700)',
          900: 'var(--warmgrey-900)',
        },
        neutral : {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          300: 'var(--neutral-300)',
          500: 'var(--neutral-500)',
          700: 'var(--neutral-700)',
          900: 'var(--neutral-900)',
        }
      },
      gridTemplateColumns: {
        'style1': '300px auto'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundOpacity: ['disabled'],
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
