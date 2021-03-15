<script>
  import { getContext } from "svelte";
  const { theme, toggle } = getContext("theme");
</script>

<button on:click={toggle}>
  {$theme.name}
</button>

<style>
  button {
    position: fixed;
    bottom: 0;
    left: 0;
    border: none;
    border-radius: 0%;
    background-color: var(--theme-primary);
    color: var(--theme-background);
  }
</style>