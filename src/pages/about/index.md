---
title: About Me
summary: "If you want to know more about me"
layout: blog
published: 2021-05-05
---

<script>
  import ProjectCard from "./_components/ProjectCard.svelte";
  import {projects} from "./_project.js";
</script>


<div slot="toc">

- [Introduction](#introduction)
- [Skills](#skills)
  - [Programming Languages](#programming-languages)
  - [Web Frameworks](#web-frameworks)
  - [Other Stuffs](#other-stuffs)
- [Projects](#projects)

</div>


Well, hello~ Welcome !!!.  
If you are visiting this site, for some reason you want to know more about me. I want to say thank you for that. I hope this page really makes you know me more.

# Introduction

My name is Jahns Michael. You can call me Jahns or Michael. I'm currently studying [Computer Science at University of Indonesia](https://cs.ui.ac.id). I have so much interests for *Software Development* in general, but spesifically *Front End Development*. I love making something that visually amazing and effectively telling information to the viewer, and Front End Development is one of many ways to do such a thing.

Besides of that, I have an interest about *E-learning*. The main reason why I choose to study Computer Science is because someday in the future I can contribute to a E-learning project/platform, because I've enjoyed using one of those project when I was in high school and wasn't satisfied with conventional education system in my own school.

Yeah, that's all a brief introduction about my self.

# Skills

## Programming Languages

- Python
- Java
- Javascript/Typescript
- GDscript

## Web Frameworks

Frontend  
- ReactJS (CRA)
- Svelte (this site was built using Svelte + Routify!!)

Backend  
- Django
- NodeJS + Express
- SpringBoot

## Other Stuffs

- Game Engine : Godot Game Engine
- UI/UX tools : Figma
- Vector Design : Inkscape

# Projects

Note: all of this project made for course assignment purposes. Until this page published, I don't have any real project yet. All of this project mentioned below is no longer maintained.

{#each projects as project}
<ProjectCard {...project} />
{/each}