import path from "node:path"
import { biomePlugin as biome } from "@pbr1111/vite-plugin-biome"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import sonda from "sonda/vite"
import { defineConfig, loadEnv } from "vite"
import "vitest/config"

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
			sonda({ outputDir: "__local__/.sonda" }),
			tanstackRouter({
				autoCodeSplitting: true,
				generatedRouteTree: "./src/app/routeTree.gen.ts",
				target: "react",
				tmpDir: "__local__/.tanstack/tmp",
			}),
			react(),
			biome(),
		],
		resolve: {
			alias: {
				api: path.resolve(__dirname, "./api"),
				app: path.resolve(__dirname, "./src/app"),
				assets: path.resolve(__dirname, "./src/assets"),
				components: path.resolve(__dirname, "./src/components"),
				features: path.resolve(__dirname, "./src/features"),
				hooks: path.resolve(__dirname, "./src/hooks"),
			},
		},
		server: {
			open: true,
			proxy: {
				"/api": env.VITE_API_URL || "http://localhost:4289",
			},
		},
		test: {
			coverage: {
				reportsDirectory: "__local__/coverage",
			},
		},
	}
})
