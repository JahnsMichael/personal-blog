<script>
  import { url } from "@roxi/routify";
  import marked from "marked";
  export let children;

  const posts = children
    .filter((c) => c.meta["frontmatter"])
    .sort((a, b) =>
      b.meta["frontmatter"].published.localeCompare(
        a.meta["frontmatter"].published
      )
    );

  const folders = children
    .filter((c) => !posts.includes(c))
    .map((f) => {
      return {
        path: f.path,
        meta: f.__file.children.filter((c) => c.file == "index.md")[0].meta,
      };
    });

</script>

<ul class="posts">
  {#each posts as { meta, path }}
    <li class="card">
      <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
      {@html marked(meta.frontmatter.summary)}
    </li>
  {/each}
</ul>

<ul class="posts">
  {#each folders as { meta, path }}
    <li class="card">
      <a class="title" href={$url(path)}>{meta.frontmatter.title}</a>
      {@html marked(meta.frontmatter.summary)}
    </li>
  {/each}
</ul>
