<script>
  import marked from "marked";

  export let title, summary, published;
</script>

<section class="frontmatter">
  <h1>{@html marked(title)}</h1>
  {@html marked(summary)}
  <hr />
  {#if published}
    {published}
  {/if}
</section>

<style>
  h1 {
    font-weight: normal;
    font-size: 2.5em;
    margin: 10px 0;
  }

  hr {
    border: 1px solid var(--theme-text);
    opacity: 0.5;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  .frontmatter {
    margin: 4em 0;
    margin-top: 3em;
  }
</style>
