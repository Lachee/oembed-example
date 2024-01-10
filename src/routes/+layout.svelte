<script>
  import "../app.pcss";
  // Your selected Skeleton theme:
  //import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  //import "@skeletonlabs/skeleton/themes/theme-gold-nouveau.css";

  // This contains the bulk of Skeletons required styles:
  //import "@skeletonlabs/skeleton/styles/skeleton.css";

  // Finally, your application's global stylesheet (sometimes labeled 'app.css')
  import { AppShell } from "@skeletonlabs/skeleton";
  import Footer from "$lib/components/Footer.svelte";

  import { page } from "$app/stores";
  import { createOembedLink } from "$lib/helper";
</script>

<svelte:head>
  <title>OEmbed Example</title>
  <link
    type="application/json+oembed"
    href={createOembedLink($page.url).toString()}
  />
</svelte:head>

<AppShell>
  <div class="container mx-auto p-8 space-y-8">
    <h1 class="h1">oEmbed Examples</h1>
    <slot />
    <Footer />
  </div>
</AppShell>
