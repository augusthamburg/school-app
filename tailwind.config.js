/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts, jsx, tsx}'],
	theme: {
		fontSize: {
			base: ['12px'],
		},
		fontFamily: {
			sans: ['SF UI Text', 'system-ui', 'ui-sans-serif'],
		},
		letterSpacing: {
			normal: '1.3px',
		},
		colors: {
			gray: {
				100: '#F4F5F9',
				200: '#edeff5',
				300: '#E6E8F0',
				400: '#d8dae5',
				500: '#c1c4d6',
				600: '#8f95b2',
				700: '#696f8c',
				900: '#101840',
			},
			blue: {
				50: '#EBF0FF',
				500: '#3366FF',
				600: '#2952CC',
			},
			red: {
				100: '#F9DADA',
				500: '#D14343',
			},
		},
		extend: {},
	},
	plugins: [],
}
