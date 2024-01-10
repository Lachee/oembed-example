export function createOembedLink( url : URL, origin? : string|URL) : URL {
    if (!origin) origin = url.origin;
    if (origin && typeof origin !== 'string') origin = origin.origin;
    return new URL(`${origin}/oembed?url=${encodeURIComponent(url.toString())}`);
}