<script>
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import ThemeContext from "./themes/ThemeContext.svelte";
  import ThemeToggle from "./themes/ThemeToggle.svelte";
</script>

<style global>
  @import "../static/global.css";
  @import "../static/prism.css";

  :global(html) {
    background-color: var(--theme-background);
    color: var(--theme-text);
  }
</style>

<Router {routes} />

<ThemeContext>
  <main>
    <ThemeToggle />
  </main>
</ThemeContext>