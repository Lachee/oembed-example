<script lang="ts">
  import { onMount } from "svelte";
  import { Type, type OEmbed, type PhotoOEmbed } from "$lib/oembed";
  import Video from "./Video.svelte";
  import Rich from "./Rich.svelte";
  import Link from "./Link.svelte";
  import Photo from "./Photo.svelte";

  export let url: string;
  export let api: string;

  let oembedRequest: Promise<OEmbed | null> = new Promise(() => {});
  onMount(() => {
    oembedRequest = fetchOEmbed(api, url);
  });

  async function fetchOEmbed(api: string, url: string): Promise<OEmbed | null> {
    const init = new URL(api);
    init.searchParams.set("url", url);
    init.searchParams.set("format", "json");

    const response = await fetch(init);
    if (response.status != 200) {
      console.error("failed to fetch oembed");
      return null;
    }

    const data = await response.json();
    if (
      "version" in data &&
      data.version === "1.0" &&
      "type" in data &&
      typeof data.type === "string" &&
      data.type in Type
    ) {
      console.log("fetched oembed data", data);
      return data;
    }

    return null;
  }

  /** Quick Cast */
  const c = <T,>(oembed: OEmbed): T => oembed as T;
</script>

{#await oembedRequest}
  <div class="p-4 space-y-4">
    <div class="placeholder" />
    <div class="grid grid-cols-3 gap-2">
      <div class="placeholder" />
      <div class="placeholder" />
      <div class="placeholder" />
    </div>
  </div>
{:then oembed}
  <div class="p-4 space-y-4">
    {#if oembed}
      {#if oembed.type === Type.photo}
        <Photo oembed={c(oembed)} />
      {:else if oembed.type === Type.video}
        <Video oembed={c(oembed)} />
      {:else if oembed.type === Type.rich}
        <Rich oembed={c(oembed)} />
      {:else}
        <Link oembed={c(oembed)} />
      {/if}
    {:else}
      <div>Failed to fetch the oEmbed :c</div>
    {/if}
  </div>
{/await}
