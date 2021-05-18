<template>
  <layout>
    <article class="article laretas-geek">
      <h1 class="article-title">
        {{ $page.post.title }}
      </h1>
      <p class="article-date"> {{ $page.post.date }} · <i>{{$page.post.timeToRead}} min read</i></p>
      <article v-html="$page.post.content" />

      <ul>
        <li v-for="participant in $page.post.participants">
          <g-link :to="participant.path"> {{ participant.name }} {{ participant.excerpt }}</g-link>
        </li>
      </ul>
    </article>
  </layout>
</template>
<page-query>
query Post ($path: String!) {
  metadata {
    siteName
    siteDescription
  }
  post: laretasGeek (path: $path) {
    id
    title
    content
    participants {
     path
     id
     name
    }
    date (format: "D MMMM YYYY")
    timeToRead
  }
}
</page-query>
<script lang="ts">

</script>
