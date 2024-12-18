/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
      colors: {
        background: "#FDF9FF",
        purple: {
          300: "#D268CC",
          600: "#8A7ED9",
          900: "#4946A6",
        }
      }
    },
	},
	plugins: [],
}
