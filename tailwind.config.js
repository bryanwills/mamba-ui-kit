/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-missing-require */
const colors = require('tailwindcss/colors');

module.exports = {
	purge: [],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue,
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.warmGray,
			trueGray: colors.trueGray,
			gray: colors.gray,
			blueGray: colors.blueGray,
			coolGray: colors.coolGray,
		},
		extend: {
			flex: {
				'2': '2 2 0%',
				'3': '3 3 0%',
			},
			minHeight: {
				'96': '24rem',
			},
			maxHeight: {
				'half-screen': '50vh',
			},
			zIndex: {
				'90': '90',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['hover', 'focus', 'active'],
			borderColor: ['hover', 'focus', 'active'],
			textColor: ['hover', 'focus', 'active'],
			ringColor: ['hover', 'focus', 'active'],
			ringOpacity: ['hover', 'focus', 'active'],
			ringWidth: ['hover', 'focus', 'active'],
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		({addComponents, theme}) => {
			const container = {
				'.container': {
					margin: 'auto',
					maxWidth: theme('maxWidth.full'),

					// Breakpoints
					'@screen sm': {
						maxWidth: theme('maxWidth.2xl'),
					},
					'@screen md': {
						maxWidth: theme('maxWidth.3xl'),
					},
					'@screen lg': {
						maxWidth: theme('maxWidth.5xl'),
					},
					'@screen xl': {
						maxWidth: theme('maxWidth.6xl'),
					},
					'@screen 2xl': {
						maxWidth: theme('maxWidth.7xl'),
					},
				},
			};
			addComponents(container);
		},
	],
};
