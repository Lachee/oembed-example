export enum Type {
    photo = 'photo',
    video = 'video',
    link = 'link',
    rich = 'rich'
}

export type OEmbed = {
    type: Type,
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
    type: Type.rich,
    html: string,
    width: number,
    height: number
}

export type VideoOEmbed = OEmbed & {
    type: Type.video
    html: string,
    width: number,
    height: number
}

export type PhotoOEmbed = OEmbed & {
    type: Type.photo,
    url: string,
    width: number,
    height: number
}
