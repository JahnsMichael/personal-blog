<script lang="ts">
  export let title:string, 
  summary:string|undefined, 
  published:string|undefined;
</script>

<section class="frontmatter">
  <h1>{title}</h1>
  {summary}
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
