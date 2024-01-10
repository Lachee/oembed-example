<script lang="ts">
  import type { OEmbed } from "$lib/oembed";

  export let oembed: OEmbed;
</script>

<section>
  <div>{oembed.title}</div>
  <div class="flex justify-between text-gray-400">
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
