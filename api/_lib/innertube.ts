import { Innertube, UniversalCache } from "youtubei.js"

export const IT = await Innertube.create({
	cache: new UniversalCache(true, "/tmp/youtubei-cache"),
})
