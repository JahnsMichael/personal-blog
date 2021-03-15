<script>
  import { fly } from "svelte/transition";
  import Icon from 'svelte-awesome';
  import { close } from 'svelte-awesome/icons';
  let show = false;

  const toggleShow = () => (show = !show);
</script>

<button class="toc-btn" on:click={toggleShow}>outline</button>

{#if show}
  <div
    class="toc"
    on:click={toggleShow}
    transition:fly={{ x: 200, duration: 200 }}
  >
    <h3><a href="#top">Document Outline</a></h3>
    <a href="#top">(go to top)</a>
    <slot>
      <ul>
        <li>No Header in this post</li>
      </ul>
    </slot>
    <button class="close-btn">
      <Icon data={close}/>
    </button>
  </div>
{/if}

<style>
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
    border: none;
    width: 2em;
    height: 2em;
    background-color: var(--theme-primary);
    color: var(--theme-background);
  }

  .toc {
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: var(--theme-primary);
    padding: 2em;
    border: 1px solid var(--theme-primary);
  }

  .toc :global(li) {
    list-style: none;
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
  }
</style>
