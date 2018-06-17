// https://medium.com/@mikeeeeeeey/create-react-app-tailwind-css-feat-postcss-631d9e33ba8c
const tailwindCss = require('tailwindcss');

module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-preset-env')({
			stage: 3,
			features: {
				'nesting-rules': true,
			},
		}),
		// require('postcss-nested'),
		tailwindCss('./tailwind.config.js'),
		require('autoprefixer'),
	],
};
