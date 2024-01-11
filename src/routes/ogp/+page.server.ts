import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const CrawlerUserAgents = [
    'Iframely',
    'Discordbot',
];

export type PageData = {
    meta? : Record<string, string>;
}

export const load: PageServerLoad = async ({ request, url }) => {
    
    const ua =  request.headers.get('user-agent') || '';
    console.log('request', { url: url.toString(), ua });


    const thumbnailURL =  (new URL('/example_photo_thumbnail.jpg', new URL(request.url).origin)).toString();
    const videoURL = (new URL('/example_video.mp4', new URL(request.url).origin)).toString();

    const pageData : PageData = {};

    for(const botUA of CrawlerUserAgents) {
        if (ua.includes(botUA)) {
            pageData.meta = {
                'title': 'Egg Plant',
                'type': 'video.movie',
                'video':  videoURL,
                'image': thumbnailURL,
            }
            break;
        }
    }

	return pageData;
};