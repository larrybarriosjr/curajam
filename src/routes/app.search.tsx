import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/app/search")({
	component: RouteComponent,
})

function RouteComponent() {
	return null
}
