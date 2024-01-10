import { Type, type PhotoOEmbed, type VideoOEmbed } from '$lib/oembed';
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
        type: Type.video,
        version: '1.0',
        title: 'Example Photo',
        thumbnail_url: thumbnailURL,
        thumbnail_width: 480,
        thumbnail_height: 270,
        provider_name: 'oembed-example',
        provider_url: 'https://lachee.dev/',


        html: `<video width="480" height="270" src="${videoURL}" controls></video>`,
        width: 1080,
        height: 1350,
    } satisfies VideoOEmbed);
};