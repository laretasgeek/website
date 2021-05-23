<template>
  <Layout>
    <div class="events-page">
      <div class="events-page-top">
        <header class="events-page-header">
          <h1>{{ $t('geek.title')}}</h1>
        </header>

        <div class="content">
          <p v-html="$t('geek.description')"></p>
        </div>

        <div class="next-event">
          [[[[Next AMA]]]]
        </div>
      </div>

      <playlist-links
          :youtube="$static.metadata.playlists.laretas_geek.youtube"
          :spotify="$static.metadata.playlists.laretas_geek.spotify"
          :ivoox="$static.metadata.playlists.laretas_geek.ivoox"
      ></playlist-links>

      <event-list :items="$page.geek.edges" :page-info="$page.geek.pageInfo"></event-list>
    </div>
  </Layout>
</template>

<page-query>
query Page ($page: Int) {
  geek: allEvent (perPage: 12, page: $page, filter: { type: { eq: "laretas-geek"}, published: { eq: true }}, sortBy: "date", order: DESC) @paginate{
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
      laretas_geek {
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
import PlaylistLinks from '../components/PlaylistsLinks'

export default defineComponent({
  name: 'geek-list-page',
  components: {
    EventList,
    PlaylistLinks
  },
  metaInfo: {
    title: 'Laretas Geek'
  }
})
</script>
