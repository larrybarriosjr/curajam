import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { Provider } from "app"

export const Route = createRootRoute({
	component: RootLayout,
	notFoundComponent: NotFound,
})

function NotFound() {
	return <Link to="/app">Go to App</Link>
}

function RootLayout() {
	return (
		<Provider>
			<Outlet />
		</Provider>
	)
}
