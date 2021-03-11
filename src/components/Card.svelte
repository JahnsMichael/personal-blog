<script>
  export let title, summary, published;

  if (published && published !== "draft") {
    published = `Published on ${published.slice(0,10)}`;
  } else if (published === "draft") {
    published = "This post is not yet published."
  }

</script>

<div class="card">
  <section class="frontmatter">
    <h1>{title}</h1>
    {summary}
    <hr>
    {#if published}
      {published}
    {/if}
  </section>
  <slot />
</div>

<style>
  .card {
    background: var(--theme-background);
    padding: 2vh 5vw;
    margin: 0 5vw;
  }
  
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
  }
</style>