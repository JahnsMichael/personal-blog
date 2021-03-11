<script>
  import { url } from "@roxi/routify";
  export let children;

  const posts = children
    .filter((c) => !c.__file.isDir && c.meta.frontmatter.published !== "draft")
    .sort((a, b) =>
      b.meta["frontmatter"].published.localeCompare(
        a.meta["frontmatter"].published
      )
    );

  const folders = children
    .filter((c) => c.__file.isDir )
    .map((f) => {
      return {
        path: f.path,
        meta: f.__file.children.filter((c) => c.id.includes("index"))[0].meta,
      };
    });

</script>

<ul class="posts">
  {#if posts.length}
    {#each posts as { meta, path }}
      <li class="post">
        <a class="post-title" href={$url(path)}>{meta.frontmatter.title}</a>
        <p class="post-summary">{meta.frontmatter.summary}</p>
      </li>
    {/each}
  {/if}
</ul>

<ul class="posts">
  {#if folders.length}
    {#each folders as { meta, path }}
      <li class="post">
        <a class="post-title" href={$url(path)}>{meta.frontmatter.title}</a>
        <p class="post-summary" >{meta.frontmatter.summary}</p>
      </li>
    {/each}
  {/if}
</ul>

{#if !posts.length && !folders.length}
  <p class="empty-msg">Belum ada post pada bagian ini.</p>
{/if}

<style>
  .empty-msg {
    color: var(--theme-primary);
  }

  .posts {
    padding: 0;
  }

  .post {
    margin: 3em 0;
    list-style: none;
  }

  .post-title {
    font-size: 1.75em;
    text-decoration: none;
    color: var(--theme-primary);
  }

  .post-title:hover {
    color: var(--theme-primary);
  }

  .post-summary {
    margin: 10px 0;
    margin-top: 5px;
  }
</style>