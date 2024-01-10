<script lang="ts">
  import { page } from "$app/stores";
  import Buttons from "$lib/components/Buttons.svelte";
  import OEmbed from "$lib/components/oembed/OEmbed.svelte";
  import { createOembedLink } from "$lib/helper";

  let oembedLink = createOembedLink($page.url);
</script>

<div class="card card-hover p-4 flex justify-between">
  <section class="p-4">
    <h2 class="h2">Rich Example</h2>
    <p>Will display a Rich oembed</p>
    <marquee>It should be a marquee</marquee>
  </section>
  <section class="p-4 w-[50%]">
    <h2 class="h3">OEmbed Preview</h2>
    <OEmbed
      api={oembedLink.origin + oembedLink.pathname}
      url={$page.url.toString()}
    />
  </section>
</div>
<div class="block card card-hover p-4">
  <section class="p-4">
    <Buttons url={$page.url} />
  </section>
</div>
