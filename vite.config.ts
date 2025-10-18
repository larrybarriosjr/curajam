import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import biome from "vite-plugin-biome"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")

	return {
		plugins: [react(), biome()],
		server: {
			open: true,
			proxy: {
				"/api": env.VITE_API_URL || "http://localhost:4289",
			},
		},
	}
})
