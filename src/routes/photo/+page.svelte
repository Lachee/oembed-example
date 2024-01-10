<script lang="ts">
  import { page } from "$app/stores";
  import { createOembedLink } from "$lib/helper";
</script>

<div class="block card card-hover p-4">
  <section class="p-4">
    <h2 class="h2">Photo Example</h2>
    <p>Will display a image oembed</p>
    <img src="example_photo.jpg" alt="lalafell shepherd" />
  </section>
</div>
<div class="block card card-hover p-4">
  <section class="p-4">
    <a
      href={createOembedLink($page.url).toString()}
      target="_blank"
      class="btn variant-filled"
    >
      <span>View oEmbed</span>
    </a>
    <a
      href="https://debug.iframely.com/?uri={encodeURIComponent(
        $page.url.toString()
      )}"
      target="_blank"
      class="btn variant-filled"
    >
      <span>View on iFramely</span>
    </a>
    <a
      href="https://discord.com/developers/embeds?url={encodeURIComponent(
        $page.url.toString()
      )}"
      target="_blank"
      class="btn variant-filled"
    >
      <span>View on Discord</span>
    </a>
  </section>
</div>
