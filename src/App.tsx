import "@mantine/core/styles.css"

// @mantine/core must be imported first
import "@mantine/carousel/styles.css"
import "@mantine/notifications/styles.css"

import { MantineProvider } from "@mantine/core"
import { ModalsProvider } from "@mantine/modals"
import { Notifications } from "@mantine/notifications"

export default function App() {
	return (
		<MantineProvider>
			<ModalsProvider>
				<Notifications />
			</ModalsProvider>
		</MantineProvider>
	)
}
