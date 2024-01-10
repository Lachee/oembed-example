import { Type, type PhotoOEmbed, type VideoOEmbed, type RichOEmbed } from '$lib/oembed';
import { json, type RequestHandler } from '@sveltejs/kit';

/** Generates oembed links */
export const GET: RequestHandler = async (evt) => {
    const origin = (new URL(evt.request.url)).origin;
    const query = evt.url.searchParams;

    console.log('embed request', evt.request.url.toString());

    const thumbnailURL =  (new URL('/example_photo_thumbnail.jpg', new URL(evt.request.url).origin)).toString();
    const videoURL = (new URL('/example_video.mp4', new URL(evt.request.url).origin)).toString();

    // We give up!
    return json({
        type: Type.rich,
        version: '1.0',
        title: 'Example Rich Content',
        thumbnail_url: thumbnailURL,
        thumbnail_width: 480,
        thumbnail_height: 270,
        provider_name: 'oembed-example',
        provider_url: 'https://lachee.dev/',


        html: `<marquee>This is a rich embed</marquee>`,
        width: 250,
        height: 50,
    } satisfies RichOEmbed);
};