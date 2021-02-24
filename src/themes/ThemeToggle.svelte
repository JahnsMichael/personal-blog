<script>
  import { getContext } from "svelte";
  const { theme, toggle } = getContext("theme");
</script>

<button on:click={toggle}>{$theme.symbol}</button>

<style>
  button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1em;
    font-size: 1.5em;
    border: none;
    background-color: transparent;
  }
</style>