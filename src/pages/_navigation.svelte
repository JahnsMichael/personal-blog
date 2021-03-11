<script>
  import { layout, url, isActive } from "@roxi/routify";
</script>

<nav class="header">
  {#each $layout.children as { path, title }}
    <a href={$url(path)} class:active={$isActive(path)}>{title}</a>
  {/each}
</nav>

<style>
  nav.header {
    margin: 20px 0 20px 0;
    text-align: center;
    font-size: 1.3em;
  }

  nav.header > a {
    color: var(--theme-text);
    margin: 0 32px;
  }

  nav.header > a.active {
    border-bottom: 2px solid var(--theme-primary);
  }

  nav.header > a,
  a:hover {
    text-decoration: none;
  }
</style>
