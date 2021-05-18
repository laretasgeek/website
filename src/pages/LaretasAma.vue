<template>
  <Layout>
    <header>
      <h1>{{ $t('ama.title')}}</h1>
    </header>

    <div class="content">
      <p v-html="$t('ama.description')"></p>
    </div>

    [[[[Next AMA]]]]

    <p class="mb-7">[[[[Link to playlists]]]</p>

    <event-list :items="$page.ama.edges" :page-info="$page.ama.pageInfo"></event-list>

  </Layout>
</template>

<page-query>
query ($page: Int) {
  ama: allEvent (perPage: 12, page: $page, filter: { type: { eq: "laretas-ama"}, published: { eq: true }}) @paginate{
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
  name: 'ama-list-page',
  components: {
    EventList
  },
  metaInfo: {
    title: 'Ask me Anything'
  }
})
</script>
