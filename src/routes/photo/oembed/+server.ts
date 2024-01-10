import { Type, type PhotoOEmbed } from '$lib/oembed';
import { json, type RequestHandler } from '@sveltejs/kit';

/** Generates oembed links */
export const GET: RequestHandler = async (evt) => {
    const origin = (new URL(evt.request.url)).origin;
    const query = evt.url.searchParams;

    console.log('embed request', evt.request.url.toString());

    // We give up!
    return json({
        type: Type.photo,
        version: '1.0',
        title: 'Example Photo',
        url: (new URL('/example_photo.jpg', new URL(evt.request.url).origin)).toString(),
        width: 2560,
        height: 1440,
        thumbnail_url: (new URL('/example_photo_thumbnail.jpg', new URL(evt.request.url).origin)).toString(),
        thumbnail_width: 480,
        thumbnail_height: 270,
        provider_name: 'oembed-example',
        provider_url: 'https://lachee.dev/'
    } satisfies PhotoOEmbed);
};