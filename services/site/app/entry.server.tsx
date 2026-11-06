import { handleRequest } from '@vercel/react-router/entry.server'
import {
	type ActionFunctionArgs,
	type LoaderFunctionArgs,
	type HandleDocumentRequestFunction,
} from 'react-router'
import {
	appendAgentDiscoveryHeaders,
	shouldAppendAgentDiscoveryHeaders,
} from '#app/utils/agent-discovery.ts'
import { routes as otherRoutes } from './other-routes.server.ts'
import { getPublicEnv, init } from './utils/env.server.ts'

let entryServerInitialized = false

function ensureEntryServerInitialized() {
	if (entryServerInitialized) return
	try {
		init()
		global.ENV = getPublicEnv()
	} catch (error) {
		console.warn('Warning during server env init:', error)
	}
	entryServerInitialized = true
}

type DocRequestArgs = Parameters<HandleDocumentRequestFunction>

export default async function handleDocumentRequest(...args: DocRequestArgs) {
	ensureEntryServerInitialized()
	const [
		request,
		responseStatusCode,
		responseHeaders,
		reactRouterContext,
		loadContext,
	] = args

	// Reject backslash / encoded-backslash paths (path-normalization tricks).
	if (/\\|%5c/i.test(new URL(request.url).pathname)) {
		return new Response('Bad Request', { status: 400 })
	}

	for (const handler of otherRoutes) {
		try {
			const otherRouteResponse = await handler(request, reactRouterContext)
			if (otherRouteResponse) return otherRouteResponse
		} catch (error) {
			console.warn('Error in otherRoutes handler:', error)
		}
	}

	if (shouldAppendAgentDiscoveryHeaders(request)) {
		appendAgentDiscoveryHeaders(responseHeaders)
	}

	return handleRequest(
		request,
		responseStatusCode,
		responseHeaders,
		reactRouterContext,
		loadContext,
	)
}

export async function handleDataRequest(response: Response) {
	return response
}

export function handleError(
	error: unknown,
	_args: LoaderFunctionArgs | ActionFunctionArgs,
): void {
	ensureEntryServerInitialized()
	console.error(error)
}
