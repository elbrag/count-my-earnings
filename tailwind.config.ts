import type { Config } from "tailwindcss";

const config: Config = {
	mode: "jit",

	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		{ pattern: /max-w-./ },
		{ pattern: /text-./ },
		{ pattern: /bg-./ },
		{ pattern: /border-./ },
	],
};
export default config;
