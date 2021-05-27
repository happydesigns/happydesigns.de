const colors = require('tailwindcss/colors')

module.exports = {
  // mode: 'jit',
  purge: {
    enabled: false,
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ]
  },
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray': colors.trueGray,
        'hd-orange': '#f60'
      },
      spacing: {
        'page': '90vh',
      },
      maxWidth: {
        'badge': '5rem',
        'tap': '10.5rem',
      },
      boxShadow: {
        '1dp': '0 2px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 1px 3px 0 rgba(0, 0, 0, 0.06)',
        '2dp': '0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.06)',
        '4dp': '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.07), 0 1px 10px 0 rgba(0, 0, 0, 0.06)',
        '8dp': '0 5px 5px -3px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.07), 0 3px 14px 2px rgba(0, 0, 0, 0.06)',
        '12dp': '0 7px 8px -4px rgba(0, 0, 0, 0.1), 0 12px 17px 2px rgba(0, 0, 0, 0.07), 0 5px 22px 4px rgba(0, 0, 0, 0.06)',
        '16dp': '0 8px 10px -5px rgba(0, 0, 0, 0.1), 0 16px 24px 2px rgba(0, 0, 0, 0.07), 0 6px 30px 5px rgba(0, 0, 0, 0.06)',
        '20dp': '0 10px 13px -6px rgba(0, 0, 0, 0.1), 0 20px 31px 3px rgba(0, 0, 0, 0.07), 0 8px 38px 7px rgba(0, 0, 0, 0.06)',
        '24dp': '0 11px 15px -7px rgba(0, 0, 0, 0.1), 0 24px 38px 3px rgba(0, 0, 0, 0.07), 0 9px 46px 8px rgba(0, 0, 0, 0.06)',
      },
      dropShadow: {
        '1dp': '0 2px 1px -1px rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.07), 0 1px 3px 0 rgba(0, 0, 0, 0.06)',
        '2dp': '0 3px 1px -2px rgba(0, 0, 0, 0.1), 0 2px 2px 0 rgba(0, 0, 0, 0.07), 0 1px 5px 0 rgba(0, 0, 0, 0.06)',
        '4dp': '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.07), 0 1px 10px 0 rgba(0, 0, 0, 0.06)',
        '8dp': '0 5px 5px -3px rgba(0, 0, 0, 0.1), 0 8px 10px 1px rgba(0, 0, 0, 0.07), 0 3px 14px 2px rgba(0, 0, 0, 0.06)',
        '12dp': '0 7px 8px -4px rgba(0, 0, 0, 0.1), 0 12px 17px 2px rgba(0, 0, 0, 0.07), 0 5px 22px 4px rgba(0, 0, 0, 0.06)',
        '16dp': '0 8px 10px -5px rgba(0, 0, 0, 0.1), 0 16px 24px 2px rgba(0, 0, 0, 0.07), 0 6px 30px 5px rgba(0, 0, 0, 0.06)',
        '20dp': '0 10px 13px -6px rgba(0, 0, 0, 0.1), 0 20px 31px 3px rgba(0, 0, 0, 0.07), 0 8px 38px 7px rgba(0, 0, 0, 0.06)',
        '24dp': '0 11px 15px -7px rgba(0, 0, 0, 0.1), 0 24px 38px 3px rgba(0, 0, 0, 0.07), 0 9px 46px 8px rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        'trebuchet': ['Trebuchet MS', 'Helvetica', 'sans-serif'],
        'lucida': ['Lucida Grande','Lucida Sans Unicode', 'sans-serif']
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  }
}
