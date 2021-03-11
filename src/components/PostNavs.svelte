<script>
  import { url } from "@roxi/routify";
  import marked from "marked";
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

  console.log({children, posts, folders});
</script>

<ul class="posts">
  {#if posts.length}
    {#each posts as { meta, path }}
      <li class="card">
        <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
        {@html marked(meta.frontmatter.summary)}
      </li>
    {/each}
  {/if}
</ul>

<ul class="posts">
  {#if folders.length}
    {#each folders as { meta, path }}
      <li class="card">
        <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
        {@html marked(meta.frontmatter.summary)}
      </li>
    {/each}
  {/if}
</ul>

{#if !posts.length && !folders.length}
  <p class="empty-msg">Belum ada post pada bagian ini.</p>
{/if}

<style>
  .empty-msg {
    text-align: center;
    color: var(--theme-primary);
  }
</style>
