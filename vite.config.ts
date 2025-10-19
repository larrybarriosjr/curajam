import path from "node:path"
import { biomePlugin as biome } from "@pbr1111/vite-plugin-biome"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")

	return {
		plugins: [
			tanstackRouter({
				autoCodeSplitting: true,
				target: "react",
			}),
			react(),
			biome(),
		],
		resolve: {
			alias: {
				app: path.resolve(__dirname, "./src/app"),
				assets: path.resolve(__dirname, "./src/assets"),
			},
		},
		server: {
			open: true,
			proxy: {
				"/api": env.VITE_API_URL || "http://localhost:4289",
			},
		},
	}
})
