import { Innertube, UniversalCache } from "youtubei.js"

// IIFE to replicate top-level await
export const IT = await (async () =>
	await Innertube.create({
		cache: new UniversalCache(true),
	}))()
