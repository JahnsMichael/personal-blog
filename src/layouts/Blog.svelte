<script>
  import { fade } from "svelte/transition";
  import { layout } from "@roxi/routify";
  import Breadcrumb from "^/components/Breadcrumb.svelte";
  import Card from "^/components/Card.svelte";
  import Frontmatter from "^/components/Frontmatter.svelte";
  import Toc from "^/components/Toc.svelte";

  export let title, summary;
  export let published = null;

  if (published && published !== "draft") {
    published = `Published on ${published.slice(0, 10)}`;
  } else if (published === "draft") {
    published = "This post is not yet published.";
  }
</script>

<Card>
  <Breadcrumb fileLayout={$layout} />
  <div in:fade>
    <Frontmatter {title} {summary} {published} />
    <slot />
  </div>
  <Toc>
    <slot name="toc" />
  </Toc>
</Card>
