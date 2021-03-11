<script>
  import PostNavs from "../../components/PostNavs.svelte"
  import { layout } from "@roxi/routify"
  import Card from "../../components/Card.svelte"
</script>

<Card title="Blog" summary="Kumpulan tulisan-tulisan random. Silakan baca-baca.">
  <PostNavs children={$layout.children}/>
</Card>