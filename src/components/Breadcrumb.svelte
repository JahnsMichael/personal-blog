<script>
  import { url } from "@roxi/routify";
  export let fileLayout;

  let breadcrumb = [{
    title: fileLayout.title,
    path: fileLayout.path
  }];

  const getLink = (layout, breadcrumb) => {
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

