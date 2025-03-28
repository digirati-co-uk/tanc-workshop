import { defineConfig } from "vocs";

export default defineConfig({
	title: "Image Interoperability Framework (IIIF) workshop for beginners",
	logoUrl: "/tanc-logo.png",
	topNav: [
		{ text: "Workshop", link: "/getting-started", match: "/" },
		{ text: "Customer Portal", link: "https://google.com" },
	],
	theme: {
		accentColor: {
			textAccent: { light: "#2E2D5F", dark: "white" },
			backgroundAccent: { light: "#2E2D5F", dark: "#2E2D5F" },
			backgroundAccentHover: { light: "#2E2D5F", dark: "#2E2D5F" },
			backgroundAccentText: { light: "white", dark: "white" },
			borderAccent: { light: "#2E2D5F", dark: "#2E2D5F" },
			textAccentHover: { light: "#2E2D5F", dark: "#2E2D5F" },
		},
	},
	sidebar: [
		{
			text: "What you need for the workshop",
			link: "/what-you-will-need",
		},
		{
			text: "Getting Started",
			link: "/getting-started",
		},
		{
			text: "IIIF content to explore",
			link: "/examples-of-iiif-to-explore",
		},
		{
			text: "IIIF enabled images",
			link: "/iiif-enabled-images",
		},
	],
});
