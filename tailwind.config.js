/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#06286E',
        secondaryColor: '#164EC0',
      },
      backgroundImage: theme => ({
        'card-front-gradient': 'linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)',
        'card-back-gradient': 'linear-gradient(222.94deg, #071844 -4.31%, #071844 -0.03%, #2D87B6 84.9%, #2D87B6 103.81%)',
      }),
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}