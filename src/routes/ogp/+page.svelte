<script lang="ts">
  import { page } from "$app/stores";
  import Buttons from "$lib/components/Buttons.svelte";
  import OEmbed from "$lib/components/oembed/OEmbed.svelte";
  import { createOembedLink, createOpenGraph } from "$lib/helper";

  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<svelte:head>
  {#if data.meta}
    {@html createOpenGraph(data.meta)}
  {/if}
</svelte:head>

<div class="card card-hover p-4 flex justify-between">
  <section class="p-4">
    <h2 class="h2">Open Graph Example</h2>
    <p>Will display a image with open graph only to discord</p>
    <img class="h-[200px]" src="example_photo.jpg" alt="lalafell shepherd" />
  </section>
</div>
<div class="block card card-hover p-4">
  <section class="p-4">
    <Buttons url={$page.url} />
  </section>
</div>
