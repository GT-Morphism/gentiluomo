import { createDirectus, rest } from "@directus/sdk";
import { DIRECTUS_API_URL } from "$env/static/private";

function getDirectusInstance(fetch?: typeof globalThis.fetch) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(DIRECTUS_API_URL, options).with(rest());
	return directus;
}

export default getDirectusInstance;
