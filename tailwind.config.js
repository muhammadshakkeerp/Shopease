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
