/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBF3E9',
        secondary: '#23B28C',
        third: '#fd5e61',
        'light-red': '#FF7E80',
        'jet-black': '#33312F',
        'tea-rose': '#FFD0D0',
        'jungle-green': '#23B28C',
        aquamarine: '#01F7A3',
        poppy: '#DB3834',
      },
      fontFamily: {
        ubuntu: ['Ubuntu'],
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
        xs: { max: '550px' },
      },
    },
  },
  plugins: [],
  important: true,
};
