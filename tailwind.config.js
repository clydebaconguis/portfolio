/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.html"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		extend: {
			fontFamily: {
				fontHeading: "Edu VIC WA NT Beginner, cursive",
			},
			colors: {
				bluehue: "hsl(210, 100%, 60%)",
				redhue: "hsl(15, 100%, 60%)",
				redhuelight: "hsl(15, 100%, 70%)",
			},
			backgroundImage: {
				portfolio: "url('/img/portfolio01.jpeg')",
			},
		},
	},
	plugins: [],
};
