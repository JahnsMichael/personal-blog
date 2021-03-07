---
title: PPL
summary: |  
  Tulisan-tulisan untuk perkuliahan PPL 2020/2021 Genap.
layout: blog
---

# {title}

<p style="text-align:center">{summary}</p>

<script>
  import PostNavs from "../../../components/PostNavs.svelte"
  import { layout as fileLayout } from "@roxi/routify"

  console.log($fileLayout)
</script>

<PostNavs children={$fileLayout.children}/>