<template>
  <layout>
    <article class="article laretas-geek">
      <h1 class="article-title">
        {{ $page.participant.name }}
      </h1>
      <div v-html="$page.participant.content"/>

      {{ $page.participant.belongsTo.edges }}

<!--      <ul>-->
<!--        <li v-for="participant in $page.post.participants">-->
<!--          <g-link :to="participant.path"> {{ participant.name }} {{ participant.excerpt }}</g-link>-->
<!--        </li>-->
<!--      </ul>-->
    </article>
  </layout>
</template>
<page-query>
query ($path: String!) {
  participant: participant (path: $path) {
    id
    name
    twitter
    linkedin
    content
    belongsTo {
      edges {
        node {
          ... on Event {
            id
            title
            path
            __typename
          }
        }
      }
    }
  }
}
</page-query>
<script lang="ts">

</script>
