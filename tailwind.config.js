/** @type {import('tailwindcss').Config} */
export default {
  darkMode:"class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        robo:['Roboto','sans-serif']
      },
      backgroundColor:{
        primaryColor: "#e2dfd2",
        secondaryColor:"#c7b6a3",
        lightGray:"#D1D5DB",
        darkModeBg:"#1f2937"
      },
      colors:{
        darkModeText:"#FFFFFF",
        dark:"#1A202C",
        lightText:"#FFFFFF",
        lightGray:"#D1D5DB",
        primary:"#2874f0"
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-secondary': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      gradientColorStops: theme => ({
        'primary-start': theme('colors.primaryColor'),
        'primary-end': theme('colors.secondaryColor'),
        'dark-start': theme('colors.darkModeBg'),
        'dark-end': theme('colors.dark'),
      }),
      
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwindcss'),
    // eslint-disable-next-line no-undef
    require('autoprefixer'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.flexCenter': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  
  ],
}
