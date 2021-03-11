<script lang="ts">
  import { layout } from "@roxi/routify";
  import Breadcrumb from "../components/Breadcrumb.svelte";
  import Card from "../components/Card.svelte";
  import Frontmatter from "../components/Frontmatter.svelte";
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
  <Frontmatter {title} {summary} {published} />
  <slot />
</Card>
