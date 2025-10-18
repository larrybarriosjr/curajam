import { createRouter, RouterProvider } from "@tanstack/react-router"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { routeTree } from "./routeTree.gen.ts"

const router = createRouter({ routeTree })
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}

// biome-ignore lint/style/noNonNullAssertion: Default React setup
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
