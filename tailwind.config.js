/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html", "./js/script.js","./node_modules/flowbite/**/*.js"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			fontFamily: {
				fontHeading: "Labrada, serif",
			},
			colors: {
				bluehue: "hsl(210, 100%, 60%)",
				redhue: "hsl(15, 100%, 60%)",
				redhuelight: "hsl(15, 100%, 70%)",
			},
			backgroundImage: {
				// bghero: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('https://clydebaconguis.github.io/portfolio/img/bg-hero.jpg')", 
				// bgproject: "url('https://clydebaconguis.github.io/portfolio/img/bg-main.jpg')", 
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
};
