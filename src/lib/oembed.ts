
export type OEmbed = {
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

export type RichOEmbed = OEmbed & {
    type: 'rich',
    html: string,
    width: number,
    height: number
}

export type VideoOEmbed = OEmbed & {
    type: 'video',
    html: string,
    width: number,
    height: number
}

export type PhotoOEmbed = OEmbed & {
    type: 'photo',
    url: string,
    width: number,
    height: number
}
