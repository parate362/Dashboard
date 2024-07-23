/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  
  theme: {
    extend: {
   
      fontFamily: {
        body: ["Open Sans", "sans-serif", "Arial", "Helvetica Neue", "Inter"],
      },
      boxShadow: {
        'lg-blue': '0 4px 6px -1px rgba(0, 112, 255, 0.1), 0 2px 4px -1px rgba(0, 112, 255, 0.06)',
      },
    },
  },
  plugins: [],
}

