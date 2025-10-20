import path from "node:path"
import { biomePlugin as biome } from "@pbr1111/vite-plugin-biome"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import sonda from "sonda/vite"
import { defineConfig, loadEnv } from "vite"

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "")

	return {
		build: {
			rolldownOptions: {
				output: {
					advancedChunks: {
						groups: [
							{ name: "react-dom", test: /node_modules\/react-dom/ },
							{ name: "react", test: /node_modules\/react/ },
							{ name: "mantine", test: /node_modules\/@mantine/ },
							{ name: "zod", test: /node_modules\/zod/ },
							{ name: "pnpm", test: /node_modules\/.pnpm/ },
						],
					},
				},
			},
			sourcemap: true,
		},
		plugins: [
			tanstackRouter({
				autoCodeSplitting: true,
				generatedRouteTree: "./src/app/routeTree.gen.ts",
				target: "react",
			}),
			react(),
			biome(),
			sonda(),
		],
		resolve: {
			alias: {
				app: path.resolve(__dirname, "./src/app"),
				assets: path.resolve(__dirname, "./src/assets"),
				components: path.resolve(__dirname, "./src/components"),
				hooks: path.resolve(__dirname, "./src/hooks"),
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
