import { useForm } from "@mantine/form"
import { zod4Resolver } from "mantine-form-zod-resolver"
import type { ZodType } from "zod"

type Props<T> = {
	schema: ZodType<T>
	initialValues: T
	onValuesChange?: (values: T, previous: T) => void
}
export function useCuraForm<T extends Record<string, unknown>>({
	schema,
	initialValues,
	onValuesChange,
}: Props<T>) {
	return useForm({
		initialValues,
		mode: "uncontrolled",
		onValuesChange,
		validate: zod4Resolver(schema),
	})
}
