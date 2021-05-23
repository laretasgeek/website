<template>
  <Layout>
    <div class="events-page">
      <div class="events-page-top">
        <header class="events-page-header">
          <h1>{{ $t('java.title')}}</h1>
        </header>

        <div class="content">
          <p v-html="$t('java.description')"></p>
        </div>

        <div class="next-event">
          [[[[Next AMA]]]]
        </div>
      </div>

      <playlist-links
          :spotify="$static.metadata.playlists.laretas_java.spotify"
          :ivoox="$static.metadata.playlists.laretas_java.ivoox"
      ></playlist-links>

      <event-list :items="$page.java.edges" :page-info="$page.java.pageInfo"></event-list>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  java: allEvent (perPage: 12, page: $page, filter: { type: { eq: "laretas-java" }, published: { eq: true }}, sortBy: "date", order: DESC) @paginate{
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
      laretas_java {
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
