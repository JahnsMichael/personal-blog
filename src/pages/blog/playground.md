---
title: Playground
summary: |  
  Page buat coba-coba, gabakal dipublish
layout: blog
published: draft
---

<div slot="toc">

- [Basic Syntax](#basic-syntax)
  - [Heading](#heading)
  - [Italic](#italic)
  - [Blockquote](#blockquote)
  - [Ordered List](#ordered-list)
  - [Unordered List](#unordered-list)
  - [Code](#code)
  - [Horizontal Rule](#horizontal-rule)
  - [Link](#link)
  - [Image](#image)
- [Extended Syntax](#extended-syntax)
  - [Table](#table)
  - [Fenced Code Block](#fenced-code-block)
  - [Footnote](#footnote)
  - [Heading ID](#heading-id)
  - [My Great Heading](#my-great-heading)
  - [Definition List](#definition-list)
  - [Strikethrough](#strikethrough)
  - [Task List](#task-list)
  - [Header](#header)
  - [Header](#header-1)
  - [Header](#header-2)
  - [Header](#header-3)
  - [Header](#header-4)
  - [Header](#header-5)
  - [Header](#header-6)
  - [Header](#header-7)
  - [Header](#header-8)
  - [Header](#header-9)
  - [Header](#header-10)
  - [Header](#header-11)
  - [Header](#header-12)
  - [Header](#header-13)
  - [Header Last](#header-last)

</div>



Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can’t cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

<!-- # H1
## H2
### H3

### Bold -->

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

`Courier New`

### Horizontal Rule

---

### Link

[title](https://www.example.com)

### Image

![alt text](image.jpg)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

```html
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
    font-family: 'Victor Mono', monospace;
  }
</style>
```

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Header
### Header
### Header
### Header
### Header
### Header
### Header
### Header
### Header
### Header
### Header
### Header
### Header
### Header
### Header Last
