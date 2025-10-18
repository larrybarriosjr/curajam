import "@mantine/core/styles.css"
// @mantine/core must be imported first
import "@mantine/carousel/styles.css"
import "@mantine/notifications/styles.css"

import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { Notifications } from "@mantine/notifications"
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

export const Route = createRootRoute({
	component: RootLayout,
})

function RootLayout() {
	return (
		<MantineProvider>
			<ModalsProvider>
				<Notifications />

				<Outlet />

				<TanStackRouterDevtools />
			</ModalsProvider>
		</MantineProvider>
	)
}
