<script lang="ts">
  import { page } from "$app/stores";
  import { createOembedLink } from "$lib/helper";
</script>

<div class="block card card-hover p-4">
  <p>Example of the Photo type</p>
  <section class="p-4">
    <a href="/photo" class="btn variant-filled">
      <span>Example</span>
    </a>
    <a
      href={createOembedLink(new URL("/photo", $page.url.origin)).toString()}
      target="_blank"
      class="btn variant-filled"
    >
      <span>oEmbed</span>
    </a>
  </section>
</div>

<div class="block card card-hover p-4">
  <p>Example of the Video type</p>
  <section class="p-4">
    <a href="/video" class="btn variant-filled">
      <span>Example</span>
    </a>
    <a
      href={createOembedLink(new URL("/video", $page.url.origin)).toString()}
      target="_blank"
      class="btn variant-filled"
    >
      <span>oEmbed</span>
    </a>
  </section>
</div>

<div class="block card card-hover p-4">
  <p>Example of the Rich type</p>
  <section class="p-4">
    <a href="/rich" class="btn variant-filled">
      <span>Example</span>
    </a>
    <a
      href={createOembedLink(new URL("/rich", $page.url.origin)).toString()}
      target="_blank"
      class="btn variant-filled"
    >
      <span>oEmbed</span>
    </a>
  </section>
</div>
