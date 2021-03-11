<<<<<<< HEAD
<script>
  import { url } from "@roxi/routify";
  export let fileLayout;

  let breadcrumb = [{
=======
<script lang="ts">
  import { url } from "@roxi/routify";
  export let fileLayout: ClientNodeApi;

  interface Link {
    title: string,
    path: string
  }

  let breadcrumb: Array<Link> = [{
>>>>>>> 40f8af91071f32f64a0669160d64eab9ee78a7a5
    title: fileLayout.title,
    path: fileLayout.path
  }];

<<<<<<< HEAD
  const getLink = (layout, breadcrumb) => {
=======
  const getLink = (layout:ClientNodeApi, breadcrumb:Array<Link>): Array<Link> => {
>>>>>>> 40f8af91071f32f64a0669160d64eab9ee78a7a5
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

