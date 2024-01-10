export function createOembedLink(url : URL, origin? : string|URL) : URL {
    if (!origin) origin = url;
    if (origin && typeof origin !== 'string') {
         origin = origin.origin + origin.pathname;
    }
    return new URL(`${origin}/oembed?url=${encodeURIComponent(url.toString())}`);
}

export function validateUrl(str : string) : URL|undefined {
    try { 
        return new URL(str);
    } catch (e) {
        return undefined;
    }
}
