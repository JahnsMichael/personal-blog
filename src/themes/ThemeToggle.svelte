<script>
  import { getContext } from "svelte";
  import Icon from 'svelte-awesome';
  const { theme, toggle } = getContext("theme");
</script>

<button on:click={toggle}>
  <Icon data={$theme.symbol} scale="2"/>
</button>

<style>
  button {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1em;
    border: none;
    background-color: transparent;
    color: var(--theme-primary);
  }
</style>