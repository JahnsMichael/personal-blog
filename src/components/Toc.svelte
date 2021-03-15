<script>
  import { fly } from "svelte/transition";
  import Icon from "svelte-awesome";
  import { close } from "svelte-awesome/icons";
  let show = false;

  const toggleShow = () => (show = !show);

  $: if (show) {
    document.body.classList.add("hide-scrollbar");
  } else {
    document.body.classList.remove("hide-scrollbar");
  }
</script>

<button class="toc-btn" on:click={toggleShow}>outline</button>

{#if show}
  <div
    class="toc {show ? 'hide-scrollbar' : ''}"
    on:click={toggleShow}
    transition:fly={{ x: 200, duration: 200 }}
  >
    <slot>
      <ul>
        <li>No Header in this post</li>
      </ul>
    </slot>

    <div class="toc-bar">
      <h3>Document Outline</h3>
      <a href="#top">(go to top)</a>
      <button class="close-btn">
        <Icon data={close} />
      </button>
    </div>
  </div>
{/if}

<style>
  .toc-bar {
    position: sticky;
    bottom: 0;
    background-color: var(--theme-primary);
  }

  .toc-btn {
    position: fixed;
    bottom: 0;
    right: 0;
    border: none;
    background-color: var(--theme-primary);
    border-radius: 0%;
    color: var(--theme-background);
  }

  .close-btn {
    position: fixed;
    bottom: 0;
    right: 0;
    border: none;
    width: 2em;
    height: 2em;
    background-color: transparent;
    color: var(--theme-background);
  }

  .toc {
    position: fixed;
    bottom: 0;
    right: 0;
    background-color: var(--theme-primary);
    padding: 2em;
    padding-bottom: 0;
    border: 1px solid var(--theme-primary);
    max-height: 100vh;
    max-width: 80vw;
    overflow: auto;
  }

  .toc :global(li) {
    list-style: none;
    line-height: 1.25 !important;
  }

  .toc :global(ul) {
    padding-left: 10px;
  }

  .toc :global(a) {
    text-decoration: none;
    color: var(--theme-background);
  }

  .toc :global(a:hover) {
    color: var(--theme-text);
  }

  h3 {
    color: var(--theme-background);
    margin: 0;
  }

  :global(.hide-scrollbar::-webkit-scrollbar) {
    display: none;
  }
</style>
