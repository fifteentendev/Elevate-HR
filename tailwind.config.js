/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"clash-display": ["ClashDisplay-Regular", "sans-serif"],
				"clash-display-extralight": ["ClashDisplay-Extralight", "sans-serif"],
				"clash-display-light": ["ClashDisplay-Light", "sans-serif"],
				"clash-display-medium": ["ClashDisplay-Medium", "sans-serif"],
				"clash-display-semibold": ["ClashDisplay-Semibold", "sans-serif"],
				"clash-display-bold": ["ClashDisplay-Bold", "sans-serif"],
				"clash-display-variable": ["ClashDisplay-Variable", "sans-serif"],
			},
		},
	},
	plugins: [],
};
