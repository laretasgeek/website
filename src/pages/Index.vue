<template>
  <Layout class="page-home">
    <div class="next-events mb-7">
      [[ NEXT EVENTS ]]
    </div>

    <div class="flavours mb-7">
      <div class="grid-row">
        <div class="col-xs-12 col-sm-4">
          <g-link to="/laretas-geek" class="flavour">
            <g-image src="~/assets/i/laretas-geek.png" alt="Laretas Geek"></g-image>
          </g-link>
        </div>
        <div class="col-xs-12 col-sm-4">
          <g-link to="/laretas-ama" class="flavour">
            <g-image src="~/assets/i/laretas-ama.png" alt="Laretas AMA"></g-image>
          </g-link>
        </div>
        <div class="col-xs-12 col-sm-4">
          <g-link to="/laretas-java" class="flavour">
            <g-image src="~/assets/i/laretas-java.png" alt="Laretas Java"></g-image>
          </g-link>
        </div>
      </div>
    </div>

    <recent :title="$t('recent-events')" :items="$page.recent.edges"></recent>

    <playlist-links
        :youtube="$static.metadata.playlists.global.youtube"
        :spotify="$static.metadata.playlists.global.spotify"
        :ivoox="$static.metadata.playlists.global.ivoox"
    ></playlist-links>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import PlaylistLinks from '../components/PlaylistsLinks/PlaylistLinks.vue'
import Recent from '../components/Recent'

export default defineComponent({
  name: 'index',
  components: {
    PlaylistLinks,
    Recent
  },
  metaInfo: {
    title: 'Laretas Geek'
  }
})
</script>


<page-query>
query {
  recent: allEvent (perPage: 3, page: 1, filter: { published: { eq: true }}, sortBy: "date", order: DESC) @paginate{
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
      global {
        youtube
        ivoox
        spotify
      }
    }
  }
}
</static-query>
