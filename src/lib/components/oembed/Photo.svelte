<script lang="ts">
  import type { PhotoOEmbed } from "$lib/oembed";

  export let oembed: PhotoOEmbed;
  let loaded: boolean = false;
</script>

<section>
  <div>{oembed.title}</div>
  {#if oembed.thumbnail_url}
    <img
      class:hidden={loaded}
      src={oembed.thumbnail_url}
      alt={oembed.title + " (thumbnail)"}
    />
  {/if}

  <img
    src={oembed.url}
    data-thumbnail={oembed.thumbnail_url}
    alt={oembed.title}
    on:load={() => (loaded = true)}
  />
  <div class="flex justify-between text-gray-400">
    <div>Photo ({oembed.width} x {oembed.height})</div>
    {#if oembed.provider_name}
      <div>
        provider: <a href={oembed.provider_url || "#"}>{oembed.provider_name}</a
        >
      </div>
    {/if}
    {#if oembed.author_name}
      <div>
        author: <a href={oembed.author_url || "#"}>{oembed.author_name}</a>
      </div>
    {/if}
  </div>
</section>
