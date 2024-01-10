<script lang="ts">
  import { createOembedLink } from "$lib/helper";

  export let url: URL;
</script>

<a
  href={createOembedLink(url).toString()}
  target="_blank"
  class="btn variant-filled"
>
  <span>View oEmbed</span>
</a>
<a
  href="https://debug.iframely.com/?uri={encodeURIComponent(url.toString())}"
  target="_blank"
  class="btn variant-filled"
>
  <span>View on iFramely</span>
</a>
<a
  href="https://discord.com/developers/embeds?url={encodeURIComponent(
    url.toString()
  )}"
  target="_blank"
  class="btn variant-filled"
>
  <span>View on Discord</span>
</a>
