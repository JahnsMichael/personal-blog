<script lang="ts">
  import { url } from "@roxi/routify";
  export let fileLayout: ClientNodeApi;

  interface Link {
    title: string,
    path: string
  }

  let breadcrumb: Array<Link> = [{
    title: fileLayout.title,
    path: fileLayout.path
  }];

  const getLink = (layout:ClientNodeApi, breadcrumb:Array<Link>): Array<Link> => {
    let parent = layout.parent;
    if (parent) {
      breadcrumb = [{
        title: parent.title,
        path: parent.path
      }, ...breadcrumb]
      return getLink(parent, breadcrumb);
    } 

    return breadcrumb;
  }

  breadcrumb = getLink(fileLayout, breadcrumb);
</script>

<div class="breadcrumb">
  {#each breadcrumb as {title, path}}
    <span>&gt <a href="{$url(path)}">{(title ? title : "home")}</a> </span>
  {/each}
</div>

<style>
  .breadcrumb {
    font-family: Victor Mono;
  }
</style>

