/** @type {import('tailwindcss').Config} */
export default {
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
        lightGray:"#D1D5DB"
      },
      colors:{
        lightGray:"#D1D5DB"
      },
      
      
    },
  },
  plugins: [
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
