<template>
  <Layout>
    <div class="events-page">
      <div class="events-page-top">
        <header class="events-page-header">
          <h1>{{ $t('ama.title')}}</h1>
        </header>

        <div class="content">
          <p v-html="$t('ama.description')"></p>
        </div>

        <div class="next-event">
          [[[[Next AMA]]]]
        </div>


      </div>

      <playlist-links
          :youtube="$static.metadata.playlists.laretas_ama.youtube"
          :spotify="$static.metadata.playlists.laretas_ama.spotify"
          :ivoox="$static.metadata.playlists.laretas_ama.ivoox"
      ></playlist-links>
      <event-list :items="$page.ama.edges" :page-info="$page.ama.pageInfo"></event-list>
    </div>

  </Layout>
</template>

<page-query>
query ($page: Int) {
  ama: allEvent (perPage: 12, page: $page, filter: { type: { eq: "laretas-ama"}, published: { eq: true }}, sortBy: "date", order: DESC) @paginate{
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
<static-query>
query {
  metadata {
    playlists {
      laretas_ama {
        youtube
        ivoox
        spotify
      }
    }
  }
}
</static-query>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import EventList from '../components/EventList'
import PlaylistLinks from '../components/PlaylistsLinks/PlaylistLinks.vue'

export default defineComponent({
  name: 'ama-list-page',
  components: {
    PlaylistLinks,
    EventList
  },
  metaInfo: {
    title: 'Ask me Anything'
  }
})
</script>
