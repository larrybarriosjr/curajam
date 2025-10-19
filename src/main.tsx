import { App } from "app"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// biome-ignore lint/style/noNonNullAssertion: Default React setup
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
