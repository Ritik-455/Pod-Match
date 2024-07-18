/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': "'Roboto',sans-serif",
      },
      fontSize: {
        xxl: "44px",
        "2lg": "40px",
        "2xxl": "91.73px",
      },
      colors: {
        grey: "#4D4D4D",
        lightwhite: "#fefefe",
        lightgrey: "#838383",
        lightvoilet: "#DEDDED",
      },
      backgroundImage: {
        'box-pattern': "linear-gradient(180deg, rgba(255, 255, 255, 1) 60%, rgba(235, 236, 239, 1) 40%);",
      },
      screens: {
        'sm': '576px',

        'md': '768px',

        'lg': '992px',

        'xl': '1200px',

        '2xl': '1400px',
      },
      boxShadow: {
        '3xl': '2px 45px 47.4px -15px #0000001A',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
        },
      },
    }
  },
  plugins: [
  ],
}

