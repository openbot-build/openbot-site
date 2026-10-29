import { defineConfig } from "astro/config"

export default defineConfig({
	site: "https://openbot.build",
	output: "static",
	server: { port: 4322 },
})
