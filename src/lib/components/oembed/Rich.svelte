<script lang="ts">
  import type { RichOEmbed } from "$lib/oembed";
  import { CodeBlock } from "@skeletonlabs/skeleton";

  export let oembed: RichOEmbed;
</script>

<section>
  <div>{oembed.title}</div>
  <iframe
    srcdoc={oembed.html}
    class="mw-[100%] outline-1 outline-black outline"
    width="100%"
    height="480px"
  />
  <div class="flex justify-between text-gray-400">
    <div>Rich ({oembed.width} x {oembed.height})</div>
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
<section>
  <CodeBlock language="html" code={oembed.html}></CodeBlock>
</section>
