import { json, type RequestHandler } from '@sveltejs/kit';

type OEmbed = {
    type: 'photo' | 'video' | 'link' | 'rich',
    version: '1.0',
    title?: string,
    author_name?: string,
    author_url?: string,
    provider_name?: string,
    provider_url?: string,
    cache_age?: number,
    thumbnail_url?: string,
    thumbnail_width?: number,
    thumbnail_height?: number
}

type RichOEmbed = OEmbed & {
    type: 'rich',
    html: string,
    width: number,
    height: number
}

type VideoOEmbed = OEmbed & {
    type: 'video',
    html: string,
    width: number,
    height: number
}

type PhotoOEmbed = OEmbed & {
    type: 'photo',
    url: string,
    width: number,
    height: number
}

function validateUrl(str : string) : URL|undefined {
    try { 
        return new URL(str);
    } catch (e) {
        return undefined;
    }
}

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