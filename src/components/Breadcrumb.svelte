<script>
  import { url } from "@roxi/routify";
  import { chevronRight } from "svelte-awesome/icons";
  import Icon from "svelte-awesome";

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
    <span>
      <span class="sep"><Icon data={chevronRight} scale="0.6"/></span>  
      <a href="{$url(path)}">{(title ? title : "home")}</a>  
    </span>
  {/each}
</div>

<style>
  .breadcrumb {
    font-family: 'Victor Mono', 'Overpass', sans-serif;
  }

  .sep {
    opacity: 80%;
    color: var(--theme-text);
  }
</style>

