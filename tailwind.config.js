/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    theme: ['light']
  },
  theme: {
    extend: {},
  },
  plugins: [daisyui],
}

