/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        'xsm': '480px', // Define an extra-small breakpoint at 480px
      },
      colors: {
        amber: {
          custom: '#ffb444',
        },

        indigo: {
          custom: '#7855e0',
        },




        green: {
          custom: '#066a69',
          hover: '#183835'
        },
      },
      background: {
        amber: {
          custom: '#ffb444',
        },
      },
      animation: {
        'zoom-in': 'zoom-in-zoom-out 30s ease infinite',
      },
      keyframes: {
        'zoom-in-zoom-out': {
          '0%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1.5, 1.5)' },
          '100%': { transform: 'scale(1, 1)' },
        }
      },
      transitionDuration: {
        '2000': '2000ms',
        '5000': '5000ms',
      }
    },
  },
  plugins: [],
}

