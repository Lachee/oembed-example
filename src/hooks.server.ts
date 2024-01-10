import { createOembedLink, setCORS } from '$lib/helper';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    const { url, fetch } = event;
    
    const response = await resolve(event);
    setCORS(response);

	const oembedRoute = createOembedLink(url);
    response.headers.set('Link',  '<'+oembedRoute+'>; rel="alternate"; type="application/json+oembed"; title="oembed example"');
    return response;
}) satisfies Handle;