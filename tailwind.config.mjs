/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false
	},

	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},

		fontFamily: {
			sans: ['Graphik', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},

		extend: {
			colors: {
				'blue': '#1fb6ff',
				'pink': '#ff49db',
				'orange': '#ff7849',
				'green': '#13ce66',
				'gray-dark': '#273444',
				'gray': '#8492a6',
				'gray-light': '#d3dce6',
				'coral-pink': '#f07f75',
				'pastel-purple' : '#c3b1e1',
				'better-grey' :  '#313338',
				'salmon' : '#f26967'

			},
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			}
		}
	}
}