import { validateUrl } from '$lib/helper';
import type { OEmbed } from '$lib/oembed';
import { json, type RequestHandler } from '@sveltejs/kit';

/** Generates oembed links */
export const GET: RequestHandler = async (evt) => {
    const origin = (new URL(evt.request.url)).origin;
    const query = evt.url.searchParams;

    const href = validateUrl(query.get('url') || '');
    if (href === undefined)
        return json({ error: 'bad href', reason: 'corrupted url' }, { status: 400 });

    // We give up!
    return json({
        type: 'link',
        version: '1.0',
        title: href.toString(),
    } satisfies OEmbed)
};