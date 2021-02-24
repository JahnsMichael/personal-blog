<script>
  import { metatags, page } from "@roxi/routify";
  import Navigation from "./_navigation.svelte";
  import ToggleDark from "../components/ToggleDark.svelte";

  $: metatags.title = `Jahns Michael - ${$page.title}`;
  metatags.description = "Description coming soon...";
</script>

<div class="container">
  <Navigation />
  <slot />
  <ToggleDark />
</div>