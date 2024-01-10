import type { PhotoOEmbed } from '$lib/oembed';
import { json, type RequestHandler } from '@sveltejs/kit';

/** Generates oembed links */
export const GET: RequestHandler = async (evt) => {
    const origin = (new URL(evt.request.url)).origin;
    const query = evt.url.searchParams;

    // We give up!
    return json({
        type: 'photo',
        version: '1.0',
        title: 'Example Photo',
        url: (new URL('/example_photo.jpg', new URL(evt.request.url).origin)).toString(),
        width: 2560,
        height: 1440,
        provider_name: 'oembed-example',
        provider_url: 'https://lachee.dev/'
    } satisfies PhotoOEmbed)
};