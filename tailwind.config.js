/** @type {import('tailwindcss').Config} */
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
        secondary: '#B8B2FB',
        third: '#FF7E80',
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
    },
  },
  plugins: [],
};
