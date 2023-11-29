/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				mytheme: {
					"primary": "#45BF86",
					"secondary": "#672E8C",
					"accent": "#332E8C",
					"neutral": "#8C7D2E",
					"base-100": "#ffffff",
					"info": "#3abff8",
					"success": "#3E8C2E",
					"warning": "#FFEFD4",
					"error": "#8C362E",
				},
			}
		]
	},
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	darkMode: "class",
  	plugins: [nextui()]
}
