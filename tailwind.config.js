/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{html,js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fef2f2',
					100: '#fee2e2',
					200: '#fecaca',
					300: '#fca5a5',
					400: '#f87171',
					500: '#ef4444',
					600: '#dc2626',
					700: '#b91c1c',
					800: '#991b1b',
					900: '#7f1d1d',
					950: '#450a0a',
				},
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '1rem',
					md: '1.5rem',
					lg: '2rem',
					xl: '2rem',
				},
			},
		},
	},
}
