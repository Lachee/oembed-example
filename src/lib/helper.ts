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

export function getCORS() : Record<string, string> {
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Expose-Headers': '*',
    }
}

export function setCORS(response : Response) { 
    const cors = getCORS();
    for(let heading in cors) 
        response.headers.append(heading, cors[heading]);
}