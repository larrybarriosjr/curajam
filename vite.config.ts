import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import biome from "vite-plugin-biome"

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), biome()],
})
