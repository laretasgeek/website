<template>
  <Layout>
    <header>
      <h1>{{ $t('java.title')}}</h1>
    </header>

    <div class="content">
      <p v-html="$t('java.description')"></p>
    </div>

    [[[[Next Event]]]]

    <p class="mb-7">[[[[Link to playlists]]]</p>

    <event-list :items="$page.java.edges" :page-info="$page.java.pageInfo"></event-list>

  </Layout>
</template>

<page-query>
query ($page: Int) {
  java: allEvent (perPage: 12, page: $page, filter: { type: { eq: "laretas-java" }, published: { eq: true }}) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        published
        date (format: "YYYY-MM-DD")
        excerpt
        content
        youtube
        spotify
        ivoox
      }
    }
  }
}
</page-query>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import EventList from '../components/EventList'

export default defineComponent({
  name: 'geek-list-page',
  components: {
    EventList
  },
  metaInfo: {
    title: 'Laretas Geek'
  }
})
</script>
