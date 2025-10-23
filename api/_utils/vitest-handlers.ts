import type { IncomingHttpHeaders } from "node:http"
import type { VercelRequest, VercelRequestQuery, VercelResponse } from "@vercel/node"

const { vi } = await import("vitest")

export function createGetRequest<T>(query?: T, headers?: IncomingHttpHeaders) {
	return { headers, method: "GET", query: query as VercelRequestQuery } as VercelRequest
}

// Content-Length: 0 if body is empty
export function createPostRequest<T>(body?: T, headers?: IncomingHttpHeaders) {
	return { body, headers, method: "POST" } as VercelRequest
}

export function createPutRequest<Query, Body>(query: Query, body: Body, headers?: IncomingHttpHeaders) {
	return { body, headers, method: "PUT", query: query as VercelRequestQuery } as VercelRequest
}

export function createPatchRequest<Query, Body>(query: Query, body: Body, headers?: IncomingHttpHeaders) {
	return { body, headers, method: "PATCH", query: query as VercelRequestQuery } as VercelRequest
}

export function createDeleteRequest<T>(query?: T, headers?: IncomingHttpHeaders) {
	return { headers, method: "DELETE", query: query as VercelRequestQuery } as VercelRequest
}

export function createResponse() {
	const json = vi.fn()
	const status = vi.fn().mockReturnValue({ json })
	return { json, status } as unknown as VercelResponse
}
