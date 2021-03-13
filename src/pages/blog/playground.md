---
title: Playground
summary: |  
  Page buat coba-coba, gabakal dipublish
layout: blog
published: draft
---

<script>
  import Toc from "^/components/Toc.svelte";
</script>

<Toc>

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

</Toc>

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

`code`

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

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
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
