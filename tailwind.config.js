/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				"mono-sans": ["var(--font-mona-sans)"],
			},
			minHeight: {
				section: "min(800px,100vh)",
			},
			colors: {
				gray: "rgba(177, 178, 178, 1)",
				"body-bg": "var(--body-bg)",
				dark: "#090a0b",
				light: "#F6F6F6",
				"primary-light": "white",
				"primary-dark": "rgb(42,42,42)",
				"secondary-dark": "rgb(51,51,51)",
				"gray-66": "rgb(66,66,66)",
				"gray-54": "rgba(54, 54, 54, 1)",
				"gray-30": "rgb(30,30,30)",
				"gray-39": "rgb(39,39,39)",
				"gray-20": "rgb(20,20,20)",
				"light-pink": "rgba(231, 123, 166, 1)",
				"slate-gray": "rgba(102, 112, 133, 1)",
				coral: "rgba(237, 149, 141, 1)",
				violet: " rgba(224, 142, 245, 1)",
				"dark-gray": "rgba(166, 166, 166, 1)",

				"secondary-btn-color": "var(--secondary-btn-color)",
				"faq-border-color": "var(--faq-border-color)",
				"toggle-icon-color": "var(--toggle-icon-color)",
				"banner-bg": "var(--banner-bg)",
			},
			fontSize: {
				basic: [
					"16px",
					{
						lineHeight: "30px",
						fontWeight: "350",
					},
				],
				hero: [
					"36px",
					{
						lineHeight: "48px",
						fontWeight: "500",
					},
				],
				heading1: [
					"36px",
					{
						lineHeight: "52px",
						fontWeight: "600",
					},
				],

				navlink: [
					"12px",
					{
						lineHeight: "11.6px",
						fontWeight: "normal",
					},
				],
				p12: [
					"12px",
					{
						lineHeight: "11.6px",
					},
				],
				p15: [
					"15px",
					{
						lineHeight: "33px",
					},
				],
				p18: [
					"18px",
					{
						lineHeight: "30px",
					},
				],
				p14: [
					"14px",
					{
						lineHeight: "24px",
					},
				],
				p16: [
					"16px",
					{
						lineHeight: "30px",
					},
				],
				p18: [
					"18px",
					{
						lineHeight: "30px",
					},
				],
				p20: [
					"20px",
					{
						lineHeight: "32px",
					},
				],
				p22: [
					"22px",
					{
						lineHeight: "35px",
					},
				],
				p24: [
					"24px",
					{
						lineHeight: "35px",
					},
				],
				p26: [
					"26px",
					{
						lineHeight: "52px",
					},
				],
				p28: [
					"28px",
					{
						lineHeight: "48px",
					},
				],
				p32: ["32px", { lineHeight: "normal" }],
				p36: ["36px", { lineHeight: "normal" }],
				p48: ["48px", { lineHeight: "normal" }],
				p64: ["64px", { lineHeight: "70px" }],
			},
			backgroundImage: {
				// noise: "url(./public/assets/images/bg-noise.png)",
			},
			screens: {
				md: "768px",
				lg: "1012px",
				xl: "1280px",
			},
			fontWeight: {
				350: 350,
			},
		},
	},
	plugins: [],
};
