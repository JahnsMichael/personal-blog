<script>
  import PostNavs from "../../components/PostNavs.svelte"
  import { layout } from "@roxi/routify"
</script>

<h1>Blog</h1>

<PostNavs children={$layout.children}/>