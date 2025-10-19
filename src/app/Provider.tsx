import "@mantine/core/styles.css"
// @mantine/core must be imported first
import "@mantine/carousel/styles.css"
import "@mantine/notifications/styles.css"
import "./styles.css"

import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { Notifications } from "@mantine/notifications"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"
import { theme } from "./theme"

export function Provider({ children }: { children: React.ReactNode }) {
	return (
		<MantineProvider theme={theme}>
			<ModalsProvider>
				<Notifications />
				{children}
				<TanStackRouterDevtools />
			</ModalsProvider>
		</MantineProvider>
	)
}
