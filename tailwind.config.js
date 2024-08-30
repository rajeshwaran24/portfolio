/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor :{
        'clr-1' :' #2b2b77',
        'line-clr-1':'#552e5a',
        'line-clr-2':'#e1a6e1'
      }
    },
    fontFamily:{
      'font-1' :'Sriracha'
    }
  },
  plugins: [],
}

