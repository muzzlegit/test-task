/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        text: '#EBD8FF',
        textSecondary: '#373737',
        buttonBg: '#EBD8FF',
        activeButtonBg: '#5CD3A8',
        red: '#bb0a01' /*rgba(187, 10, 1, .8)*/,
        orange: '#f7ad0e' /*rgba(221, 221, 189, 1)*/,
        green: '#06ec38',
      },
      backgroundImage: {
        articleBg:
          'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
      },
      boxShadow: {
        cardShadow: '-3px 7px 20px rgba(0, 0, 0, 0.23)',
        buttonShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
