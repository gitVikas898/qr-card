/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'Slate 300': 'hsl(212, 45%, 89%)',
        'Slate 500': 'hsl(216, 15%, 48%)',
        'Slate 900': 'hsl(218, 44%, 22%)',
        'White': 'hsl(0, 0%, 100%)',
      },

    },
  },
  plugins: [],
}

