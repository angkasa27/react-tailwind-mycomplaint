module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#D10606',
      },
      fontFamily: {
        nunito: ['Nunito'],
      },
      height: {
        screen90: '90vh',
        screen80: '80vh',
        screen70: '70vh',
        screen60: '60vh',
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translate(0, -1rem)' },
          '50%': { transform: 'translate(0, 0rem)' },
        },
        bgUp: {
          '0%, 100%': { transform: 'translate(0, 0rem)' },
          '50%': { transform: 'translate(0, 1rem)' },
        },
        bgDown: {
          '0%, 100%': { transform: 'translate(0, 1rem)' },
          '50%': { transform: 'translate(0, 0rem)' },
        },
        navDown: {
          '0%': { transform: 'translate(0, -4rem)' },
          '100%': { transform: 'translate(0, 0rem)' },
        },
        modalDown: {
          '0%': { transform: 'translate(-50%, -40%)', opacity: '0%' },
          '100%': { transform: 'translate(-50%, -50%)', opacity: '100%' },
        },
      },
      animation: {
        upDown: 'upDown 2s ease-in-out infinite',
        bgUp: 'bgUp 15s ease-in-out infinite',
        bgDown: 'bgDown 15s ease-in-out infinite',
        navDown: 'navDown .2s ease-out',
        modalDown: 'modalDown .3s ease-out',
      },
      zIndex: {
        '-10': '-10',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '2rem',
      },
      scale: {
        175: '1.75',
        200: '2',
      },
      rotate: {
        20: '20deg',
        25: '25deg',
      },
    },
  },
  variants: {
    extend: { borderWidth: ['hover', 'focus'] },
  },
  plugins: [],
};
